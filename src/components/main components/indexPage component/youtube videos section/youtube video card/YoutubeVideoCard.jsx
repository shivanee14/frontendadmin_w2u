import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";

function YoutubeVideoCard() {
  const youtube = [1, 2, 3, 4, 5];

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
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
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
        navigation={true}
        // Autoplay
        modules={[Keyboard, Pagination,Autoplay, Navigation]}
      // className="mySwiper"
      >
        {youtube.map((item, index) => {
          return (
            <SwiperSlide item={item} key={index}>
              <div>
                {/* Card Image overlay */}
                <iframe
                  // width={253}
                  // height={264}
                  className="container-fluid h-100"
                  src="https://www.youtube.com/embed/BQqEpDIT_MA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default YoutubeVideoCard;
