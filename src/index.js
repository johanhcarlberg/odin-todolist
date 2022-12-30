import PubSub from './modules/PubSub';
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

PubSub.subscribe('changePage', changePage);

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);

function changePage(data) {
    console.log(data);
    if (!data.page || !pages[data.page]) {
        return;
    }

    mainContent.innerHTML = "";
    mainContent.appendChild(pages[data.page].render(data.data));
}

changePage({
    page: "ProjectList"
});
//changePage(TodoItemDetail, 1);







