import { initializeApp } from "firebase/app";
import { 
            getAuth,
            signInWithRedirect,
            signInWithPopup,
            GoogleAuthProvider,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            signOut
        } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXi6GYPZt09K5cGBljRDE-DNl99PcWWuE",
  authDomain: "crwn-db-e38fd.firebaseapp.com",
  projectId: "crwn-db-e38fd",
  storageBucket: "crwn-db-e38fd.appspot.com",
  messagingSenderId: "890640760960",
  appId: "1:890640760960:web:8969e41b892e65f7456665"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName: 'User'}) => {
    if (!userAuth) {
        return;
    }

    const userDocRef = doc(database, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch(error) {
            console.log('Error creating new user ', error);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailAndPassword = async (email, password) => {
    if (email.length == 0 && password.length == 0) {
        alert('Please fill in an email and password');
        return null;
    } else if (email.length == 0) {
        alert('Please fill in an email');
        return null;
    } else if (password.length == 0) {
        alert('Please fill in a password');
        return null;
    }

    return await signInWithEmailAndPassword(auth, email, password)
};

export const SignOutUser = async() => await signOut(auth);
