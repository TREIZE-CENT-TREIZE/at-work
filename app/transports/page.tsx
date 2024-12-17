import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { PiCarLight, PiTrain } from "react-icons/pi";
import { ZoomableImage } from "@/components/zoomableImage";
import { TransportSection } from "@/components/transportSection";

const TRANSPORT_SECTIONS = [
  {
    title: "TEMPS DE DEPLACEMENT",
    icon: <PiTrain className="w-6 h-6 text-gray-600" />,
    items: [
      { line: "A86", time: "3'" },
      { line: "Boulevard périphérique", time: "7'" },
      { line: "Porte Maillot", time: "17'" },
      { line: "La Défense (Grande Arche)", time: "23'" },
      { line: "Aéroport Paris-Charles de Gaulle", time: "25'" },
    ],
    source: "Waze",
  },
  {
    title: "TEMPS DE TRANSPORT",
    icon: <PiCarLight className="w-6 h-6 text-gray-600" />,
    items: [
      { line: "M14", station: "Gare Saint-Lazare", time: "11'" },
      { line: "M14", station: "Châtelet-Les Halles", time: "15'" },
      { line: "M14", station: "Gare de Lyon", time: "18'" },
      { line: "M14/RER E", station: "La Défense", time: "24'" },
      { line: "M13", station: "Gare Montparnasse", time: "24'" },
    ],
  },
  {
    title: "TRANSPORT À PROXIMITÉ",
    icon: <PiTrain className="w-6 h-6 text-gray-600" />,
    items: [
      { line: "M14", station: "Saint-Denis Pleyel", time: "8'" },
      { line: "M13", station: "Carrefour Pleyel", time: "5'" },
      { line: "RER D", station: "Stade de France - Saint-Denis", time: "11'" },
    ],
    source: "RATP",
  },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Transports</h1>
      </div>
      <main className="flex-1 overflow-auto overflow-x-hidden">
        <div className="space-y-8">
          <ZoomableImage
            src="/transports-1.svg"
            alt="transport plan"
            initialScale={1.25}
            className="mt-10"
          />

          <div className="px-4 mt-10">
            {TRANSPORT_SECTIONS.map((section, index) => (
              <TransportSection
                key={index}
                title={section.title}
                icon={section.icon}
                items={section.items}
                source={section.source}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
