import React from "react";
import Hero from "./Hero";
import Dogs_table from "./Dogs_table";
import { Link } from "react-router-dom";

function Home({ dogs, setDogs, filteredDogs, setFilteredDogs }) {
  return (
    <>
      <Hero
        dogs={dogs}
        setDogs={setDogs}
        filteredDogs={filteredDogs}
        setFilteredDogs={setFilteredDogs}
      />
      <Dogs_table dogs={dogs} filteredDogs={filteredDogs} />
      <Link to="/post">Post your dog</Link>
    </>
  );
}

export default Home;
