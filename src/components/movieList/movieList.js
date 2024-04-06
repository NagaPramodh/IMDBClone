import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import Button from "@mui/material/Button";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1); // State for current page
  const { type, query } = useParams();

  useEffect(() => {
    // Function to fetch movie data based on type or query and page number
    const fetchMovies = () => {
      let url = "";
      if (type) {
        url = `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`;
      } else if (query) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${encodeURIComponent(
          query
        )}&page=${page}`;
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`;
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) => setMovieList(data.results))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMovies(); // Fetch movies when type, query, or page changes
  }, [type, query, page]);

  // Function to handle pagination
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
          gap: 20,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => handlePageChange(page - 1)}
          // disabled={page === 1}
        >
          Previous
        </Button>
        <Button variant="contained" onClick={() => handlePageChange(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default MovieList;
