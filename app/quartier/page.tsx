import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { ZoomableImage } from "@/components/zoomableImage";
import { StatItem } from "@/components/statItem";
import Image from "next/image";

const stats = [
  { value: "3 200 M²", label: "de commerces de proximité" },
  { value: "6 HECTARES", label: "d'espaces verts" },
  { value: "1 LABO", label: "d'innovation handicap handilab" },
  { value: "1 HÔTEL 4*", label: "H4 Hôtel WYNDHAM PARIS PLEYEL RESORT" },
  {
    value: "1 KM",
    label: "de promenade pietonne sur les berges de Seine et piste cyclable",
  },
  { value: "1 NOUVEL ÉCHANGEUR", label: "par l'A86" },
  { value: "1 CENTRE DE CONFERENCE", label: "de 10 000 m²" },
];

const sportStats = [
  { value: "1 PISCINE", label: "olympique" },
  { value: "1 PARC", label: "des sports de 117 000 m²" },
  { value: "LE PETIT STADE", label: "(annexe du Stade de France)" },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Quartier</h1>
      </div>
      <main className="flex-1 overflow-auto">
        <div className="w-full aspect-video relative">
          <ZoomableImage
            src="/quartier.svg"
            alt="transport plan"
            initialScale={1.25}
            className="w-full h-full"
          />
        </div>

        <div className="bg-gray-50/50 p-6">
          <div className="space-y-8">
            <div className="flex gap-2 items-center">
              <Image
                width={25}
                height={25}
                alt=""
                src="/icons/quartier-3.svg"
                className="flex-shrink-0"
              />
              <h3 className="text-base">
                AMÉNAGEMENT MOBILITÉS ET QUALITÉ DE VIE
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-xl ml-8">
              {stats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <Image
                width={25}
                height={25}
                alt=""
                src="/icons/quartier-4.svg"
                className="flex-shrink-0"
              />
              <h3 className="text-base">ÉQUIPEMENTS SPORTIFS</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-xl ml-8">
              {sportStats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
