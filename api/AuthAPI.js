import { BaseAPI } from "./BaseAPI";

export class AuthAPI extends BaseAPI {

    async login(payload) {
        return await this.post("/auth/login", payload);
    }

    async register(payload) {
        return await this.post("/auth/register", payload);
    }
}