import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { PiTrain } from "react-icons/pi";
import Image from "next/image";

const transportTimes = [
  { line: "M13", station: "Gare Saint-Lazare", time: "13'" },
  { line: "M13/M2", station: "Charles de Gaulle-Étoile", time: "20'" },
  { line: "RER D", station: "Châtelet-Les Halles", time: "20'" },
  { line: "M13", station: "Gare Montparnasse", time: "24'" },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Transports</h1>
      </div>
      <main className="flex-1 overflow-auto overflow-x-hidden">
        <div className="space-y-8">
          <div className="w-full aspect-video relative mt-10">
            <Image
              src="/transports-1.svg"
              alt="transport plan"
              fill
              className="object-contain scale-125"
            />
          </div>

          <div className="px-4 mt-10">
            <div className="p-4 rounded-lg">
              <h2 className="text-lg font-normal mb-4 flex items-center gap-2 bg-gray-100 p-1">
                <PiTrain className="w-6 h-6 text-primary" />
                <p className="break-words">
                  <span>TEMPS DE TRANSPORT </span>
                  <span className="font-bold">AUJOURD&apos;HUI</span>
                </p>
              </h2>
              <div className="space-y-3">
                {transportTimes.map((transport, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-1 text-gray-500"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{transport.line}</span>
                      <span>{transport.station}</span>
                    </div>
                    <span>{transport.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">Source : RATP</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
