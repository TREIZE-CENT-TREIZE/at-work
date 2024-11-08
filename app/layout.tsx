"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showMobileSidebar = pathname === "/";

  return (
    <html lang="fr">
      <head>
        <title>@work</title>
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen overflow-x-hidden">
          <Sidebar showOnMobile={showMobileSidebar} />
          <div className="lg:flex lg:flex-row">
            <div className="lg:w-[300px] flex-shrink-0" />
            <div className="flex-grow">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
