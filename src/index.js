import { addTodoItem, getTodoItems } from './modules/TodoItem/TodoItemController';
console.log('TodoList app loaded');
addTodoItem("Test", "Test Description", "2022-12-29");
addTodoItem("Test2", "Test Description 2", "2022-12-30");
console.table(getTodoItems());