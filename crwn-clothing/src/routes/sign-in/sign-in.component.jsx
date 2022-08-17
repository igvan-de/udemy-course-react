import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
        auth, 
        // signInWithGooglePopup,
        createUSerDocumentFromAuth, 
        signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
import SingUpForm from '../../components/sign-up/sign-up.component';

const SignIn = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUSerDocumentFromAuth(response.user);
            }
        }
        fetchData() 
            .catch('error occured in singInWithGoogleRedirect, ', console.error);
    }, []);

    // CAN BE USED IF WE WANT TO GO FOR A GOOGLE POPUP GMAIL SIGN IN METHOD
    // const logGoogleUser = async() => {
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = await createUSerDocumentFromAuth(user);
    // };
    
    return (
        <div>
            {
            /* <button onClick={logGoogleUser}>
                Sign in with Google account
            </button> */
            }
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google redirect
            </button>
            <SingUpForm/>
        </div>
    )
}

export default SignIn;
