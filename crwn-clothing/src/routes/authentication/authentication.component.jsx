import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
        auth, 
        // signInWithGooglePopup,
        createUserDocumentFromAuth, 
        signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
import SignInForm from '../../components/sign-in-form/sing-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import "./authentication.styles.scss";


const Authentication = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchData() 
            .catch('error occured in singInWithGoogleRedirect, ', console.error);
    }, []);

    // CAN BE USED IF WE WANT TO GO FOR A GOOGLE POPUP GMAIL SIGN IN METHOD
    // const logGoogleUser = async() => {
    //     const {user} = await signInWithGooglePopup();
    //     await createUSerDocumentFromAuth(user);
    // };
    
    return (
        <div className='sign-in-page-container'>
            <SignInForm />
            {
            /* <button onClick={logGoogleUser}>
                Sign in with Google account
            </button> */
            }
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google redirect
            </button> */}
            <SignUpForm/>
        </div>
    )
}

export default Authentication;
