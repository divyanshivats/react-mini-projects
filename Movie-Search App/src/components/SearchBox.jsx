import React, { useState } from "react";
import useFetch from "./useFetch";
import Movies from "./Movies";
import "./SearchBox.css";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState(null);

  const url = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}`
    : null;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTJmMThiNzdjZDAzODYxNmE4ZGIzNzFmMmI4OWFiNiIsIm5iZiI6MTc1MTYwMjEyMi45NTIsInN1YiI6IjY4Njc1M2NhZDM5NGIzMTE4ZTc5ZTE0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXCBpvYqzdj3_HvrEPVjnQg9mYgMFzR172vjL41de0U",
    },
  };

  const { data, loading } = useFetch(url, options);

  const handleChange = (e) => setSearchValue(e.target.value);
  const handleClick = () => setQuery(searchValue);

  return (
    <div className="search-container">
      <h1 className="app-title"> Search Your Movie</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={handleChange}
          className="search-input"
        />
        <button onClick={handleClick} className="search-button">
          Search
        </button>
      </div>
      {loading ? <p className="loading-text">Loading...</p> : <Movies data={data} />}
    </div>
  );
};

export default SearchBox;
