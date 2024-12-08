// components/SwiperComponent.jsx
import React, { useEffect } from "react";
import Swiper from "swiper/bundle"; // Import the Swiper bundle
import "swiper/swiper-bundle.css"; // Import the Swiper CSS

const SwiperComponent = ({ images }) => {
  useEffect(() => {
    new Swiper("#slider1 .slider-content", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,

      navigation: {
        nextEl: "#slider1 .swiper-button-next",
        prevEl: "#slider1 .swiper-button-prev",
      },

      pagination: {
        el: "#slider1 .swiper-pagination",
        clickable: true,
      },

      autoplay: {
        delay: 3000, // Delay between transitions
        disableOnInteraction: false, // Continue autoplay after user interactions
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        520: {
          slidesPerView: 2,
          pagination: false,
         
        },
        1000: {
          slidesPerView: 3,
          pagination: false,
          navigation:true
        },
        1200: {
          slidesPerView: 4,
          pagination: false,
          
        },
      },
    });

    console.log("Swiper initialized");
  }, []);

  return (
    <div className="container pb-5 mt-3">
      <div id="slider1" className="slider-container swiper">
        <div className="slider-content">
          <div className="card-wrapper swiper-wrapper">
            {images.map((image, index) => (
              <div className="card1 swiper-slide" key={index}>
                <div className="d-flex justify-content-center">
                  <img src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
      </div>
    </div>
  );
};

export default SwiperComponent;
