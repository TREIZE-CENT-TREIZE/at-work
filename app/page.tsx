import Image from "next/image";
import CustomCarousel from "@/components/customCarousel";
import { GridItem } from "@/components/gridItem";

const gridItems = [
  {
    title: "Film",
    logo: "/icons/film.svg",
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/film",
    internal: true,
  },
  {
    title: "Transports",
    logo: "/icons/transports.svg",
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/transports",
    internal: true,
  },
  {
    title: "Quartier",
    logo: "/icons/quartier.svg",
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/quartier",
    internal: true,
  },
  {
    title: "Immeuble",
    logo: "/icons/immeuble.svg",
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/immeuble",
    internal: true,
  },
  {
    title: "Galerie",
    logo: "/icons/galerie.svg",
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/galerie",
    internal: true,
  },
  {
    title: "Brochure",
    logo: "/icons/brochure.svg",
    bgColor: "bg-[#E5E5E5]",
    iconColor: "text-primary",
    href: "/brochure",
    internal: true,
  },
  {
    title: "Contacts",
    logo: "/icons/contacts.svg",
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
                    <div className="w-24 h-24 sm:w-28 md:h-28 relative">
                      <Image
                        src={item.logo}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
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
