import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScaleERP vs Legacy ERPs (Tally/Marg) | Best Software for Feed Stores",
  description: "Compare ScaleERP against traditional accounting software. See why our lightning-fast, offline-first inventory system is better for retail counters.",
};

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
