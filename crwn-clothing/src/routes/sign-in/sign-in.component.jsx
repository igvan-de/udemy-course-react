import { signInWithGooglePopup, createUSerDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUSerDocumentFromAuth(user);
    };
    
    return (
        <div>
            <button onClick={logGoogleUser}>
                Sign in with Google account
            </button>
        </div>
    )
}

export default SignIn;
