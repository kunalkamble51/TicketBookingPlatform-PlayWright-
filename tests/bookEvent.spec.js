import { test, expect } from '@playwright/test';
import login from '../Pages/login';
import dashboard from '../Pages/dashboard';
import bookingpage from '../Pages/bookingpage';
import { loginData } from '../test-data/loginData';
import dataCreation from '../utils/datacreation';
import mybooking from '../Pages/mybooking';
import bookingsummary from '../Pages/bookingsummary';


test.describe('Event booking', () => {
    test('should login, select an event, and book tickets', async ({ page }) => {
        //login into login page
        const loginPage = new login(page, expect, 'https://eventhub.rahulshettyacademy.com/login');
        await loginPage.login(loginData.validUser.email, loginData.validUser.password);

        const dashboardPage = new dashboard(page);
        await dashboardPage.isDashboardVisible();

        const eventNames = await dashboardPage.getEventNameList();
        expect(eventNames.length).toBeGreaterThan(0);
        console.log('Available events:', eventNames);
        const selectedEvent = eventNames[0];
        await dashboardPage.selectEventByName(selectedEvent);
        const bookingPage = new bookingpage(page);
        await bookingPage.isBookingPageVisible();
        const username = dataCreation.randomUsername();
        const email = dataCreation.randomEmail();
        const mobile = dataCreation.randomMobile();
        const countOfTickets = 2
        await bookingPage.bookTickets(
            username,
            email,
            mobile,
            countOfTickets
        );
        const bookingDetails = await bookingPage.getBookingDetails();

        const myBookingPage = new mybooking(page);

        await myBookingPage.isBookingPageVisible();
        await myBookingPage.iscardVisibleByIndex();
        const bookingId = bookingDetails.Booking_reference;
        console.log('Booking ID:', bookingId);
        console.log(await myBookingPage.getAllBookingsCount());
        const response = await myBookingPage.viewBookingDetailsByIndex(bookingId);
        const bookingSummaryPage = new bookingsummary(page);
        await bookingSummaryPage.isBookingSummaryVisible();
        const bookingSummary = await bookingSummaryPage.getBookingDetails();

        expect(bookingSummary.eventDetails.Event).toBe(selectedEvent);
        expect(bookingSummary.customerDetails.Name).toBe(username);
        expect(bookingSummary.customerDetails.Email).toBe(email);
        expect(bookingSummary.customerDetails.Phone).toBe(mobile);
        expect(bookingSummary.paymentSummary.Tickets).toBe(countOfTickets.toString());


    });
});
