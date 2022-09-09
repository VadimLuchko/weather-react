import "./App.css";
import { Weather } from "./Weather";
import React, { useRef, useState } from "react";

function App() {

  const [cityName, setCityName] = useState("Kharkiv");
  const inputEl = useRef(null);
  const onButtonClick = () => {
    setCityName(inputEl.current.value);
  };

  return (
    <div className="container-weather">
      <div className="search">
        <input
          ref={inputEl}
          autoComplete="off"
          className="search_city"
          type="search"
          placeholder="Enter the city"
        ></input>

        <button
          onClick={onButtonClick}
          className="search_city-submit"
        >
          search
        </button>
      </div>
      <Weather name={cityName}/>
    </div>
  );
}

export default App;
