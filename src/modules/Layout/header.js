import PubSub from "../PubSub";

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

        header.appendChild(nav);
        return header;
    }

    onHeaderLinkClick(e, newPage) {
        e.preventDefault();
        PubSub.publish('changePage', newPage.page);
    }
}

export default new Header();