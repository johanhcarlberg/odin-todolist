import PubSub from './modules/PubSub';
import { addTodoItem, getTodoItems } from './modules/TodoItem/TodoItemController';
import TodoItemDetail from './modules/TodoItem/TodoItemDetail';
import Header from './modules/Layout/header';
import Sidebar from './modules/Layout/sidebar';
import ProjectDetail from './modules/Project/ProjectDetail';
import AddTodoItem from './modules/TodoItem/AddTodoItem';
import AddProject from './modules/Project/AddProject';
import TodoItemList from './modules/TodoItem/TodoItemList';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase_config';
import './style.css';

(async () => {
    if (getTodoItems().length === 0) {
        addTodoItem("Test", 3, "Test Description", "2022-12-29");
        addTodoItem("Test2", 3, "Test Description 2", "2022-12-30");
    }
    
    const pages = {
        "TodoItemDetail": TodoItemDetail,
        "ProjectDetail":ProjectDetail,
        "AddTodoItem":AddTodoItem,
        "AddProject":AddProject,
        'TodoItemList':TodoItemList,
    }
    
    PubSub.subscribe('changePage', changePage);
    
    document.body.appendChild(Header.render());
    const sidebar = await Sidebar.render();
    document.body.appendChild(sidebar);
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    document.body.appendChild(mainContent);
    
    async function changePage(data) {
        if (!data.page || !pages[data.page]) {
            return;
        }
    
        const element = await pages[data.page].render(data.data);
        mainContent.innerHTML = "";
        mainContent.appendChild(element);
    }
    
    await changePage({
        page: "TodoItemList",
        data: {title:'All items', callback:getTodoItems}
    });
    
    const app = initializeApp(firebaseConfig);
})()








