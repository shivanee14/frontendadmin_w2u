import React, { useEffect, useState } from "react";
import axios from "axios";

function Advertisement({ getAdvertisment, longitude, latitude }) {


  // useEffect(() => {
  //   if (longitude && latitude) {
  //     const advert = getAdvertisment();

  //     advert.then(result => {

  //       console.log("advert", result);
  //     });

  //   }

  // }, [longitude, latitude]);


  const [advertisement_data, setadvertisement_data] = useState([]);

  return (
    <>
      <div className="container-fluid px-3">
        <div className=" container-advertisement">
          <div className="my-0 my-sm-3">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded-2">
                <div className="carousel-item active">
                  <img
                    src="/assets/images/3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/images/1.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement;
