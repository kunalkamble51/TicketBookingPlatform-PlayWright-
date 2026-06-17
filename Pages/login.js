class login {
    constructor(page, expect, url) {
        this.page = page;
        this.expect = expect;
        this.url = url || 'https://eventhub.rahulshettyacademy.com/login';
        this.loginpage = this.page.getByRole('heading', { name: 'Sign in to EventHub' })
        this.email = this.page.locator('#email');
        this.password = this.page.locator('#password');
        this.loginbutton = this.page.getByRole('button', { name: 'Sign in' });

        this.homepage = this.page.locator('#user-email-display');

    }
    async login(email, password) {
        await this.page.goto(this.url);
        await this.expect(this.loginpage).toBeVisible();
        await this.email.click();
        await this.email.fill(email);
        await this.password.click();
        await this.password.fill(password);
        await this.loginbutton.click();
        await this.expect(this.homepage).toBeVisible();
        await this.expect(this.homepage).toHaveText(email);
    }

}
export default login;