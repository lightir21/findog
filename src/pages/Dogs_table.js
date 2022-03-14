import React, { useState, useEffect } from "react";
import "../style/Dogs_table/Dogs_table.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Dogs_table = ({ dogs }) => {
  const storage = getStorage();
  const getImage = (imageRef) => {};

  const checkAges = (dog) => {
    if (dog.age < "1") {
      return ` ${dog.age} חודשים `;
    }
    if (dog.age === "1") {
      return ` שנה`;
    } else {
      return ` ${dog.age} שנים `;
    }
  };

  let image = "";
  console.log(dogs);
  return (
    <div className="dogs_table container">
      {dogs?.map((dog) => {
        return (
          <div className="dogs_table__dog-box" key={dog.name}>
            <div className="dogs_table__img-box">
              <img
                src={dog.url}
                alt={`${dog.name} תמונה של כלב בשם`}
                className="dogs_table__img"
              />
            </div>
            <div className="dogs_table__dog-description">
              <h3 className="dogs_table__dog-description-name">
                {dog.name} {dog.gender === "זכר" ? "בן" : "בת"}
                {checkAges(dog)}
              </h3>
              <p className="dogs_table__dog-description-breed">{dog.breed}</p>
              <p className="dogs_table__dog-description-location">
                מאיזור ה{dog.location}
              </p>
              <p className="dogs_table__dog-description-description">
                {dog.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs_table;
