"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-primary h-14 text-white lg:pl-[12%] flex items-center gap-6 pl-3">
        <Link href="/immeuble">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Axonométrie</h1>
      </div>
      <main className="max-w-6xl mx-auto lg:pl-[10%]">
        <div className="relative md:h-screen h-[700px] w-full">
          <Image src="/axo.png" fill alt="top" />
        </div>
        <div className="flex flex-col gap-8"></div>
      </main>
    </div>
  );
}
