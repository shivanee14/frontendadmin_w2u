import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./menu item/MenuItem";
import Advertisement from "../../../main components/indexPage component/advertisement/Advertisement";
import toast from "react-hot-toast";

function OffCanvas() {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const [category_data, setCategory_data] = useState([]);

  // set category link Menu item

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

  return (
    <>
      {/* Offcanvas START */}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasMenu"
        style={{ width: "100vw" }}
      >
        <div className="offcanvas-header justify-content-end">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex flex-column pt-0">
          <div>
            <div className="d-flex justify-content-center">
              <img
                src="/assets/images/wlcm21.png"
                className=""
                // width="10%"
                // height="10%"
                style={{ width: "7rem" }}
                alt="Logo"
              />
            </div>
            <h3>
              <strong>Welcome to Udaipur-City of Lakes</strong>
            </h3>
            {/* Nav START */}
            <div className="offcanvasmenu">
              <ul className="nav mt-4 mb-0 mb-lg-2">
                {category.map((navitem, index) => {
                  return (
                    <MenuItem
                      navitem={navitem}
                      key={index}
                      category_URL={category_URL}
                    />
                  );
                })}
              </ul>
            </div>
            {/* Nav END */}
            {/* <div className="bg-primary bg-opacity-10 p-4 mb-4 text-center w-100 rounded">
              <span>The Blogzine</span>
              <h3>Save on Premium Membership</h3>
              <p>
                Get the insights report trusted by experts around the globe.
                Become a Member Today!
              </p>
              <a href="/" className="btn btn-warning text-wrap">
                View pricing plans
              </a>
            </div> */}

            <Advertisement />
          </div>
          <div className="mt-lg-4 mt-2 pb-3">
            {/* Address */}
            <p className="text-body mb-2 fw-bold">Udaipur, Rajasthan (IN)</p>
            <address className="mb-0">
              Address: 2nd floor, 6A/1
              <br />
              Ambamata Scheme
            </address>
            <p className="mb-2">
              Call:
              <a href="tel:+91 1234567890" className="text-body">
                <u>+91 123456789</u>
                {/* (Toll-free) */}
              </a>
            </p>
            <a href="mailto: info@example.com" className="text-body d-block">
              info@example.com
            </a>
          </div>
        </div>
      </div>
      {/* Offcanvas END */}
    </>
  );
}

export default OffCanvas;
