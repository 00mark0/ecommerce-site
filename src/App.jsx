import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/landingPage/LandingPage";
import ProductDetail from "./components/ProductDetail";

import LaptopsPage from "./pages/laptopsPage/LaptopsPage";
import PCPage from "./pages/pcPage/PcPage";
import TVsPage from "./pages/tvsPage/TvsPage";
import MobileDevicesPage from "./pages/mobileDevicesPage/MobileDevicesPage";
import TechGear from "./pages/techGear/TechGear";
import CartPage from "./components/CartPage";
/*
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
*/
import { CartProvider } from "./components/CartContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/laptops" element={<LaptopsPage />} />
            <Route path="/pcs" element={<PCPage />} />
            <Route path="/tvs" element={<TVsPage />} />
            <Route path="/mobiles" element={<MobileDevicesPage />} />
            <Route path="/tech-gear" element={<TechGear />} />
            <Route path="/cart" element={<CartPage />} />
            {/*
              <Route path="/sign-in" element={<SignInPage />} />
              */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
