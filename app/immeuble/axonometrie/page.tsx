import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/immeuble">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Axonométrie</h1>
      </div>

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto h-full">
          <div className="h-full w-full">
            <iframe
              src="/pdfjs/web/viewer.html?file=/axio.pdf#toolbar=0&navpanes=0&zoom=page-width"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
