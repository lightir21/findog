import React from "react";
import Hero from "./Hero";

function Home({ dogs }) {
  return (
    <>
      <Hero dogs={dogs} />
    </>
  );
}

export default Home;
