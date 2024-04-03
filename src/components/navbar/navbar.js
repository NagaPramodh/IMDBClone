import Content from "./content";
import "./navbar.css";
// import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
const Navbar = (props) => {
  return (
    <div className="menu">
      <Popup trigger={props.button} modal nested className="popup-content">
        {(close) => (
          <div className="modal">
            <Content click={() => close()} />
          </div>
        )}
      </Popup>
    </div>
  );
};
export default Navbar;
