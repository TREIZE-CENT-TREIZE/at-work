"use client";
import { GoArrowLeft, GoX } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { LuGrid } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";

const buildingImages = [
  { src: "/immeuble-1.jpg", alt: "Balconies with plants" },
  { src: "/immeuble-2.jpg", alt: "Garden entrance" },
  { src: "/immeuble-3.jpg", alt: "Building exterior" },
  { src: "/immeuble-4.jpg", alt: "Outdoor seating area" },
  { src: "/immeuble-5.jpg", alt: "Reception area" },
  { src: "/immeuble-6.jpg", alt: "Interior lobby" },
  { src: "/immeuble-7.jpg", alt: "Building facade" },
  { src: "/immeuble-8.jpg", alt: "Building entrance" },
  { src: "/immeuble-9.jpg", alt: "Building exterior view" },
  { src: "/immeuble-10.jpg", alt: "Working space" },
  { src: "/immeuble-11.jpg", alt: "Office space" },
  { src: "/immeuble-12.jpg", alt: "Open workspace" },
];

const surroundingsImages = [
  { src: "/quartier-1.jpg", alt: "Neighborhood view 1" },
  { src: "/quartier-2.jpg", alt: "Neighborhood view 2" },
  { src: "/quartier-3.jpg", alt: "Neighborhood view 3" },
  { src: "/quartier-4.jpg", alt: "Neighborhood view 4" },
  { src: "/quartier-5.jpg", alt: "Neighborhood view 1" },
  { src: "/quartier-6.jpg", alt: "Neighborhood view 2" },
  { src: "/quartier-7.jpg", alt: "Neighborhood view 3" },
  { src: "/quartier-8.jpg", alt: "Neighborhood view 4" },
  { src: "/quartier-9.jpg", alt: "Neighborhood view 1" },
  { src: "/quartier-10.jpg", alt: "Neighborhood view 2" },
  { src: "/quartier-11.jpg", alt: "Neighborhood view 3" },
  { src: "/quartier-12.jpg", alt: "Neighborhood view 4" },
  { src: "/quartier-13.jpg", alt: "Neighborhood view 1" },
  { src: "/quartier-14.jpg", alt: "Neighborhood view 2" },
  { src: "/quartier-15.jpg", alt: "Neighborhood view 3" },
  { src: "/quartier-16.jpg", alt: "Neighborhood view 4" },
  { src: "/quartier-17.jpg", alt: "Neighborhood view 1" },
  { src: "/quartier-18.jpg", alt: "Neighborhood view 2" },
  { src: "/quartier-19.jpg", alt: "Neighborhood view 3" },
  { src: "/quartier-20.jpg", alt: "Neighborhood view 4" },
  { src: "/quartier-21.jpg", alt: "Neighborhood view 1" },
  { src: "/quartier-22.jpg", alt: "Neighborhood view 2" },
  { src: "/quartier-23.jpg", alt: "Neighborhood view 3" },
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
    setIsZoomed(false); // Reset zoom when opening new image
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Galerie</h1>
      </div>
      <main className="flex-1 overflow-auto mt-4 mb-24 px-2">
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
                className="object-cover rounded-lg transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 w-full right-0 h-20 bg-[#E6E6E6] flex items-center justify-center">
          <div className="flex items-center justify-center gap-16 lg:ml-[20%]">
            <button
              onClick={() => setMode("building")}
              className={`flex flex-col items-center justify-center border-gray-300 hover:bg-gray-200 transition-colors ${
                mode === "building" ? "bg-gray-200" : ""
              }`}
            >
              <FaBuilding
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
              <FaMapMarkedAlt
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
      </main>

      {/* Fullscreen Carousel Modal */}
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
