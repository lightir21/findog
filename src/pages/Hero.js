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

  const ageFilter = (age, dog) => {
    if (age === "גור") {
      return 0.01 <= Number(dog.age) && Number(dog.age) <= 0.12;
    }
    if (age === "צעיר") {
      return 1 <= Number(dog.age) && Number(dog.age) <= 3;
    }
    if (age === "בוגר") {
      return 3 < Number(dog.age) && Number(dog.age) <= 10;
    }
    if (age === "מבוגר") {
      return 10 < Number(dog.age);
    }
  };

  useEffect(() => {
    const { breed, age, gender, location } = filter;

    if (filter) {
      setFilteredDogs(() => {
        return dogs.filter((dog) => {
          return (
            (dog.breed.includes(breed) || filter.breed === "") &&
            (ageFilter(age, dog) || filter.age === null) &&
            (dog.gender === gender || filter.gender === "") &&
            (dog.location === location || filter.location === "")
          );
        });
      });
    } else {
      setFilteredDogs(dogs);
    }
  }, [filter]);

  if (!isLoading) {
    return (
      <section className="hero ">
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
