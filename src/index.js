import { addTodoItem, getTodoItems } from './modules/TodoItem/TodoItemController';
import * as TodoItemDetail from './modules/TodoItem/TodoItemDetail';
console.log('TodoList app loaded');
addTodoItem("Test", "Test Description", "2022-12-29");
addTodoItem("Test2", "Test Description 2", "2022-12-30");
console.table(getTodoItems());

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);

mainContent.appendChild(TodoItemDetail.render(1));