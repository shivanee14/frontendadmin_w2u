import React, { useEffect, useState } from "react";
import SidebarSection from "../../../indexPage component/highlight section/sidebar section/SidebarSection";
import axios from "axios";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Rough from "../../../../super components/rough components/Rough";

function ListedItem({ params }) {
  const { business_id, business_name, subcategory_Name } = params;

  // console.log(business_id);
  const business_listing_URL = process.env.REACT_APP_BUSINESS_LISTING;
  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(business_listing_URL);
        setBusinessData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (businessData.length > 0) {
    const business = businessData.find((item) => business_id == item.id);

    var {
      businesslisting_companyfirmname,
      businesslisting_descriptionproductservice,
      businesslisting_image,
      businesslisting_email,
      businesslisting_websiteURL,
    } = business;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <main>
        <section className="pt-4 pb-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-primary bg-opacity-10 p-4 p-md-5 rounded-3 text-center">
                  <h1 className="text-primary">
                    {/* {business_name.replace(/_/g, " ")} */}
                    {businesslisting_companyfirmname}
                  </h1>
                  <nav
                    className="d-flex justify-content-center"
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb breadcrumb-dots m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <i className="bi bi-house me-1" /> Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        {subcategory_Name.replace(/_/g, " ")}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative pt-0 pt-md-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="card mb-4">
                  <div className="row">
                    {/* <div className="col-sm-8 mx-auto col-md-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/blog/4by3/01.jpg"
                        // src={businesslisting_image}
                        alt=""
                      />
                    </div> */}
                    <div className="col-md-7 mt-3 mt-md-0">
                      <span className="badge text-bg-success fs-6 my-2">
                        Udaipur
                      </span>
                      <h1 className="btn-link text-reset">
                        {businesslisting_companyfirmname}
                      </h1>
                      <p>{businesslisting_descriptionproductservice}</p>
                      {!businesslisting_websiteURL ? (
                        ""
                      ) : !businesslisting_email ? (
                        ""
                      ) : (
                        <ul className="nav d-flex nav-divider align-items-center d-sm-inline-block">
                          <li className="nav-item ms-3 ms-sm-0">
                            <a href="#" className="text-reset btn-link">
                              {businesslisting_websiteURL}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#"
                              className="text-reset btn-link ms-n2 ms-sm-0 "
                            >
                              {businesslisting_email}
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src="/assets/images/blog/3by2/03.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src="/assets/images/blog/3by2/07.jpg"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/assets/images/blog/3by2/01.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>

              <SidebarSection />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListedItem;
