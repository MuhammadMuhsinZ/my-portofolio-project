import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "./Footer/page"
import Navbar from "./Navbar/page"
import Image from "next/image";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-sky-950">
      <Navbar/>
      {children} 
      <Footer/>
    </body>
    </html >
  );
}
