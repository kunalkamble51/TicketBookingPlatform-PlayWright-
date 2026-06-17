
import { test, expect } from '@playwright/test';

import login from '../Pages/login';
import register from '../Pages/register';
let email = 'Kunal123@gmail.co';
let password = 'Kunal@123';

test.describe('Login', () => {
    test('should login with valid credentials', async ({ page }) => {

        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.login(email, password);
    });

});