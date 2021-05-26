import axios from "axios";
import React, { useState } from "react";
import Results from "./Results.js";
import "./dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for '${keyWord}'`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWord} />
      </form>
      <Results results={results} />
    </div>
  );
}
