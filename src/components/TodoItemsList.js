import { updateTodoItem } from "../modules/TodoItem/TodoItemController";
import { publishLink } from "../modules/util";
import './TodoItemsList.css';
import Checkbox from "./Checkbox";

class TodoItemsList {
    constructor(todoItems) {
        this.todoItems = todoItems;
    }

    render() {
        if (!this.todoItems) {
            return;
        }

        const todoItemsList = document.createElement('ul');
        todoItemsList.className = 'todo-items-list';

        for (let todoItem of this.todoItems) {
            const todoItemsListItem = document.createElement('li');
            const checkBox = new Checkbox(todoItem.isComplete, () => {
                todoItem.isComplete = !todoItem.isComplete;
                updateTodoItem(todoItem);
            });
            todoItemsListItem.appendChild(checkBox);

            const todoItemName = document.createElement('span');
            todoItemName.textContent = todoItem.title;
            todoItemsListItem.appendChild(todoItemName);
            
            const todoItemDueDate = document.createElement('span');
            todoItemDueDate.textContent = todoItem.dueDate;
            todoItemsListItem.appendChild(todoItemDueDate);

            todoItemsList.appendChild(todoItemsListItem);
        }
        return todoItemsList;
    }
}

export default TodoItemsList;