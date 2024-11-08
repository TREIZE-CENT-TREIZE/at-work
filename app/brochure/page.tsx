import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Brochure</h1>
      </div>
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto h-full">
          <div className="h-full w-full">
            <iframe
              src="/pdfjs/web/viewer.html?file=/brochure.pdf#toolbar=0&navpanes=0"
              className="w-full h-full"
              title="Brochure PDF"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
