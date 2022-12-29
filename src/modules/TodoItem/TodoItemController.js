import { TodoItem } from "./TodoItem";
import { getNextId } from "../util";

const todoItems = [];

function addTodoItem(title, description, dueDate) {
    const newId = getNextId(todoItems);
    const newTodoItem = new TodoItem(newId, title, description, dueDate);
    todoItems.push(newTodoItem);
    return newTodoItem;
}

function getTodoItems() {
    return todoItems;
}

function getTodoItemById(id) {
    return todoItems.find(item => item.id === id);
}

export { addTodoItem, getTodoItems, getTodoItemById };