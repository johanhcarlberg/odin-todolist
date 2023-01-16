import { TodoItem } from "./TodoItem";
import { getNextId, getIndexFromId } from "../util";
import isFuture from "date-fns/isFuture";
import isToday from "date-fns/isToday";
import PubSub from "../PubSub";

const todoItems = loadTodoItems() || [];


function loadTodoItems() {
    const tempTodoItems = JSON.parse(localStorage.getItem('todoItems'));
    if (!tempTodoItems) {
        return false;
    }
    const newTodoItems = tempTodoItems.map(item => {
        const newItem = new TodoItem(
            item.id,
            item.title,
            item.priority,
            item.description,
            new Date(item.dueDate),
            item.projectId
        )
        return newItem;
    });
    return newTodoItems;
}

function addTodoItem(title, priority, description, dueDate, projectId) {
    const newId = getNextId(todoItems);
    if (!title || !priority || !description || !dueDate) {
        return null;
    }
    if (!Number(priority)) {
        return null;
    }
    dueDate = new Date(dueDate);
    const newTodoItem = new TodoItem(newId, title, Number(priority), description, dueDate, projectId || 1);
    todoItems.push(newTodoItem);
    PubSub.publish('TodoItemsChanged');
    return newTodoItem;
}

function getTodoItems() {
    return todoItems;
}

function getTodoItemsToday() {
    return getTodoItems().filter(item => {
        return isToday(item.dueDate);
    });
}

function getTodoItemsUpcoming() {
    return getTodoItems().filter(item => {
        return isFuture(item.dueDate);
    });
}

function getTodoItemById(id) {
    return todoItems.find(item => item.id === id);
}

function deleteTodoItem(id) {
    todoItems.splice(getIndexFromId(todoItems, id), 1);
    PubSub.publish('TodoItemsChanged');
}

function updateTodoItem(item) {
    const oldItem = getTodoItemById(item.id);
    if (!oldItem) {
        return;
    }

    todoItems[getIndexFromId(todoItems, item.id)] = item;
    PubSub.publish('TodoItemsChanged');
}

PubSub.subscribe('TodoItemsChanged', () => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
});

export { addTodoItem, getTodoItems, getTodoItemById, deleteTodoItem, updateTodoItem, getTodoItemsToday, getTodoItemsUpcoming };