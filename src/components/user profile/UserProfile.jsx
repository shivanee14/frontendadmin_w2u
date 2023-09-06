import React from "react";
import { Link } from "react-router-dom";
import SidebarSection from "../main components/indexPage component/highlight section/sidebar section/SidebarSection";

function UserProfile() {
  return (
    <>
      <header className="navbar-light navbar-sticky sticky-top header-static border-bottom navbar-dashboard">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className=" navbar-brand py-0 me-3" to="/">
              <img
                className="navbar-brand-item light-mode-item"
                src="/assets/images/wlcm21.png"
                // src="/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
            {/* Responsive navbar toggler */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-body h6 m-2 d-sm-inline-block d-none">
                Menu
              </span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="bi bi-house-door me-1" />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    <i className="bi bi-people me-1" />
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    <i className="bi bi-envelope me-1" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Nav right START */}
            <div className="nav flex-nowrap align-items-center">
              {/* Profile dropdown START */}
              <div className="nav-item ms-2 ms-md-3 dropdown">
                {/* Avatar */}
                <a
                  className="avatar avatar-sm p-0"
                  href="#"
                  id="profileDropdown2"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="avatar-img rounded-circle"
                    src="/assets/images/avatar/03.jpg"
                    alt="avatar"
                  />
                </a>
                {/* Profile dropdown START */}
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown2"
                >
                  {/* Profile info */}
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src="/assets/images/avatar/03.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a className="h6 mt-2 mt-sm-0" href="#">
                          Louis Ferguson
                        </a>
                        <p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  {/* Links */}
                  <li>
                    <Link className="dropdown-item" to="/user">
                      <i className="bi bi-person fa-fw me-2" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/user/edit_details">
                      <i className="bi bi-gear fa-fw me-2" />
                      Edit Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contact-us">
                      <i className="bi bi-info-circle fa-fw me-2" />
                      Help
                    </a>
                  </li>
                  <li className="dropdown-divider mb-3" />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-power fa-fw me-2" />
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
              {/* Nav right END */}
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="card border h-100">
                  <div className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
                    <h5 className="card-header-title mb-0">User Details</h5>
                    <a
                      href="user/edit_details"
                      className="btn btn-sm btn-primary mb-0"
                    >
                      Edit Profile
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-4">
                      {/* Avatar detail */}
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-lg">
                          <img
                            className="avatar-img rounded-circle border border-white border-3 shadow"
                            src="/assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-3">
                          <h5 className="mb-0">Larry Lawson</h5>
                          {/* <p className="mb-0 small">Editor at Blogzine</p> */}
                        </div>
                      </div>
                      {/* Tags */}
                      <div className="d-flex mt-2 mt-sm-0">
                        {/* <h6 className="bg-danger py-2 px-3 text-white rounded">
                          14K Follow
                        </h6> */}
                        <Link to="/user/business_list">
                          <h6 className="bg-danger py-2 px-3 text-white rounded mt-2 mt-sm-0">
                            Add Business
                          </h6>
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-group list-group-borderless">
                          {/* Title */}

                          {/* Full Name */}
                          <li className="list-group-item">
                            <span>First Name:</span>
                            <span className="h6 mb-0">Larry</span>
                          </li>
                          {/* User Name */}
                          <li className="list-group-item">
                            <span>Last Name:</span>
                            <span className="h6 mb-0">Lawson</span>
                          </li>
                          <li className="list-group-item">
                            <span>Email ID:</span>
                            <span className="h6 mb-0">example@gmail.com</span>
                          </li>
                          <li className="list-group-item">
                            <span>Birthday:</span>
                            <span className="h6 mb-0">01-01-1991</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <span>Gender:</span>
                            <span className="h6 mb-0">Male</span>
                          </li>
                          <li className="list-group-item">
                            <span>Mobile Number:</span>
                            <span className="h6 mb-0">+123 456 789 10</span>
                          </li>
                          <li className="list-group-item">
                            <span>Address:</span>
                            <span className="h6 mb-0">404 error</span>
                          </li>
                          <li className="list-group-item">
                            <span>City:</span>
                            <span className="h6 mb-0">Udaipur</span>
                          </li>
                          <li className="list-group-item">
                            <span>District:</span>
                            <span className="h6 mb-0">Udaipur</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SidebarSection />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-5">
        <div className="container">
          <div className="card card-body bg-light">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                {/* Copyright */}
                <div className="text-center text-md-start text-primary-hover">
                  Copyright © 2023 Welcome2Udaipur &nbsp; &nbsp;
                </div>
              </div>
              <div className="col-lg-6 d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                <ul className="nav text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pe-0" href="#">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default UserProfile;
