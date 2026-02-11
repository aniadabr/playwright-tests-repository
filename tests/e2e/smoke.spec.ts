import { expect, test } from "@playwright/test"; 

test('has title', async ({ page }) => {
  await page.goto('./');
  console.log('URL:', page.url());
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('./');

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill("important stuff");
  await page.keyboard.press('Enter')

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('todo-title')).toBeVisible();
});
