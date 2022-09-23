import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// actual user value we want to acces in this context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
       const unsubcribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
        });
       return unsubcribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
