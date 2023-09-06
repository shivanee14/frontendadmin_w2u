import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function CardItem() {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const business_URL = process.env.REACT_APP_BUSINESS_LISTING;

  const domain_URL = process.env.REACT_APP_DOMAIN_URL;
  const online_directory_id = process.env.REACT_APP_ONLINE_DIRECTORY_ID

  const [category_data, setCategory_data] = useState([]);
  const [business_data, setBusiness_data] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${category_URL}/${online_directory_id}/subcategories`);
      // console.log(response.data);
      setCategory_data(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchbusiness = async () => {
    try {
      const response = await axios.get(business_URL);
      setBusiness_data(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    fetchData();
    fetchbusiness()
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          380: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Autoplay, Navigation]}
      >
        {business_data && business_data.map((data, index) => {


          return (
            <SwiperSlide key={index}>
              <div
                className="card card-overlay-bottom card-grid-sm card-bg-scale"
                style={{ height: "13rem" }}
              >
                <div className="position-relative h-100">
                  <img
                    // src="/assets/images/ud4.jpg"
                    src={`${domain_URL}${data.logoimage}`}
                    className="w-100 h-100"
                    alt="..."
                  />
                </div>

                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <h4 className="text-white">
                      <Link
                        // to={`/${data.name.replace(/\s/g, "_")}/${online_directory_id}/${data.name.replace(/\s/g, "_")}/${data._id}`}
                        to="#"
                        className="btn-link stretched-link text-reset"
                      >
                        {data.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}

export default CardItem;
