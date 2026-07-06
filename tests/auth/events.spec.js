import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../Api/AuthAPI';
import { loginData } from '../../test-data/loginData';
import { TokenManager } from '../../utils/token';
import { EventsAPI } from '../../Api/EventsAPI';

test.describe.serial('Events API', () => {
    test('should fetch events list', async ({ request }) => {
        const tokenManager = new TokenManager(request);

        const token = await tokenManager.getToken(
            loginData.validUser.email,
            loginData.validUser.password
        );
        console.log('Token:', token);
        const eventsAPI = new EventsAPI(request);
        const response = await eventsAPI.getListOfAllEvents(token, {
            city: 'Delhi',
            page: 1,
            limit: 10
        });
        const responseBody = await response.json();
        console.log('Events List:', responseBody);
    });
});


