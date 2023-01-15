import PubSub from './modules/PubSub';
import { addTodoItem, getTodoItemById, getTodoItems } from './modules/TodoItem/TodoItemController';
import TodoItemDetail from './modules/TodoItem/TodoItemDetail';
import ProjectList from './modules/Project/ProjectList';
import Header from './modules/Layout/header';
import Sidebar from './modules/Layout/sidebar';
import ProjectDetail from './modules/Project/ProjectDetail';
import AddTodoItem from './modules/TodoItem/AddTodoItem';
import AddProject from './modules/Project/AddProject';
import TodoItemList from './modules/TodoItem/TodoItemList';
import './style.css';
console.log('TodoList app loaded');
if (getTodoItems().length === 0) {
    addTodoItem("Test", 1, "Test Description", "2022-12-29");
    addTodoItem("Test2", 1, "Test Description 2", "2022-12-30");
}

console.table(getTodoItems());

const pages = {
    "TodoItemDetail": TodoItemDetail,
    "ProjectList": ProjectList,
    "ProjectDetail":ProjectDetail,
    "AddTodoItem":AddTodoItem,
    "AddProject":AddProject,
    'TodoItemList':TodoItemList,
}

PubSub.subscribe('changePage', changePage);

document.body.appendChild(Header.render());
document.body.appendChild(Sidebar.render());
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







