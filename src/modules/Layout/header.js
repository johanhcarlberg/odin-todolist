import AddComponent from "../../components/AddComponent";
import PubSub from "../PubSub";
import { publishLink } from "../util";
import logoIconSvg from '../../../assets/icons/clipboard-list-outline.svg';
import './header.css';

class Header {
    render() {
        const header = document.createElement('header');
        const logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';

        const logoIcon = document.createElement('i');
        logoIcon.className = 'logo-icon';
        logoIcon.innerHTML = logoIconSvg;
        logoContainer.appendChild(logoIcon);

        const logoText = document.createElement('span');
        logoText.textContent = 'Odin Todo-List';
        logoText.className = 'logo-text';
        logoContainer.appendChild(logoText);

        header.appendChild(logoContainer);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const addComponent = new AddComponent();
        
        buttonsContainer.appendChild(addComponent.render());
        header.appendChild(buttonsContainer);
        return header;
    }

    onHeaderLinkClick(e, newPage) {
        e.preventDefault();
        PubSub.publish('changePage', {page: newPage.page});
    }
}

export default new Header();