import { expect } from '@playwright/test';
class bookingsummary {
    constructor(page) {
        this.page = page;
        this.customerDetailsSection = this.page.getByRole('heading', { name: 'Booking Information' });
        this.cartsofdetails = this.page.locator('div.bg-white.rounded-2xl.border.border-gray-100.shadow-sm.p-6')
    }


    async isBookingSummaryVisible() {
        await expect(this.cartsofdetails).toHaveCount(5, {
            timeout: 10000
        });
    }
    async getBookingDetails() {
        const bookingDetails = {};

        const sections = [
            "eventDetails",
            "customerDetails",
            "paymentSummary"
        ];
        ``

        for (let i = 0; i < 3; i++) {
            const card = this.cartsofdetails.nth(i);

            const rows = card.locator(".space-y-3 > div");

            bookingDetails[sections[i]] = [];

            for (let j = 0; j < await rows.count(); j++) {
                const row = rows.nth(j);


                const key = (await row.locator("span").nth(0).textContent()).trim();
                const value = (await row.locator("span").nth(1).textContent()).trim();

                bookingDetails[sections[i]][key] = value;
            }
        }

        console.log(bookingDetails);
        return bookingDetails;
    }
}
export default bookingsummary;