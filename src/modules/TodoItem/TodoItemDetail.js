import { deleteTodoItem, getTodoItemById, updateTodoItem } from "./TodoItemController";
import { getProjectById, getProjects } from "../Project/ProjectController";
import { publishLink } from "../util";
import { TodoItem } from "./TodoItem";
import './TodoItemDetail.css';
import PubSub from "../PubSub";
import Checkbox from "../../components/Checkbox";
class TodoItemDetail {
    render(id) {
        this.todoItem = getTodoItemById(id);
        if (!this.todoItem) {
            return;
        }
        const project = getProjectById(this.todoItem.projectId);
        const todoItemDiv = document.createElement('div');
        todoItemDiv.classList.add('todo-item-container');

        const todoItemHeader = document.createElement('h2');
        todoItemHeader.textContent = this.todoItem.title;
    
        const todoItemContent = document.createElement('div');
        todoItemContent.classList.add('todoItemContent');

        const projectSpan = document.createElement('span');
        projectSpan.textContent = 'Project: ';
        todoItemContent.appendChild(projectSpan);

        const projectLink = document.createElement('a');
        projectLink.href = '#';
        projectLink.textContent = project.name;
        projectLink.addEventListener('click', (e) => {
            e.preventDefault();
            publishLink('ProjectDetail', project.id)
        });
        projectSpan.appendChild(projectLink);

        const projectSelect = document.createElement('select');
        projectSelect.name = 'project';
        for (let project of getProjects())
        {
            const projectOption = document.createElement('option');
            projectOption.name = 'project';
            projectOption.value = project.id;
            projectOption.text = project.name;
            projectSelect.appendChild(projectOption);
            if (project.id === this.todoItem.projectId) {
                projectOption.selected = true;
            }
        }
        projectSelect.addEventListener('change', (e) => {
            this.todoItem.projectId = Number(e.target.value);
            this.onItemChange();
        })
        todoItemContent.appendChild(projectSelect);

        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority';
        todoItemContent.appendChild(priorityLabel);
        const prioritySelect = document.createElement('select');
        prioritySelect.required = true;
        prioritySelect.name = 'priority';
        prioritySelect.id = 'priority';
        for (const priority of Object.keys(TodoItem.priorities)) {
            const priorityNum = Number(priority);
            const priorityOption = document.createElement('option');
            priorityOption.name = 'priority';
            priorityOption.value = priorityNum;
            priorityOption.text = TodoItem.priorities[priorityNum];
            if (priorityNum === this.todoItem.priority) {
                priorityOption.selected = true;
            }
            prioritySelect.appendChild(priorityOption);
        }
        prioritySelect.addEventListener('change', (e) => {
            this.todoItem.priority = Number(e.target.value);
            this.onItemChange();
        })
        todoItemContent.appendChild(prioritySelect);

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = 'Description';
        const descriptionInput = document.createElement('input');
        descriptionInput.value = this.todoItem.description;
        descriptionInput.name = 'description';
        descriptionInput.addEventListener('change', (e) => {
            this.todoItem.description = e.target.value;
            this.onItemChange();
        });
        todoItemContent.appendChild(descriptionLabel);
        todoItemContent.appendChild(descriptionInput);

        const dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'dueDate');
        dueDateLabel.textContent = 'Due Date';
        todoItemContent.appendChild(dueDateLabel);
        const dueDateSelector = document.createElement('input');
        dueDateSelector.type = 'date';
        dueDateSelector.name = 'dueDate';
        dueDateSelector.value = this.todoItem.dueDate;
        dueDateSelector.addEventListener('change', (e) => {
            this.todoItem.dueDate = e.target.value;
            this.onItemChange();
        });
        todoItemContent.appendChild(dueDateSelector);

        const isCompleteSpan = document.createElement('span');
        isCompleteSpan.textContent = 'Is completed';
        const isCompleteCheckbox = new Checkbox(this.todoItem.isComplete, () => {
            this.todoItem.isComplete = !this.todoItem.isComplete;
            this.onItemChange();
        })
        todoItemContent.appendChild(isCompleteSpan);
        todoItemContent.appendChild(isCompleteCheckbox);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-todoitem-button');
        deleteButton.addEventListener('click', (e) => {
            deleteTodoItem(this.todoItem.id);
            PubSub.publish('changePage', {page: 'ProjectDetail', data: project.id});
        });
        todoItemContent.appendChild(deleteButton);
        
    
        todoItemDiv.appendChild(todoItemHeader);
        todoItemDiv.appendChild(todoItemContent);
    
        return todoItemDiv;
    }

    onItemChange() {
        updateTodoItem(this.todoItem);
        publishLink('TodoItemDetail', this.todoItem.id);
    }
}

export default new TodoItemDetail();