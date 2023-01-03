import PubSub from "../PubSub";
import { publishLink } from "../util";
import './style.css';

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

        const addTodoButton = document.createElement('button');
        addTodoButton.classList.add('add-todo-button');
        addTodoButton.textContent = "Add Todo Item";
        addTodoButton.addEventListener('click', publishLink('AddTodoItem'));

        header.appendChild(nav);
        header.appendChild(addTodoButton);
        return header;
    }

    onHeaderLinkClick(e, newPage) {
        e.preventDefault();
        PubSub.publish('changePage', {page: newPage.page});
    }
}

export default new Header();