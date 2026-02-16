import { test as base } from '@playwright/test';
import { ToDoMainPage } from '../pages/toDoMainPage';

type Fixtures = {
  toDoPage: ToDoMainPage;
};

export const test = base.extend<Fixtures>({
  toDoPage: async ({ page }, use) => {
    const toDoPage = new ToDoMainPage(page);

    await test.step('Open TodoMVC', async () => {
      await toDoPage.goto();
    });

    await use(toDoPage);
  },
});

export { expect } from '@playwright/test';
