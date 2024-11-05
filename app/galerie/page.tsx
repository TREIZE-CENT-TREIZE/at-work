"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";

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

  const currentImages =
    mode === "building" ? buildingImages : surroundingsImages;

  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-primary h-14 text-white lg:pl-[12%] flex items-center gap-6 pl-3">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Galerie</h1>
      </div>
      <main className="max-w-6xl mx-auto p-4 lg:pl-[15%] min-h-screen pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((image, index) => (
            <div key={index} className="relative aspect-square group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 w-full right-0 lg:w-[75%] h-20 bg-[#E6E6E6]">
          <div className="max-w-6xl mx-auto h-full">
            <div className="grid grid-cols-2 h-full">
              <button
                onClick={() => setMode("building")}
                className={`flex flex-col items-center justify-center border-r border-gray-300 hover:bg-gray-200 transition-colors ${
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
        </div>
      </main>
    </div>
  );
}
