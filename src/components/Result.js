import React from "react";

function Result({ listA, listB }) {
  return (
    <div>
      <h2>Computed Results</h2>
      <h3>Items present in A</h3>
      <ul className="list">
        {makeExclusive(listA).map((item) => (
          <li key={item.id} className="list-item">
            {item.name}
          </li>
        ))}
      </ul>
      <h3>Items present in B</h3>
      <ul className="list">
        {makeExclusive(listB).map((item) => (
          <li key={item.id} className="list-item">
            {item.name}
          </li>
        ))}
      </ul>
      <h3>Items present in both A and B</h3>
      <ul className="list">
        {findIntersection().map((item) => {
          return (
            <li key={item.id} className="list-item">
              {item.name}
            </li>
          );
        })}
      </ul>
      <h3>Items combining both A and B (unique)</h3>
      <ul className="list">
        {findUnion().map((item) => {
          return (
            <li key={item.id} className="list-item">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );

  function makeExclusive(list) {
    let otherList = list === listA ? listB : listA;
    let otherListItems = new Set();
    for (let { name } of otherList) otherListItems.add(name);
    return list.filter(({ name }) => !otherListItems.has(name));
  }

  function findIntersection() {
    let intersection = [];
    let itemCountForB = new Map();
    for (let { name } of listB) {
      let count = itemCountForB.get(name) || 0;
      itemCountForB.set(name, count + 1);
    }
    for (let item of listA) {
      let count = itemCountForB.get(item.name);
      if (count) {
        intersection.push(item);
        itemCountForB.set(item.name, count - 1);
      }
    }
    return intersection;
  }

  function findUnion() {
    let union = [],
      unique = new Set();
    for (let item of [...listA, ...listB]) {
      if (!unique.has(item.name)) {
        union.push(item);
        unique.add(item.name);
      }
    }
    return union;
  }
}

export default Result;
