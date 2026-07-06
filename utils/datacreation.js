export default class dataCreation {
    static randomMobile() {
        let mobile = (Math.floor(Math.random() * 4) + 6).toString();

        for (let i = 0; i < 9; i++) {
            mobile += Math.floor(Math.random() * 10);
        }

        return mobile;
    }

    static randomEmail() {
        const timestamp = new Date().getTime();
        return `user${timestamp}_${Math.floor(Math.random() * 1000)}@test.com`;
    }

    static randomPassword() {
        const timestamp = new Date().getTime();
        return `Password${timestamp}`;
    }

    static randomUsername() {
        return `User${new Date().getTime()}`;
    }
}