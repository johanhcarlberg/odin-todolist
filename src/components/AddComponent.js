import './AddComponent.css';
import addIconSvg from '../../assets/icons/plus.svg';
import chevronSvg from '../../assets/icons/chevron-down.svg';
export default class AddComponent {
    constructor() {}
    render() {
        const addContainer = document.createElement('div');
        addContainer.className = 'add-container';

        const addIcon = document.createElement('i');
        addIcon.innerHTML = addIconSvg;
        addIcon.className = 'add-icon';

        const chevron = document.createElement('i');
        chevron.innerHTML = chevronSvg;
        chevron.className = 'chevron-icon';

        addContainer.appendChild(addIcon);
        addContainer.appendChild(chevron);

        return addContainer;
    }
}