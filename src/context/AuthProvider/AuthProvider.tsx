import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext({});

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const register = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { register };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
