import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../navbar/navbar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchQuery, "searchQuery");
    if (searchQuery.trim() !== "") {
      navigate(`/movies/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="logo"
          />
        </Link>

        <Navbar
          button={
            <div className="menu-icon">
              <MenuIcon />
              <div className="menu">Menu</div>
            </div>
          }
        />

        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>

        {/* <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form> */}
      </div>
      <div className="header-right">
        <form onSubmit={handleSearchSubmit}>
          <TextField
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ backgroundColor: "white" }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Header;
