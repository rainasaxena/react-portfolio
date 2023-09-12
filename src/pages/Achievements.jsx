import React, { useRef, useState } from "react";
import "../assets/styles/Achievements.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Achievements = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div id="ach-container" >

      <h1>ACHIEVEMENTS</h1>
      <Swiper data-aos="fade-left"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><h3>Diploma in IDGrafx</h3><h5>2012</h5></SwiperSlide>
        <SwiperSlide><h3>Workshop on ‘Organic Architecture’</h3><h5>2012</h5></SwiperSlide>
        <SwiperSlide><h3>Exposure program on ‘Laurie Baker Philosophy in Architecture and Building Technology’</h3><h5>2014</h5></SwiperSlide>
        <SwiperSlide><h3>Training on ‘Conservation Engineering’, INTACH Bhopal Chapter</h3><h5>2015</h5></SwiperSlide>
        <SwiperSlide><h3>Autodesk Certified Professional: AutoCAD</h3><h5>2018</h5></SwiperSlide>
        <SwiperSlide><h3>C.O.A. Workshop on ‘Future of Past: Adaptation of Virtues in Traditional Architecture’</h3><h5>2019</h5></SwiperSlide>
        <SwiperSlide><h3>Faculty Development Program on ‘Methods in Qualitative Research’</h3><h5>2019</h5></SwiperSlide>
        <SwiperSlide><h3>National Training Program on ‘Architecture Aptitude and Education’</h3><h5>2019</h5></SwiperSlide>
        <SwiperSlide><h3>Google Digital Unlocked: The Fundamentals of Digital Marketing</h3><h5>2020</h5></SwiperSlide>
        <SwiperSlide><h3>Short Term Training Program on ‘Vastushastra’</h3><h5>2020</h5></SwiperSlide>
        <SwiperSlide><h3>Assochan GEM Webinar on ‘Air Syndrome in Post COVID-19 Capacity Buildings’</h3><h5>2020</h5></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Achievements;


