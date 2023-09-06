import React from "react";

function SocialIcons() {
  return (
    <>
      <div className="row g-2">
        <div className="col-4">
          <a
            href="/"
            className="bg-facebook rounded text-center text-white-force p-3 d-block"
          >
            <i className="fab fa-facebook-square fs-5 mb-2" />
            <h6 className="m-0">1.5K</h6>
            <span className="small">Fans</span>
          </a>
        </div>
        <div className="col-4">
          <a
            href="/"
            className="bg-instagram-gradient rounded text-center text-white-force py-3 d-block"
          >
            <i className="fab fa-instagram fs-5 mb-2" />
            <h6 className="m-0">1.8M</h6>
            <span className="small">Followers</span>
          </a>
        </div>
        <div className="col-4">
          <a
            href="/"
            className="bg-youtube rounded text-center text-white-force p-3 d-block"
          >
            <i className="fab fa-youtube-square fs-5 mb-2" />
            <h6 className="m-0">22K</h6>
            <span className="small">Subs</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialIcons;
