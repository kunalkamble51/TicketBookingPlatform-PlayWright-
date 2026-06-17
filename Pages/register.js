class register {
    constructor(page, expect, url) {
        this.page = page;
        this.expect = expect;
        this.email = this.page.getByPlaceholder('you@email.com');
        this.registerpage = this.page.getByRole('heading', { name: 'Create your account' });
        this.password = this.page.locator('#register-password');
        this.confirmPassword = this.page.getByPlaceholder('Repeat your password');
        this.button = this.page.getByRole('button', { name: 'Create Account' });
        this.baseURL = url || 'https://eventhub.rahulshettyacademy.com';
        this.logoutbutton = this.page.getByRole('button', { name: 'Logout' });

        this.loginpage = this.page.getByRole('heading', { name: 'Sign in to EventHub' })

        this.homepage = this.page.locator('#user-email-display');
    }



    async register(email, password) {

        await this.page.goto(this.baseURL);
        await this.expect(this.registerpage).toBeVisible();
        await this.email.click();
        await this.email.fill(email);
        await this.password.click();
        await this.password.fill(password);
        await this.confirmPassword.click();
        await this.confirmPassword.fill(password);
        await this.button.click();
        await this.expect(this.homepage).toBeVisible();
        await this.expect(this.homepage).toHaveText(email);

        console.log('Registered user:', { email, password });
        await this.logoutbutton.click();
        await this.expect(this.loginpage).toBeVisible();
        return { email, password };
    }

    async existingUser(existingEmail, existingPassword) {
        await this.page.goto(this.baseURL);
        await this.expect(this.registerpage).toBeVisible();
        await this.email.click();
        await this.email.fill(existingEmail);
        await this.password.click();
        await this.password.fill(existingPassword);
        await this.confirmPassword.click();
        await this.confirmPassword.fill(existingPassword);
        await this.button.click();
        await this.expect(await this.page.getByText('Email already registered', { exact: true })).toBeVisible();

    }

    async emailMiss(password) {
        await this.page.goto(this.baseURL);
        await this.expect(this.registerpage).toBeVisible();
        await this.password.click();
        await this.password.fill(password);
        await this.confirmPassword.click();
        await this.confirmPassword.fill(password);
        await this.button.click();
        await this.expect(await this.page.getByText('Enter a valid email', { exact: true })).toBeVisible();
    }

    async passwordMiss(email) {
        await this.page.goto(this.baseURL);
        await this.expect(this.registerpage).toBeVisible();
        await this.email.click();
        await this.email.fill(email);
        await this.button.click();
        await this.expect(await this.page.getByText('Password does not meet the requirements below', { exact: true })).toBeVisible();

    }
}


export default register;

