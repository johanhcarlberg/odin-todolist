import { deleteTodoItem, getTodoItemById, updateTodoItem } from "./TodoItemController";
import { getProjectById, getProjects } from "../Project/ProjectController";
import { publishLink } from "../util";
import PubSub from "../PubSub";
class TodoItemDetail {
    render(id) {
        this.todoItem = getTodoItemById(id);
        if (!this.todoItem) {
            return;
        }
        const project = getProjectById(this.todoItem.projectId);
        const todoItemDiv = document.createElement('div');

        const todoItemHeader = document.createElement('h2');
        todoItemHeader.textContent = this.todoItem.title;
    
        const todoItemContent = document.createElement('div');


        const projectDiv = document.createElement('div');
        projectDiv.textContent = 'Project: ';
        const projectLink = document.createElement('a');

        projectLink.href = '#';
        projectLink.textContent = project.name;
        projectLink.addEventListener('click', (e) => {
            e.preventDefault();
            publishLink('ProjectDetail', project.id)
        });

        projectDiv.appendChild(projectLink);
        const projectSelect = document.createElement('select');
        projectSelect.name = 'project';
        for (let project of getProjects())
        {
            const projectOption = document.createElement('option');
            projectOption.name = 'project';
            projectOption.value = project.id;
            projectOption.text = project.name;
            projectSelect.appendChild(projectOption);
        }
        projectSelect.addEventListener('change', (e) => {
            this.todoItem.projectId = Number(e.target.value);
            this.onItemChange();
        })
        projectDiv.appendChild(projectSelect);
        todoItemContent.appendChild(projectDiv);

        const descriptionDiv = document.createElement('div');
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
        descriptionDiv.appendChild(descriptionLabel);
        descriptionDiv.appendChild(descriptionInput);

        todoItemContent.appendChild(descriptionDiv);

        const dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = this.todoItem.dueDate;
        todoItemContent.appendChild(dueDateDiv);

        const isCompleteDiv = document.createElement('div');
        isCompleteDiv.textContent = this.todoItem.isComplete;
        todoItemContent.appendChild(isCompleteDiv);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
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