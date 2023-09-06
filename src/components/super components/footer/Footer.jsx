import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Footer() {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const subscribe_URL = process.env.REACT_APP_SUBSCRIBE_URL;
  const [cookies, setCookies] = useState(false);

  const [category_data, setCategory_data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(category_URL);
        setCategory_data(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const category = category_data.sort((a, b) => a.id - b.id);

  // console.log(cookies);

  // top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // subcribe email query

  const [subcriber_id, setSubcriber_id] = useState("");
  const emailSubcribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(subscribe_URL, {
        email: subcriber_id,
      });
      if (response.status === 201) {
        toast.success("Subcribed successfully.");
        setSubcriber_id("");
        e.target.reset();
      }
    } catch (error) {
      console.error(error.response);
      // console.log(error.response.data.email[0]);
    }
  };

  return (
    <>
      {/* Footer START */}
      <footer className="bg-dark pt-5">
        <div className="container-fluid">
          {/* About and Newsletter START */}
          <div className="row pt-3 pb-4">
            <div className="col-md-3">
              <h1 style={{ color: "white" }}>Welcome to Udaipur</h1>
            </div>
            <div className="col-md-5">
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                possimus quo minus ab quidem mollitia quam incidunt. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Velit aperiam
                corporis neque?
              </p>
            </div>
            <div className="col-md-4">
              {/* Form */}
              <form
                onSubmit={(e) => emailSubcribe(e)}
                className="row row-cols-lg-auto g-2 align-items-center justify-content-end"
              >
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    onChange={(e) => setSubcriber_id(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary m-0">
                    Subscribe
                  </button>
                </div>
                <div className="form-text mt-2">
                  By subscribing you agree to our
                  <Link
                    to="/privacy_policy"
                    className="text-decoration-underline text-reset"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* About and Newsletter END */}
          {/* Divider */}
          <hr />
          {/* Widgets START */}
          <div className="row pt-5">
            {/* Footer Widget */}
            <div className="col-sm-6 col-lg-2 mb-4 mx-lg-auto">
              <h5 className="mb-4 text-white">About W2U</h5>
              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <Link className="nav-link pt-0" to="/t&c">
                    T&amp;C
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/privacy_policy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ads_policy">
                    Ads Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vendor_policy">
                    Vendor Policy{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Footer Widget */}
            <div className="col-sm-6 col-lg-2 mb-4 mx-lg-auto">
              <h5 className="mb-4 text-white">Navigation </h5>
              <ul className="nav flex-column text-primary-hover">
                {category &&
                  category.map((item, index) => {
                    return index < 5 ? (
                      <li className="nav-item" key={index}>
                        <Link
                          className="nav-link "
                          onClick={scrollToTop}
                          to={`/${item.name.replace(/\s/g, "_")}/${item._id}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ) : (
                      ""
                    );
                  })}
              </ul>
            </div>
            {/* Footer Widget */}
            <div className="col-sm-6 col-lg-2 mb-4 mx-lg-auto">
              <h5 className="mb-4 text-white">About W2U</h5>
              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <Link className="nav-link pt-0" to="/t&c">
                    T&amp;C
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/privacy_policy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ads_policy">
                    Ads Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vendor_policy">
                    Vendor Policy{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mb-4 mx-lg-auto">
              <h5 className="mb-4 text-white">Social Media</h5>
              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <a className="nav-link pt-0" href="#">
                    <i className="fab fa-whatsapp fa-fw me-2" />
                    WhatsApp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-youtube fa-fw me-2" />
                    YouTube
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-facebook-square me-2" /> Instagram
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-twitter-square me-2" /> Twitter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-facebook-square me-2" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mb-4 mx-lg-auto">
              <h5 className="mb-4 text-white">Contact us</h5>

              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Address: 2nd floor, 6A/1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Ambamata Scheme
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Udaipur, Rajasthan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    313001
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Call:+91 123456789
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Widget */}
          </div>
          {/* Widgets END */}
        </div>
        {/* Footer copyright START */}
        <div className="bg-dark-overlay-3 mt-5">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-md-between py-4">
              <div className="col-md-6">
                {/* Copyright */}
                <div className="text-center text-md-start text-primary-hover text-muted">
                  Copyright © 2023 Welcome2Udaipur
                </div>
              </div>
              <div className="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
                {/* Language switcher */}

                {/* Links */}
                <ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/t&c">
                      Terms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/privacy_policy">
                      Privacy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pe-0" to="/vendor_policy">
                      Vendor Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer copyright END */}
      </footer>
      {/* Footer END */}

      {/* Cookies alert START */}
      {/* <div
        className="alert alert-dismissible fade show bg-dark text-white position-fixed start-0 bottom-0 shadow py-3 ms-3 text-center col-10 col-md-4"
        role="alert"
      >
        This website stores cookies on your computer. To find out more about the
        cookies we use, see our
        <a className="text-blue" href="#">
          {" "}
          Privacy Policy
        </a>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-success-soft btn-sm mb-0"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setCookies(true);
            }}
          >
            <span aria-hidden="true">Accept</span>
          </button>
        </div>
        <div className="position-absolute end-0 top-0 mt-n3 me-n3">
          <img className="w-100" src="/assets/images/cookie.svg" alt="cookie" />
        </div>
      </div> */}

      {/* Cookies alert END */}

      {/* Back to top */}
      <div className="back-top">
        <i className="bi bi-arrow-up-short"></i>
      </div>
    </>
  );
}

export default Footer;
