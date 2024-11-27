import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header d-flex justify-content-between align-items-center p-3 ">
        {/* Logo Section */}
        <div className="logo ms-5">
          <h2>Logo</h2>
        </div>

        {/* Navigation for Larger Screens */}
        <nav className="nav d-none d-md-flex align-items-center gap-4">
          <a href="/" className="nav-link text-dark">
            HOME
          </a>
          <a href="/products" className="nav-link text-dark">
            PRODUCTS
          </a>
          <a href="/blogs" className="nav-link text-dark">
            BLOGS
          </a>
          <div className="dropdown">
            <img
              src="/Capture.PNG"
              alt="Dropdown Icon"
              className="img-fluid"
              style={{ height: "24px" }}
            />
          </div>
        </nav>

        {/* Mobile Navigation Toggle (Visible on Small Screens) */}
        <button
          className="btn btn-outline-secondary d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNav"
          aria-expanded="false"
          aria-controls="mobileNav"
        >
          Menu
        </button>

        {/* Button */}
        <button className="button me-5 px-4 ">Button</button>
      </header>

      {/* Collapsible Mobile Navigation */}
      <div className="collapse d-md-none  p-3" id="mobileNav">
        <nav className="nav flex-column">
          <a href="/" className="nav-link text-dark">
            HOME
          </a>
          <a href="/products" className="nav-link text-dark">
            PRODUCTS
          </a>
          <a href="/blogs" className="nav-link text-dark">
            BLOGS
          </a>
          <div className="dropdown">
            <img
              src="/Capture.PNG"
              alt="Dropdown Icon"
              className="img-fluid ms-3 "
              style={{ height: "18px" }}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
