import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";

function SponsoredNewsSlider() {
  const sponsoredNews = [
    {
      subTitle: "Technology",
      imgUrls: [
        "/assets/images/ud5.jpg",
        "/assets/images/blog/4by3/07.jpg",
        "/assets/images/blog/4by3/11.jpg",
      ],
    },
    {
      subTitle: "Travel",
      imgUrls: [
        "/assets/images/ud1.jpg",
        "/assets/images/blog/4by3/07.jpg",
        "/assets/images/blog/4by3/11.jpg",
      ],
    },
    {
      subTitle: "Gadgets",
      imgUrls: [
        "/assets/images/adv-4.png",
        "/assets/images/blog/4by3/09.jpg",
        "/assets/images/blog/4by3/11.jpg",

      ],
    },
    {
      subTitle: "Sports",
      imgUrls: [
        "/assets/images/ud3.jpg",
        "/assets/images/blog/4by3/11.jpg",

        "/assets/images/blog/4by3/10.jpg",
      ],
    },
    {
      subTitle: "Photography",
      imgUrls: [
        "/assets/images/ud4.jpg",
        "/assets/images/blog/4by3/09.jpg",
        "/assets/images/blog/4by3/11.jpg",
      ],
    },
  ];

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
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
        modules={[Keyboard, Pagination, Autoplay]}
        // className="mySwiper"
      >
        {sponsoredNews.map((item, index) => {
          return (
            <SwiperSlide key={index}>
                <div className="card ">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      style={{height:"12rem"}}
                      src={`${item.imgUrls[0]}`}
                      alt="Card images"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay Top */}
                      <div className="w-100 mb-auto d-flex justify-content-end">
                        <div className="text-end ms-auto">
                          {/* Card format icon */}
                          <div
                            className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                            title="8.5 rating"
                          >
                            8.5
                          </div>
                        </div>
                      </div>
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="/" className="badge text-bg-info mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          {item.subTitle}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h5 className="card-title">
                      <a href="/" className="btn-link text-reset fw-bold">
                        7 common mistakes everyone makes while traveling
                      </a>
                    </h5>
                  </div>
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SponsoredNewsSlider;
