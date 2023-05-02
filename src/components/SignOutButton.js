import { getAuth, signOut } from 'firebase/auth';
import './SignOutButton.css';
import { auth } from '../firebase';

const SignOutButton = (() => {

    const onSignOutButtonClicked = async (e) => {
        try {
            const signOutResult = await signOut(auth);
        } catch(error) {
            console.error('Error when signing out with Google Auth', error);
        }
    }

    const render = () => {
        const signOutButton = document.createElement('button');
        signOutButton.classList.add('sign-out-button');
        signOutButton.textContent = 'Sign out';

        signOutButton.addEventListener('click', onSignOutButtonClicked);
        return signOutButton;
    }

    return {
        render
    };
})

export default SignOutButton;