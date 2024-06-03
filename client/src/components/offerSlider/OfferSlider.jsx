import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import OfferCard from "../../components/Card/Card";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './offerSlider.css'


import { Navigation } from 'swiper/modules';

const OfferSlider=()=> {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><OfferCard imgSrc={"https://images.unsplash.com/photo-1571677465484-2dd540924245?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide> <OfferCard imgSrc={"https://images.unsplash.com/photo-1506268452458-bfb3757ed859?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide><OfferCard imgSrc={"https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide> <OfferCard imgSrc={"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide><OfferCard imgSrc={"https://images.unsplash.com/photo-1571677465484-2dd540924245?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide> <OfferCard imgSrc={"https://images.unsplash.com/photo-1506268452458-bfb3757ed859?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide><OfferCard imgSrc={"https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
        <SwiperSlide> <OfferCard imgSrc={"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /></SwiperSlide>
      </Swiper>

    </>
  );
}


export default OfferSlider


               

              