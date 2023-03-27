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
<<<<<<< HEAD
import { auth, db, provider } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
=======
import { auth, provider } from "../firebase-config";
>>>>>>> 1a4509e5c2ddcea83c2e0e9054e1a26fa151ad7e

const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
<<<<<<< HEAD
  const [user, setUser] = useState({});

  function googleSignIn() {
    signInWithPopup(auth, provider);
  }
=======

  const [user, setUser] = useState({});

  function googleSignIn () {
    signInWithPopup(auth, provider);
  };
  
>>>>>>> 1a4509e5c2ddcea83c2e0e9054e1a26fa151ad7e

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
<<<<<<< HEAD
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
=======
        console.log(currentUser)
      }
      return () => unsubscribe()
    });
  }, [])

  const logout = async () => {
    await signOut(auth)
  }

    
>>>>>>> 1a4509e5c2ddcea83c2e0e9054e1a26fa151ad7e

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
