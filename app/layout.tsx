"use client"

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidemenu from "./_componants/sidemenu";
import { Cairo, Barlow_Condensed } from "next/font/google";
import Footer from "./_componants/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});
const getCar = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

// export const metadata: Metadata = {
//   title: "Salaty",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // if(typeof window !== "undefined"){
  //               localStorage.setItem("darkmode", JSON.stringify(false))
  //               localStorage.setItem("coutry", JSON.stringify({
  //                   name: ["EG", "cairo", "مصر"],
  //                   name2: ["مصر"]
  //               }))
            
    
  //   }

  return (
    <html lang="ar">
       <body
        className={`${geistSans.variable} ${geistMono.className} antialiased`}
      >
        <div className="window flex justify-end mb-[40px]" >
            {children}
          <Sidemenu  />
          
        </div>
{/*         <Footer />
         */}
      </body>
    </html>
  );
}
