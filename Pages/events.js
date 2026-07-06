import { expect } from '@playwright/test';
class events {
    constructor(page) {
        this.page = page;
        this.events = this.page.getByTestId('event-card');

    }

    async getEventsCount() {
        return await this.events.count();
    }

    async isEventPresent(eventName) {
        const eventNames = await this.getEventNameList();
        return eventNames.includes(eventName);
    }
    async isEventsPageVisible() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.events.first()).toBeVisible();
    }
    async getEventDetailsList() {
        const events = [];
        const count = await this.events.count();

        for (let i = 0; i < count; i++) {
            const card = this.events.nth(i);

            const info = card.locator("div.space-y-1\\.5 > div span");

            events.push({
                eventName: (await card.locator("h3").textContent())?.trim(),
                date: (await info.nth(0).textContent())?.trim(),
                location: (await info.nth(1).textContent())?.trim(),
                price: (await card.locator("p").filter({ hasText: "$" }).textContent())?.trim(),
                seatsAvailable: (await card.locator("span").filter({ hasText: "seat" }).textContent())?.trim()
            });
        }

        return events;
    }



}
export default events;