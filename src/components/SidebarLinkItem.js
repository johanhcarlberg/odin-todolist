import PubSub from "../modules/PubSub";
import { publishLink } from "../modules/util";

export default class SidebarLinkItem {
    constructor(title, callback) {
        this.title = title;
        this.callback = callback;
    }

    render() {
        const linkItem = document.createElement('li');
        linkItem.className = 'sidebar-link-item';

        const linkA = document.createElement('a');
        linkA.href = '#';

        const linkText = document.createElement('span');
        linkText.textContent = this.title;

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