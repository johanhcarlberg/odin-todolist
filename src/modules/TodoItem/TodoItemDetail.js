import { getTodoItemById } from "./TodoItemController";
class TodoItemDetail {
    render(id) {
        const todoItem = getTodoItemById(id);
        if (!todoItem) {
            return;
        }
        const todoItemDiv = document.createElement('div');
    
        const todoItemHeader = document.createElement('h2');
        todoItemHeader.textContent = todoItem.title;
    
        const todoItemContent = document.createElement('div');
        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = todoItem.description;
        todoItemContent.appendChild(descriptionDiv);

        const dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = todoItem.dueDate;
        todoItemContent.appendChild(dueDateDiv);

        const isCompleteDiv = document.createElement('div');
        isCompleteDiv.textContent = todoItem.isComplete;
        todoItemContent.appendChild(isCompleteDiv);
        
    
        todoItemDiv.appendChild(todoItemHeader);
        todoItemDiv.appendChild(todoItemContent);
    
        return todoItemDiv;
    }
}

export default new TodoItemDetail();