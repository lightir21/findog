import React from "react";
import "./style/Hero/Hero.css";

const Hero = () => {
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
              <div className="hero__form-box">
                <label htmlFor="breed" className="hero__form-label">
                  גזע
                </label>
                <select
                  name="breed"
                  id="breed"
                  className="hero__form-input"
                ></select>
              </div>
              <div className="hero__form-box">
                <label htmlFor="age" className="hero__form-label">
                  גיל
                </label>
                <select
                  name="age"
                  id="age"
                  className="hero__form-input"
                ></select>
              </div>
              <div className="hero__form-box">
                <label htmlFor="gender" className="hero__form-label">
                  מין
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="hero__form-input"
                ></select>
              </div>
              <div className="hero__form-box">
                <label htmlFor="location" className="hero__form-label">
                  מיקום
                </label>
                <select
                  name="location"
                  id="location"
                  className="hero__form-input"
                ></select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
