// hooks
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FaBars, FaTimes } from "react-icons/fa";

// styles
import "./navbar.css";

// // logo
// import LOGO from "../../assets/logo.png";

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
    <header className="navbar-header">
      {/*  */}
      {/* logo */}
      {/*  */}
      <div className="navbar-logo">
        {/* <img src={LOGO} width="50px" height="50px" alt="logo" /> */}
        <Link to="/" className="navbar-title">
          <p>CMC</p>
        </Link>
      </div>
      {/*  */}
      {/* nav section */}
      {/*  */}
      <nav ref={navRef} className="navbar">
        {/*  */}
        {/* nav items  */}
        {/*  */}
        <Link to="/" className="navbar-link">
          <p>Home</p>
        </Link>
        <Link to="/about" className="navbar-link">
          <p>About</p>
        </Link>
        <Link to="/contacts" className="navbar-link">
          <p>Contacts</p>
        </Link>
      </nav>
      {/* menu open button */}
      <div className="navbar-btn" onClick={showNavbar}>
        {!open ? <FaBars /> : <FaTimes />}
      </div>
    </header>
  );
};

export default Navbar;
