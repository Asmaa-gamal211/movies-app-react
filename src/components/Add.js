import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Add.css";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=bd01b6bb`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);

  return (
    <div className="dd-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => {
                return (
                  <ul className="results">
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  </ul>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
