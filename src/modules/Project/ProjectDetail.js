import Checkbox from "../../components/Checkbox";
import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import { TodoItem } from "../TodoItem/TodoItem";
import { publishLink } from "../util";
import { deleteProject, getProjectById, getProjects } from "./ProjectController";
import './ProjectDetail.css';

class ProjectDetail {
    render(id) {
        const project = getProjectById(id);
        const todoItems = ProjectTodoItemMediator.getTodoItemsForProject(project.id);

        const projectDetailDiv = document.createElement('div');
        projectDetailDiv.classList.add('project-detail');
        
        const projectDetailHeader = document.createElement('h2');
        projectDetailHeader.textContent = project.name || 'Project Details';
        projectDetailDiv.appendChild(projectDetailHeader);

        const todoItemsContainer = document.createElement('div');
        todoItemsContainer.classList.add('todo-items-container');

        for (let todoItem of todoItems) {

            const todoItemDiv = document.createElement('div');
            todoItemDiv.classList.add('todo-item');
            todoItemDiv.classList.add(`priority-${TodoItem.priorities[todoItem.priority].toLowerCase()}`);

            
            const todoItemHeader = document.createElement('h3');
            todoItemHeader.textContent = todoItem.title;
            todoItemDiv.appendChild(todoItemHeader);

            const todoItemDueDateDiv = document.createElement('div');
            todoItemDueDateDiv.textContent = `Due date: ${todoItem.dueDate}`;
            todoItemDiv.appendChild(todoItemDueDateDiv);

            // TODO: Replace with component
            const checkBoxContainer = document.createElement('div');
            checkBoxContainer.classList.add('checkBoxContainer');
            const checkBoxSpan = document.createElement('span');
            checkBoxSpan.textContent = 'Finished?';
            const checkbox = new Checkbox(todoItem.isComplete, () => {
                todoItem.isComplete = !todoItem.isComplete;
            });
            checkBoxContainer.appendChild(checkBoxSpan);
            checkBoxContainer.appendChild(checkbox);
            todoItemDiv.appendChild(checkBoxContainer);

            todoItemDiv.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(e.target);
                console.log(e.currentTarget);
                console.log(e.target.tagName);
                if (e.target === checkbox || e.target.tagName === 'svg') {
                    return;
                }
                publishLink('TodoItemDetail', todoItem.id);
            })

            todoItemsContainer.appendChild(todoItemDiv);
        }
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Project';
        deleteButton.classList.add('delete-project-button');

        if (project.name === 'Default' || getProjects().length <= 1) {
            deleteButton.disabled = true;
        }

        deleteButton.addEventListener('click', (e) => {
            deleteProject(project.id);
            publishLink('ProjectList');
        });
        todoItemsContainer.appendChild(deleteButton);
        projectDetailDiv.appendChild(todoItemsContainer);
        
        return projectDetailDiv;
    }
}

export default new ProjectDetail();