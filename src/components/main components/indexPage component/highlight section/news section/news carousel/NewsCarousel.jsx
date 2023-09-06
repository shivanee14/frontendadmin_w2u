import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

function NewsCarousel() {
  const news_URL = process.env.REACT_APP_NEWS_URL;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(news_URL);
        setNews(response.data);
      } catch (err) {
        console.error(err.response.data.message || "Something went wrong");
      }
    };
    getNews();
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        // spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          820: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
        }}
        // navigation={true}
        modules={[Pagination, Autoplay]}
      // className="mySwiper"
      >
        {
          news &&
          news.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="col-8 mx-auto">
                  <div className="card">
                    <div
                      className="position-relative"
                      style={{ height: "13rem" }}
                    >
                      <img
                        className="card-img h-100 w-100"
                        // src="/assets/images/blog/4by3/01.jpg"
                        src={`${domain_URL}${item.thumbnailImage}`}
                        alt="Card imgs"
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        <div className="w-100 mt-auto">
                          <Link
                            to={`/news/${item._id}`}
                            className="badge text-bg-warning mb-2"
                          >
                            <i className="fas fa-circle me-2 small fw-bold" />
                            {item.newsCategory}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h4 className="card-title mt-2">
                        <Link
                          to={`/news/${item._id}`}
                          className="btn-link text-reset fw-bold"
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p className="card-text">{item.slug}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default NewsCarousel;
