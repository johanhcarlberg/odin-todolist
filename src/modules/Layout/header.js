import AddComponent from "../../components/AddComponent";
import PubSub from "../PubSub";
import { publishLink } from "../util";
import './header.css';

class Header {
    pageLinks = [
        {name: 'Projects',page: 'ProjectList'}
    ]
    render() {
        const header = document.createElement('header');
        const logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';

        const logoText = document.createElement('span');
        logoText.textContent = 'Odin Todo-List';
        logoContainer.appendChild(logoText);

        header.appendChild(logoContainer);
        
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

        const addComponent = new AddComponent();
        
        buttonsContainer.appendChild(addComponent.render());
        
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