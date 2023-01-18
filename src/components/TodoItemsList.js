import { updateTodoItem } from "../modules/TodoItem/TodoItemController";
import { publishLink } from "../modules/util";
import './TodoItemsList.css';
import Checkbox from "./Checkbox";
import formatISO from "date-fns/formatISO";
import { isBefore } from "date-fns";
import { TodoItem } from "../modules/TodoItem/TodoItem";

class TodoItemsList {
    constructor(todoItems) {
        this.todoItems = todoItems;
    }

    render() {
        if (!this.todoItems) {
            return;
        }

        this.todoItemsList = document.createElement('ul');
        this.todoItemsList.className = 'todo-items-list';
        this.renderListItems();
        
        return this.todoItemsList;
    }

    renderListItems() {
        this.todoItems.sort((item1, item2) => {
            if (item1.isComplete === item2.isComplete) {
                if (isBefore(item1.dueDate, item2.dueDate)) {
                    return 1;
                }
            } else if (item1.isComplete && !item2.isComplete) {
                return 1;
            }
        });

        for (let todoItem of this.todoItems) {
            const todoItemsListItem = document.createElement('li');
            if (todoItem.isComplete) {
                todoItemsListItem.classList.add('checked');
            }
            const checkBox = new Checkbox(todoItem.isComplete, () => {
                todoItem.isComplete = !todoItem.isComplete;
                updateTodoItem(todoItem);
                this.todoItemsList.innerHTML = '';
                this.renderListItems();
            });
            checkBox.classList.add(`${TodoItem.priorities[todoItem.priority].toLowerCase()}`);

            todoItemsListItem.appendChild(checkBox);
            const todoItemContent = document.createElement('div');
            todoItemContent.className = 'todo-items-list-item-content';
            
            const todoItemName = document.createElement('span');
            todoItemName.textContent = todoItem.title;
            todoItemContent.appendChild(todoItemName);
            
            const todoItemDueDate = document.createElement('span');
            todoItemDueDate.textContent = formatISO(todoItem.dueDate, {representation: 'date'});
            todoItemContent.appendChild(todoItemDueDate);

            todoItemsListItem.addEventListener('click', (e) => {
                console.log(e.target);
                if (e.target === todoItemsListItem || todoItemContent.contains(e.target)) {
                    publishLink('TodoItemDetail', todoItem.id);
                }
                
            });

            todoItemsListItem.appendChild(todoItemContent);
            this.todoItemsList.appendChild(todoItemsListItem);
        }
    }
}

export default TodoItemsList;