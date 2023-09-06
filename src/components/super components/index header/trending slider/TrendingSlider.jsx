import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";

function TrendingSlider() {


  return (
    <>
      <section className="py-2">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
              <div className="d-sm-flex align-items-center text-center text-sm-start">
                {/* Title */}
                <div className="me-3">
                  <span className="badge bg-primary p-2 px-3">Trending:</span>
                </div>

                {
                  slider()
                }
              </div>
            </div>
          </div>
          {/* Row END */}
        </div>
      </section>
    </>
  );
}

export default TrendingSlider;


function slider() {
  const trending = ["The most common business debate isn't as black and white as you might think","How the 10 worst business fails of all time could have been prevented", "The most common business debate isn't as black and white as you might think"]
  return(
          <>
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              autoplay=
              {{
                delay: 3000,
                disableOnInteraction: false,
              }}
                modules={[Autoplay]}
              >
                {
                trending.map((data,index)=>{
                  return  (
                    <SwiperSlide key={index}>
              <div>
                      <a href="/" className="text-reset btn-link">
                        {data}
                      </a>
              </div>
              </SwiperSlide>

                  )
                })}
              
            </Swiper>
          </>
          )
}
