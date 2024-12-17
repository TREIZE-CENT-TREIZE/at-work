"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type Props = {
  src: string;
  alt: string;
  initialScale?: number;
  className?: string;
};

export const ZoomableImage = ({
  src,
  alt,
  initialScale = 1,
  className = "",
}: Props) => {
  const [scale, setScale] = useState(initialScale);

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <div className={`relative px-20 ${className}`}>
      <div className="w-full aspect-video relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-200"
          style={{ transform: `scale(${scale})` }}
        />
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2 drop-shadow-xl rounded-xl">
        <button
          onClick={zoomOut}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          disabled={scale <= 0.75}
        >
          <FaMinus className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={zoomIn}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          disabled={scale >= 2.5}
        >
          <FaPlus className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
