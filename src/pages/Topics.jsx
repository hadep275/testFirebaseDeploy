import React from "react";

const Topics = () => {
  return (
    <section id="topics" className="topics">
      <div className="topics-container">
        <p className="topics-title">Popular Topics</p>
        <div className="topic-list">
          <div className="topic-card">
            <img
              src="images/insta-post-1.png"
              alt="Topic 1"
              className="topic-img"
            />
            <h3 className="topic-title">Budgeting Basics</h3>
            <p className="topic-description">
              Learn how to create and stick to a budget that works for you.
            </p>
          </div>
          <div className="topic-card">
            <img
              src="images/insta-post-2.png"
              alt="Topic 2"
              className="topic-img"
            />
            <h3 className="topic-title">Investing Strategies</h3>
            <p className="topic-description">
              Discover the best investment opportunities to grow your wealth.
            </p>
          </div>
          <div className="topic-card">
            <img
              src="images/insta-post-3.png"
              alt="Topic 3"
              className="topic-img"
            />
            <h3 className="topic-title">Financial Independence</h3>
            <p className="topic-description">
              Achieve financial independence and retire early with our tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
