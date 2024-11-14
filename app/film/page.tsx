"use client";
import { GoArrowLeft } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";

export default function Page() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/video.mp4");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "at-work.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Film</h1>
      </div>
      <main className="flex-1 overflow-y-hidden bg-[#333333] md:px-14">
        <div className="flex justify-center items-center h-[calc(100vh-3.5rem)]">
          <video
            src="/video.mp4"
            controls
            className="max-w-full max-h-[80vh] w-auto h-auto"
            poster="/poster.png"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
      <div className="bg-[#222528] h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0 justify-end pr-2">
        <MdFileDownload
          onClick={handleDownload}
          className="text-primary w-10 h-10 hover:bg-slate-100/20 rounded-full p-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
