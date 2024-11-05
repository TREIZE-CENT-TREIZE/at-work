"use client";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GoStack } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";
import { classNames } from "@/utils/classeNames";
import Image from "next/image";

const navigation = [
  {
    name: "Axonométrie",
    href: "/immeuble/axonometrie",
    icon: GoStack,
    current: false,
  },
  {
    name: "Descriptif technique",
    href: "/immeuble/descriptif-technique",
    icon: LuClipboardCheck,
    current: false,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-primary h-14 text-white lg:pl-[12%] flex items-center gap-6 pl-3">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Immeuble</h1>
      </div>
      <main className="max-w-6xl mx-auto lg:pl-[10%] min-h-screen">
        <div className="relative h-64 md:h-80 w-full">
          <Image className="object-cover" src="/top.jpg" fill alt="top" />
        </div>
        <div className="flex flex-col gap-8">
          <nav className="flex flex-1 flex-col pl-6 pt-4">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          "text-black hover:bg-gray-100  font-light",
                          "group flex gap-x-3 rounded-md p-2 text-base font-normal leading-6",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            "text-primary ",
                            "h-6 w-6 shrink-0",
                          )}
                        />
                        <div className="flex justify-between w-full border-b-2 pb-2">
                          <span>{item.name}</span>
                          <span>
                            <ChevronRightIcon className="w-4 h-4 mr-2" />
                          </span>
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
