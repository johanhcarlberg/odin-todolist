import { getProjects } from '../Project/ProjectController';
import { getTodoItems, getTodoItemsToday, getTodoItemsUpcoming } from '../TodoItem/TodoItemController';
import TodoItemList from '../TodoItem/TodoItemList';
import { publishLink } from '../util';
import './sidebar.css';

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
            const mainLinkItem = document.createElement('li');
            mainLinkItem.className = 'sidebar-link-item';
            const mainLinkA = document.createElement('a');
            mainLinkA.href = '#';
            const mainLinkText = document.createElement('span');
            mainLinkText.textContent = link['title'];
            mainLinkA.appendChild(mainLinkText);
            mainLinkItem.appendChild(mainLinkA);
            mainLinkItem.addEventListener('click', (e) => {
                e.preventDefault();
                publishLink('TodoItemList', {title:link['title'], callback:link['callback']});
            })
            
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
            projectLink.text = project.name;
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