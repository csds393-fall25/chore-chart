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
            .get('/api/household/1')
        
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
            .send({ name: 'updated household' })
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedHousehold);
        expect(prisma.household.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: { name: 'updated household' }
        });
    });

    test('DELETE /api/household/:id - delete a household', async () => {
        prisma.household.delete.mockResolvedValue(deletedHousehold);

        const response = await request(app)
            .delete('/api/household/1')
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(deletedHousehold);
        expect(prisma.household.delete).toHaveBeenCalledWith({
            where: { id: 1 }
        });
    });
});