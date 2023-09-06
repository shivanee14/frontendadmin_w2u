import React from "react";
import YoutubeVideoCard from "./youtube video card/YoutubeVideoCard";

function YoutubeVideosSection() {
  return (
    <>
      <section className="pb-4 card-grid">
        <div className="container-fluid px-3">
          <div className="row g-3">
            {/* Left big card */}
            <div>
              <h2>Youtube Videos</h2>
            </div>

            <YoutubeVideoCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default YoutubeVideosSection;
