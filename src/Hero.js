import React from "react";
import "./style/Hero/Hero.css";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__blank"></div>
      <div className="hero__display">
        <h1 className="hero__title">FinDog</h1>
        <h2 className="hero__secondary-title">אתר מספר 1 לאימוץ כלבים</h2>
        <div className="hero__box">
          <h3 className="hero__box-title">מצא את הכלב בשבילך</h3>
          <form className="hero__form">
            <div className="hero__form-box">
              <label htmlFor="breed" className="hero__form-label">
                גזע
              </label>
              <input
                type="text"
                name="breed"
                id="breed"
                className="hero__form-input"
              />
            </div>
            <div className="hero__form-box">
              <label htmlFor="age" className="hero__form-label">
                גיל
              </label>
              <input
                type="text"
                name="age"
                id="age"
                className="hero__form-input"
              />
            </div>
            <div className="hero__form-box">
              <label htmlFor="gender" className="hero__form-label">
                מין
              </label>
              <input
                type="text"
                name="gender"
                id="gender"
                className="hero__form-input"
              />
            </div>
            <div className="hero__form-box">
              <label htmlFor="location" className="hero__form-label">
                מיקום
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="hero__form-input"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
