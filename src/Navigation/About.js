import React from "react";
import "../style.css";

const About = () => {
  return (
    <div className="container">
      <div className="page">
        <h1>About Us</h1>
        <p>Learn more about Mana Groceries and our mission.</p>
        <button className="btn-primary">Read More</button>
      </div>
     
    </div>
  );
};
const Fruits = ["Apple", "banana", "grapes"];
const newFruits = Fruits.map((items) => items + "1");
console.log(newFruits);

export default About;
