import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../Api/AuthAPI';
import utils from '../../utils/datacreation';

test.describe.serial('Register API', () => {

    test('should register a new user', async ({ request }) => {

        const authApi = new AuthAPI(request);

        const email = utils.randomEmail();
        const password = utils.randomPassword();

        const response = await authApi.register({
            email,
            password
        });

        const responseBody = await response.json();

        expect(response.status()).toBe(201);
        expect(responseBody.success).toBe(true);
        expect(responseBody.user.email).toBe(email);
    });

});