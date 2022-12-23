import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    //signInWithRedirect(auth, provider);
  };

  const SignOut = () => {
    signOut(auth);
  };

  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, user, SignOut, createUser, signIn, getAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
