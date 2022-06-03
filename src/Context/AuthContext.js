import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../firebase";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState('false')

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const resetPasswword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            return currentUser
        });

        return (()=>{
            unsubscribe();
        });

    }, []);

    const updateRegister = () =>{
        return updateProfile(auth.currentUser);
    }


    const logout = () =>{
        return signOut(auth);
    }


    return (
        <UserContext.Provider value={{
            signup,
            login,
            isLoggedIn,
            setIsLoggedIn,
            logout,
            user,
            resetPasswword,
            updateRegister
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(UserContext);
}