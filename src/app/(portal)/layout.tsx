import { Bebas_Neue, Public_Sans } from "next/font/google";
import type { Metadata } from "next";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
});

export const metadata: Metadata = {
  title: "ScaleERP - Technical Guardian Activation",
  description: "Secure air-gapped activation portal for ScaleERP desktop clients.",
};

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`dark bg-[#121212] text-[#F8F9FA] min-h-screen ${bebasNeue.variable} ${publicSans.variable} font-sans`}>
      {children}
    </div>
  );
}
