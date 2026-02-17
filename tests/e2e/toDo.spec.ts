import { expect, test } from '@fixtures/toDoFixtures'
import { ToDoItems } from '@data/toDoItems'

test.beforeEach(async ({ toDoPage }) => {
  await expect(toDoPage.toDoHeader).toBeVisible()
})

test.describe('@smoke', () => {
  test('user is able to add 3 actions', async ({ toDoPage }) => {
    const items = [ToDoItems.CleanHouse, ToDoItems.GoShopping, ToDoItems.WashDishes]
    await test.step('add items', async () => {
      for (const item of items) {
        await toDoPage.addToDo(item)
      }
    })
    await test.step('verify items count', async () => {
      await expect(toDoPage.toDoItems).toHaveCount(items.length)
    })
  })
})

test.describe('@regression', () => {
  test('user is able to check done items', async ({ toDoPage }) => {
    await test.step('add item', async () => {
      await toDoPage.addToDo(ToDoItems.CleanHouse)
      await expect(toDoPage.toDoItems).toHaveCount(1)
    })
    await test.step('mark item as done', async () => {
      await toDoPage.markDone(ToDoItems.CleanHouse)
      await expect(toDoPage.getTodoCheckbox(ToDoItems.CleanHouse)).toBeChecked()
    })
  })
  test('user is able to delete item', async ({ toDoPage }) => {
    await test.step('add item', async () => {
      await toDoPage.addToDo(ToDoItems.CleanHouse)
      await expect(toDoPage.toDoItems).toHaveCount(1)
    })
    await test.step('delete item', async () => {
      await toDoPage.deleteItem(ToDoItems.CleanHouse)
      await expect(toDoPage.toDoItems).toHaveCount(0)
    })
  })
})
