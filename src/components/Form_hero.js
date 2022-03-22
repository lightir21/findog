import React, { useState, useEffect } from "react";

const Breed = ({ dogs, english, hebrew, setFilter }) => {
  const [uniqueBreed, setUniqueBreed] = useState([]);

  const ages = ["גור", "צעיר", "בוגר", "מבוגר"];

  useEffect(() => {
    const dogsArr = [];
    const newDogs = dogs.map((dog) => {
      const splitted = dog?.[english].split("/");
      dogsArr.push(...splitted);
    });
    const uniqueObj = new Set(dogsArr);
    const uniqueArr = uniqueObj.values();

    return setUniqueBreed([...uniqueArr]);
  }, [dogs]);

  const handleChange = (e) => {
    if (e.target.value !== "בחר") {
      setFilter((item) => ({ ...item, [e.target.name]: e.target.value }));
    }
    if (e.target.value === "בחר") {
      setFilter((item) => ({ ...item, [e.target.name]: "" }));
    }
  };

  return (
    <div className="hero__form-box">
      <label htmlFor={english} className="hero__form-label">
        {hebrew}
      </label>
      <select
        name={english}
        id={english}
        className="hero__form-input"
        onChange={handleChange}
      >
        <option vlaue={undefined}>בחר</option>
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
