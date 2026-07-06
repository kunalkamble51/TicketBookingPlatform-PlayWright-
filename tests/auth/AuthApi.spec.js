import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../api/AuthAPI';
import utils from '../../utils/datacreation';

test.describe.serial('Auth API', () => {
    test('should login with valid credentials', async ({ request }) => {
        const authApi = new AuthAPI(request);
        const response = await authApi.login({
            email: 'Kunal123@gmail.co',
            password: 'Kunal@123'
        });

        const responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(200);
        const token = responseBody.token;
        expect(token).toBeTruthy();
        console.log('Login successful, token:', token);
    });

    test('should show error for invalid credentials', async ({ request }) => {
        const authApi = new AuthAPI(request);
        const response = await authApi.login({
            email: 'Kunal123@gmail.co',
            password: 'Random@123'
        }); 
        const responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(400);
        expect(responseBody.error).toBe('Invalid email or password');
        console.log('Login failed as expected with invalid credentials');
    });

    test('User not present', async ({ request }) => {
        const authApi = new AuthAPI(request);
        const response = await authApi.login({
            email: 'random@gmail.com',
            password: 'Random@123'
        });
        const responseBody = await response.json();
        console.log(responseBody);
       expect(response.status()).toBe(400);
        expect(responseBody.error).toBe('Invalid email or password');  
        console.log('Login failed as expected for non-existent user');
    });

    test('should register a new user', async ({ request }) => {
        const authApi = new AuthAPI(request);
        const email = utils.randomEmail();
        const password = utils.randomPassword();
        const response = await authApi.register({
            email: email,
            password: password
        });
        const responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(400);
        expect(responseBody.user.email).toBe(email);
        expect(responseBody.success).toBe(true);
        console.log('User registered successfully with email:', email);
    });

    test('should show error for existing user', async ({ request }) => {
        const authApi = new AuthAPI(request);
        const existingEmail = 'Kunal123@gmail.co';
        const existingPassword = 'Kunal@123';
        const response = await authApi.register({
            email: existingEmail,
            password: existingPassword  }
        );
        const responseBody = await response.json();
        console.log(responseBody);
        expect(response.status()).toBe(400);
        expect(responseBody.error).toBe('Email already registered');
        expect(responseBody.success).toBe(false);
        console.log('Registration failed as expected for existing user');
    });

});