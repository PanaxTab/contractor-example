import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/modules/Footer";
import {Inter} from "next/font/google";
import "./globals.css";
import { NavigationDesktop } from "./(home)/modules/Nav/NavigationDesktop";
import { NavigationMobile } from "./(home)/modules/Nav/NavigationMobile";

const inter = Inter({subsets:["latin"]});

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

export const metadata: Metadata = {
  title: "Contractor Site Example",
  description: "Contractor company description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavigationDesktop/>
        <NavigationMobile/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
