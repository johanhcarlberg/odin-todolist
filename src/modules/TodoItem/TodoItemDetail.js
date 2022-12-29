import { getTodoItemById } from "./TodoItemController";

export function render(todoItem) {
    const todoItemDiv = document.createElement('div');

    const todoItemHeader = document.createElement('h2');
    todoItemHeader.textContent = todoItem.title;

    const todoItemContent = document.createElement('div');
    

    todoItemDiv.appendChild(todoItemHeader);
    todoItemDiv.appendChild(todoItemContent);
    console.log(todoItem);

    return todoItemDiv;
}