import { useState } from "react";
import "./App.css";
import "./css/root.css";
import "./css/responsive.css";
import "./css/styles.css";

function App() {
  return (
    <>
      <body id="top">
        <header class="header" data-header>
          <div class="container">
            <a href="#" class="logo">
              <img src="./images/logo.svg" width="40" height="5" alt="logo" />
            </a>

            <nav class="navbar" data-navbar>
              <div class="navbar-top">
                <a href="#" class="logo">
                  <img
                    src="./images/logo.svg"
                    width="40"
                    height="5"
                    alt="logo"
                  />
                </a>

                <button
                  class="nav-close-btn"
                  aria-label="close menu"
                  data-nav-toggler
                >
                  <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>

              <ul class="navbar-list">
                <li>
                  <a href="#home" class="navbar-link hover-1" data-nav-toggler>
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#topics"
                    class="navbar-link hover-1"
                    data-nav-toggler
                  >
                    Topics
                  </a>
                </li>

                <li>
                  <a
                    href="#featured"
                    class="navbar-link hover-1"
                    data-nav-toggler
                  >
                    Featured Post
                  </a>
                </li>

                <li>
                  <a
                    href="#recent"
                    class="navbar-link hover-1"
                    data-nav-toggler
                  >
                    Recent Post
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link hover-1" data-nav-toggler>
                    Contact
                  </a>
                </li>
              </ul>

              <div class="navbar-bottom">
                <div class="profile-card">
                  <img
                    src="./images/author-1.png"
                    width="48"
                    height="48"
                    alt="Lilly"
                    class="profile-banner"
                  />

                  <div>
                    <p class="card-title">Hello Lilly !</p>

                    <p class="card-subtitle">You have 3 new messages</p>
                  </div>
                </div>

                <ul class="link-list">
                  <li>
                    <a href="#" class="navbar-bottom-link hover-1">
                      Profile
                    </a>
                  </li>

                  <li>
                    <a href="#" class="navbar-bottom-link hover-1">
                      Articles Saved
                    </a>
                  </li>

                  <li>
                    <a href="#" class="navbar-bottom-link hover-1">
                      Add New Post
                    </a>
                  </li>

                  <li>
                    <a href="#" class="navbar-bottom-link hover-1">
                      My Likes
                    </a>
                  </li>

                  <li>
                    <a href="#" class="navbar-bottom-link hover-1">
                      Account Setting
                    </a>
                  </li>

                  <li>
                    <a href="#" class="navbar-bottom-link hover-1">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>

              <p class="copyright-text">
                &copy; 2024 Personal Finance Blog. <br />
                All rights reserved.
                <br />
                Designed and developed with ❤️ by Scale.
              </p>
            </nav>

            <a href="#" class="btn btn-primary">
              Subscribe
            </a>

            <button
              class="nav-open-btn"
              aria-label="open menu"
              data-nav-toggler
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </header>

        <main>
          {/* <!-- 
            - #HOME
          --> */}
          <section id="home" class="home">
            <div class="home-container">
              <div class="hero">
                <h2 class="hero-title">Welcome to Our Personal Finance Blog</h2>
                <p class="hero-text">
                  Get ready to transform your financial life with expert advice
                  on budgeting, investing, and lifestyle choices.
                </p>
                <p class="hero-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quae veritatis quis nam blanditiis, perspiciatis molestiae
                  fuga optio neque amet alias nulla possimus eos sit vel
                  accusamus quibusdam quasi est? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis, commodi qui
                  consequatur incidunt modi inventore dolores eos! Enim
                  assumenda quam itaque esse deleniti, nihil cum aspernatur
                  doloremque voluptatibus perferendis neque.
                </p>
                <a href="#featured" class="btn btn-primary">
                  Explore Now
                </a>
              </div>
            </div>
          </section>

          {/* <!-- 
            - #TOPICS
          --> */}

          <section id="topics" class="topics">
            <div class="topics-container">
              <p class="topics-title">Popular Topics</p>
              <div class="topic-list">
                <div class="topic-card">
                  <img
                    src="images/insta-post-1.png"
                    alt="Topic 1"
                    class="topic-img"
                  />
                  <h3 class="topic-title">Budgeting Basics</h3>
                  <p class="topic-description">
                    Learn how to create and stick to a budget that works for
                    you.
                  </p>
                </div>
                <div class="topic-card">
                  <img
                    src="images/insta-post-2.png"
                    alt="Topic 2"
                    class="topic-img"
                  />
                  <h3 class="topic-title">Investing Strategies</h3>
                  <p class="topic-description">
                    Discover the best investment opportunities to grow your
                    wealth.
                  </p>
                </div>
                <div class="topic-card">
                  <img
                    src="images/insta-post-3.png"
                    alt="Topic 3"
                    class="topic-img"
                  />
                  <h3 class="topic-title">Financial Independence</h3>
                  <p class="topic-description">
                    Achieve financial independence and retire early with our
                    tips.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 
            - #FEATURED POST
          --> */}
          <section class="featured" id="featured">
            <div class="featured-container">
              <h3 class="featured-title">Featured Post</h3>
            </div>
            {/* <!-- blog-container --> */}
            <div class="blog-container">
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-1.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>18 July 2021 / Budgeting 101</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-2.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>18 July 2021 / Budgeting 101</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-3.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>9 June 2024 / The Power of Compound Interest</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-4.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>
                    18 July 2021 / Top 5 Investment Strategies for Beginners
                  </span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-5.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>18 July 2021 / Budgeting 101</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-6.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>18 July 2021 / 10 Budgeting Mistakes to Avoid</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-7.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>18 July 2021 / Budgeting 101</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* <!-- box-1 --> */}
              <div class="blog-box">
                {/* <!-- img --> */}
                <div class="blog-img">
                  <img src="images/author-1.png" alt="1st" />
                </div>

                <div class="blog-text">
                  <span>18 July 2021 / Budgeting 101</span>
                  <a href="#" class="blog-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem maiores dicta eaque provident quis est veniam
                    culpa cum sunt. Exercitationem mollitia quaerat illum id
                    obcaecati dignissimos molestiae, reiciendis impedit dicta?
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- 
              - #RECENT POST
            --> */}
        </main>
        {/* <!-- 
        - #FOOTER
      --> */}

        <footer>
          <div class="container">
            <div class="card footer">
              <div class="section footer-top">
                <div class="footer-brand">
                  <a href="#" class="logo">
                    <img
                      src="./images/logo.svg"
                      width="40"
                      height="5"
                      loading="lazy"
                      alt="logo"
                    />
                  </a>

                  <p class="footer-text"></p>
                  <p>
                    &copy; 2024 Personal Finance Blog. All rights reserved.
                    <br />
                    Designed and developed with ❤️ by Scale.
                  </p>

                  <p class="footer-list-title">Address</p>

                  <address class="footer-text address">
                    123 Main Street <br />
                    First loading, NY 10001
                  </address>
                </div>

                <div class="footer-list">
                  <p class="footer-list-title">Categories</p>

                  <ul>
                    <li>
                      <a href="#" class="footer-link hover-2">
                        Action
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Business
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Adventure
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Canada
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        America
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Curiosity
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Animal
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Dental
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Biology
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Design
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Breakfast
                      </a>
                    </li>

                    <li>
                      <a href="#" class="footer-link hover-2">
                        Dessert
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="footer-list">
                  <p class="footer-list-title">Newsletter</p>

                  <p class="footer-text">
                    Sign up to be first to receive the latest stories inspiring
                    us, case studies, and industry news.
                  </p>

                  <div class="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      class="input-field"
                      autocomplete="off"
                    />

                    <ion-icon
                      name="person-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </div>

                  <div class="input-wrapper">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Emaill address"
                      required
                      class="input-field"
                      autocomplete="off"
                    />

                    <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                  </div>

                  <a href="#" class="btn btn-primary">
                    <span class="span">Subscribe</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </div>

              <div class="footer-bottom">
                <p class="copyright">
                  &copy; Developed by
                  <a href="#" class="copyright-link">
                    BusinessBlog.
                  </a>
                </p>

                <ul class="social-list">
                  <li>
                    <a href="#" class="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>

                      <span class="span">Twitter</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>

                      <span class="span">LinkedIn</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="social-link">
                      <ion-icon name="logo-instagram"></ion-icon>

                      <span class="span">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- 
        - #BACK TO TOP
      --> */}
        <a
          href="#top"
          class="back-top-btn"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
        </a>
      </body>
    </>
  );
}

export default App;
