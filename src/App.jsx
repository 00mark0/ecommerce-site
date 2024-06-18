import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/landingPage/LandingPage";
import ProductDetail from "./components/ProductDetail";

import LaptopsPage from "./pages/laptopsPage/LaptopsPage";
import PCPage from "./pages/pcPage/PcPage";
import TVsPage from "./pages/tvsPage/TvsPage";
import MobileDevicesPage from "./pages/mobileDevicesPage/MobileDevicesPage";
import TechGear from "./pages/techGear/TechGear";
import CartPage from "./components/CartPage";
import SearchPage from "./components/SearchPage";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPage from "./pages/newsletterPage/NewsletterPage";
import ContactPage from "./pages/contactPage/ContactPage";
import LogInPage from "./pages/account/LogInPage";
import RegisterPage from "./pages/account/components/RegisterPage";
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
            <Route path="/search" element={<SearchPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
