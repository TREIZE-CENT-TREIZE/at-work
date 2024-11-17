import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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
        <div className="max-w-6xl mx-auto h-full">
          <div className="w-full aspect-video relative mt-10">
            <Image
              src="/axio.svg"
              alt="transport plan"
              fill
              className="object-contain scale-125"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
