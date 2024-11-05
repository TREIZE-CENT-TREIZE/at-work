import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { HiPhone } from "react-icons/hi";
import { FaFireExtinguisher, FaRegHospital } from "react-icons/fa";
import { MdLocalPolice } from "react-icons/md";

export default function Page() {
  return (
    <div className="min-h-screen transition-all duration-300 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-primary h-14 text-white lg:pl-[12%] flex items-center gap-6 pl-3">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Contacts</h1>
      </div>
      <main className="max-w-6xl mx-auto p-4 lg:pl-[15%] min-h-screen">
        <div className="space-y-12">
          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src="/cbre.png"
                alt="CBRE Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2">
                <a
                  href="tel:0153643048"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <HiPhone className="w-5 h-5" />
                  <span>01 53 64 30 48</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src="/jll.png"
                alt="JLL Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2">
                <a
                  href="tel:0698068863"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <HiPhone className="w-5 h-5" />
                  <span>06 98 06 88 63</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src="/evolis.png"
                alt="JLL Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2">
                <a
                  href="tel:0181720000"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <HiPhone className="w-5 h-5" />
                  <span>01 81 72 00 00</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t">
            <h2 className="text-base font-normal mb-6">Urgences</h2>
            <div className="space-y-4">
              <a
                href="tel:18"
                className="flex items-center gap-3 hover:text-primary"
              >
                <FaFireExtinguisher className="w-6 h-6 text-primary" />
                <span>Pompiers</span>
              </a>
              <a
                href="tel:17"
                className="flex items-center gap-3 hover:text-primary"
              >
                <MdLocalPolice className="w-6 h-6 text-primary" />
                <span>Police</span>
              </a>
              <a
                href="tel:15"
                className="flex items-center gap-3 hover:text-primary"
              >
                <FaRegHospital className="w-6 h-6 text-primary" />
                <span>SAMU</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
