import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Head">
      <div className="head">
        <div>
          <h1>LA MARIDIAN</h1>
        </div>
        <div className="left">
          <nav className="NAV">
            <Link className="link" to="/index">
              Home
            </Link>
            <Link className="link" to="/Catagory">
              Category
            </Link>
            <Link className="link" to="/branch">
              Branch
            </Link>
            <Link className="link" to="/forum">
              Forum
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
