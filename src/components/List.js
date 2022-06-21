import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TextBox from "./TextBox";
import Button from "./Button";

function List({ name, list, setList }) {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>LIST {name}</h2>
      <div>
        <TextBox name={name} text={text} setText={setText} addItem={addItem} />
        <Button onButtonClick={addItem} />
      </div>
      <ul className="list">
        {list.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="list-item"
            onClick={removeItem}
          >
            {item.name} <FontAwesomeIcon icon={faTrashCan} size="xs" />
          </li>
        ))}
      </ul>
    </div>
  );

  function addItem() {
    if (text === "") {
      alert("Item name can't be empty");
      return;
    }
    setList([...list, { id: Date.now(), name: text }]);
    setText("");
  }

  function removeItem(e) {
    let id = +e.target.id;
    setList(list.filter((item) => item.id !== id));
  }
}

export default List;
