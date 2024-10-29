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
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar showOnMobile={showMobileSidebar} />
          <main className="flex-1 lg:ml-[20%]">{children}</main>
        </div>
      </body>
    </html>
  );
}
