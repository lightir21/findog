import React, { useState, useEffect } from "react";

const Breed = ({ setIsLoading, dogs, english, hebrew }) => {
  const [uniqueBreed, setUniqueBreed] = useState([]);
  const ages = ["גור", "צעיר", "בוגר", "מבוגר"];

  useEffect(() => {
    setIsLoading(true);
    const dogsArr = [];
    const newDogs = dogs.map((dog) => {
      const splitted = dog?.[english].split("/");
      dogsArr.push(...splitted);
    });
    const uniqueObj = new Set(dogsArr);
    const uniqueArr = uniqueObj.values();
    setIsLoading(false);
    return setUniqueBreed([...uniqueArr]);
  }, [dogs]);
  return (
    <div className="hero__form-box">
      <label htmlFor={english} className="hero__form-label">
        {hebrew}
      </label>
      <select name={english} id={english} className="hero__form-input">
        {english === "age"
          ? ages.map((item) => {
              return <option key={item} value={item}>{`${item}`}</option>;
            })
          : uniqueBreed.map((item) => {
              return <option key={item} value={item}>{`${item}`}</option>;
            })}
      </select>
    </div>
  );
};

export default Breed;