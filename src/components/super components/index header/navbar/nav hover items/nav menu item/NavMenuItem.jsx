import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";

function NavMenuItem() {
  const arr = [1, 2, 3, 4, 5];

  // eslint-disable-next-line
  const [navMenuItem, setNavMenuitem] = useState([]);

  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  // set category link Menu item

  useEffect(() => {
    const getNavMenuItem = async () => {
      try {
        const response = await axios.get(category_URL);
        setNavMenuitem(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getNavMenuItem();
  }, []);

  return (
    <>
      <div className="row g-4 p-3 flex-fill">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Keyboard, Pagination, Autoplay, Navigation]}
        >
          {arr.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {/* {console.log(navMenuItem)} */}
                {/* <div className="col-sm-6 col-lg-3"> */}
                <div className="card bg-transparent">
                  <img
                    className="card-img rounded"
                    src="/assets/images/blog/16by9/small/01.jpg"
                    alt="CardImage"
                  />
                  <div className="card-body px-0 pt-3">
                    <h6 className="card-title mb-0">
                      <a href="/" className="btn-link text-reset fw-bold">
                        7 common mistakes everyone makes while traveling
                      </a>
                    </h6>
                    <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                      <li className="nav-item">
                        <a href="/" className="text-reset btn-link">
                          Joan Wallace {item}
                        </a>
                      </li>
                      <li className="nav-item">Feb 18, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default NavMenuItem;
