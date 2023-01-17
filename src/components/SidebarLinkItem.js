import PubSub from "../modules/PubSub";
import { publishLink } from "../modules/util";
import './SidebarLinkItem.css';

export default class SidebarLinkItem {
    constructor(title, callback, icon) {
        this.title = title;
        this.callback = callback;
        this.icon = icon;
    }

    render() {
        const linkItem = document.createElement('li');
        linkItem.className = 'sidebar-link-item';

        const linkA = document.createElement('a');
        linkA.href = '#';

        const linkText = document.createElement('span');
        linkText.textContent = this.title;

        if(this.icon) {
            const linkIcon = document.createElement('i');
            linkIcon.innerHTML = this.icon;
            linkA.appendChild(linkIcon);
        }

        const linkItemNumber = document.createElement('span');
        linkItemNumber.className = 'sidebar-link-item-number';
        linkItemNumber.textContent = this.callback().filter(item => !item.isComplete).length;

        PubSub.subscribe('TodoItemsChanged', () => {
            linkItemNumber.textContent = this.callback().filter(item => !item.isComplete).length;
        });

        linkA.append(linkText, linkItemNumber);
        linkItem.appendChild(linkA);
        linkItem.addEventListener('click', (e) => {
            e.preventDefault();
            publishLink('TodoItemList', {title:this.title, callback:this.callback});
        })

        return linkItem;
    }
}