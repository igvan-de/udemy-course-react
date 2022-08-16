import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUSerDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(database, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log('Error creating new user ', error);
        }
    }
    return userDocRef;
};
