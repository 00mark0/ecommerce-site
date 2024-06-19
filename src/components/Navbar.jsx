import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUser,
  faSearch,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import dark from "../assets/dark-mode-button.png";
import light from "../assets/light-mode-button.png";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import useCart from "./UseCart";

function Navbar({ theme, setTheme }) {
  const [openBars, setOpenBars] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const menuRef = useRef(null);
  const cartMenuRef = useRef(null);
  const { cart, removeItem, clearCart, cartItemCount, totalPrice } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  const toggleBars = () => {
    setOpenBars(!openBars);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        cartMenuRef.current &&
        !cartMenuRef.current.contains(event.target)
      ) {
        setOpenBars(false);
        setOpenCart(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        id="navbar"
        className="p-8 bg-blue-950 text-white fixed top-0 left-0 w-full"
      >
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
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Search products"
                className="rounded-lg border border-black w-96 h-8 px-2 text-black"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="cursor-pointer" type="submit">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </form>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="cursor-pointer">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </button>
            </Link>
            <button className="cursor-pointer" onClick={toggleCart}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 font-semibold">
                  {cartItemCount}
                </span>
              )}
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
          <div className="flex justify-around items-center w-full gap-3">
            <button className="cursor-pointer" onClick={toggleBars}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <h1 id="logoText" className="text-2xl text-yellow-500">
              <Link to="/" className="no-underline text-yellow-500">
                ELECTRA
              </Link>
            </h1>
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="cursor-pointer">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </button>
              </Link>
              <button className="cursor-pointer flex" onClick={toggleCart}>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-2 font-semibold">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setTheme(!theme)}
                className="cursor-pointer w-12"
              >
                <img
                  src={theme ? dark : light}
                  alt="theme"
                  className="w-12 h-8 bg-cover"
                />
              </button>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Search products"
                className="rounded-lg border border-black w-72 h-8 px-2 text-black"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="cursor-pointer">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div
        id="sideBar"
        className={`menu ${
          openBars ? "open" : ""
        } bg-white fixed top-0 left-0 min-h-screen transform transition-transform duration-300 ease-in-out ${
          openBars ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={menuRef}
      >
        <button
          className="cursor-pointer p-4 absolute top-0 right-0 text-black"
          onClick={toggleBars}
        >
          <FontAwesomeIcon icon={faTimes} size="xl" />
        </button>
        {openBars && (
          <ul className="text-black p-4">
            <div className="group w-32">
              <Link
                to="/search?query="
                className="flex items-center justify-between"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
              >
                <span className="text-xl">Shop</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Link>
              <div
                className={`additional-links overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded && openBars
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link to="/laptops" className="block">
                  <li
                    onClick={toggleBars}
                    className="py-2 hover:bg-gray-200 rounded-md"
                  >
                    Laptops
                  </li>
                </Link>
                <Link to="/pcs" className="block">
                  <li
                    onClick={toggleBars}
                    className="py-2 hover:bg-gray-200 rounded-md"
                  >
                    PCs
                  </li>
                </Link>
                <Link to="/tvs" className="block">
                  <li
                    onClick={toggleBars}
                    className="py-2 hover:bg-gray-200 rounded-md"
                  >
                    TVs
                  </li>
                </Link>
                <Link to="/mobiles" className="block">
                  <li
                    onClick={toggleBars}
                    className="py-2 hover:bg-gray-200 rounded-md"
                  >
                    Mobile Devices
                  </li>
                </Link>
                <Link to="/tech-gear" className="block">
                  <li
                    onClick={toggleBars}
                    className="py-2 hover:bg-gray-200 rounded-md"
                  >
                    Tech Gear
                  </li>
                </Link>
              </div>
            </div>
          </ul>
        )}
      </div>
      <div
        id="cartMenu"
        className={`cartMenu ${openCart ? "open" : ""}`}
        ref={cartMenuRef}
      >
        <button
          className="closeButton cursor-pointer text-black"
          onClick={toggleCart}
        >
          <FontAwesomeIcon icon={faTimes} size="xl" />
        </button>
        {cartItemCount > 0 ? (
          <div className="w-full">
            <div id="productCard" className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-black text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col items-center">
              <div id="cartTotal" className="w-full mt-10 mb-10">
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">Total</p>
                  <p className="text-lg text-black font-semibold">
                    ${totalPrice}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/cart">
                  <button
                    id="goToCart"
                    onClick={toggleCart}
                    className="py-1 px-4 lg:py-2 lg:px-8 rounded-full bg-yellow-500 hover:bg-yellow-700 text-black font-semibold"
                  >
                    Go To Cart
                  </button>
                </Link>
                <button
                  id="clearCart"
                  onClick={clearCart}
                  className="py-1 px-4 lg:py-2 lg:px-8 rounded-full bg-yellow-500 hover:bg-yellow-700 text-black font-semibold"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <p className="text-black text-lg">Your cart is empty.</p>
          </div>
        )}
      </div>
    </>
  );
}

Navbar.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Navbar;
