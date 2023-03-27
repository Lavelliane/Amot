<<<<<<< HEAD
import { Button } from "../components";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { HomePage } from "./HomePage";

function Directories() {
  const { logout } = useAuth();
=======
import { Button, Card } from "../components";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import { Tracker } from '../types'
import uniqid from 'uniqid';

function Directories() {
  const {logout, user} = useAuth();
  const [trackers, setTrackers] = useState<any>([]);
>>>>>>> 6e4860e0609bc8a56b98aabb36f6344a69199964
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

  console.log(trackers)
  return (
    <div>
<<<<<<< HEAD
      <HomePage />
      <Button text={"Logout"} onClick={() => handleSignOut()} />
=======
        <Button text={"Logout"} onClick={() => handleSignOut()} />
        <button>New</button>
        <div className="container">
        {trackers.length !== 0 && trackers.map((tracker: Tracker) => (
            <Card date={tracker.date} eventName={tracker.eventName} place={tracker.place} total={tracker.total} key={uniqid()}/>
        ))}
        </div> 
>>>>>>> 6e4860e0609bc8a56b98aabb36f6344a69199964
    </div>
  );
}

export default Directories;
