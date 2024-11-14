"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { LuGrid } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";

import immeuble1 from "@/public/immeuble-1.jpg";
import immeuble2 from "@/public/immeuble-2.jpg";
import immeuble3 from "@/public/immeuble-3.jpg";
import immeuble4 from "@/public/immeuble-4.jpg";
import immeuble5 from "@/public/immeuble-5.jpg";
import immeuble6 from "@/public/immeuble-6.jpg";
import immeuble7 from "@/public/immeuble-7.jpg";
import immeuble8 from "@/public/immeuble-8.jpg";
import immeuble9 from "@/public/immeuble-9.jpg";
import immeuble10 from "@/public/immeuble-10.jpg";
import immeuble11 from "@/public/immeuble-11.jpg";
import immeuble12 from "@/public/immeuble-12.jpg";

import quartier1 from "@/public/quartier-1.jpg";
import quartier2 from "@/public/quartier-2.jpg";
import quartier3 from "@/public/quartier-3.jpg";
import quartier4 from "@/public/quartier-4.jpg";
import quartier5 from "@/public/quartier-5.jpg";
import quartier6 from "@/public/quartier-6.jpg";
import quartier7 from "@/public/quartier-7.jpg";
import quartier8 from "@/public/quartier-8.jpg";
import quartier9 from "@/public/quartier-9.jpg";
import quartier10 from "@/public/quartier-10.jpg";
import quartier11 from "@/public/quartier-11.jpg";
import quartier12 from "@/public/quartier-12.jpg";
import quartier13 from "@/public/quartier-13.jpg";
import quartier14 from "@/public/quartier-14.jpg";
import quartier15 from "@/public/quartier-15.jpg";
import quartier16 from "@/public/quartier-16.jpg";
import quartier17 from "@/public/quartier-17.jpg";
import quartier18 from "@/public/quartier-18.jpg";
import quartier19 from "@/public/quartier-19.jpg";
import quartier20 from "@/public/quartier-20.jpg";
import quartier21 from "@/public/quartier-21.jpg";
import quartier22 from "@/public/quartier-22.jpg";
import quartier23 from "@/public/quartier-23.jpg";
import Quartiericon from "@/components/icons/quartiericon";
import ImmeubleIcon from "@/components/icons/immeubleIcon";

const buildingImages = [
  { src: immeuble1, alt: "Balconies with plants" },
  { src: immeuble2, alt: "Garden entrance" },
  { src: immeuble3, alt: "Building exterior" },
  { src: immeuble4, alt: "Outdoor seating area" },
  { src: immeuble5, alt: "Reception area" },
  { src: immeuble6, alt: "Interior lobby" },
  { src: immeuble7, alt: "Building facade" },
  { src: immeuble8, alt: "Building entrance" },
  { src: immeuble9, alt: "Building exterior view" },
  { src: immeuble10, alt: "Working space" },
  { src: immeuble11, alt: "Office space" },
  { src: immeuble12, alt: "Open workspace" },
];

const surroundingsImages = [
  { src: quartier1, alt: "Neighborhood view 1" },
  { src: quartier2, alt: "Neighborhood view 2" },
  { src: quartier3, alt: "Neighborhood view 3" },
  { src: quartier4, alt: "Neighborhood view 4" },
  { src: quartier5, alt: "Neighborhood view 5" },
  { src: quartier6, alt: "Neighborhood view 6" },
  { src: quartier7, alt: "Neighborhood view 7" },
  { src: quartier8, alt: "Neighborhood view 8" },
  { src: quartier9, alt: "Neighborhood view 9" },
  { src: quartier10, alt: "Neighborhood view 10" },
  { src: quartier11, alt: "Neighborhood view 11" },
  { src: quartier12, alt: "Neighborhood view 12" },
  { src: quartier13, alt: "Neighborhood view 13" },
  { src: quartier14, alt: "Neighborhood view 14" },
  { src: quartier15, alt: "Neighborhood view 15" },
  { src: quartier16, alt: "Neighborhood view 16" },
  { src: quartier17, alt: "Neighborhood view 17" },
  { src: quartier18, alt: "Neighborhood view 18" },
  { src: quartier19, alt: "Neighborhood view 19" },
  { src: quartier20, alt: "Neighborhood view 20" },
  { src: quartier21, alt: "Neighborhood view 21" },
  { src: quartier22, alt: "Neighborhood view 22" },
  { src: quartier23, alt: "Neighborhood view 23" },
];

export default function Page() {
  const [mode, setMode] = useState<"building" | "surroundings">("building");
  const [showCarousel, setShowCarousel] = useState(false);
  const [startSlide, setStartSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImages =
    mode === "building" ? buildingImages : surroundingsImages;

  const openCarousel = (index: number) => {
    setStartSlide(index);
    setShowCarousel(true);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="h-screen flex flex-col pb-8">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Galerie</h1>
      </div>

      <div className="h-20 bg-[#E6E6E6] flex items-center justify-center">
        <div className="flex items-center justify-center gap-16 ">
          <button
            onClick={() => setMode("building")}
            className={`flex flex-col items-center justify-center border-gray-300 hover:bg-gray-200 transition-colors ${
              mode === "building" ? "bg-gray-200" : ""
            }`}
          >
            <ImmeubleIcon
              className={`w-6 h-6 ${
                mode === "building" ? "text-primary" : "text-gray-600"
              }`}
            />
            <span
              className={`text-sm font-medium mt-1 ${
                mode === "building" ? "text-primary" : "text-gray-600"
              }`}
            >
              Immeuble
            </span>
          </button>
          <button
            onClick={() => setMode("surroundings")}
            className={`flex flex-col items-center justify-center hover:bg-gray-200 transition-colors ${
              mode === "surroundings" ? "bg-gray-200" : ""
            }`}
          >
            <Quartiericon
              className={`w-6 h-6 ${
                mode === "surroundings" ? "text-primary" : "text-gray-600"
              }`}
            />
            <span
              className={`text-sm font-medium mt-1 ${
                mode === "surroundings" ? "text-primary" : "text-gray-600"
              }`}
            >
              Quartier
            </span>
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-auto mt-4 px-2">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square group cursor-pointer"
              onClick={() => openCarousel(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                placeholder="blur"
                className="object-cover rounded-lg transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </main>

      {showCarousel && (
        <div className="fixed inset-0 bg-black z-50">
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between">
            <button
              onClick={() => setShowCarousel(false)}
              className="text-white hover:text-gray-300 transition-colors bg-primary p-2 rounded-md"
            >
              <LuGrid className="text-white w-6 h-6" />
            </button>
            <button
              onClick={toggleZoom}
              className="text-white hover:text-gray-300 transition-colors bg-primary p-2 rounded-md"
            >
              <MdFullscreen className="text-white w-6 h-6" />
            </button>
          </div>
          <Swiper
            initialSlide={startSlide}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full h-full"
            style={
              {
                "--swiper-pagination-color": "white",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "24px",
              } as React.CSSProperties
            }
          >
            {currentImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center overflow-hidden"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
