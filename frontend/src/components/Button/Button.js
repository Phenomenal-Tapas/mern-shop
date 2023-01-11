import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <button className="button" type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
