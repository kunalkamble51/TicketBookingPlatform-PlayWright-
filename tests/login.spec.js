
import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/loginData';
import login from '../Pages/login';
import register from '../Pages/register';
import mybooking from '../Pages/mybooking';
import dashboard from '../Pages/dashboard';
import bookingsummary from '../Pages/bookingsummary';

test.describe.parallel('Login', () => {
    test('should login with valid credentials @smoke @regression', async ({ page }) => {

        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );
    });
    test('should show error for invalid credentials @regression', async ({ page }) => {
        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.invalidLogin(
            loginData.invalidUser.email,
            loginData.invalidUser.password
        );
    });

    test('login and check my bookings @regression', async ({ page }) => {
        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        const dashboardPage = new dashboard(page);
        await dashboardPage.isDashboardVisible();
        await dashboardPage.clickMyBookingButton();
        const myBookingPage = new mybooking(page);
        await myBookingPage.isBookingPageVisible();
        await myBookingPage.iscardVisibleByIndex();
        const eventID='D-BMTUKL';
        const bookingDetails = await myBookingPage.viewBookingDetailsByIndex(eventID);
        const bookingSummaryPage = new bookingsummary(page);
        await bookingSummaryPage.isBookingSummaryVisible();
        const bookingSummary = await bookingSummaryPage.getBookingDetails();
        

    }
    );

});