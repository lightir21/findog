import React from "react";
import Hero from "./Hero";
import Dogs_table from "./Dogs_table";

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
    </>
  );
}

export default Home;
