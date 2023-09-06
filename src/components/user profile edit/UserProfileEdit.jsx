import React from "react";
import { Link } from "react-router-dom";
import PasswordUpdate from "./password update/PasswordUpdate";
import PersonalDetails from "./personal details/PersonalDetails";

function UserProfileEdit() {
  return (
    <>
      <header className="navbar-light navbar-sticky sticky-top header-static border-bottom navbar-dashboard">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand me-3" to="/">
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
                  <a className="nav-link" href="/">
                    <i className="bi bi-house-door me-1" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    <i className="bi bi-people me-1" />
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    <i className="bi bi-envelope me-1" />
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* <div className="nav my-3 my-xl-0 px-4 px-lg-1 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input
                      className="form-control pe-5 bg-transparent"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit"
                    >
                      <i className="fas fa-search fs-6 " />
                    </button>
                  </form>
                </div>
              </div> */}
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
                    <a className="dropdown-item" href="/user">
                      <i className="bi bi-person fa-fw me-2" />
                      Profile
                    </a>
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
                  <li
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-power fa-fw me-2" />
                      Sign Out
                    </a>
                  </li>
                </ul>
                {/* Profile dropdown END */}
              </div>
              {/* Profile dropdown END */}
              {/* Nav right END */}
            </div>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT START */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            {/* Profile cover and info START */}
            <div className="col-12">
              <div className="card mb-4 position-relative z-index-9">
                {/* Cover image */}
                <div
                  className="py-5 h-200 rounded"
                  style={{
                    backgroundImage:
                      "url(/assets/images/blog/16by9/big/07.jpg)",
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="card-body pt-3 pb-0">
                  <div className="row d-flex justify-content-between">
                    {/* Avatar */}
                    <div className="col-sm-12 col-md-auto text-center text-md-start">
                      <div className="avatar avatar-xxl mt-n5">
                        <img
                          className="avatar-img rounded-circle border border-white border-3 shadow"
                          src="/assets/images/avatar/03.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Profile info */}
                    <div className="col-sm-12 col-md text-center text-md-start d-md-flex justify-content-between align-items-center">
                      <div>
                        <h4 className="">
                          Louis Ferguson
                          <i className="bi bi-patch-check-fill text-info small" />
                        </h4>
                        {/* <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="bi bi-geo-alt me-1" /> New York
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile info END */}
          </div>
          <div className="row g-4">
            {/* Left sidebar START */}
            <div className="col-lg-7 col-xxl-8">
              <PersonalDetails />
              {/* <BusinessDetails /> */}
              {/* Social links START */}
              <div className="card border mb-4">
                <div className="card-header border-bottom p-3">
                  <h5 className="card-header-title mb-0"> Social links</h5>
                </div>
                <div className="card-body">
                  {/* Skype */}
                  <div className="mb-3">
                    <label className="form-label">Facebook</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="https://facebook.com/"
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">linkedin</label>
                    <input
                      className="form-control"
                      type="email"
                      defaultValue="https://www.linkedin.com/"
                    />
                  </div>
                  {/* Address */}
                  <div className="mb-3">
                    <label className="form-label">Twitter</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="https://twitter.com/ "
                    />
                  </div>
                  {/* Save button */}
                  <div className="d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-primary">
                      Save changes
                    </a>
                  </div>
                </div>
              </div>
              {/* Social links END */}
              <PasswordUpdate />
            </div>
            {/* Left sidebar END */}
            {/* Right sidebar START */}
            <div className="col-lg-5 col-xxl-4">
              {/* Deactivate account START */}
              <div className="card border mb-4">
                <div className="card-header border-bottom p-3">
                  <h5 className="card-header-title mb-0">Delete Account</h5>
                </div>
                <div className="card-body">
                  <h6>Before you go...</h6>
                  <ul>
                    <li>
                      Account deletion is final. There will be no way to restore
                      your account
                    </li>
                  </ul>
                  <div className="form-check form-check-md my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="deleteaccountCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="deleteaccountCheck"
                    >
                      Yes, I'd really like to delete my account
                    </label>
                  </div>
                  <a href="#" className="btn btn-danger my-1">
                    Delete my account
                  </a>
                </div>
              </div>
              {/* Deactivate account END */}

              {/* <div className="card bg-transparent border rounded-3 mt-4">
                <div className="card-header bg-transparent border-bottom p-3">
                  <h5 className="card-header-title mb-0">Linked account</h5>
                </div>
                <div className="card-body">
                  <div className="position-relative mb-3 mt-3 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
                    <h2 className="fs-1 mb-0 me-3">
                      <i className="fab fa-google text-google-icon" />
                    </h2>
                    <div>
                      <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                        <i className="bi bi-check-circle-fill text-success fs-5" />
                      </div>
                      <h6 className="mb-1">Google</h6>
                      <p className="mb-1 small">
                        You are successfully connected to your Google account
                      </p>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger mb-0 me-2"
                      >
                        Invoke
                      </button>
                      <a
                        href="#"
                        className="btn btn-sm btn-link text-body mb-0"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="d-sm-flex border p-3 rounded mb-2">
                    <h2 className="fs-1 mb-0 me-3">
                      <i className="fab fa-facebook text-facebook" />
                    </h2>
                    <div>
                      <h6 className="mb-1">Facebook</h6>
                      <p className="mb-1 small">
                        Connect with Facebook account for a personalized
                        experience
                      </p>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary mb-0 me-2"
                      >
                        Connect Facebook
                      </button>
                      <a
                        href="#"
                        className="btn btn-sm btn-link text-body mb-0"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Main contain END  */}

      {/* footer START */}

      <footer className="mb-3">
        <div className="container">
          <div className="card card-body bg-light">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                {/* Copyright */}
                <div className="text-center text-lg-start">
                  ©2023
                  <a href="#" className="text-reset btn-link" target="_blank">
                    Welcome2Udaipur
                  </a>
                  . All rights reserved
                </div>
              </div>
              <div className="col-lg-6 d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                {/* Language switcher */}

                {/* Links */}
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

      {/* footer END  */}
    </>
  );
}

export default UserProfileEdit;
