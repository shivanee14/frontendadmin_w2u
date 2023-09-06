import React from "react";
import LatestNewsSlider from "./latest news slider/LatestNewsSlider";

function LatestNewsSection() {
  return (
    <>
      {/* Divider */}

      <div className="container-fluid px-3">
        <div className="border-bottom border-primary border-2 opacity-1"></div>
      </div>

      {/* ========== Section START ==========  */}
      <section className=" pt-2 pb-2">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-12">
              {/* Title  */}
              <div className="mb-4 d-md-flex justify-content-between align-items-center">
                <h2 className="m-0">
                  <i className="bi bi-megaphone"></i> Latest News
                </h2>
                <a href="#" className="text-body small">
                  <u>Content by: White Devil</u>
                </a>
              </div>
              <LatestNewsSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNewsSection;
