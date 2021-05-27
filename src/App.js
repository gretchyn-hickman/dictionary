import "./App.css";
import Dictionary from "./dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="Sunshine" />
      <footer>
        <a
          href="https://github.com/AnneAugust606/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Gretchyn Hickman
      </footer>
    </div>
  );
}
