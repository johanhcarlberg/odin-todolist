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

            const projectLink = document.createElement('a');
            projectLink.href="#";
            projectLink.textContent = project.name;
            projectLink.addEventListener('click', (e) => this.onProjectLinkClick(e, project.name));
    
            projectListItem.appendChild(projectLink);
            projectList.appendChild(projectListItem);
        }
        
        projectListContainerDiv.appendChild(projectListHeader);
        projectListContainerDiv.appendChild(projectList);
    
        return projectListContainerDiv;
    }

    onProjectLinkClick(e, projectName) {
        e.preventDefault();
        console.log(projectName);
    }
}

export default new ProjectList();