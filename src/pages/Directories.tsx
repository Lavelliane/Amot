import { Button, Card } from "../components";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Tracker } from '../types';
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

  async function goToHomepage() {
    navigate("/homepage");
  }

  useEffect(() => {
    getTrackers();
  }, [])

  console.log(trackers)
  return (
    <div>
        <Button text={"Logout"} onClick={() => handleSignOut()} />
        <button onClick={() => goToHomepage()}>New</button>
        <div className="container">
        {trackers.length !== 0 && trackers.map((tracker: Tracker) => (
            <Card date={tracker.date} eventName={tracker.eventName} place={tracker.place} total={tracker.total} key={uniqid()}/>
        ))}
        </div> 
    </div>
  );
}


export default Directories;
