import React, { useEffect, useState } from "react";
import axios from "axios";
import OffCanvas from "../index header/offcanvas/OffCanvas";
import Navbar from "../index header/navbar/Navbar";
import UserLogo from "../user logo/UserLogo";
import { Link } from "react-router-dom";
import HeaderOffcanvas from "../index header/header offcanvas/HeaderOffcanvas";
import toast from "react-hot-toast";

function OtherHeader() {
  // user logo on right side

  const [UserSignedin, setUserSignedin] = useState(false);
  const [usertoken, setusertoken] = useState("");

  function userSignout() {
    window.localStorage.removeItem("accessToken");
    setusertoken("");
    setUserSignedin(false);

    if (!UserSignedin) {
      toast.success("Successfully signout!");
    }
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("accessToken");
    setusertoken(loggedInUser);

    if (usertoken) {
      // console.log(loggedInUser);
      setUserSignedin(true);
    }
  }, [UserSignedin, usertoken]);

  // darshan timing

  const darshan_URL = process.env.REACT_APP_DARSHAN_TIME_URL;

  const [darshan_data, setDarshan_data] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(darshan_URL);
      setDarshan_data(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <OffCanvas />
      <header className="navbar-light header-static">
        <div className="navbar-top small">
          <div className="container-fluid px-3 hom-top">
            <div
              className="d-flex justify-content-between align-items-center pb-lg-3 mb-lg-n4"
              style={{ marginTop: "-15px" }}
            >
              {/* Top bar left */}
              <HeaderOffcanvas darshan_data={darshan_data} />

              <div className="logowlcm d-lg-flex pb-lg-2">
                <Link to="/">
                  <img
                    className="mx-auto"
                    src="/assets/images/wlcm21.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              {/* Top bar right */}

              {/* Font size accessibility START */}

              {/* <div className="languageselctor">
                  <div id="google_translate_element"></div>
                </div> */}

              {/* user logo on the right side of header */}

              <div className="d-flex">
                <Link href="#" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    fill="currentColor"
                    className="bi bi-whatsapp mt-2 me-md-2 whatsapp-logo"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </Link>
                {UserSignedin ? (
                  // <UserLogo />
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
                      <li onClick={userSignout}>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-power fa-fw me-2"></i>Sign Out
                        </a>
                      </li>
                    </ul>
                    {/* Profile dropdown END  */}
                  </div>
                ) : (
                  <div className="nav-item my-1">
                    <Link
                      to="/signin"
                      className="btn btn-sm btn-danger mb-0 mx-2"
                    >
                      + Add Listing
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Divider */}
          {/* <div className="container">
            <div className="border-bottom border-2 border-primary opacity-1"></div>
          </div> */}
        </div>
        {/* DROPDOWN Nav START */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* menu item start -- left side button -- */}
            <div className="dropdown navbar-side-img1">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/icons8-menu-22.png"
                  alt=""
                  className=""
                  width="24px"
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
            {/* menu item end */}

            {/* Main navbar START */}
            <Navbar />
            {/* Main navbar END */}

            {/* logo section  */}
            {/* <div className="logowlcm d-lg-none mx-auto">
              <img
                className=""
                src="/assets/images/wlcm21.png"
                // width="25%"
                // height="16%"
                style={{ width: "7rem" }}
                alt="Logo"
              />
            </div> */}
            {/* Nav right START */}
            <div className="nav flex-nowrap align-items-center">
              {/* Offcanvas menu toggler */}
              <div className="nav-item navbar-side-img2">
                <a
                  className="nav-link p-0"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                >
                  <img
                    src="/assets/images/menu (1).png"
                    data-bs-target="#offcanvasMenu"
                    alt=""
                    width="30px "
                    height="30px"
                  />
                </a>
              </div>
            </div>
            {/* Nav right END */}
          </div>
        </nav>
        {/* DROPDOWN Nav END */}
      </header>
      {/* Header END */}

      {/* models  */}
      <div style={{ clear: "left" }}> </div>
      {/* The Modal */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Youtube Live</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <iframe
                // width={450}
                // height={315}
                className="container-fluid"
                src="https://www.youtube.com/embed/BQqEpDIT_MA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {darshan_data.map((item, index) => {
        return (
          <div
            className="modal fade"
            id={item.darshantime_templeName.replace(/\s/g, "_")}
            key={index}
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    {item.darshantime_templeName} Darshan
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  />
                </div>

                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Season</th>
                        <th scope="col">Opening time</th>
                        <th scope="col">Closing time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.darshantime_season}</td>
                        <td>{item.darshantime_opening_time} </td>
                        <td>{item.darshantime_time}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <TrendingSlider /> */}
    </>
  );
}

export default OtherHeader;
