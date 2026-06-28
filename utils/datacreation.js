export default class dataCreation {
    static randomMobile() {
        let mobile = (Math.floor(Math.random() * 4) + 6).toString();

        for (let i = 0; i < 9; i++) {
            mobile += Math.floor(Math.random() * 10);
        }

        return mobile;
    }

    static randomEmail() {
        return `user${Math.floor(Math.random() * 1000)}@test.com`;
    }

    static randomPassword() {
        return `Password${Math.floor(Math.random() * 1000)}`;
    }

    static randomUsername() {
        return `User${Math.floor(Math.random() * 1000)}`;
    }
}