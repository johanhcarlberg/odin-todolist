import { getProjects } from '../Project/ProjectController';
import { getTodoItems, getTodoItemsToday, getTodoItemsUpcoming } from '../TodoItem/TodoItemController';
import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import { publishLink } from '../util';
import './sidebar.css';
import PubSub from '../PubSub';
import SidebarLinkItem from '../../components/SidebarLinkItem';

class Sidebar {
    mainLinks = [
        {'title':'All items','callback':getTodoItems},
        {'title':'Today','callback':getTodoItemsToday},
        {'title':'Upcoming','callback':getTodoItemsUpcoming}
    ]
    render() {
        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'sidebar';

        const mainLinksList = document.createElement('ul');
        mainLinksList.className = 'sidebar-link-list';
        for (let link of this.mainLinks) {
            const mainLinkItem = new SidebarLinkItem(link.title, link.callback).render();
            mainLinksList.appendChild(mainLinkItem);
        }

        const projectList = document.createElement('ul');
        projectList.className = 'sidebar-link-list'

        const projectListHeader = document.createElement('li');
        projectListHeader.classList.add('sidebar-link-list-header', 'sidebar-link-item');
        const projectListHeaderLink = document.createElement('a');
        projectListHeaderLink.href = '#';
        projectListHeaderLink.text = 'Projects';
        projectListHeader.appendChild(projectListHeaderLink);
        projectList.appendChild(projectListHeader);

        for (let project of getProjects()) {
            const projectItem = document.createElement('li');
            projectItem.className = 'sidebar-link-item';
            const projectLink = document.createElement('a');
            projectLink.href = '#';

            const projectLinkText = document.createElement('span');
            projectLinkText.textContent = project.name;

            const projectLinkItemNumber = document.createElement('span');
            projectLinkItemNumber.className = 'sidebar-link-item-number';
            projectLinkItemNumber.textContent = ProjectTodoItemMediator.getTodoItemsForProject(project.id).filter(item => !item.isComplete).length;
            PubSub.subscribe('TodoItemsChanged', () => {
                projectLinkItemNumber.textContent = ProjectTodoItemMediator.getTodoItemsForProject(project.id).filter(item => !item.isComplete).length;
            });
            
            projectLink.appendChild(projectLinkText);
            projectLink.appendChild(projectLinkItemNumber);
            projectLink.addEventListener('click', (e) => {
                e.preventDefault();
                publishLink('ProjectDetail', project.id);
            })
            projectItem.appendChild(projectLink);

            projectList.appendChild(projectItem);
        }

        sidebarDiv.appendChild(mainLinksList);
        sidebarDiv.appendChild(projectList);
        return sidebarDiv;
    }
}

export default new Sidebar();