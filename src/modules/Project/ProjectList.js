import { getProjects } from "./ProjectController";
import PubSub from "../PubSub";
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
            projectLink.addEventListener('click', (e) => this.onProjectLinkClick(e, project));
    
            projectListItem.appendChild(projectLink);
            projectList.appendChild(projectListItem);
        }
        
        projectListContainerDiv.appendChild(projectListHeader);
        projectListContainerDiv.appendChild(projectList);
    
        return projectListContainerDiv;
    }

    onProjectLinkClick(e, project) {
        e.preventDefault();
        console.log({project});
        PubSub.publish('changePage', {
            page: 'ProjectDetail',
            data: 1,
        })
    }
}

export default new ProjectList();