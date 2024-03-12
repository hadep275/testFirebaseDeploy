import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowUp} from "@fortawesome/free-solid-svg-icons";

import "../css/root.css";
import "../css/responsive.css";
import "../css/styles.css";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNav = () => {
    setNavbarActive(!navbarActive);
    document.body.classList.toggle("nav-active");
  };

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderActive(true);
        backTopBtn.classList.add("active");
      } else {
        setHeaderActive(true);
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${headerActive ? "active" : ""}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src="/logo.svg" width="40" height="5" alt="logo" />
          </a>

          <nav className={`navbar ${navbarActive ? "active" : ""}`} data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src="/logo.svg" width="40" height="5" alt="logo" />
              </a>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                onClick={toggleNav}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-bars"
                  name="close-outline"
                  aria-hidden="true"
                />x
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <a
                  href="#home"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#topics"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Topics
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Featured Post
                </a>
              </li>
              <li>
                <a
                  href="#recent"
                  className="navbar-link hover-1"
                  onClick={toggleNav}
                >
                  Recent Post
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link hover-1" onClick={toggleNav}>
                  Contact
                </a>
              </li>
            </ul>

            <div className="navbar-bottom">
              <div className="profile-card">
                <img
                  src="./images/author-1.png"
                  width="48"
                  height="48"
                  alt="Lilly"
                  className="profile-banner"
                />
                <div>
                  <p className="card-title">Hello Lilly !</p>
                  <p className="card-subtitle">You have 3 new messages</p>
                </div>
              </div>
              <ul className="link-list">
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Articles Saved
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Add New Post
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    My Likes
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Account Setting
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-bottom-link hover-1">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>

            <p className="copyright-text">
              Copyright 2022 © Scale - Personal Blog Template. Developed by
              Scale Finance
            </p>
          </nav>

          <a href="#" className="btn btn-primary">
            Subscribe
          </a>
          <ThemeToggle />

          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={toggleNav}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              name="menu-outline"
              aria-hidden="true"
            />≡
          </button>
        </div>
      </header>
      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-up"
          name="arrow-up-outline"
          aria-hidden="true"
        />
      </a>
    </>
  );
};

export default Navbar;
