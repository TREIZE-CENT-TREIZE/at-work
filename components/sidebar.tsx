"use client";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { MdOutlineGavel } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { classNames } from "@/utils/classeNames";

const navigation = [
  {
    name: "Mentions légales",
    href: "mentions-legales",
    icon: MdOutlineGavel,
    current: false,
  },
  {
    name: "Contacts",
    href: "contacts",
    icon: MdOutlineContactPhone,
    current: false,
  },
];

export default function Sidebar({ showOnMobile }: { showOnMobile: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {showOnMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none lg:hidden"
        >
          {!isOpen && (
            <Bars3Icon className="h-8 w-8 text-white drop-shadow-lg shadow-white" />
          )}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={classNames(
          "lg:hidden fixed top-0 left-0 z-40 h-screen bg-white transition-transform duration-300 ease-in-out",
          "w-[80%] md:w-[60%]",
          !isOpen && "-translate-x-full",
        )}
      >
        <SidebarContent />
      </aside>

      <aside className="hidden lg:block fixed top-0 left-0 z-40 w-[300px] h-screen bg-white">
        <SidebarContent />
      </aside>
    </>
  );
}

function SidebarContent() {
  return (
    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden border-r-[1px]">
      <div className="flex h-14 shrink-0 items-center bg-primary w-full"></div>
      <div className="relative h-48 my-2">
        <Image
          src="/left-menu-logo.png"
          fill
          alt="logo"
          className="object-cover"
          quality={100}
        />
      </div>
      <nav className="flex flex-1 flex-col pl-6 pt-4 border-t-2 drop-shadow-sm">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li className="border-b" key={item.name}>
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
                        "text-gray-400 ",
                        "h-6 w-6 shrink-0",
                      )}
                    />
                    <div className="flex justify-between w-full -2 pb-2 font-light">
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
  );
}
