import { Page, Locator } from "@playwright/test";

export class ToDoMainPage {
  readonly page: Page;

  readonly toDoHeader: Locator;
  readonly toDoInput: Locator;
  readonly toDoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toDoHeader = page.getByRole("heading", { name: "todos" });
    this.toDoInput = page.getByRole("textbox", { name: "What needs to be done?" });
    this.toDoItems = page.getByTestId('todo-item');
  }

  async goto(): Promise<void> {
    await this.page.goto("./");
  }

  async addToDo(text: string): Promise<void> {
    await this.toDoInput.fill(text);
    await this.toDoInput.press("Enter");
  }

  async countToDoItems(): Promise<number> {
    return this.toDoItems.count();
  }

  toDoExactItem(itemName: string): Locator {
    return this.toDoItems.filter({ hasText: itemName });
  }

  async markDone(itemName: string): Promise<void> {
    const item = this.toDoExactItem(itemName);
    await item.locator('input.toggle').click();
  }

  getTodoCheckbox(itemName: string): Locator {
  return this.toDoExactItem(itemName).locator('input.toggle');
}

  async deleteItem(itemName: string): Promise<void> {
    const item = this.toDoExactItem(itemName);
    await item.hover();
    await item.locator("button.destroy").click();
  }
}