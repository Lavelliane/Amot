import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "../firebase-config";

const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState({});

  function googleSignIn () {
    signInWithPopup(auth, provider);
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser)
      }
      return () => unsubscribe()
    });
  }, [])

  const logout = async () => {
    await signOut(auth)
  }

    

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
