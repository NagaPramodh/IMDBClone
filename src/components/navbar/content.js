import "./content.css";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TvIcon from "@mui/icons-material/Tv";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import StarsIcon from "@mui/icons-material/Stars";
import PublicIcon from "@mui/icons-material/Public";
import CloseIcon from "@mui/icons-material/Close";
const Content = (props) => {
  return (
    <div>
      <div className="header-nav">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          alt="logo"
        />
        <div onClick={props.click} className="icon">
          <CloseIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="nav-down">
        <div className="first-row">
          <div className="first">
            <div className="icon">
              <LocalMoviesIcon />
            </div>
            <div className="context">
              <h2>Movies</h2>
              <div>Release Calendar</div>
              <div>Top 250 Movies</div>
              <div>Most Popular Movies</div>
              <div>Browse Movies by Genre</div>
              <div>Top Box Office</div>
              <div>Showtimes & tickets</div>
              <div>Movie News</div>
              <div>India Movie Spotlight</div>
            </div>
          </div>
          <div className="second">
            <div className="icon">
              <PeopleAltIcon />
            </div>
            <div className="context">
              <h2>Celebs</h2>
              <div>Born Today</div>
              <div>Most Popular Celebs</div>
              <div>Celebrity News</div>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="first">
            <div className="icon">
              <TvIcon />
            </div>
            <div className="context">
              <h2>TV Shows</h2>
              <div>What's on Tv and Streaming</div>
              <div>Top 250 TV Shows</div>
              <div>Most Popular TV Shows</div>
              <div>Browse TV Shows by Genre</div>
              <div>TV News</div>
            </div>
          </div>
          <div className="second">
            <div className="icon">
              <BrowseGalleryIcon />
            </div>
            <div className="context">
              <h2>Watch</h2>
              <div>What to watch</div>
              <div>Latest Trailers</div>
              <div>IMDB Originals</div>
              <div>IMDB Picks</div>
              <div>IMDB Podcasts</div>
            </div>
          </div>
        </div>
        <div className="third-row">
          <div className="first">
            <div className="icon">
              <StarsIcon />
            </div>
            <div className="context">
              <h2>Awards & Events</h2>
              <div>Oscars</div>
              <div>Emmys</div>
              <div>San Diego Comic-Con</div>
              <div>Outfest LA</div>
              <div>STARmeter Awards</div>
              <div>Awards Control</div>
              <div>Festival Control</div>
              <div>All Events</div>
            </div>
          </div>
          <div className="second">
            <div className="icon">
              <PublicIcon />
            </div>
            <div className="context">
              <h2>Community</h2>
              <div>Help Center</div>
              <div>Contirubutor Zone</div>
              <div>Polls</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
