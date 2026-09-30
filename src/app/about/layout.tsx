import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ScaleERP | Engineered by ScaleERP for Indian Agriculture",
  description: "Learn how ScaleERP is replacing paper ledgers and complex ERPs with lightning-fast, offline-first inventory software for feed stores and distributors.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
