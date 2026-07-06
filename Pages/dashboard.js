class dashboard {
    constructor(page) {
        this.page = page;
        this.homepage = this.page.getByText('EventHub', { exact: true });
        this.events = this.page.locator('#event-card:visible');
        this.homebuttonlink = this.page.getByRole('link', { name: 'Home' });
        this.eventbuttonlink =this.page.getByTestId('nav-events')
        this.mybookingbuttonlink = this.page.getByTestId('nav-bookings');

    }

    async getEventsCount() {
        return await this.events.count();
    }

    async clickHomeButton() {
        await this.homebuttonlink.click();
    }
    async clickEventButton() {
        await this.eventbuttonlink.click();
    }
    async clickMyBookingButton() {
        await this.mybookingbuttonlink.click();
    }

        async getEventNameList() {
            const eventNames = [];
            const count = await this.getEventsCount();
            for (let i = 0; i < count; i++) {
                const eventName = await this.events.nth(i).locator('h3').textContent();
                eventNames.push(eventName ? eventName.trim() : '');
            }
            return eventNames;
        }

    async selectEventByName(eventName) {
        const count = await this.getEventsCount();
        for (let i = 0; i < count; i++) {
            const currentEventName = await this.events.nth(i).locator('h3').textContent();
            if (currentEventName && currentEventName.trim() === eventName) {
                await this.events.nth(i).locator('h3').click();
                break;
            }
        }
    }

    
    async isEventPresent(eventName) {
        const eventNames = await this.getEventNameList();
        return eventNames.includes(eventName);
    }

    async isDashboardVisible() {
        await this.page.waitForLoadState('networkidle');
        return await this.homepage.isVisible();

        await expect(found, `Booking ID '${id}' should be present in My Bookings`).toBeTruthy();

    }
}

export default dashboard;