import React, { useState, useEffect } from "react";
import "../style/Hero/Hero.css";
import Form_hero from "../components/Form_hero";

const Hero = ({ dogs, setDogs, filteredDogs, setFilteredDogs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    breed: "",
    age: null,
    gender: "",
    location: "",
  });
  console.log(filter);

  useEffect(() => {
    if (filter) {
      setFilteredDogs(() => {
        return dogs.filter((dog) => {
          return (
            dog.breed.includes(filter.breed) ||
            dog.age === filter.age ||
            dog.gender === filter.gender ||
            dog.location === filter.location
          );
        });
      });
    } else {
      setFilteredDogs(dogs);
    }
  }, [filter]);

  if (!isLoading) {
    return (
      <section className="hero container">
        <div className="hero__blank"></div>
        <div className="hero__display">
          <div className="hero__display-box">
            <h1 className="hero__title">FinDog</h1>
            <h2 className="hero__secondary-title">אתר מספר 1 לאימוץ כלבים</h2>
            <div className="hero__box">
              <h3 className="hero__box-title">מצא את הכלב בשבילך</h3>
              <form className="hero__form">
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  setFilter={setFilter}
                  english="breed"
                  hebrew="גזע"
                />
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  setFilter={setFilter}
                  english="age"
                  hebrew="גיל"
                />
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  setFilter={setFilter}
                  english="gender"
                  hebrew="מין"
                />
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  setFilter={setFilter}
                  english="location"
                  hebrew="מיקום"
                />
                {/* <button onClick={handleSubmit}>click me</button> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <h3>loading....</h3>;
  }
};

export default Hero;
