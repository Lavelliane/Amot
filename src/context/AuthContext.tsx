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
import { auth, db, provider } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({});

  function googleSignIn() {
    signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDoc(doc(db, "users", currentUser.uid), {
          displayName: currentUser.displayName,
          email: currentUser.email,
        })
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      }
      return () => unsubscribe();
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
