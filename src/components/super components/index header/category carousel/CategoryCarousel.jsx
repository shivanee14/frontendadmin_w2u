import React, { useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "./categoryCarousel.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryCarousel() {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const domain_URL = process.env.REACT_APP_DOMAIN_URL;
  const [category, setCategory] = useState([]);


  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(category_URL);
        // const response = await axios.get("http://35.154.107.53:5000/api/categories");
        setCategory(response.data);
      // console.log(response);
      } catch (err) {
        console.error(err.message);
      }
    };
    getCategory();
  }, []);
  return (
    <>
      <section className="position-relative py-0">
        <div className="container-fluid px-4">
          <div className="row">
            <Swiper
              loop={true}
              //   spaceBetween={-160}
              //   slidesPerView={1}
              keyboard={{
                enabled: true,
              }}
              //   pagination={{
              //     clickable: true,
              //     dynamicBullets: true,
              //   }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1300: {
                  slidesPerView: 9,
                  spaceBetween: -60,
                },
                1270: {
                  slidesPerView: 8,
                  spaceBetween: -40,
                },
                1220: {
                  slidesPerView: 8,
                  spaceBetween: -30,
                },
                1150: {
                  slidesPerView: 8,
                  spaceBetween: -20,
                },
                1050: {
                  slidesPerView: 8,
                  spaceBetween: 50,
                },
                960: {
                  slidesPerView: 7,
                  spaceBetween: 30,
                },
                820: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
                780: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                700: {
                  slidesPerView: 5,
                },
                670: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                630: {
                  slidesPerView: 4,
                  spaceBetween: -20,
                },
                600: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                550: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                520: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
                470: {
                  slidesPerView: 3,
                  spaceBetween: -10,
                },
                460: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                400: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                350: {
                  slidesPerView: 2,
                  spaceBetween: -60,
                },
              }}
              modules={[Pagination, Autoplay]}
            >
              {category.map((item, index) => {

                
                return (
                  <SwiperSlide key={index}>
                    {/* <div className="col-8 mx-auto">
                      <div className="card"></div>
                    </div> */}

                    <div className="ban-short-links ani">
                      <ul>
                        <li>
                          <div>
                            <img
                              // src={item.category_img}
                              src={`${domain_URL}${item.image}`}
                              // alt="categories"
                              loading="lazy"
                            />

                            <h4>{item.name}</h4>
                            <Link
                              to={`/${item.name.replace(/\s/g, "_")}/${item._id
                                }`}
                              className="fclick"
                            ></Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryCarousel;
