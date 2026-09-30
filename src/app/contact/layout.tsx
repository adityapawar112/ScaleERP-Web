import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ScaleERP | Sales & Technical Support",
  description: "Reach out to the ScaleERP team for product demos, pricing inquiries, and technical support for your feed store or wholesale business.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
