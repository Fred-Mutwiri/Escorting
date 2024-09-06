import localFont from "next/font/local";
import "./globals.css";

import NavCard from "@/components/cards/navCard";
import Postcard from "@/components/cards/PostCard";
import PostFormCard from "@/components/forms/PostFormCard";
import Image from "next/image";
import Card from "@/components/cards/card";
import NavBottom from "@/components/cards/navBottom";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Eskort",
  description: "Find a partner wherever you are",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="flex  max-sm:flex-col max-sm:justify-center max-sm:items-center gap-6 p-1 my-4 max-w-4xl mx-auto ">
          {/* Left side */}
            <div className=" max-sm:hidden w-3/12">
              <div className="flex items-center justify-center gap-0">
                <div>
                  <Image src={'/assets/women.svg'} width={80} height={20} priority/>
                </div>
                <h2 className="text-red-500 bg-slate-50 rounded-sm py-3 px-4 bg-opacity-20 font-semibold italic text-2xl">Escorts</h2>
              </div>
              <NavCard/>
            </div>
    
          {/* Right Side  */}
            <div className="w-9/12">
                {children}
            </div>

            {/* Bottom side  */}
              <div className="md:hidden fixed -bottom-5 w-full left-0 ">
                <NavBottom />
              </div>
        </div>
      </body>
    </html>
  );
}
