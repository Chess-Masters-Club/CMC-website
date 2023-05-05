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

  const closeNavbar = () => {
    navRef.current.classList.remove("resp");
    setOpen(false);
  };

  return (
    <header className="navbar-header px-3 md:px-10 shadow-md">
      {/*  */}
      {/* logo */}
      {/*  */}
      <div className="navbar-logo">
        <img src={LOGO} width="35px" height="35px" alt="logo" />
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
          onClick={closeNavbar}
          href="#about"
          to="/about"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>About</p>
        </a>
        <a
          onClick={closeNavbar}
          href="#events"
          to="/events"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Events</p>
        </a>
        <a
          onClick={closeNavbar}
          href="#TeamSection"
          to="/TeamSection"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Club Memebers</p>
        </a>
        <a
          onClick={closeNavbar}
          href="#sponsors"
          to="/sponsors"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Sponsors</p>
        </a>
        <a
          onClick={closeNavbar}
          href="#partners"
          to="/partners"
          className="navbar-link transition-all hover:text-tertiary hover:underline underline-offset-4"
        >
          <p>Partners</p>
        </a>
        <a
          onClick={closeNavbar}
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
