
import { test, expect } from '@playwright/test';

import login from '../Pages/login';
import register from '../Pages/register';
let email = 'git ';
let password = 'Kunal@123';

test.describe('Login', () => {
    test('should login with valid credentials', async ({ page }) => {

        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.login(email, password);
    });
    test('should show error for invalid credentials', async ({ page }) => {
        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.invalidLogin('invalid@example.com', 'wrongpassword');
    });
});