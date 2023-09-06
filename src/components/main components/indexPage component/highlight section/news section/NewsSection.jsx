import React from "react";
import NewsCarousel from "./news carousel/NewsCarousel";

function NewsSection() {
  return (
    <>
      <div className="col-lg-9">
        {/* Title */}
        <div className="mb-4">
          <h2 className="m-0">
            <i className="bi bi-hourglass-top me-2"></i>Today's top highlights
          </h2>
          <p>Latest breaking news, pictures, videos, and special reports</p>
        </div>
        <div className="row gy-4">
          <NewsCarousel />
        </div>
      </div>
    </>
  );
}

export default NewsSection;
