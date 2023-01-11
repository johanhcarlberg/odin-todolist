import { TodoItem } from "./TodoItem";
import { getNextId } from "../util";
import PubSub from "../PubSub";

const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];

function addTodoItem(title, priority, description, dueDate, projectId) {
    const newId = getNextId(todoItems);
    if (!title || !priority || !description || !dueDate) {
        return null;
    }
    if (!Number(priority)) {
        return null;
    }

    const newTodoItem = new TodoItem(newId, title, Number(priority), description, dueDate, projectId || 1);
    todoItems.push(newTodoItem);
    PubSub.publish('TodoItemsChanged');
    return newTodoItem;
}

function getTodoItems() {
    return todoItems;
}

function getTodoItemById(id) {
    return todoItems.find(item => item.id === id);
}

function getIndexFromId(id) {
    return todoItems.findIndex(item => item.id === id);
}

function deleteTodoItem(id) {
    todoItems.splice(getIndexFromId(id), 1);
    PubSub.publish('TodoItemsChanged');
}

function updateTodoItem(item) {
    const oldItem = getTodoItemById(item.id);
    if (!oldItem) {
        return;
    }

    todoItems[getIndexFromId(item.id)] = item;
    PubSub.publish('TodoItemsChanged');
}

PubSub.subscribe('TodoItemsChanged', () => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
});

export { addTodoItem, getTodoItems, getTodoItemById, deleteTodoItem, updateTodoItem };