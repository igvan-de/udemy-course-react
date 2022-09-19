import { createContext, useState } from "react";

// actual user value we want to acces in this context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
