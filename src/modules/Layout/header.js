import AddComponent from "../../components/AddComponent";
import PubSub from "../PubSub";
import { publishLink } from "../util";
import logoIconSvg from '../../../assets/icons/clipboard-list-outline.svg';
import './header.css';
import { getTodoItems } from "../TodoItem/TodoItemController";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignInButton from "../../components/SignInButton";
import SignOutButton from "../../components/SignOutButton";

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

        logoContainer.addEventListener('click', (e) => {
            publishLink('TodoItemList', {title:'All items', callback:getTodoItems});
        })
        header.appendChild(logoContainer);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const addComponent = new AddComponent();
        
        buttonsContainer.appendChild(addComponent.render());
        header.appendChild(buttonsContainer);

        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log('onAuthStateChanged');
            userContainer.innerHTML = '';
            if (user) {
                userContainer.textContent = user.displayName;
                const signOutButton = SignOutButton().render();
                userContainer.appendChild(signOutButton);
            } else {
                const signInButton = SignInButton().render();
                userContainer.appendChild(signInButton);
            }
        })

        if (auth.currentUser) {
            userContainer.textContent = auth.currentUser.displayName;
            userContainer.appendChild(signOutButton);
        } else {
            const signInButton = SignInButton().render();
            userContainer.appendChild(signInButton);
        }

        header.appendChild(userContainer);

        return header;
    }

    onHeaderLinkClick(e, newPage) {
        e.preventDefault();
        PubSub.publish('changePage', {page: newPage.page});
    }
}

export default new Header();