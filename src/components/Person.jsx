//import React from "react";
//import { Pet } from "./Pet";

export const Person = (props) => {
  // props = { name, petName, type }
  return (
    <div>
      <h1>Hi! my name is {props.name}</h1>
      <p>My age is {props.age}</p>
      <button onClick={props.greeting}>Hello</button>
    </div>
  );
};