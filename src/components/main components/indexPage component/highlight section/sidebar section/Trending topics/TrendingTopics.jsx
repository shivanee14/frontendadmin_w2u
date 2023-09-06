import React from "react";

function TrendingTopics(props) {
  return (
    <>
      <div
        className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
        style={{
          backgroundImage: `url(${props.trendingItems.backgroundImage})`,
          backgroundPosition: "center left",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-dark-overlay-4 p-3">
          <a href="/" className="stretched-link btn-link fw-bold text-white h5">

            {props.trendingItems.topic}
            
          </a>
        </div>
      </div>
    </>
  );
}

export default TrendingTopics;
