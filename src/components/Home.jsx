import React from 'react'
import "../css/root.css";
import "../css/responsive.css";
import "../css/styles.css";

const Home = () => {
  return (
    <div>
      <section id="home" class="home">
        <div class="home-container">
          <div class="hero">
            <h2 class="hero-title">Welcome to Our Personal Finance Blog</h2>
            <p class="hero-text">
              Get ready to transform your financial life with expert advice on
              budgeting, investing, and lifestyle choices.
            </p>
            <p class="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae
              veritatis quis nam blanditiis, perspiciatis molestiae fuga optio
              neque amet alias nulla possimus eos sit vel accusamus quibusdam
              quasi est? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perspiciatis, commodi qui consequatur incidunt modi
              inventore dolores eos! Enim assumenda quam itaque esse deleniti,
              nihil cum aspernatur doloremque voluptatibus perferendis neque.
            </p>
            <a href="#featured" class="btn btn-primary">Explore Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
