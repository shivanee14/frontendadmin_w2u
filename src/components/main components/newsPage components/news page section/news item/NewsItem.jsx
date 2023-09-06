import React from "react";
import { Link } from "react-router-dom";

function NewsItem({ post }) {
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;


  const {
    _id,
    title,
    newsCategory,
    slug,
    newsEditor,
    thumbnailImage,
  } = post;

  // getting date from the news data
  // const date = new Date(news_created_on);
  // const options = { year: "numeric", month: "short", day: "numeric" };
  // const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      <div className="card border rounded-0 up-hover p-4 mb-4 mx-auto">
        <div className="row g-3">
          {/* Image */}
          <div className="col-md-4" style={{ maxHeight: "12rem" }}>
            {/* <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="rounded-2"
                    src="/assets/images/blog/4by3/01.jpg"
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="rounded-2"
                    src="/assets/images/blog/4by3/02.jpg"
                    alt="Chicago"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="rounded-2"
                    src="/assets/images/blog/4by3/03.jpg"
                    alt="New York"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div> */}
            <img
              className="rounded-2 h-100"
              // src="/assets/images/blog/4by3/01.jpg"
              src={`${domain_URL}${thumbnailImage}`}

              alt="Los Angeles"
              style={{ width: "100%" }}
            />
          </div>
          {/* Detail */}
          <div className="col-md-8">
            <a href="#" className="badge text-bg-danger mb-2">
              <i className="fas fa-circle me-2 small fw-bold" />
              {newsCategory}
            </a>
            {/* <a href="#" className="badge text-bg-success mb-2 ms-2">
              <i className="fas fa-circle me-2 small fw-bold" />
              {news_city}
            </a> */}
            <h2 className="card-title">
              <Link
                to={`/news/${_id}`}
                className="btn-link text-reset stretched-link"
              >
                {/* Fatehsagar */}
                {title}
              </Link>
            </h2>
            <p className="">{slug}</p>

            <ul className="nav nav-divider align-items-center">
              <li className="nav-item">
                <div className="nav-link">by : {newsEditor}</div>
              </li>
              {/* <li className="nav-item">{formattedDate}</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
