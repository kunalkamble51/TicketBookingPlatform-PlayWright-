class bookingpage {
    constructor(page) {
        this.page = page;
        this.bookingButton = this.page.getByText('Book Tickets', { exact: true });
        this.confirmBookingBttn = this.page.getByRole('button', { name: 'Confirm Booking' });
        this.fullname = this.page.getByPlaceholder('Your full name');
        this.email = this.page.getByLabel(/Email/i);
        this.phonenumber = this.page.getByLabel(/Phone Number/i);
        this.countoftickets = this.page.locator("div[class='flex items-center gap-3']");
        this.total = this.page.locator('div.flex.justify-between.font-bold.text-gray-900.text-base.pt-1.border-t.border-indigo-200');

        this.confirmationMessage = this.page.getByRole('heading', { name: 'Booking Confirmed!' });
        this.bookingdetails = this.page.locator('div.bg-indigo-50.border.border-indigo-100.rounded-xl.p-4.mb-5.text-left.space-y-2')
        this.viewMyBookingsButton = this.page.getByRole('button', { name: 'View My Bookings' });
    }

    async isBookingPageVisible() {
        await this.page.waitForLoadState('networkidle');
        return await this.bookingButton.isVisible();
    }

    async getCountOfTickets() {
        return await this.countoftickets.count();
    }

    async addTickets(count) {
        for (let i = 0; i < count; i++) {
            await this.page.getByRole('button', { name: '+' }).click();
        }
    }

    async getTotalAmount() {
        const totalText = await this.total.textContent();
        const totalAmount = totalText.replace(/[^0-9]/g, '');
        return parseInt(totalAmount, 10);
    }
    async bookTickets(fullname, email, phonenumber, countoftickets) {
        if (countoftickets > 1 && countoftickets <= 4) {
            await this.addTickets(countoftickets - 1);
        }

        await this.fullname.fill(fullname);
        await this.email.fill(email);
        await this.phonenumber.fill(phonenumber);
        await this.confirmBookingBttn.click();
    }

    async viewMyBookings() {
        await this.viewMyBookingsButton.click();
    }

    async getBookingDetails() {
        const Booking_reference = await this.bookingdetails.locator('div:has-text("Booking Ref")').textContent();
        const bookingRef = Booking_reference.replace('Booking Ref', '').trim();
        const Customer_Name = await this.bookingdetails.locator('div:has-text("Customer")').textContent();
        const customerName = Customer_Name.replace('Customer', '').trim();
        const Tickets_Booked = await this.bookingdetails.locator('div:has-text("Tickets")').textContent();
        const ticketsBooked = Tickets_Booked.replace('Tickets', '').trim();
        const Total_Amount = await this.bookingdetails.locator('div:has-text("Total")').textContent();
        const totalAmount = Total_Amount.replace('Total', '').trim();  
        const details = {
            Booking_reference: bookingRef,
            Customer_Name: customerName,
            Tickets_Booked: ticketsBooked,
            Total_Amount: totalAmount
        };

        await this.viewMyBookingsButton.click(); 
         return details;
    }
}
export default bookingpage;