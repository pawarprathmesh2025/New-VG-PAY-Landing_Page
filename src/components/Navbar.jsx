import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/app-logo 1.png";
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

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>



            {/* OUR DEVICES DROPDOWN */}

            <li className="dropdown">

              <span className="nav-link">
                Our Products ▾
              </span>


              <ul className="dropdown-menu">


                <li>
                  <NavLink
                    to="/devices/sbox1"
                    className={({ isActive }) =>
                      isActive ? "dropdown-link active" : "dropdown-link"
                    }
                  >
                    S-Box1
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/devices/qr"
                    className={({ isActive }) =>
                      isActive ? "dropdown-link active" : "dropdown-link"
                    }
                  >
                   X-Box
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/devices/pos"
                    className={({ isActive }) =>
                      isActive ? "dropdown-link active" : "dropdown-link"
                    }
                  >
                    S-Box Pocket
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/devices/printer"
                    className={({ isActive }) =>
                      isActive ? "dropdown-link active" : "dropdown-link"
                    }
                  >
                    D-Box1
                  </NavLink>
                </li>


              </ul>

            </li>




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
