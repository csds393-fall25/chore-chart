import { describe, test, expect, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js'
import prisma from '../prisma.js';

describe('DB integration tests', () => {
	let household = null;
	let user = null;
	let chore = null;

	afterAll(async () => {
		// cleanup test records 
		try {
			await prisma.chore.deleteMany({ where: { name: { contains: 'db-test-chore' } } });
			await prisma.user.deleteMany({ where: { email: { contains: 'db-test-user' } } });
			await prisma.household.deleteMany({ where: { name: { contains: 'db-test-household' } } });
		} finally {
			await prisma.$disconnect();
		}
	});

    test('HCT-1 - Creates a household with valid name', async () => {
        const response = await request(app)
        .post('/api/household')
        .send({ name: 'db-test-household-create' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('joinCode');

        // fill household with user and chores for later tests
        household = response.body;
        user = await prisma.user.create({ data: {
            name: `test-user`,
            email: `db-test-user@example.com`,
            password_hash: 'testpw',
            householdId: household.id
        }});
		chore = await prisma.chore.create({ data: {
			name: `db-test-chore`,
			description: 'integration test chore',
			difficulty: 1,
			location: 'home',
			estimatedTime: 15,
			dueDate: new Date(),
			repeat: false,
			householdId: household.id,
			assigneeId: user.id
		}});
    });

	test('VHT-1 - Backend returns household with users and chores', async () => {
		const response = await request(app).get(`/api/household/${household.id}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('id', household.id);
		expect(Array.isArray(response.body.users)).toBe(true);
		expect(response.body.users.some(u => u.email === user.email)).toBe(true);
		expect(Array.isArray(response.body.chores)).toBe(true);
		expect(response.body.chores.some(c => c.name === chore.name)).toBe(true);
	});

    test('HET-1 - Edit household name with valid name', async () => {
        const response = await request(app)
        .put(`/api/household/${household.id}`)
        .send({ name: 'db-test-household-edit'});

        expect(response.status).toBe(200);
        expect(response.body.name).toBe('db-test-household-edit');
    });

    test('LH-2 - Last member leaving, household deletion', async () => {
        // User leaves
        await request(app).delete(`/api/user/${user.id}`);

        // Delete household
        const response = await request(app).delete(`/api/household/${household.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ deleted: true, id: household.id });
    });
});