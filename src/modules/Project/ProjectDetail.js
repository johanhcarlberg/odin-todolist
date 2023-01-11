import Checkbox from "../../components/Checkbox";
import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import { TodoItem } from "../TodoItem/TodoItem";
import { publishLink } from "../util";
import { getProjectById } from "./ProjectController";
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

            const todoItemLink = document.createElement('a');
            todoItemLink.href = '#';
            todoItemLink.addEventListener('click', (e) => {
                e.preventDefault();
                publishLink('TodoItemDetail', todoItem.id);
            })
            const todoItemHeader = document.createElement('h3');
            todoItemLink.textContent = todoItem.title;
            todoItemHeader.appendChild(todoItemLink);
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

            todoItemsContainer.appendChild(todoItemDiv);
        }

        projectDetailDiv.appendChild(todoItemsContainer);
        return projectDetailDiv;
    }
}

export default new ProjectDetail();