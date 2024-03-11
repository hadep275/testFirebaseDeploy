import React from 'react';

const FeaturedPost = () => {
  return (
    <section className="featured" id="featured">
      <div className="featured-container">
        <h3 className="featured-title">Featured Post</h3>
      </div>
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-img">
            <img src="images/author-1.png" alt="1st" />
          </div>
          <div className="blog-text">
            <span>18 July 2021 / Budgeting 101</span>
            <a href="#" className="blog-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem maiores dicta eaque provident quis est veniam culpa cum
              sunt. Exercitationem mollitia quaerat illum id obcaecati
              dignissimos molestiae, reiciendis impedit dicta?
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        {/* More blog-box elements go here */}
      </div>
    </section>
  );
};

export default FeaturedPost;
