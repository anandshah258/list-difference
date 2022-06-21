import React from "react";

function Button({ onButtonClick }) {
  return (
    <button className="button" onClick={onButtonClick}>
      Add
    </button>
  );
}

export default Button;
