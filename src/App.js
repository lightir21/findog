import "./style/App.css";
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

import { getStorage, ref } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebaseConfig from "./firebase";
import Post from "./Post";
import Home from "./Home";

function App() {
  const [dogs, setDogs] = useState([]);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const dogsColRef = collection(db, "dogs");

  // useEffect(() => {
  //   const getDogs = async () => {
  //     const data = await getDocs(dogsColRef);
  //     setDogs(data.docs.map((dog) => ({ ...dog.data() })));
  //   };
  //   getDogs();
  // }, []);

  useEffect(() => {
    const dogsColRefQuery = query(dogsColRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(dogsColRefQuery, (snapshot) =>
      setDogs(snapshot.docs.map((doc) => doc.data()))
    );
    return unsub;
  }, []);

  console.log(dogs);
  const addDog = (dog) => {
    addDoc(dogsColRef, dog);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/post"
          element={
            <Post
              addDog={addDog}
              storage={storage}
              firebaseConfig={firebaseConfig}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
