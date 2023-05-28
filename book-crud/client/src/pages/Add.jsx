import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  console.log(book);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>add new book</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="title"
        name="title"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="desc"
        name="desc"
      />
      <input
        onChange={handleChange}
        type="number"
        placeholder="price"
        name="price"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="cover"
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
