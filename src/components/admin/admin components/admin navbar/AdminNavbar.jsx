import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <>
      <header className="navbar-light bg-dark navbar-sticky sticky-top header-static border-bottom navbar-dashboard">
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
              {/* <span className="text-body h6 m-2 d-sm-inline-block d-none">
                Menu
              </span> */}
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
    </>
  );
}

export default AdminNavbar;
