export class BaseAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = 'https://api.eventhub.rahulshettyacademy.com/api';
    }

    async get(endpoint, headers = {}) {
        return await this.request.get(`${this.baseURL}${endpoint}`, {
            headers
        });
    }

    async post(endpoint, payload, headers = {}) {
        return await this.request.post(`${this.baseURL}${endpoint}`, {
            data: payload,
            headers
        });
    }

    async put(endpoint, payload, headers = {}) {
        return await this.request.put(`${this.baseURL}${endpoint}`, {
            data: payload,
            headers
        });
    }

    async delete(endpoint, headers = {}) {
        return await this.request.delete(`${this.baseURL}${endpoint}`, {
            headers
        });
    }
}