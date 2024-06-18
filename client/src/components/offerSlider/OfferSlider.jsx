import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import OfferCard from "../../components/Card/Card";
import DelhiImg from '../../assets/ServicesCard_img/Delhi.webp'
import ManaliImg from '../../assets/ServicesCard_img/Manali.webp'
import Dalhousie from '../../assets/ServicesCard_img/Dalhousie Dharamshala.webp'
import jaipurImg from '../../assets/ServicesCard_img/jaipur.webp'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./offerSlider.css";

import { Navigation } from "swiper/modules";

const OfferSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        mousewheel={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <OfferCard
            imgSrc={DelhiImg}
            cardTitle={"Chandigarh to Delhi"}
            subTitle={"Economical compact car"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferCard
            imgSrc={
              jaipurImg
            }
            cardTitle={"Jaipur Tour"}
            subTitle={"Economical compact car"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferCard
            imgSrc={ManaliImg}
            cardTitle={"Shimla Manali Tour"}
            subTitle={"Economical compact car"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferCard
            imgSrc={Dalhousie}
            cardTitle={"Dalhousie Dharamshala"}
            subTitle={"Economical compact car"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OfferSlider;
