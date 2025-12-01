import { describe, expect, test } from 'vitest';
import FetchService from '../FetchService';

describe('Fetch Services', () => {
    let user = null;
    let createdUser = null;
    let createdHousehold = null;

    test('Fetch signup', async () => {
        // use a timestamped email to avoid collisions
        const uniqueEmail = `test-user-${Date.now()}@example.com`;
        user = {
            difficulty: 5,
            name: 'test-user-name',
            email: uniqueEmail,
            userPassword: 'pwh',
            totalPoints: 0,
            role: 'member',
            householdId: 1,
            maxChoreTime: 120
        };

        const response = await FetchService.signup(user);
        expect(response).toBeDefined();
        expect(response.name).toBe('test-user-name');
        expect(response.email).toBe(uniqueEmail);
        expect(response.id).toBeDefined();
        // save for later tests
        createdUser = response;
    });

    test('Fetch signin', async () => {
        const resp = await FetchService.login({ email: user.email, userPassword: user.userPassword });
        expect(resp).toBeDefined();
        if (resp.email) {
            expect(resp.email).toBe(user.email);
        }
    });

    test('Edit profile', async () => {
        const newName = 'edited-test-user';
        const updated = await FetchService.updateUser(createdUser.id, {
            name: newName,
            maxChoreTime: 60
        });
        expect(updated).toBeDefined();
        expect(updated.name).toBe(newName);
    });

    test('Delete profile', async () => {
        const deleted = await FetchService.deleteUser(createdUser.id);
        expect(deleted).toBeDefined();
        if (deleted.id) {
            expect(deleted.id).toBe(createdUser.id);
        }
    });

    test('Create household', async () => {
        const uniqueHouseName = `TESTHOUSE-${Date.now()}`;
        const household = { name: uniqueHouseName };
        const res = await FetchService.createHousehold(household);

        expect(res).toBeDefined();
        expect(res.name).toBe(uniqueHouseName);
        expect(res.id).toBeDefined();
        expect(res.joinCode).toBeDefined();

        createdHousehold = res;
    });

    test('Fetch household by id', async () => {
        const fetched = await FetchService.fetchHousehold(createdHousehold.id);
        expect(fetched).toBeDefined();
        expect(fetched.name).toBe(createdHousehold.name);
    });

    test('Fetch household by join code', async () => {
        const byJoin = await FetchService.fetchHouseholdByJoin(createdHousehold.joinCode);
        expect(byJoin).toBeDefined();
        expect(byJoin.name).toBe(createdHousehold.name);
    });

    test('Edit household', async () => {
        const newName = createdHousehold.name + '-EDIT';
        const updated = await FetchService.editHousehold({ id: createdHousehold.id, name: newName });
        
        expect(updated).toBeDefined();
        expect(updated.name).toBe(newName);
    });

    test('Delete household', async () => {
        const deleted = await FetchService.deleteHousehold(createdHousehold.id);
        expect(deleted).toBeDefined();
        if (deleted.id) {
            expect(deleted.id).toBe(createdHousehold.id);
        }
    });
});