import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type, query } = useParams();

  useEffect(() => {
    if (type) {
      // If type exists in the URL, fetch movies by type
      fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.error("Error fetching data:", error));
    } else if (query) {
      // If query exists in the URL, fetch movies by search query
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${encodeURIComponent(
          query
        )}&page=1`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      // Default to fetching popular movies
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [type, query]);

  return (
    <div className="movie__list">
      {!type && !query && <h2 className="list__title">POPULAR</h2>}
      {type && (
        <h2 className="list__title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
      )}
      {query && <h2 className="list__title">Search results for "{query}"</h2>}
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
