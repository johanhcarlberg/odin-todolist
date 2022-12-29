import { getTodoItemById } from "./TodoItemController";

export function render(id) {
    const todoItem = getTodoItemById(id);
    if (!todoItem) {
        throw `Couldn't find todoItem with id=${id}`;
    }

    const todoItemDiv = document.createElement('div');

    const todoItemHeader = document.createElement('h2');
    todoItemHeader.textContent = todoItem.title;

    const todoItemContent = document.createElement('div');
    

    todoItemDiv.appendChild(todoItemHeader);
    todoItemDiv.appendChild(todoItemContent);
    console.log(todoItem);

    return todoItemDiv;
}