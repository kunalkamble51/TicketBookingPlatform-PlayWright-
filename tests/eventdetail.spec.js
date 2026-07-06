
import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/loginData';
import login from '../Pages/login';
import register from '../Pages/register';
import dashboard from '../Pages/dashboard';
import Events from '../Pages/events';

test.describe.parallel('Event Deails', () => {
    test('should login and check event details @regression', async ({ page }) => {
        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        const dashboardPage = new dashboard(page);
        await dashboardPage.isDashboardVisible();
        await dashboardPage.clickEventButton(); 

        const eventsPage = new Events(page);
        await eventsPage.isEventsPageVisible();

        const eventDetails = await eventsPage.getEventDetailsList();

        console.log('Event Details:', eventDetails);
        expect(eventDetails.length).toBeGreaterThan(0);
    }
    );

});
