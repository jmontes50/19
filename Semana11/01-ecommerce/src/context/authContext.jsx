import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

const googleProvider = GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  return <AuthContext.Provider value={{ LoginWithGoogle }}>
    { children}
  </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };