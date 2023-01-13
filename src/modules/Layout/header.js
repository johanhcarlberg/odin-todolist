import PubSub from "../PubSub";
import { publishLink } from "../util";
import './header.css';

class Header {
    pageLinks = [
        {name: 'Projects',page: 'ProjectList'}
    ]
    render() {
        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const links = document.createElement('ul');
        links.classList.add('header-links');
        for (let page of this.pageLinks) {
            const listItem = document.createElement('li');
            listItem.classList.add('header-link-item');

            const listItemLink = document.createElement('a');
            listItemLink.href = '#';
            listItemLink.textContent = page.name;
            listItemLink.addEventListener('click', (e) => this.onHeaderLinkClick(e, page));
            listItem.appendChild(listItemLink);

            links.appendChild(listItem);
        }
        nav.appendChild(links);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        

        const addProjectButton = document.createElement('button');
        addProjectButton.classList.add('add-project-button');
        addProjectButton.textContent = 'Add Project';
        addProjectButton.addEventListener('click', (e) => { publishLink('AddProject')});

        const addTodoButton = document.createElement('button');
        addTodoButton.classList.add('add-todo-button');
        addTodoButton.textContent = "Add Todo Item";
        addTodoButton.addEventListener('click', (e) => { publishLink('AddTodoItem')});

        buttonsContainer.appendChild(addProjectButton);
        buttonsContainer.appendChild(addTodoButton);
        
        header.appendChild(nav);
        header.appendChild(buttonsContainer);
        return header;
    }

    onHeaderLinkClick(e, newPage) {
        e.preventDefault();
        PubSub.publish('changePage', {page: newPage.page});
    }
}

export default new Header();