import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const LoginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const desubscribe = onAuthStateChanged(auth, (dataUser) => {
      // console.log("authContext User: ", dataUser);
      setUser(dataUser);
    })
  }, [])

  return <AuthContext.Provider value={{ LoginWithGoogle, user }}>
    { children}
  </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };