import { expect, test } from "../../fixtures/toDoFixtures.ts"; 
import { ToDoItems } from "../../test-data/toDoItems.ts";

test.beforeEach(async ({ toDoPage }) => {
  await expect(toDoPage.toDoHeader).toBeVisible();
});

test.describe('@smoke', () => {
  test('user is able to add 3 actions', async ({ toDoPage }) => {
    await toDoPage.addToDo(ToDoItems.CleanHouse);
    await toDoPage.addToDo(ToDoItems.GoShopping);
    await toDoPage.addToDo(ToDoItems.WashDishes);
    expect(await toDoPage.countToDoItems()).toBe(3);
  })
});

test.describe('@regression', () => {
  test('user is able to check done items', async ({toDoPage}) => {
    await toDoPage.addToDo(ToDoItems.CleanHouse);
    expect(await toDoPage.countToDoItems()).toBe(1);
    await toDoPage.markDone(ToDoItems.CleanHouse);
    await expect(toDoPage.getTodoCheckbox(ToDoItems.CleanHouse)).toBeChecked();
  })
});

test.describe('@regression', () => {
  test('user is able to delete item', async ({toDoPage}) => {
    await toDoPage.addToDo(ToDoItems.CleanHouse);
    expect(await toDoPage.countToDoItems()).toBe(1);
    await toDoPage.deleteItem(ToDoItems.CleanHouse);
    expect(await toDoPage.countToDoItems()).toBe(0);
  })
});
