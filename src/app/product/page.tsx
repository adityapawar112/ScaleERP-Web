"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, LayoutGrid, Briefcase, Zap } from "lucide-react";

export default function ProductOverviewPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-zinc-900/40 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <BlurIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-900/10 border border-white/20 dark:border-zinc-900/20 backdrop-blur-md text-sm font-medium">
              {t('Platform Overview', 'Platform Overview')}
            </div>
          </BlurIn>
          
          <BlurIn delay={0.2}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              {t('The Surgical Hardware Engine.', 'The Surgical Hardware Engine.')}
            </h1>
          </BlurIn>
          
          <BlurIn delay={0.4}>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
              {t('product_hub_desc', 'Explore the capabilities of ScaleERP and how it transforms your operations from fragile manual systems to an unbreakable offline ledger.')}
            </p>
          </BlurIn>
          
          <BlurIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/pricing" passHref>
                <Button size="lg" className="h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white border-0 rounded-lg">
                  {t('view_pricing', 'View Pricing')}
                </Button>
              </Link>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* Navigation Hub */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
          
          {/* Features Hub Link */}
          <Link href="/product/features" className="group">
            <div className="flex flex-col h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-10 shadow-sm hover:border-terracotta/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-terracotta transition-colors">
                {t('Feature Directory', 'Feature Directory')}
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                {t('features_hub_desc', 'Dive deep into the specific modules that power your business: Inventory Tracking, Custom Invoicing, WhatsApp Automations, and Offline Security.')}
              </p>
              <div className="inline-flex items-center text-terracotta font-semibold group-hover:translate-x-2 transition-transform">
                {t('Explore Features', 'Explore Features')} <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Use Cases Hub Link */}
          <Link href="/product/use-cases" className="group">
            <div className="flex flex-col h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-10 shadow-sm hover:border-navy/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-navy/10 text-navy dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
                {t('Use Cases', 'Use Cases')}
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                {t('use_cases_hub_desc', 'See how ScaleERP adapts to your specific operational scale, whether you run a localized retail feed store or manage high-volume wholesale distributions.')}
              </p>
              <div className="inline-flex items-center text-navy dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                {t('Explore Use Cases', 'Explore Use Cases')} <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Quick CTA */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-lg shadow-2xl my-12 text-center transition-colors duration-500">
        <Zap className="w-12 h-12 text-terracotta mx-auto mb-6" />
        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          {t("Ready to upgrade your counter?", "Ready to upgrade your counter?")}
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          {t("Get a hands-on demo of the ScaleERP engine today.", "Get a hands-on demo of the ScaleERP engine today.")}
        </p>
        <Link href="/contact" passHref>
          <Button size="lg" className="h-14 px-10 text-base bg-terracotta hover:bg-[#C96B50] text-white rounded-lg">
            {t("Book a Demo", "Book a Demo")}
          </Button>
        </Link>
      </section>
    </main>
  );
}
