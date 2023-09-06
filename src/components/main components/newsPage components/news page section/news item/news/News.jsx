import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Advertisement from "../../../../indexPage component/advertisement/Advertisement";

function News({ params }) {
  const news_URL = process.env.REACT_APP_NEWS_URL;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const { news_id } = params;

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${news_URL}/${news_id}`)
        // console.log(response.data);
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (newsData) {

    var {
      newsCategory,
      title,
      newsEditor,
      content,
      thumbnailImage,
      slug,
    } = newsData;
  }

  // getting date from the news data
  // const date = new Date(news_created_on);
  // const options = { year: "numeric", month: "short", day: "numeric" };
  // const formattedDate = date.toLocaleDateString("en-US", options);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto pt-md-5">
                <a href="#" className="badge text-bg-danger mb-2">
                  <i className="fas fa-circle me-2 small fw-bold" />
                  {newsCategory}
                </a>
                <h1 className="display-4">{title}</h1>
                <p className="lead">{slug}</p>
                {/* Info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">
                    <div className="nav-link">
                      by :{" "}
                      <a href="#" className="text-reset btn-link">
                        {newsEditor}
                      </a>
                    </div>
                  </li>
                  {/* <li className="nav-item">{formattedDate}</li> */}
                </ul>
                <img
                  className="rounded mt-5"
                  // src="/assets/images/blog/16by9/07.jpg"
                  src={`${domain_URL}${thumbnailImage}`}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Inner intro END */}
        {/* Main START */}
        <section className="pt-0">
          <div className="container position-relative">
            <div className="row">
              {/* Main Content START */}
              <div className="col-lg-9 mx-auto">
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
              </div>
              {/* Main Content END */}
            </div>
          </div>
          <Advertisement />
        </section>
        {/* Main END */}
      </main>

    </>
  );
}

export default News;
