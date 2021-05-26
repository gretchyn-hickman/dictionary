import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for '${keyWord}'`);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWord} />
      </form>
    </div>
  );
}
