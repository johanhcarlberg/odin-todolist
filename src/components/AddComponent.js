import './AddComponent.css';
import addIconSvg from '../../assets/icons/plus.svg';
import chevronSvg from '../../assets/icons/chevron-down.svg';
import { publishLink } from '../modules/util';
export default class AddComponent {
    links = [
        {name: 'Add Todo Item', link: 'AddTodoItem'},
        {name: 'Add Project', link: 'AddProject'}
    ]
    render() {
        const addContainer = document.createElement('div');
        addContainer.className = 'add-container';

        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon-container';
        const addIcon = document.createElement('i');
        addIcon.innerHTML = addIconSvg;
        addIcon.className = 'add-icon';

        const chevron = document.createElement('i');
        chevron.innerHTML = chevronSvg;
        chevron.className = 'chevron-icon';

        iconContainer.appendChild(addIcon);
        iconContainer.appendChild(chevron);
        addContainer.appendChild(iconContainer);

        const dropdown = document.createElement('div');
        dropdown.className = 'add-dropdown';
        dropdown.style.display = 'none';

        const dropdownList = document.createElement('ul');
        dropdownList.className = 'add-dropdown-list';
        for (let link of this.links) {
            const dropdownListItem = document.createElement('li');
            const listItemLink = document.createElement('a');
            listItemLink.href = '';
            listItemLink.text = link.name;
            listItemLink.addEventListener('click', (e) => {
                e.preventDefault();
                publishLink(link.link);
                dropdown.style.display = 'none';
            })

            

            dropdownListItem.appendChild(listItemLink);
            dropdownList.appendChild(dropdownListItem);
        }

        dropdown.appendChild(dropdownList);

        const outsideClickListener = e => {
            if(!addContainer.contains(e.target) && dropdown.style.display !== 'none') {
                dropdown.style.display = 'none';
            }
        }

        document.addEventListener('click', outsideClickListener);
        
        iconContainer.addEventListener('click', (e) => {
            if (dropdown.style.display === 'none') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        });

        addContainer.appendChild(dropdown);

        return addContainer;
    }
}