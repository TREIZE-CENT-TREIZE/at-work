import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils/classeNames";
import Image from "next/image";

const navigation = [
  {
    name: "Axonométrie",
    href: "/immeuble/axonometrie",
    logo: "/icons/axo.svg",
    current: false,
  },
  {
    name: "Descriptif technique",
    href: "/immeuble/descriptif-technique",
    logo: "/icons/tech.svg",
    current: false,
  },
];

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">L&apos;immeuble</h1>
      </div>
      <main className="flex-1 overflow-x-hidden">
        <div className="relative h-64 md:h-80 w-full">
          <Image className="object-cover" src="/top.png" fill alt="top" />
        </div>
        <div className="flex flex-col gap-8 mt-4">
          <nav className="flex flex-1 flex-col pt-4 ">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2">
                  {navigation.map((item) => (
                    <li
                      className="hover:bg-gray-100 pl-6 py-2 relative"
                      key={item.name}
                    >
                      <a
                        href={item.href}
                        className={classNames(
                          "text-black  font-light",
                          "group flex gap-x-3 rounded-md p-2 text-base font-normal leading-6",
                        )}
                      >
                        <div className="relative w-8 h-8">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex justify-between items-center w-full ml-4">
                          <span className="text-lg font-normal">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRightIcon className="w-5 h-5 mr-4 text-[#808080]" />
                          </span>
                          <div className="absolute bottom-0 left-20 right-0 border-b" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
