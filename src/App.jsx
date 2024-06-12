import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
/*
import LandingPage from "./pages/LandingPage";
import LaptopsPage from "./pages/LaptopsPage";
import PCsPage from "./pages/PCsPage";
import TVsPage from "./pages/TVsPage";
import MobileDevicesPage from "./pages/MobileDevicesPage";
import GeneralGearPage from "./pages/GeneralGearPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
*/
import "./App.css";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <Router>
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
        {/*
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/laptops" element={<LaptopsPage />} />
          <Route path="/pcs" element={<PCsPage />} />
          <Route path="/tvs" element={<TVsPage />} />
          <Route path="/mobile-devices" element={<MobileDevicesPage />} />
          <Route path="/general-gear" element={<GeneralGearPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        */}
      </div>
    </Router>
  );
}

export default App;
