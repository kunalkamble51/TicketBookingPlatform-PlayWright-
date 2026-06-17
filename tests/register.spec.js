// @ts-check
import { test, expect } from '@playwright/test';
import register from '../Pages/register';
const email = `Kunal.Kamble${Math.floor(Math.random() * 1000)}@test.com`;
const password = 'Test@1234';
let existingEmail = 'existing.user@test.com ';
let existingPassword = 'Existing@1234'; // Assuming result is obtained from a previous test or setup step


test.describe.serial('Register', () => {
  test('should register a new user', async ({ page }) => {
    const registerPage = new register(page, expect, 'https://eventhub.rahulshettyacademy.com/register');
    const result = await registerPage.register(email, password);
    expect(result.email).toBe(email);
    expect(result.password).toBe(password);
    existingEmail = email;
    existingPassword = password;
  });

  test('should show error for existing user', async ({ page }) => {
    const registerPage = new register(page, expect, 'https://eventhub.rahulshettyacademy.com/register');
    await registerPage.existingUser(existingEmail, existingPassword);
  });
  test('should show error for missing email', async ({ page }) => {
    const registerPage = new register(page, expect, 'https://eventhub.rahulshettyacademy.com/register');
    await registerPage.emailMiss(password);
  });
  test('should show error for missing password', async ({ page }) => {
    const registerPage = new register(page, expect, 'https://eventhub.rahulshettyacademy.com/register');
    await registerPage.passwordMiss(existingEmail);
  });

});


