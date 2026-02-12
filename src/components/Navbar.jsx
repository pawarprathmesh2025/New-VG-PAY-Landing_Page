import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/app-logo 1.png"; // adjust path if needed
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="VGPAY Logo" />
        </Link>

        {/* NAV LINKS */}
        <nav>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
