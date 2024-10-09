import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from 'swiper/modules';
import Button from "../utils/Button";

const BannerSlider = () => {
  return (
    <section id="banner">
      <Swiper
        navigation={{ enabled: true, nextEl: ".nextArrow" }}
        modules={[Navigation]}
        className="bannerSlide"
      >
        <button className="nextArrow">next</button>
        <SwiperSlide
          className="bannerSlider"
          style={{ background: "url(/images/bannerBg.png)" }}
        >
          <div className="container  h-100">
            <div className="row align-items-center h-100">
              <div className="bannerCnt">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="img-fluid"
                      src="/images/banerImage.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <h5>Welcome to shopery</h5>
                    <h2>Fresh & Healthy Organic Food</h2>
                    <h3>
                      Sale up to <span>30% OFF</span>
                    </h3>
                    <p>
                      Free shipping on all your order. we deliver, you enjoy
                    </p>
                    <Button className="mt-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bannerSlider"
          style={{ background: "url(/images/bannerBg2.png)" }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{ background: "url(/images/bannerBg.png)" }}
          className="bannerSlider"
        >
          Slide 3
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;
