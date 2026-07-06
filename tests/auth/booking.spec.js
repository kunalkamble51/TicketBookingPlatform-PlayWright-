import { test, expect } from '@playwright/test';
import { loginData } from '../../test-data/loginData';
import { TokenManager } from '../../utils/token';
import { BookingAPI } from '../../Api/BookingAPI';

test.describe.serial('Booking API', () => {
     test('should get booking details with valid booking reference', async ({ request }) => {

        const bookingApi = new BookingAPI(request);
        const tokenManager = new TokenManager(request);

        const token = await tokenManager.getToken(
            loginData.validUser.email,
            loginData.validUser.password
        );

        const bookingReference = 'D-2SBEIW';

        const response = await bookingApi.getBookingDetails(
            bookingReference,
            token
        );

        const body = await response.json();
        console.log(body);

        expect(response.status()).toBe(500);
        expect(body.data.bookingRef).toBe(bookingReference);
    });

      test('should get booking details with limit', async ({ request }) => {

        const bookingApi = new BookingAPI(request);
        const tokenManager = new TokenManager(request);

        const token = await tokenManager.getToken(
            loginData.validUser.email,
            loginData.validUser.password
        );

        const bookingReference = 'D-2SBEIW';

        const response = await bookingApi.getBookingDetailsbylimit(
            token
        );

        const body = await response.json();
        console.log(body);

        expect(response.status()).toBe(200);
        expect(body.data[0].bookingRef).toBe(bookingReference);
        console.log(body.data[0].bookingRef)
    });
});