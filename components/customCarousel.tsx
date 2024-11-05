"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

const CustomCarousel = () => {
  return (
    <div className="w-screen lg:w-[calc(100vw-300px)]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
        spaceBetween={0}
        slidesPerView={1}
        style={
          {
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          } as React.CSSProperties
        }
      >
        <SwiperSlide>
          <div className="w-full h-64 md:h-[270px] relative">
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
          <div className="w-full h-64 md:h-[270px] relative">
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
          <div className="w-full h-64 md:h-[270px] relative">
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
          <div className="w-full h-64 md:h-[270px] relative">
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
