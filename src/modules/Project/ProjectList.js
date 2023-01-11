import { getProjects } from "./ProjectController";
import { publishLink } from "../util";
import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import './ProjectList.css';
class ProjectList {
    render() {
        const projects = getProjects();
        const projectListContainerDiv = document.createElement('div');
        projectListContainerDiv.classList.add('project-list-container');
    
        const projectListHeader = document.createElement('h2');
        projectListHeader.textContent = "Projects";
        projectListContainerDiv.appendChild(projectListHeader);
    
        for (let project of projects) {
            const projectLink = document.createElement('a');
            projectLink.href="#";
            projectLink.addEventListener('click', (e) => this.onProjectLinkClick(e, project));

            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-card');
            const projectNameHeader = document.createElement('h3');
            projectNameHeader.textContent = project.name;
            const projectTodoItemsCounter = document.createElement('span');
            const todoItemsCount = ProjectTodoItemMediator.getTodoItemsForProject(project.id).length;
            projectTodoItemsCounter.textContent = `Todo items: ${todoItemsCount}`;

            projectLink.appendChild(projectDiv);

            projectDiv.appendChild(projectNameHeader);
            projectDiv.appendChild(projectTodoItemsCounter);

            projectListContainerDiv.appendChild(projectLink);
        }
    
        return projectListContainerDiv;
    }

    onProjectLinkClick(e, project) {
        e.preventDefault();
        console.log({project});
        publishLink('ProjectDetail', project.id);
    }
}

export default new ProjectList();