import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Film</h1>
      </div>
      <main className="flex-1 overflow-auto bg-[#333333] md:px-14">
        <div className="flex justify-center items-center h-[calc(100vh-3.5rem)]">
          <video
            src="/video.mp4"
            controls
            className="max-w-full max-h-[80vh] w-auto h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </div>
  );
}
