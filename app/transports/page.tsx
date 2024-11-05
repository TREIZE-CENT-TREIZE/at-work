"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-primary h-14 text-white lg:pl-[12%] flex items-center gap-6 pl-3">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Transports</h1>
      </div>
      <main className="max-w-6xl mx-auto p-4 lg:pl-[15%] min-h-screen">
        <div className="flex flex-col gap-8">
          <embed
            src="/transports.pdf#page=1&view=Fit&scrollbar=0&toolbar=0&navpanes=0"
            type="application/pdf"
            className="w-full h-[calc(100vh-4rem)] rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
