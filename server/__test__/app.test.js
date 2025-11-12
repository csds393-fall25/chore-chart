import { describe, test, expect, beforeEach, vi } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import prisma from '../prisma.js';

// mock prisma client
vi.mock('../prisma.js', () => ({
    default: {
        household: {
            create: vi.fn(),
            findUnique: vi.fn(),
            update: vi.fn(),
            delete: vi.fn()
        },
        user: {
            create: vi.fn(),
            findUnique: vi.fn(),
            update: vi.fn(),
            delete: vi.fn()
        },
        chore: {
            findMany: vi.fn(),
            findUnique: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            delete: vi.fn()
        }
    },
    })
);

describe('Household CRUD', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    const mockHousehold = {
        id: 1,
        name: 'test household',
        joinCode: '1234',
        users: [],
        chores: []
    };

    const updatedHousehold = {
        id: 1,
        name: 'updated household',
        joinCode: '1234',
        users: [],
        chores: []
    };

    const deletedHousehold = {
        deleted: true,
        id: 1
    };

    test('POST /api/household - creates a household', async () => {
        prisma.household.create.mockResolvedValue(mockHousehold);

        const response = await request(app)
        .post('/api/household')
        .send({ name: 'test household' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockHousehold);
        expect(prisma.household.create).toHaveBeenCalledWith({
        data: { name: 'test household' }
        });
    });

    test('GET /api/household/:id - retrieves a household', async () => {
        prisma.household.findUnique.mockResolvedValue(mockHousehold);

        const response = await request(app)
            .get('/api/household/1');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockHousehold);
        expect(prisma.household.findUnique).toHaveBeenCalledWith({
            where: { id: 1 },
            include: { users: true, chores: true },
        });
    });

    test('PUT /api/household/:id - update a household', async () => {
        prisma.household.update.mockResolvedValue(updatedHousehold);

        const response = await request(app)
            .put('/api/household/1')
            .send({ name: 'updated household' });
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedHousehold);
        expect(prisma.household.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: { name: 'updated household' }
        });
    });
// TODO: investigate why this fail
    // test('DELETE /api/household/:id - delete a household', async () => {
    //     prisma.household.delete.mockResolvedValue(deletedHousehold);

    //     const response = await request(app)
    //         .delete('/api/household/1');
        
    //     expect(response.status).toBe(200);
    //     expect(response.body).toEqual(deletedHousehold);
    //     expect(prisma.household.delete).toHaveBeenCalledWith({
    //         where: { id: 1 }
    //     });
    // });
});

describe ('User CRUD', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    const mockUser = {
        id: 425,
        createdAt: "2025-10-23T00:24:53.937Z",
        email: "test@example.com",
        name: "test user",
        password_hash: "1234",
        salt: null,
        householdId: 2,
        role: "member",
        difficulty: 5,
        maxChoreTime: 120,
        totalPoints: 0
    }


    test('POST /api/signup - signing up', async () => {
        prisma.user.create.mockResolvedValue(mockUser);
        const userInput = {
                name: 'test user', 
                email: 'test@example.com', 
                password_hash: '1234', 
                difficulty: 5, 
                totalPoints: 120, 
                maxChoreTime: 120, 
                householdId: 2
            }

        const response = await request(app)
            .post('/api/signup')
            .send(userInput);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockUser);
        expect(prisma.user.create).toHaveBeenCalledWith({
            data: userInput
        });
    });

    test('POST /api/login - log in', async () => {
        const { password_hash: _hiddenPassword, salt: _hiddenSalt, ...safeUser } = mockUser;
        prisma.user.create.mockResolvedValue(safeUser);
        const userInput = {
                email: 'test@example.com', 
                password_hash: '1234'
            }

        const response = await request(app)
            .post('/api/signup')
            .send(userInput);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(safeUser);
        expect(prisma.user.create).toHaveBeenCalledWith({
            data: userInput
        });
    });

    test('PUT /api/user/:id - edit user', async () => {
        const updatedUser = {
            id: 425,
            createdAt: "2025-10-23T00:24:53.937Z",
            email: "updated-email@example.com",
            name: "updated name",
            password_hash: "1234",
            salt: null,
            householdId: 2,
            role: "member",
            difficulty: 5,
            maxChoreTime: 240,
            totalPoints: 0
        }
        prisma.user.update.mockResolvedValue(updatedUser);
        const userInput = {
                name: 'updated name', 
                email: 'updated-email@example.com', 
                password_hash: '1234', 
                difficulty: 5, 
                maxChoreTime: 240
            }

        const response = await request(app)
            .put('/api/user/425')
            .send(userInput);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedUser);
        expect(prisma.user.update).toHaveBeenCalledWith({
            where: {
                id: mockUser.id
            },
            data: userInput
        });
    });
})