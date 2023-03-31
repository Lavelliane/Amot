import { Button, Card } from "../components";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Tracker } from '../types';
import { HomePage } from "./HomePage";
import uniqid from 'uniqid';

function Directories() {  
  const {logout, user} = useAuth();
  const [trackers, setTrackers] = useState<any>([]);
  const navigate = useNavigate();

  const trackersRef = collection(db, "users", user.uid, "trackers");

  async function getTrackers(){
    let trackers: any[] = [];
    const querySnapshot = await getDocs(trackersRef);
    querySnapshot.docs.forEach((doc: any) => trackers.push(doc.data()))
    setTrackers(trackers);
  }

  async function handleSignOut() {
    await logout();
    navigate("/");
  }

  useEffect(() => {
    getTrackers();
  }, [])

  return (
    <div>
      <HomePage />
      <Button text={"Logout"} onClick={() => handleSignOut()} />
    </div> 
  );
}


export default Directories;
