import React, { useState, useEffect } from "react";
import "./style/Hero/Hero.css";
import Form_hero from "./Form_hero";

const Hero = ({ dogs }) => {
  const [isLoading, setIsLoading] = useState(false);

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
                  english="breed"
                  hebrew="גזע"
                />
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  english="age"
                  hebrew="גיל"
                />
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  english="gender"
                  hebrew="מין"
                />
                <Form_hero
                  setIsLoading={setIsLoading}
                  dogs={dogs}
                  english="location"
                  hebrew="מיקום"
                />
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
