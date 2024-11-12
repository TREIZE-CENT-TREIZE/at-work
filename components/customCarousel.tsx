"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const CustomCarousel = () => {
  return (
    <div className="w-screen lg:w-[calc(100vw-300px)]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full"
        spaceBetween={0}
        slidesPerView={1}
        style={
          {
            "--swiper-theme-color": "white",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-width": "12px",
            "--swiper-pagination-bullet-height": "12px",
            "--swiper-pagination-bullet-inactive-color": "transparent",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bullet-border": "2px solid white",
            "--swiper-pagination-bullet-active-color": "white",
            "--swiper-navigation-color": "#DC2626",
            "--swiper-navigation-size": "18px",
            "--swiper-navigation-sides-offset": "20px",
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-background": "white",
            "--swiper-navigation-box-shadow":
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "--swiper-navigation-button-width": "40px",
            "--swiper-navigation-button-height": "40px",
            "--swiper-navigation-button-border-radius": "50%",
          } as React.CSSProperties
        }
        loop={true}
      >
        <SwiperSlide>
          <div className="w-full h-64 md:h-[250px] relative">
            <Image
              src="/bg-1.jpg"
              alt="Building exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-[250px] relative">
            <Image
              src="/bg-2.jpg"
              alt="Building exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-[250px] relative">
            <Image
              src="/bg-3.jpg"
              alt="Building exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-[250px] relative">
            <Image
              src="/bg-4.jpg"
              alt="Building exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <style>
        {`
          .swiper-pagination-bullet {
            border: 2px solid white !important;
            background: transparent !important;
          }
          .swiper-pagination-bullet-active {
            background: white !important;
          }
          .swiper-button-prev, .swiper-button-next {
            width: 40px !important;
            height: 40px !important;
            background: white !important;
            border-radius: 50% !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
          }
          .swiper-button-prev:after, .swiper-button-next:after {
            font-size: 18px !important;
            color: #DC2626;
          }
        `}
      </style>
    </div>
  );
};

export default CustomCarousel;
