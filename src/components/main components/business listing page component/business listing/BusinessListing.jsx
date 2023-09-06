import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function BusinessListing() {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const subCategory_URL = process.env.REACT_APP_SUBCATEGORY_URL;
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(category_URL);
        setCategoryData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

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
      <main>
        <section>
          <div className="container">
            <div className="row g-2">
              <div className="col-lg-8">
                <div className="card border">
                  <div className="card-header border-bottom p-3">
                    <h5 className="card-header-title mb-0">Business Listing</h5>
                  </div>
                  <div className="card-body">
                    {/* Skype */}
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Business/Company Name"
                      />
                    </div>
                    {/* business Official number */}
                    <div className="mb-3">
                      <label className="form-label">Official Number</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+91 0123456789"
                        />
                        <button type="button" className="btn btn-primary">
                          Verify
                        </button>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    {/* Address */}
                    <div className="mb-3">
                      <label className="form-label">Office Address</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="750 Azad Rd, Udaipur, RJ,313001 "
                      />
                    </div>

                    <div className="row">
                      <div className="mb-3 col-sm-6">
                        <label className="form-label">Select Category</label>
                        <select
                          id="category"
                          className="form-select"
                          onChange={handleCategory}
                        >
                          <option hidden>Category</option>
                          {categoryData.map(
                            (item, index) => (
                              <option key={index}>
                                {item.category_name}
                              </option>
                            )
                            // console.log(item.category_name);
                          )}
                        </select>
                      </div>
                      <div className="mb-3 col-sm-6">
                        <label className="form-label">Select Subcategory</label>
                        <select id="subcategory" className="form-select">
                          <option>Subcategory</option>
                          {/* <option value="DL">Subcategory</option> */}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">
                        Briefly describe the products/services you offer. *
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={
                          "I've found a way to get paid for my favorite hobby and do so while following my dream of traveling the world."
                        }
                      />
                      <div className="form-text">
                        Brief description for your Business.
                      </div>
                    </div>

                    {/* Save button */}
                    <div className="d-flex justify-content-end mt-4">
                      <button type="button" className="btn btn-outline-success">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* advertisement section  */}
              <div className="col-6 col-lg-4 d-none d-lg-block mx-auto">
                <a href="#" className="d-block card-img-flash">
                  <img src="/assets/images/adv.png" alt="Ad" />
                </a>
                {/* <div className="smaller text-end mt-2">
              ads via{" "}
              <a href="#" className="text-muted">
                <u>Keen infotech</u>
              </a>
            </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </>
  );
}

export default BusinessListing;
