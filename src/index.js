import { addTodoItem, getTodoItemById, getTodoItems } from './modules/TodoItem/TodoItemController';
import TodoItemDetail from './modules/TodoItem/TodoItemDetail';
import ProjectList from './modules/Project/ProjectList';
console.log('TodoList app loaded');
addTodoItem("Test", "Test Description", "2022-12-29");
addTodoItem("Test2", "Test Description 2", "2022-12-30");
console.table(getTodoItems());

const pages = {
    "TodoItemDetail": TodoItemDetail,
    "ProjectList": ProjectList,
}

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);

function changePage(page, data) {
    console.log({page, data});
    if (!page) {
        return;
    }

    mainContent.innerHTML = "";
    mainContent.appendChild(page.render(data));
}

changePage(ProjectList);







