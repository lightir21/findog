import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import firebaseConfig from "./firebase";
import { getStorage, ref } from "firebase/storage";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const dogsColRef = collection(db, "dogs");

export const addDog = (dog) => {
  addDoc(dogsColRef, dog);
};
