import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { HiPhone } from "react-icons/hi";

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
    icon: "/icons/pompiers.svg",
    phone: "18",
  },
  {
    name: "Police",
    icon: "/icons/police.svg",
    phone: "17",
  },
  {
    name: "SAMU",
    icon: "/icons/samu.svg",
    phone: "15",
  },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
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
              <div className={`w-44 h-44 relative flex-shrink-0`}>
                {contact.logo && (
                  <Image
                    src={contact.logo}
                    alt={`${contact.company} Logo`}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex-1 md:mt-5">
                {contact.name && (
                  <h2 className="bg-primary text-white px-3 py-1 inline-block mb-4">
                    {contact.name}
                  </h2>
                )}
                <div className="space-y-2">
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 relative">
                        <Image
                          alt="phone"
                          fill
                          className="object-contain"
                          src="/icons/phone.svg"
                        />
                      </div>

                      <span>{contact.phone}</span>
                    </a>
                  )}
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2  border-t pt-2"
                    >
                      <div className="w-6 h-6 relative">
                        <Image
                          alt="mail"
                          fill
                          className="object-contain"
                          src="/icons/mail.svg"
                        />
                      </div>
                      <span>{contact.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-8">
            <h2 className="text-base font-light mb-6">Urgences</h2>
            <div className="space-y-4">
              {urgencies.map((urgency, index) => (
                <a
                  key={index}
                  href={`tel:${urgency.phone}`}
                  className="flex items-center justify-between gap-3  border-b pb-3"
                >
                  <span className="flex items-center gap-4">
                    <span>
                      <div className="w-6 h-6 text-primary relative">
                        <Image
                          src={urgency.icon}
                          alt={urgency.name}
                          fill
                          className="object-contain"
                        />
                      </div>
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
