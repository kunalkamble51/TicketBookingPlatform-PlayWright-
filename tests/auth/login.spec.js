import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../Api/AuthAPI';
import { loginData } from '../../test-data/loginData';

test.describe.serial('Login API', () => {
    test('should login with valid credentials', async ({ request }) => {
        const authApi = new AuthAPI(request);
        const response = await authApi.login({
            email: loginData.validUser.email,
            password: loginData.validUser.password
        });
        const responseBody = await response.json();
      
        expect(response.status()).toBe(200);
        const token = responseBody.token;
        expect(token).toBeTruthy();
        console.log('Login successful, token:', token);
    });
})