import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-primary h-14 text-white lg:pl-[12%] flex items-center gap-6 pl-3">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Brochure</h1>
      </div>
      <main className="max-w-6xl mx-auto p-4 lg:pl-[15%] bg-[#333333] min-h-screen">
        <div className="flex justify-center items-center h-[calc(100vh-3.5rem)]">
          <iframe
            src="/brochure.pdf#view=FitH"
            className="w-full h-full rounded-lg"
            title="Brochure PDF"
          />
        </div>
      </main>
    </div>
  );
}
