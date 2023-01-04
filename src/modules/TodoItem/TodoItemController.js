import { TodoItem } from "./TodoItem";
import { getNextId } from "../util";
import PubSub from "../PubSub";

const todoItems = [];

function addTodoItem(title, description, dueDate, projectId) {
    const newId = getNextId(todoItems);
    const newTodoItem = new TodoItem(newId, title, description, dueDate, projectId || 1);
    todoItems.push(newTodoItem);
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
}

export { addTodoItem, getTodoItems, getTodoItemById, deleteTodoItem };