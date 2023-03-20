import { useState } from "react";
import "../App.css";

function ShowSearch({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleChange = (event) => {
    setNewSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  };
  //console.log(newSearchTerm);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search for a TV Show:</label>
      <input id="search" value={newSearchTerm} onChange={handleChange} />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default ShowSearch;
