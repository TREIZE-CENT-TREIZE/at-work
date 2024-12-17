import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";
import { ZoomableImage } from "@/components/zoomableImage";
import { StatItem } from "@/components/statItem";

const stats = [
  { value: "1ER", label: "hub\ndu Grand Paris" },
  { value: "1", label: "écoQuartier" },
  { value: "500 M2", label: "de jardin" },
  { value: "150 M2", label: "de balcons\net terrasses" },
  { value: "45 %", label: "déjà loués" },
  { value: "2,90 M", label: "de hauteur\nsous plafond" },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/immeuble">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Axonométrie</h1>
      </div>

      <main className="flex-1 overflow-auto overflow-x-hidden">
        <div className="space-y-8">
          <div className="w-full aspect-video relative mt-10">
            <ZoomableImage
              src="/axio.svg"
              alt="transport plan"
              initialScale={1.25}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full bg-gray-50/50 p-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-xl mx-auto">
              {stats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
