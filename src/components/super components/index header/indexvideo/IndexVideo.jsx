import React, { useState } from "react";
import "./indexvideo.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function IndexVideo() {
  // const video = "/assets/images/udaipur top places (1).mp4";
  const video = "/assets/images/video/Welcome To Udaipur video 2023.mp4";
  const thumb = "/assets/images/video thumbnail.jpg";
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const getVideoSrc = (width) => {
    if (width) {
      return video;
    }
  };

  const src = getVideoSrc(window.innerWidth);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  // find in udaipur with search bar

  const [searchbarQuery, setSearchbarQuery] = useState("");
  const navigate = useNavigate();

  const findinUdaipur = (e) => {
    e.preventDefault();

    if (searchbarQuery) {

      navigate(`/find_in_udaipur/q=${searchbarQuery.replace(/\s/g, "+")}`);
    }
  };

  return (
    <>
      <div className="pt-4 mx-lg-2 mb-3">



        <nav
          style={{ zIndex: "10" }}
          className="position-absolute w-100 navbar px-sm-2 navbar-sticky navbar-expand-lg"
        >
          <div className="container-fluid pt-1">
            <div className="dropdown navbar-side-img1">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/menu-icon2.png"
                  alt=""
                  className=""
                  height="22px"
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav flex-nowrap align-items-center">
              <div className="nav-item navbar-side-img2">
                <a
                  className="nav-link p-0"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                >
                  <img
                    src="/assets/images/menu(2).png"
                    data-bs-target="#offcanvasMenu"
                    alt=""
                    width="30px"
                    height="30px"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid" style={{ height: "100vh" }}>
          <video
            autoPlay
            muted
            loop
            // className="bg-video"
            className="h-100"
            onLoadedData={onLoadedData}
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          >
            <source src={src} type="video/mp4" />
          </video>
          {/* <div className="row g-0">
            <div className="col-xxl-10 mx-auto">
              <div className="card h-200 h-sm-300 h-md-400 h-lg-500 position-relative">
              </div>
            </div>
          </div> */}
        </div>
      </div>
     
      <div className="search-form searchbarcont d-flex justify-content-center row w-100">
        <div className="col-8 col-sm-7 col-md-6 col-lg-6 px-0">
          
          <form className="input-group" onSubmit={findinUdaipur}>
            <input
              className="form-control form-control-lg border-dark"
              type="search"
              placeholder="Udaipur..."
              aria-label="Search"
              onChange={(e) => {
                setSearchbarQuery(e.target.value);
              }}
            />
            <button className="btn btn-lg m-0" type="submit">
              <span className="d-none d-md-block fas fa-search"></span>
              <i className="d-block d-md-none fas fa-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default IndexVideo;
