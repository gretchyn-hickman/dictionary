import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
            <p>
              <Synonyms Synonyms={definition.Synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
