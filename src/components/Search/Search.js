import React from "react";
import "./search.css";

function Search({ setInput, search }) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        onChange={inputHandler}
        type="text"
        className="searchInput"
      ></input>
      <button onClick={search}>SEARCH</button>
    </div>
  );
}
export default Search;
