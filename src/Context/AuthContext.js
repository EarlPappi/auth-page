import { createContext, useContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState('false')

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    return (
        <UserContext.Provider value={{
            signup,
            login,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(UserContext);
}