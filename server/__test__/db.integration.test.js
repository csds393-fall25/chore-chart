import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js'
import prisma from '../prisma.js';

describe('DB integration tests', () => {
	let household = null;
	let user = null;
	let chore = null;

    // TODO see if this is needed
    beforeAll(async () => {
		// cleanup db to avoid unique name conflict 
        await prisma.chore.deleteMany({ where: { name: { contains: 'db-test-chore' } } });
        await prisma.user.deleteMany({ where: { email: { contains: 'db-test-user' } } });
        await prisma.household.deleteMany({ where: { name: { contains: 'db-test-household' } } });
	});

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
    });

    test('PCT-1 - Create user profile with valid fields', async () => {
        const response = await request(app)
        .post(`/api/signup`)
        .send({
            name: `test-user`,
            email: `db-test-user@example.com`,
            password_hash: 'testpw',
            householdId: household.id
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name', 'test-user');
        expect(response.body).toHaveProperty('email', 'db-test-user@example.com');
        expect(response.body).toHaveProperty('password_hash', 'testpw');
        expect(response.body).toHaveProperty('householdId', household.id);

        user = response.body;
    });

    test('PCT-9 - Email already exists in the database', async () => {
        const response = await request(app)
        .post(`/api/signup`)
        .send({
            name: `test-user-duplicate`,
            email: `db-test-user@example.com`,
            password_hash: 'testpw',
            householdId: household.id
        });
        console.log(response.error.message);
        expect(response.status).toBe(513);
    });

    test('CCT-1 - Create a chore with a household and assignee', async () => {
        const response = await request(app)
        .post(`/api/chores`)
        .send({
			name: `db-test-chore`,
			description: 'integration test chore',
			difficulty: 1,
			location: 'home',
			estimatedTime: 15,
			dueDate: new Date(),
			repeat: false,
			householdId: household.id,
			assigneeId: user.id
		});

		chore = response.body;
        
        expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('name', 'db-test-chore');
		expect(response.body).toHaveProperty('description', 'integration test chore');
    });

	test('VHT-1 - Backend returns household with users and chores', async () => {
		const response = await request(app).get(`/api/household/${household.id}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('id', household.id);
		expect(Array.isArray(response.body.users)).toBe(true);
		expect(response.body.users.some(u => u.email === user.email)).toBe(true);
		expect(Array.isArray(response.body.chores)).toBe(true);
		//expect(response.body.chores.some(c => c.name === chore.name)).toBe(true);
	});

    test('HET-1 - Edit household name with valid name', async () => {
        const response = await request(app)
        .put(`/api/household/${household.id}`)
        .send({ name: 'db-test-household-edit'});

        expect(response.status).toBe(200);
        expect(response.body.name).toBe('db-test-household-edit');
    });

	 test('CET-1 - Edit chore (change name)', async () => {
		const response = await request(app)
		.put(`/api/chores/${chore.id}`)
		.send({ name: 'db-test-chore-edited' });

		expect(response.status).toBe(200);
		expect(response.body.name).toBe('db-test-chore-edited');
	});

	test('CDT-1 - Delete chore', async () => {
		const response = await request(app).delete(`/api/chore/${chore.id}`);
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ deleted: true, id: chore.id });
	});

	test('LT-1 - Login with valid credentials', async () => {
		const response = await request(app)
		.post(`/api/login`)
		.send({ email: user.email, password_hash: user.password_hash });

		expect(response.status).toBe(200);
	});

	test('PET-1 - Edit profile (update name and maxChoreTime)', async () => {
		const response = await request(app)
		.put(`/api/user/${user.id}`)
		.send({ name: 'db-test-user-edited', maxChoreTime: 120 });

		expect(response.status).toBe(200);
		expect(response.body.name).toBe('db-test-user-edited');
		expect(response.body.maxChoreTime).toBe(120);
	});

	test('PDT-1 - Delete profile', async () => {
		const response = await request(app).delete(`/api/user/${user.id}`);
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ deleted: true, id: user.id });
	});

    test('LH-2 - Last member leaving, household deletion', async () => {
        const response = await request(app).delete(`/api/household/${household.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ deleted: true, id: household.id });
    });
});