import "./navbar.css";
import { Link } from "react-router-dom";
import DrawerMobileNavigation from "./mobileMenu/MobileMenu";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo_section">
        <Link to="/">
          <h1>
            <strong>Deluxe</strong>Travels
          </h1>
        </Link>
      </div>
      {/* <div className="right_action_section">
        <ul>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Book Now</li>
        </ul>
      </div> */}

<div className="right_action_section">
        <ul>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact">Book Now</Link></li>
        </ul>
      </div>
      <div className="mobile_menu">
        <DrawerMobileNavigation />
      </div>
    </header>
  );
};

export default Navbar;
