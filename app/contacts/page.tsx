import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaFireExtinguisher, FaRegHospital } from "react-icons/fa";
import { MdLocalPolice } from "react-icons/md";

const contacts = [
  {
    name: "MICKAEL ABECASSIS",
    company: "CBRE",
    logo: "/cbre.png",
    phone: "01 53 64 37 58",
    email: "mickael.abecassis@cbre.fr",
  },
  {
    name: "ABDOU SARR",
    company: "JLL",
    logo: "/jll.png",
    phone: "01 40 55 18 80",
    email: "abdou.sarr@eu.jll.com",
  },
  {
    name: "PEROLINE PREVOST",
    company: "JLL",
    logo: "/jll.png",
    phone: "01 53 75 86 26",
    email: "peroline.prevostmanseau@eu.jll.com",
  },
  {
    name: "",
    logo: "/evolis.svg",
    phone: "01 81 72 00 00",
  },
];

const urgencies = [
  {
    name: "Pompiers",
    icon: FaFireExtinguisher,
    phone: "18",
  },
  {
    name: "Police",
    icon: MdLocalPolice,
    phone: "17",
  },
  {
    name: "SAMU",
    icon: FaRegHospital,
    phone: "15",
  },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Contacts</h1>
      </div>
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-12">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex md:gap-6 md:items-center flex-col gap-1 items-baseline md:flex-row"
            >
              <div
                className={`w-40 h-${
                  contact.logo ? "40" : "20"
                } relative flex-shrink-0`}
              >
                {contact.logo && (
                  <Image
                    src={contact.logo}
                    alt={`${contact.company} Logo`}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex-1">
                {contact.name && (
                  <h2 className="bg-primary text-white px-3 py-1 inline-block mb-4">
                    {contact.name}
                  </h2>
                )}
                <div className="space-y-2">
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <HiPhone className="w-5 h-5" />
                      <span>{contact.phone}</span>
                    </a>
                  )}
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <HiMail className="w-5 h-5" />
                      <span>{contact.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-8 border-t">
            <h2 className="text-base font-light mb-6">Urgences</h2>
            <div className="space-y-4">
              {urgencies.map((urgency, index) => (
                <a
                  key={index}
                  href={`tel:${urgency.phone}`}
                  className="flex items-center justify-between gap-3 hover:text-primary border-b pb-3"
                >
                  <span className="flex items-baseline gap-4">
                    <span>
                      <urgency.icon className="w-6 h-6 text-primary inline" />
                    </span>
                    {urgency.name}
                  </span>
                  <HiPhone className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
