import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function HeaderOffcanvas({ darshan_data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // live weather update according to location of the user
  // weather data from weather api

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const apiId = process.env.REACT_APP_WEATHER_API_ID
  // const [baseUrl, setBaseUrl] = useState(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiId}&units=metric`
  // );
  const [temperature, setTemperature] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        function (err) {
          console.error(err.message);
        }
      );
    } else {
      console.error("GeoLocation not available.");
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiId}&units=metric`;

      axios.get(baseUrl).then((response) => {
        setTemperature(response.data.main.temp);
        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
      }).catch((error) => {
        console.error(error.message);
      });
    }
  }, [latitude, longitude]);

  return (
    <>
      <Button
        variant="primary btn-sm"
        className="d-lg-none mb-0"
        onClick={handleShow}
      >
        <i className="bi bi-list" />
         {" "} Explore
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Explore Here</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav fs-6 d-flex flex-column flex-lg-row">
            <li className="nav-item">
              <a className="nav-link ps-0" href="#" disabled>
               <b > {temperature} &deg;C </b>
              </a>
            </li>
            <li className="nav-item pt-2 pt-lg-0">
              <div className="dropdown">
                <button
                  className="dropdown-toggle live-btn"
                  type="button"
                  href="#"
                  id="darshan"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Darshan
                </button>
                <ul className="dropdown-menu" aria-labelledby="darshan">
                  {darshan_data &&
                    darshan_data?.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target={`#${item?.darshantime_templeName?.replace(
                              /\s/g,
                              "_"
                            )}`}
                          // data-bs-target="#myModalj"
                          >
                            {item.darshantime_templeName}
                          </a>
                        </li>
                      );
                    })}

                  {/* <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#myModalj"
                    >
                      Jagdish Mandir
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#myModals"
                    >
                      Sagas Ji
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#myModaln"
                    >
                      Nathdwara
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#myModale"
                    >
                      Ekling Ji
                    </a>
                  </li> */}
                </ul>
              </div>
            </li>
            <li className="nav-item pt-2 pt-lg-0 ps-lg-3">
              <button
                type="button"
                className="live-btn"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Live
              </button>
            </li>
            <li className="nav-item pt-2 pt-lg-0 ps-lg-3">
              <button type="button" className="live-btn">
                Book Tickets
              </button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HeaderOffcanvas;
