import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  const LoginWithGoogle = () => {

  }

  return <AuthContext.Provider value={{ LoginWithGoogle }}>
    { children}
  </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };