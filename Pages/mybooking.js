import { expect } from '@playwright/test';


class mybooking {
    constructor(page) {
        this.page = page;
        this.bookingDetailsSection = this.page.getByRole('heading', { name: 'My Bookings' })
        this.allbooking = this.page.getByTestId('booking-card');

    }



    async isBookingPageVisible() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.bookingDetailsSection).toBeVisible();
    }

    async iscardVisibleByIndex(index = 0) {
        const card = this.allbooking.nth(index);
        await expect(card).toBeVisible();
    }


    async getAllBookingsCount() {
        return await this.allbooking.count();
    }


    async viewBookingDetailsByIndex(id) {
        let found = false;

        const bookingCount = await this.getAllBookingsCount();
   
        console.log('Total bookings found:', bookingCount);
        for (let i = 0; i < bookingCount; i++) {

            const card = this.allbooking.nth(i);

            const bookingId = await card.locator('span').nth(0).textContent();

            const idText = bookingId
                ?.replace(/^Booking Ref:?\s*/, '')
                .trim();
            console.log('Booking ID in card:', idText);
            if (idText === id) {
                found = true;
                await card.getByRole('button', { name: 'View Details' }).click();
                break;
            }

        }
        await expect(found, `Booking ID '${id}' should be present in My Bookings`).toBeTruthy();

    }
}

export default mybooking;