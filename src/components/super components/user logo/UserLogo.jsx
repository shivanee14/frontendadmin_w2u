import React from "react";

function UserLogo() {
  return (
    <>
      <div className="nav-item ms-2 ms-md-2 me-2 float-end dropdown">
        {/* Avatar  */}
        <a
          className="avatar avatar-sm p-0 float-end"
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

        {/* Profile dropdown START  */}
        <ul
          className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
          aria-labelledby="profileDropdown2"
        >
          {/* Profile info  */}
          <li className="px-3">
            <div className="d-flex align-items-center">
              {/* Avatar  */}
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
          {/* Links  */}
          <li>
            <a className="dropdown-item" href="/user">
              <i className="bi bi-person fa-fw me-2"></i>Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/user/edit_details">
              <i className="bi bi-gear fa-fw me-2"></i>Edit Details
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/contact-us">
              <i className="bi bi-info-circle fa-fw me-2"></i>Help
            </a>
          </li>
          <li className="dropdown-divider mb-3"></li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="bi bi-power fa-fw me-2"></i>Sign Out
            </a>
          </li>
        </ul>
        {/* Profile dropdown END  */}
      </div>
    </>
  );
}

export default UserLogo;
