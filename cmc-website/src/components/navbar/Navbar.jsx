// hooks
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FaBars, FaTimes } from "react-icons/fa";

// styles
import "./navbar.css";

// // logo
import LOGO from "../../../public/logo_small.png";

const Navbar = () => {
  // init hooks
  const navRef = useRef();
  const [open, setOpen] = useState(false);

  // handle change className
  const showNavbar = () => {
    navRef.current.classList.toggle("resp");
    // handle change icon button
    setOpen(!open);
  };

  return (
    <header className="navbar-header px-3 md:px-10">
      {/*  */}
      {/* logo */}
      {/*  */}
      <div className="navbar-logo">
        <img src={LOGO} width="45px" height="45px" alt="logo" />
        <Link to="/" className="navbar-title">
          <p>Chess Masters</p>
        </Link>
      </div>
      {/*  */}
      {/* nav section */}
      {/*  */}
      <nav ref={navRef} className="navbar">
        {/*  */}
        {/* nav items  */}
        {/*  */}

        <a
          href="#about"
          to="/about"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>About</p>
        </a>
        <a
          href="#events"
          to="/events"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Events</p>
        </a>
        <a
          href="#sponsors"
          to="/sponsors"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Sponsors</p>
        </a>
        <a
          href="#partners"
          to="/partners"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Partners</p>
        </a>
        <a
          href="#contact"
          to="/contact"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Contact</p>
        </a>
      </nav>
      {/* menu open button */}
      <div className="navbar-btn" onClick={showNavbar}>
        {!open ? <FaBars /> : <FaTimes />}
      </div>
    </header>
  );
};

export default Navbar;
