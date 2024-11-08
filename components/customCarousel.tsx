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
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-navigation-color": "#DC2626",
            "--swiper-navigation-size": "24px",
            "--swiper-navigation-sides-offset": "20px",
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-background-color": "white",
            "--swiper-navigation-border-radius": "50%",
            "--swiper-navigation-padding": "20px",
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
    </div>
  );
};

export default CustomCarousel;
