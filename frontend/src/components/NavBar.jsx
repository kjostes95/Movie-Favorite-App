import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Movie App
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/favorites" className="navbar-item">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
