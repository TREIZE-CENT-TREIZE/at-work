import Image from "next/image";
import { MapPinIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { PiTrain, PiImagesLight } from "react-icons/pi";
import { FaRegMap } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import CustomCarousel from "@/components/customCarousel";
import { GridItem } from "@/components/gridItem";

const gridItems = [
  {
    title: "Film",
    icon: VideoCameraIcon,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/film",
    internal: true,
  },
  {
    title: "Transports",
    icon: PiTrain,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/transports",
    internal: true,
  },
  {
    title: "Quartier",
    icon: MapPinIcon,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/quartier",
    internal: true,
  },
  {
    title: "Immeuble",
    icon: FaRegMap,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/immeuble",
    internal: true,
  },
  {
    title: "Galerie",
    icon: PiImagesLight,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/galerie",
    internal: true,
  },
  {
    title: "Brochure",
    icon: LuClipboardList,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/brochure",
    internal: true,
  },
  {
    title: "Contacts",
    icon: FaRegAddressBook,
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/contacts",
    internal: true,
  },
  {
    title: "Time Chef",
    logo: "/time-chef.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://timechef.elior.com/#/login",
    internal: false,
  },
  {
    title: "Uber Eats",
    logo: "/uber-eats-logo.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://ubereats.com",
    internal: false,
  },
  {
    title: "Frichti",
    logo: "/frichti.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://www.frichti.co/landing",
    internal: false,
  },
  {
    title: "Foodles",
    logo: "/foodles.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://www.foodles.co",
    internal: false,
  },
  {
    title: "Train Me",
    logo: "/train-me.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://trainme.co/fr",
    internal: false,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)] max-w-full">
      <div>
        <div className="relative">
          <CustomCarousel />
        </div>
        <main className="mx-auto px-8 lg:px-[7%] pb-4">
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-2">
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                href={item.href}
                external={!item.internal}
                className={`${item.bgColor} ${
                  item.textColor || ""
                } p-4 w-full h-56 md:h-64`}
              >
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="flex-1 flex items-center">
                    {item.icon ? (
                      <item.icon
                        className={`w-28 h-28 md:w-20 md:h-20 ${item.iconColor}`}
                      />
                    ) : (
                      <div className="w-28 h-28 md:w-20 md:h-20 relative">
                        <Image
                          src={item.logo}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-center text-base md:text-base font-normal mt-2">
                    {item.title}
                  </span>
                </div>
              </GridItem>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
