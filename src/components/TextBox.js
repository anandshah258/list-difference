import React from "react";

function TextBox({ name, text, setText, addItem }) {
  return (
    <input
      type="text"
      onChange={onInputChange}
      value={text}
      onKeyUp={onEnter}
      placeholder={`Add an item to list ${name}`}
    />
  );

  function onInputChange(e) {
    setText(e.target.value);
  }

  function onEnter(e) {
    if (e.key === "Enter") {
      addItem();
    }
  }
}

export default TextBox;
