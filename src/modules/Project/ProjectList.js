import { getProjects } from "./ProjectController";
class ProjectList {
    render() {
        const projects = getProjects();
        const projectListContainerDiv = document.createElement('div');
        projectListContainerDiv.classList.add('project-list-container');
    
        const projectListHeader = document.createElement('h2');
        projectListHeader.textContent = "Projects";
    
        const projectList = document.createElement('ul');
        projectList.classList.add('project-list');
    
        for (let project of projects) {
            const projectListItem = document.createElement('li');
            projectListItem.classList.add('project-list-item');
    
            projectListItem.textContent = project.name;
            projectList.appendChild(projectListItem);
        }
        
        projectListContainerDiv.appendChild(projectListHeader);
        projectListContainerDiv.appendChild(projectList);
    
        return projectListContainerDiv;
    }
}

export default new ProjectList();