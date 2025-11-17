import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { LoginPage } from "C:/Users/cheta/OneDrive/Documents/Playwright-ThinkpadL14/playwright-cucumber-bdd/pages/login.page";
import { HomePage } from "C:/Users/cheta/OneDrive/Documents/Playwright-ThinkpadL14/playwright-cucumber-bdd/pages/home.page";
 
let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let homePage: HomePage;
 
Given('I navigate to the SauceDemo login page', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.navigate();
});
 
When('I login with username {string} and password {string}', async (username: string, password: string) => {
  await loginPage.login(username, password);
});
 
Then('I should see the products page', async () => {
  await homePage.verifyHomePageLoaded();
  await browser.close();
});