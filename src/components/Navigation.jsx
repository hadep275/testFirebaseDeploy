import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import "../css/Navigation.css";
import "../css/root.css";
import "../css/responsive.css";
import "../css/styles.css";

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const slider = document.querySelector("[data-slider]");


function Navigation () {
  const navbarRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const addEventOnElements = function(elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    };
  
    const navbar = navbarRef.current;
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");
    const slider = document.querySelector("[data-slider]");
    const sliderContainer = document.querySelector("[data-slider-container]");
    const sliderPrevBtn = document.querySelector("[data-slider-prev]");
    const sliderNextBtn = document.querySelector("[data-slider-next]");
  
    const toggleNav = () => {
      navbar.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };
  
    const moveSliderItem = function() {
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    };
  
    const slideNext = function() {
      const slideEnd = currentSlidePos >= totalSlidableItems;
  
      if (slideEnd) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }
  
      moveSliderItem();
    };
  
    const slidePrev = function() {
      if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
      } else {
        currentSlidePos--;
      }
  
      moveSliderItem();
    };
  
    let totalSliderVisibleItems = 0;
    let totalSlidableItems = 0;
    let currentSlidePos = 0;
  
    if (slider) {
      totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
      totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
      sliderNextBtn.addEventListener("click", slideNext);
      sliderPrevBtn.addEventListener("click", slidePrev);
  
      window.addEventListener("resize", function() {
        totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
        totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
        moveSliderItem();
      });
    }
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    if (navbar) {
      addEventOnElements(navTogglers, "click", toggleNav);
    }
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  return (
    <>
      <header className="header" data-header>
          <div className="container">
            <a href="#" className="logo">
              <img src="/logo.svg" width="40" height="5" alt="logo" />
            </a>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img
                    src="/logo.svg"
                    width="40"
                    height="5"
                    alt="logo"
                  />
                </a>

                <button
                  className="nav-close-btn"
                  aria-label="close menu"
                  data-nav-toggler
                >
                  <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>

              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link hover-1" data-nav-toggler>
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#topics"
                    className="navbar-link hover-1"
                    data-nav-toggler
                  >
                    Topics
                  </a>
                </li>

                <li>
                  <a
                    href="#featured"
                    className="navbar-link hover-1"
                    data-nav-toggler
                  >
                    Featured Post
                  </a>
                </li>

                <li>
                  <a
                    href="#recent"
                    className="navbar-link hover-1"
                    data-nav-toggler
                  >
                    Recent Post
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link hover-1" data-nav-toggler>
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
                &copy; 2024 Personal Finance Blog. <br />
                All rights reserved.
                <br />
                Designed and developed with ❤️ by Scale.
              </p>
            </nav>

            <a href="#" className="btn btn-primary">
              Subscribe
            </a>
            <ThemeToggle />

            <button
              className="nav-open-btn"
              aria-label="open menu"
              data-nav-toggler
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </header>

        <a
          href="#top"
          className="back-top-btn"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
        </a>
    </>
  );
};

export default Navigation;
