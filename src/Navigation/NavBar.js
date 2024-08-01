import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import ContactUs from "./ContactUs";
import '../Navigationstyles/Header.css';

const Head = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-section logo">
        <h1 className="logo-text" onClick={() => navigate("/")}>Mana Groceries</h1>
      </div>
      <nav className="header-section nav">
        <button className="nav-item" onClick={() => navigate("/")}>
          <span className="nav-link">Home</span>
        </button>
        <button className="nav-item" onClick={() => navigate("/menu")}>
          <span className="nav-link">Menu</span>
        </button>
        <button className="nav-item" onClick={() => navigate("/about")}>
          <span className="nav-link">About</span>
        </button>
        <button className="nav-item" onClick={() => navigate("/contactus")}>
          <span className="nav-link">Contact Us</span>
        </button>
      </nav>
      <div className="header-section search">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="header-section user-info">
        <button className="user-button">Login</button>
      </div>
    </header>
  );
};

const Navbar = () => (
  <Router>
    <Head />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  </Router>
);

export default Navbar;
