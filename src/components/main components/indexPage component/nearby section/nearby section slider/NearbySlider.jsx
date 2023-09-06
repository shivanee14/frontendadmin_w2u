import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
function NearbySlider() {


    const firstCarousel = [
        {
            subTitle: "Tourist Place1",
            imgUrls: [
                "/assets/images/ud2.jpg",
                "/assets/images/ud3.jpg",
                "/assets/images/ud4.jpg",
            ],
        },
        {
            subTitle: "Tourist Place2",
            imgUrls: [
                "/assets/images/ud1.jpg",
                "/assets/images/ud5.jpg",
                "/assets/images/ud6.jpg",
            ],
        },
        {
            subTitle: "Tourist Place3",
            imgUrls: [
                "/assets/images/ud7.jpg",
                "/assets/images/adv-4.png",
                "/assets/images/ud2.jpg",
            ],
        },
        {
            subTitle: "Destination Wedding",
            imgUrls: [
                "/assets/images/ud4.jpg",
                "/assets/images/ud1.jpg",
                "/assets/images/ud3.jpg",
            ],
        },
    ];


    return (
        <>
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
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
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
                    {firstCarousel && firstCarousel.map((data, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className="card card-overlay-bottom card-grid-sm card-bg-scale"
                                    style={{ height: "13rem" }}
                                >
                                    <div className="position-relative h-100">
                                        <img
                                            src={`${data.imgUrls[0]}`}
                                            className=" w-100 h-100"
                                            alt="..."
                                        />
                                    </div>

                                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                                        <div className="w-100 mt-auto">
                                            <h4 className="text-white">
                                                <a
                                                    href="#"
                                                    className="btn-link stretched-link text-reset"
                                                >
                                                    {data.subTitle}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </>
        </>
    )
}

export default NearbySlider



