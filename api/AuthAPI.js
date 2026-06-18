export class AuthAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = 'https://api.eventhub.rahulshettyacademy.com/api';
    }
    
    async registerUser(payload) {
        const response =await this.request.post(`${this.baseURL}/auth/register`, {
            data: payload
        });
        return response;
    }
    async login(payload){
        const respnse = await this.request.post(`${this.baseURL}/auth/login`, {
            data: payload
        });
        return respnse;
    }
}
