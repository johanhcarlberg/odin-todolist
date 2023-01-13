import Checkbox from "../../components/Checkbox";
import TodoItemsList from "../../components/TodoItemsList";
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

        const todoItemsList = new TodoItemsList(todoItems);
        projectDetailDiv.appendChild(todoItemsList.render());
        
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
        projectDetailDiv.appendChild(deleteButton);
        
        return projectDetailDiv;
    }
}

export default new ProjectDetail();