import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

//built components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900","1000"], variable: '--font-DMSans'});

export const metadata: Metadata = {
  title: "Ronmar Lacamiento",
  description: "Product Design and Strategy",
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={dmSans.variable && "bg-slate-50 text-stone-800" } >
        <Header/>
        <PageTransition>{children}</PageTransition>
        <Footer/>
      </body>
    </html>
  );
}
