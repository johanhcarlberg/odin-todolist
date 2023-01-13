import './sidebar.css';

class Sidebar {
    mainLinks = [
        'All items',
        'Today',
        'Upcoming'
    ]
    render() {
        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'sidebar';

        const mainLinksList = document.createElement('ul');
        mainLinksList.className = 'sidebar-main-links';
        for (let link of this.mainLinks) {
            const mainLinkItem = document.createElement('li');
            mainLinkItem.className = 'main-link-item';
            const mainLinkA = document.createElement('a');
            mainLinkA.href = '#';
            mainLinkA.text = link;
            mainLinkItem.appendChild(mainLinkA);
            
            mainLinksList.appendChild(mainLinkItem);
        }

        sidebarDiv.appendChild(mainLinksList);
        return sidebarDiv;
    }
}

export default new Sidebar();