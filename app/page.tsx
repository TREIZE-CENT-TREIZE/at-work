import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  VideoCameraIcon,
  ArrowPathIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { FaMap, FaImages, FaFileAlt, FaAddressBook } from "react-icons/fa";

const menuItems = [
  {
    title: "Film",
    icon: VideoCameraIcon,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/film",
    internal: true,
  },
  {
    title: "Visite virtuelle",
    icon: ArrowPathIcon,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/visite",
    internal: true,
  },
  {
    title: "Transports",
    icon: TruckIcon,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/transports",
    internal: true,
  },
  {
    title: "Quartier",
    icon: MapPinIcon,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/quartier",
    internal: true,
  },
  {
    title: "Immeuble",
    icon: FaMap,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/immeuble",
    internal: true,
  },
  {
    title: "Galerie",
    icon: FaImages,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/galerie",
    internal: true,
  },
  {
    title: "Brochure",
    icon: FaFileAlt,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/brochure",
    internal: true,
  },
  {
    title: "Contacts",
    icon: FaAddressBook,
    bgColor: "bg-gray-100",
    iconColor: "text-primary",
    href: "/contacts",
    internal: true,
  },
];

const services = [
  {
    title: "Time Chef",
    logo: "/time-chef-logo.svg",
    bgColor: "bg-red-600",
    textColor: "text-white",
    href: "https://timechef.com",
  },
  {
    title: "Uber Eats",
    logo: "/uber-eats-logo.svg",
    bgColor: "bg-red-600",
    textColor: "text-white",
    href: "https://ubereats.com",
  },
  {
    title: "Frichti",
    logo: "/frichti-logo.svg",
    bgColor: "bg-red-600",
    textColor: "text-white",
    href: "https://frichti.com",
  },
  {
    title: "Foodles",
    logo: "/foodles-logo.svg",
    bgColor: "bg-red-600",
    textColor: "text-white",
    href: "https://foodles.com",
  },
];

type GridItemProps = {
  children: React.ReactNode;
  href: string;
  external: boolean;
  className: string;
};

const GridItem = ({ children, href, external, className }: GridItemProps) => {
  const baseClasses =
    "rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center aspect-square";
  const combinedClasses = `${baseClasses} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="mb-4 relative h-64 md:h-[300px] overflow-hidden">
        <Image
          src="/bg-1.jpg"
          alt="Building exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(4)].map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-4 lg:pl-[15%]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {menuItems.map((item, index) => (
            <GridItem
              key={index}
              href={item.href}
              external={!item.internal}
              className={`${item.bgColor} p-3 md:p-4`}
            >
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex-1 flex items-center">
                  <item.icon
                    className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`}
                  />
                </div>
                <span className="text-center text-xs md:text-sm font-medium mt-2">
                  {item.title}
                </span>
              </div>
            </GridItem>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {services.map((service, index) => (
            <GridItem
              key={index}
              href={service.href}
              external={true}
              className={`${service.bgColor} ${service.textColor} p-3 md:p-4`}
            >
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex-1 flex items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image
                      src={service.logo}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-center text-xs md:text-sm font-medium mt-2">
                  {service.title}
                </span>
              </div>
            </GridItem>
          ))}
        </div>
      </main>
    </div>
  );
}
