"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";
import { ChevronRight, Store, Truck } from "lucide-react";

export default function UseCasesIndexPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-zinc-900/40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <BlurIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-900/10 border border-white/20 dark:border-zinc-900/20 backdrop-blur-md text-sm font-medium mb-6">
              {t('Use Cases', 'Use Cases')}
            </div>
          </BlurIn>
          
          <BlurIn delay={0.2}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
              {t('Tailored to your scale.', 'Tailored to your scale.')}
            </h1>
          </BlurIn>
          
          <BlurIn delay={0.4}>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
              {t('use_cases_index_desc', 'Whether you run a local retail shop or manage high-volume wholesale distribution, ScaleERP adapts to your workflow.')}
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-5xl lg:px-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          
          {/* Feed Stores */}
          <Link href="/product/use-cases/feed-stores" className="group h-full">
            <div className="flex flex-col h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-10 shadow-sm hover:border-terracotta/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Store className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-terracotta transition-colors">
                {t('Retail Feed Stores', 'Retail Feed Stores')}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                {t('feed_stores_desc', 'Built for fast counter checkout, local inventory tracking, and managing daily walk-in customers without internet dependency.')}
              </p>
              <div className="inline-flex items-center text-terracotta font-semibold group-hover:translate-x-2 transition-transform">
                {t('Explore Retail Solution', 'Explore Retail Solution')} <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Wholesale Brokers */}
          <Link href="/product/use-cases/wholesale-brokers" className="group h-full">
            <div className="flex flex-col h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-10 shadow-sm hover:border-navy/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-navy/10 text-navy dark:text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
                {t('Wholesale Distributors', 'Wholesale Distributors')}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                {t('wholesale_desc', 'Designed for complex logistics, bulk invoicing, multi-godown stock transfers, and managing large-scale party ledgers securely.')}
              </p>
              <div className="inline-flex items-center text-navy dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                {t('Explore Wholesale Solution', 'Explore Wholesale Solution')} <ChevronRight className="ml-1 w-5 h-5" />
              </div>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}
