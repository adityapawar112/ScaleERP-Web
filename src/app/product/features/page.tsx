"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";
import { 
  ChevronRight, 
  PackageSearch, 
  Receipt, 
  ShieldCheck, 
  Users, 
  MessageCircle, 
  Wrench, 
  CheckSquare,
  Server,
  Scale
} from "lucide-react";

export default function FeaturesIndexPage() {
  const { t } = useTranslation();

  const features = [
    {
      title: "All Features Overview",
      description: "A comprehensive look at the complete ScaleERP feature suite.",
      href: "/product/features/all-features",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Inventory Tracking",
      description: "Real-time stock monitoring, alerts, and godown management.",
      href: "/product/features/inventory-tracking",
      icon: <PackageSearch className="w-6 h-6" />
    },
    {
      title: "Invoice Customization",
      description: "Tailor billing structures, tax rules, and receipt templates.",
      href: "/product/features/invoice-customization",
      icon: <Receipt className="w-6 h-6" />
    },
    {
      title: "Party Ledgers",
      description: "Track credit, outstanding dues, and party-wise transaction history.",
      href: "/product/features/ledgers",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Offline Security",
      description: "100% air-gapped protection and localized SQLite data architecture.",
      href: "/product/features/offline-security",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "WhatsApp Cloud Backup",
      description: "Automated payment reminders and encrypted cloud state syncs.",
      href: "/product/features/whatsapp-cloud-backup",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Tasks & Workflow",
      description: "Internal team assignment and task delegation engine.",
      href: "/product/features/tasks",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      title: "Utility Tools",
      description: "Calculators, quick-conversions, and built-in retail utilities.",
      href: "/product/features/tools",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Legacy ERP Comparison",
      description: "See how ScaleERP stacks up against Tally and Marg.",
      href: "/product/features/comparison",
      icon: <Scale className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-zinc-900/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <BlurIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-900/10 border border-white/20 dark:border-zinc-900/20 backdrop-blur-md text-sm font-medium mb-6">
              {t('Feature Directory', 'Feature Directory')}
            </div>
          </BlurIn>
          
          <BlurIn delay={0.2}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
              {t('Built for Precision.', 'Built for Precision.')}
            </h1>
          </BlurIn>
          
          <BlurIn delay={0.4}>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
              {t('features_index_desc', 'Explore the individual modules designed to streamline your inventory, billing, and party ledgers.')}
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {features.map((feature, idx) => (
            <Link href={feature.href} key={idx} className="group h-full">
              <div className="flex flex-col h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm hover:border-terracotta/50 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex items-center justify-center mb-6 group-hover:bg-terracotta/10 group-hover:text-terracotta transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-terracotta transition-colors">
                  {t(feature.title, feature.title)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 flex-grow mb-6">
                  {t(feature.description, feature.description)}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-terracotta transition-colors">
                  {t('Learn More', 'Learn More')} <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
