// @ts-check
import React, { useState, useEffect, useMemo } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  uploadBytes,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import firebaseConfig from "./firebase";

const Post = ({ addDog, storage }) => {
  // const [imageName, setImageName] = useState("");
  // const [name, setName] = useState("");
  // const [breed, setBreed] = useState("");
  // const [gender, setGender] = useState("זכר");
  // const [age, setAge] = useState(0);
  // const [location, setLocation] = useState("");
  // const [description, setDescription] = useState("");
  const [dog, setDog] = useState({
    name: "",
    age: 0,
    breed: "",
    gender: "זכר",
    location: "",
    description: "",
    imageName: "",
    timestamp: serverTimestamp(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addDog(dog);
    setDog({
      name: "",
      age: 0,
      breed: "",
      gender: "זכר",
      location: "",
      description: "",
      imageName: "",
      timestamp: serverTimestamp(),
    });
  };

  const handleChange = (e) => {
    setDog((dog) => ({
      ...dog,
      [e.target.name]: e.target.value,
    }));
  };

  const uploadHandler = (e) => {
    const file = e.target.files[0];
    let fileRef = ref(storage, file.name);
    setDog((dog) => ({ ...dog, imageName: file.name }));

    const uploadTask = uploadBytesResumable(fileRef, file);
  };

  return (
    <form className="form">
      <div className="form__box">
        <label htmlFor="name" className="form__title">
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="form__input"
          value={dog.name}
          onChange={handleChange}
        />
      </div>

      <div className="form__box">
        <label htmlFor="breed" className="form__title">
          Breed
        </label>
        <input
          required
          type="text"
          name="breed"
          id="breed"
          className="form__input"
          value={dog.breed}
          onChange={handleChange}
        />
      </div>

      <div className="form__box">
        <label htmlFor="age" className="form__title">
          Age
        </label>
        <input
          required
          type="number"
          name="age"
          id="age"
          className="form__input"
          value={dog.age}
          onChange={handleChange}
        />
      </div>

      <div className="form__box">
        <label htmlFor="gender" className="form__title">
          Gender
        </label>
        <select name="gender" id="gender" onChange={handleChange}>
          <option value="זכר">Male</option>
          <option value="נקבה">Female</option>
        </select>
      </div>

      <div className="form__box">
        <label htmlFor="location" className="form__title">
          location
        </label>
        <input
          required
          type="text"
          name="location"
          id="location"
          className="form__input"
          value={dog.location}
          onChange={handleChange}
        />
      </div>

      <div className="form__box">
        <label htmlFor="description" className="form__title">
          description
        </label>
        <input
          required
          type="text"
          name="description"
          id="description"
          className="form__input"
          value={dog.description}
          onChange={handleChange}
        />
      </div>
      <input className="form__file" type="file" onChange={uploadHandler} />
      <button className="form__btn" onClick={handleSubmit}>
        click me
      </button>
    </form>
  );
};

export default Post;
