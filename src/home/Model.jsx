import React from "react";

import HomeImg from "../assets/talent-forge-01.png";
import AboutImg from "../assets/talent-forge02.jpg";


//Import swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Autoplay } from "swiper/modules";

const Model = () => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sponsor-item d-flex justify-content-center">
            <div className="sponsor-thumb">
              
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="sponsor-item d-flex justify-content-center">
            <div className="sponsor-thumb">
              <img src={HomeImg} width={200} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor-item d-flex justify-content-center">
            <div className="sponsor-thumb">
              <img src="./talent-forge-logo.png" width={200} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor-item d-flex justify-content-center">
            <div className="sponsor-thumb">
              <img src="./talent-forge-logo.png" width={200} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor-item d-flex justify-content-center">
            <div className="sponsor-thumb">
              <img src="./talent-forge-logo.png" width={200} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor-item d-flex justify-content-center">
            <div className="sponsor-thumb">
              <img src="./talent-forge-logo.png" width={200} alt="" />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Model;
