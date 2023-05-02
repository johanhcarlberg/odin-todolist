import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import './SignInButton.css';

const SignInButton = (() => {
    const provider = new GoogleAuthProvider();

    const onSignInButtonClicked = async (e) => {
        const auth = getAuth();
        try {
            const signInResult = await signInWithPopup(auth, provider);
        } catch(error) {
            console.error('Error when signing in with Google Auth', error);
        }
    }

    const render = () => {
        const signInButton = document.createElement('button');
        signInButton.classList.add('sign-in-button');
        signInButton.textContent = 'Sign in';

        signInButton.addEventListener('click', onSignInButtonClicked);
        return signInButton;
    }

    return {
        render
    };
})

export default SignInButton;