"use client";

import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { JargonTooltip } from "@/components/JargonTooltip";

export default function InventoryTrackingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <main>
        {/* 1. Hero Section */}
        <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
          
          <div className="absolute inset-0 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            
            {/* Left Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 dark:bg-zinc-100/50 border border-zinc-800 dark:border-zinc-200 text-sm font-medium">
                  {t("inv_badge")}
                </div>
              </BlurIn>
              
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  {t("inv_hero_h1")}
                </h1>
              </BlurIn>
              
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed text-zinc-400 dark:text-zinc-600">
                  {t("inv_hero_h2")}
                </p>
              </BlurIn>
              
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="h-14 px-8 text-base bg-white text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800">
                    {t("get_started")}
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base !bg-transparent border-white/20 dark:border-zinc-900/20 !text-white dark:!text-white hover:!bg-white/10 dark:hover:!bg-zinc-900/10">
                    {t("bookDemo")}
                  </Button>
                </div>
              </BlurIn>
            </div>

            {/* Right Visual Component */}
            <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
              <div className="relative bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 rounded-lg p-4 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                <MediaMockup 
                  type="image" 
                  src="/assets/TransactionRecords.png"
                  caption="A clean crop of the Inventory table showing real-time stock deductions as a bill is processed." 
                />
              </div>
            </BlurIn>

          </div>
        </section>

        {/* 2. Standard Content Grid */}
        <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("inv_cap_title")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
            {/* Card A */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("inv_card_a_title")}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t("inv_card_a_desc")}
              </p>
            </div>

            {/* Card B */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("inv_card_b_title")}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Catch discrepancies immediately. Perform lightning-fast <JargonTooltip explanation={t("tooltip_audit")}>audits</JargonTooltip> to reconcile physical counts with digital records.
              </p>
              <div className="mt-4 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 p-2">
                <MediaMockup type="image" src="/assets/AddTransaction.png" caption='"Adjust Stock" modal with quick + / - inputs.' />
              </div>
            </div>

            {/* Card C */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("inv_card_c_title")}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t("inv_card_c_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* 3. CTA Section */}
        <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
            {t("feat_cta_headline")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            {t("feat_cta_copy")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base">
              {t("feat_cta_primary")}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base">
              {t("feat_cta_secondary")}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
