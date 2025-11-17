import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Contact List App/);
});

test('sign up link', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    // Click the sign up link.
  //await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page).toHaveTitle(/Add User/);
});