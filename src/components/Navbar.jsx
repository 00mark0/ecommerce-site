import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUser,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import dark from "../assets/dark-mode-button.png";
import light from "../assets/light-mode-button.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  const [openBars, setOpenBars] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleBars = () => {
    setOpenBars(!openBars);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenBars(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <>
      <div className="p-8 bg-blue-950 text-white fixed top-0 left-0 w-full z-50">
        {/* Layout for larger screens */}
        <nav className="hidden lg:flex justify-around items-center">
          <div className="flex items-center gap-4">
            <button className="cursor-pointer" onClick={toggleBars}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <h1 id="logoText" className="text-2xl text-yellow-500">
              <Link to="/" className="no-underline text-yellow-500">
                ELECTRA
              </Link>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search products"
              className="rounded-lg border border-black w-96 h-8 px-2"
            />
            <button className="cursor-pointer">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
            <button className="cursor-pointer">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </button>
            <button onClick={() => setTheme(!theme)} className="cursor-pointer">
              <img
                src={theme ? dark : light}
                alt="theme"
                className="w-16 h-8"
              />
            </button>
          </div>
        </nav>
        {/* Layout for smaller screens */}
        <nav className="flex flex-col lg:hidden justify-around items-center">
          <div className="flex justify-around items-center w-full gap-6">
            <button className="cursor-pointer" onClick={toggleBars}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <h1 id="logoText" className="text-2xl text-yellow-500">
              <Link to="/" className="no-underline text-yellow-500">
                ELECTRA
              </Link>
            </h1>
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </button>
              <button className="cursor-pointer">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </button>
              <button
                onClick={() => setTheme(!theme)}
                className="cursor-pointer"
              >
                <img
                  src={theme ? dark : light}
                  alt="theme"
                  className="w-16 h-8"
                />
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <input
              type="text"
              placeholder="Search products"
              className="rounded-lg border border-black w-80 sm:96 h-8 px-2"
            />
            <button className="cursor-pointer">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
        </nav>
      </div>
      <div
        id="sideBar"
        className={`menu ${openBars ? "open" : ""}`}
        ref={menuRef}
      >
        <button
          className="cursor-pointer menu-button text-black"
          onClick={toggleBars}
          ref={buttonRef}
        >
          <FontAwesomeIcon icon={faTimes} size="xl" />
        </button>
        <ul className="text-black">
          <Link to="/laptops">
            <li>Laptops</li>
          </Link>
          <Link to="/pcs">
            <li>PCs</li>
          </Link>
          <Link to="/tvs">
            <li>Tvs</li>
          </Link>
          <Link to="/mobiles">
            <li>Mobile Devices</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

Navbar.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
