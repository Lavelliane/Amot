import { Timestamp } from "firebase/firestore"

export interface Tracker {
    date: Timestamp;
    eventName: string;
    place: string;
    total: number;
}