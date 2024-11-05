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
    href: "https://timechef.com",
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
    href: "https://frichti.com",
    internal: false,
  },
  {
    title: "Foodles",
    logo: "/foodles.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://foodles.com",
    internal: false,
  },
  {
    title: "Train Me",
    logo: "/train-me.svg",
    bgColor: "bg-primary",
    textColor: "text-white",
    href: "https://foodles.com",
    internal: false,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)] max-w-full">
      <div>
        <div className="absolute right-0 top-0">
          <CustomCarousel />
        </div>

        <main className="container mx-auto px-4 lg:pl-24 xl:pl-36">
          <div className="mt-[300px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 gap-x-2 md:gap-6 lg:gap-4">
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                href={item.href}
                external={!item.internal}
                className={`${item.bgColor} ${item.textColor || ""} p-4 w-full`}
              >
                <div className="flex flex-col justify-between items-center h-full min-h-[200px]">
                  <div className="flex-1 flex items-center">
                    {item.icon ? (
                      <item.icon
                        className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`}
                      />
                    ) : (
                      <div className="w-12 h-12 md:w-16 md:h-16 relative">
                        <Image
                          src={item.logo}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-center text-xs md:text-sm font-medium mt-2">
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
