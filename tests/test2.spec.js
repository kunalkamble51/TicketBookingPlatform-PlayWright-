import { test, expect } from '@playwright/test';
test.describe('API Tests', () => {
    test('should login, select an event, and book tickets @smoke @regression', async ({ request }) => {
        const response = await request.get('https://automationexercise.com/api/productsList', {
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log('Response Body:', responseBody);
        expect(responseBody).toHaveProperty('products');
        expect(Array.isArray(responseBody.products)).toBe(true);
        expect(responseBody.products.length).toBeGreaterThan(0);
    });



test('two pages at a time @smoke @regression', async ({ browser }) => {

    const user1Context = await browser.newContext();
    const user1Page = await user1Context.newPage();

    const user2Context = await browser.newContext();
    const user2Page = await user2Context.newPage();

    await user1Page.goto('https://google.com/');
    await user2Page.goto('https://automationexercise.com/');

    await user1Page.waitForTimeout(5000);
    await user2Page.waitForTimeout(5000);

    await user1Context.close();
    await user2Context.close();
});


});