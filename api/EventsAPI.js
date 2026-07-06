import { BaseAPI } from "./BaseAPI";

export class EventsAPI extends BaseAPI {

    async getListOfAllEvents(token, {
        category = "",
        city = "",
        search = "",
        page = 1,
        limit = 10
    } = {}) {

        const query = new URLSearchParams({
            page,
            limit
        });

        if (category) query.append("category", category);
        if (city) query.append("city", city);
        if (search) query.append("search", search);

        return await this.get(
            `/events?${query.toString()}`,       
            {
                Authorization: `Bearer ${token}`
            }
        );
    }
}