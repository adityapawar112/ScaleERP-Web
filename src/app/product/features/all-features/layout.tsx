import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScaleERP Features | Complete Offline Inventory & Ledger Engine",
  description: "Explore all features of ScaleERP: fast offline billing, multi-godown tracking, WhatsApp payment reminders, and hardware-bound security.",
};

export default function AllFeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
