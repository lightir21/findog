import React from "react";
import Hero from "./Hero";
import Dogs_table from "./Dogs_table";

function Home({ dogs, setDogs }) {
  return (
    <>
      <Hero dogs={dogs} setDogs={setDogs} />
      <Dogs_table dogs={dogs} />
    </>
  );
}

export default Home;
