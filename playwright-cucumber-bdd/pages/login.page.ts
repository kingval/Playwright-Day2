import { Page } from "playwright";
 
export class LoginPage {
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
 
  constructor(private page: Page) {}
 
  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }
 
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}