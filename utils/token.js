import { AuthAPI } from '../api/AuthAPI';

export class TokenManager extends AuthAPI {
    constructor(request) {
        super(request);
        this.token = null;
    }

    async getToken(email, password) {
        if (!this.token) {
            const response = await this.login({
                email,
                password
            });

            if (!response.ok()) {
                throw new Error("Unable to generate token");
            }

            const body = await response.json();
            this.token = body.token;
        }

        return this.token;
    }
}