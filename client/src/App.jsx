import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes and Route for routing
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Home/Footer/Footer.jsx";
import CropAnna from "./Components/CropAnna/CHome.jsx";
import About from "./Components/About/About.jsx";
import Solutions from "./Components/Solutions/Solutions.jsx";
import Product from "./Components/Product/Product.jsx";
import Carrers from "./Components/Carrers/Carrers.jsx";
function App() {
  return (
    <div className="app-main">
      <Router>
        <div className="navbar-app">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/solutions"
            element={
              <>
                <Solutions />
                <Footer />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Carrers />
                <Footer />
              </>
            }
          />
          <Route path="/CropAnna" element={<CropAnna />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
