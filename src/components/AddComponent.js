import './AddComponent.css';
import addIconSvg from '../../assets/icons/plus.svg';
export default class AddComponent {
    constructor() {}
    render() {
        const addContainer = document.createElement('div');
        addContainer.className = 'add-container';

        const addIcon = document.createElement('i');
        addIcon.innerHTML = addIconSvg;
        addIcon.className = 'add-icon';

        

        return addContainer;
    }
}