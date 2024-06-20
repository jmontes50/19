import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const desubscribe = onAuthStateChanged(auth, (user) => {
      console.log("authContext User: ", user)
    })
  }, [])

  return <AuthContext.Provider value={{ LoginWithGoogle }}>
    { children}
  </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };