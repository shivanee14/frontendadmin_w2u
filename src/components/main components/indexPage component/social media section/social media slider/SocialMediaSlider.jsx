
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import axios from "axios";
import { Link } from "react-router-dom";

function SocialMediaSlider() {
    const news_URL = process.env.REACT_APP_NEWS_URL;
    const domain_URL = process.env.REACT_APP_DOMAIN_URL;

    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(news_URL);
                setNewsData(res.data);
                // console.log(res);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const news = newsData.map((item) => item).reverse();

    return (
        <>

            <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    380: {
                        slidesPerView: 1.5,
                        // spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        // spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        // spaceBetween: 20,
                    },
                }}
                // navigation={true}
                modules={[Pagination, Autoplay]}
            // className="mySwiper"
            >
                {news &&
                    news.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="card">
                                    {/* Card img */}
                                    <div className="position-relative">
                                        <img
                                            className="card-img"
                                            style={{ height: "12rem" }}
                                            // src={item.news_image}
                                            src={`${domain_URL}${item.thumbnailImage}`}
                                            // src="/assets/images/blog/4by3/11.jpg"
                                            alt="Card images"
                                        />
                                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                            {/* Card overlay bottom */}
                                            <div className="w-100 mt-auto">
                                                <Link
                                                    to={`/news/${item._id}`}
                                                    className="badge text-bg-info mb-2"
                                                >
                                                    <i className="fas fa-circle me-2 small fw-bold" />
                                                    {item.newsCategory}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card-body px-0 pt-3">
                                        <h5 className="card-title">
                                            <Link
                                                to={`/news/${item._id}`}
                                                className="btn-link text-reset fw-bold"
                                            >
                                                {item.title}
                                            </Link>
                                        </h5>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>

        </>
    )
}

export default SocialMediaSlider