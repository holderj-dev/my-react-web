import { useContext, createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    updateCurrentUser
} from "firebase/auth";
import { auth } from '../routes/firebase';

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    const logOut = () => {
       signOut(auth)        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
            console.log('user', CurrentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}