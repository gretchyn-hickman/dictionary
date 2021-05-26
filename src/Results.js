import react from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (menaing, index) {
          return menaing.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
