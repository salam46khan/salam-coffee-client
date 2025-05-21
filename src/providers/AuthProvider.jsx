import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user from state:', currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    },[])



    const userInfo = {
        user,
        loader,
        createUser,
        logInUser,
        logOut,
        googleSignIn,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;