import React, { useState } from "react";
import List from "./components/List";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [display, setDisplay] = useState(false);

  return (
    <div className="container">
      <h1>Find The Difference</h1>
      <List name={"A"} list={listA} setList={setListA} />
      <List name={"B"} list={listB} setList={setListB} />
      <button className="button" onClick={displayResults}>
        Compute
      </button>
      <button className="button" onClick={resetLists}>
        Reset
      </button>
      {display ? <Result listA={listA} listB={listB} /> : null}
    </div>
  );

  function resetLists() {
    setListA([]);
    setListB([]);
    setDisplay(false);
  }

  function displayResults() {
    setDisplay(true);
  }
}

export default App;
