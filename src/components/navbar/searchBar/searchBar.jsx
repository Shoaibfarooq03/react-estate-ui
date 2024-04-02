import { useState } from "react";
import "./searchBar.scss";

const types = ["Buy", "Rent"];

function SearchBar() {
  const [state, setState] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleClick = (val) => {
    setState((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            className={state.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000}
          placeholder="Min Price"
        />
        <input
          type="number"
          min={0}
          max={1000000}
          name="maxPrice"
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
