import React from "react";
import SponsoredNewsSlider from "./sponsored news slider/SponsoredNewsSlider";

function SponsoredNewsSection() {
  return (
    <>
      {/* Divider */}

      <div className="container">
        <div className="border-bottom border-primary border-2 opacity-1"></div>
      </div>

      {/* ========== Section START ==========  */}
      <section className=" pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Title  */}
              <div className="mb-4 d-md-flex justify-content-between align-items-center">
                <h2 className="m-0">
                  <i className="bi bi-megaphone"></i> Sponsored news
                </h2>
                <a href="/" className="text-body small">
                  <u>Content by: White Devil</u>
                </a>
              </div>
              <SponsoredNewsSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SponsoredNewsSection;
