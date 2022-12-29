import { TodoItem } from "./TodoItem";

const todoItems = [];

function addTodoItem(title, description, dueDate) {
    const newId = getNextId();
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

function getNextId() {
    if (todoItems.length === 0) {
        return 1;
    }
    return todoItems.reduce((previous, item) => {
        const next = previous.id < item.value ? item : previous
        return next;
    }).id + 1;
}

export { addTodoItem, getTodoItems, getTodoItemById };