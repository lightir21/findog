import "./style/App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { addDog, dogsColRef, storage } from "./firebaseApi";

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredDogs, setFilteredDogs] = useState([]);

  // useEffect(() => {
  //   const getDogs = async () => {
  //     const data = await getDocs(dogsColRef);
  //     setDogs(data.docs.map((dog) => ({ ...dog.data() })));
  //   };
  //   getDogs();
  // }, []);

  useEffect(() => {
    setFilteredDogs(dogs);
  }, [dogs]);

  useEffect(() => {
    setIsLoading(true);
    const dogsColRefQuery = query(dogsColRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(dogsColRefQuery, (snapshot) =>
      setDogs(snapshot.docs.map((doc) => doc.data()))
    );

    return unsub;
  }, []);

  if (isLoading === false) {
    // console.log(dogs);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              dogs={dogs}
              setDogs={setDogs}
              filteredDogs={filteredDogs}
              setFilteredDogs={setFilteredDogs}
            />
          }
        ></Route>
        <Route
          path="/post"
          element={<Post addDog={addDog} storage={storage} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
