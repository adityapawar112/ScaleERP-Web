"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import Link from "next/link";
import { ChevronRight, PackageSearch, ShieldCheck, AlertTriangle, ArrowRight, Truck, Layers, ShoppingBag } from "lucide-react";

export default function InventoryTrackingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#000000] font-sans selection:bg-[#00E600] selection:text-[#000000]">
      <main>
        {/* 1. Hero Section (Solid #F5F5F5 light / #171717 dark with Topographic Pattern - No Gradients) */}
        <section className="relative px-4 pt-32 pb-24 w-full bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FFFFFF] rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden border-b border-[#DCDCDC] dark:border-[#404040] shadow-sm transition-colors duration-500">
          <TopographicPattern className="opacity-15 dark:opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            {/* Left Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] text-sm font-bold text-[#171717] dark:text-[#00E600] uppercase tracking-wider shadow-sm">
                  <PackageSearch className="w-4 h-4 text-[#00E600]" />
                  {t("inv_badge", "Godown & Inventory Tracking")}
                </div>
              </BlurIn>
              
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#FFFFFF]">
                  {t("inv_hero_h1", "Stop guessing. Start tracking.")}
                </h1>
              </BlurIn>
              
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#404040] dark:text-[#BFBFBF]">
                  {t("inv_hero_h2", "Know exactly what sits in your godowns. ScaleERP deducts every bag, bottle, and packet the moment you print a bill at the counter. No more manual stock counting at closing time.")}
                </p>
              </BlurIn>
              
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/download" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-[#00E600] hover:bg-[#4DEE4D] text-[#000000] font-bold rounded-xl shadow-md border-0 transition-colors">
                      {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/pricing" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-[#FFFFFF] text-[#171717] border-2 border-[#DCDCDC] hover:border-[#171717] font-semibold rounded-xl shadow-sm transition-colors">
                      {t("nav_pricing", "Simple Pricing")}
                    </Button>
                  </Link>
                </div>
              </BlurIn>
            </div>

            {/* Right Visual Component (Reports.webp for Actual Inventory Stock Levels) */}
            <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
              <div className="relative bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] rounded-2xl p-4 shadow-xl">
                <MediaMockup 
                  type="image" 
                  src="/assets/Reports.webp"
                  priority={true}
                  caption="Consolidated Stock Quantities & Multi-Godown Bag Balance" 
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* NEW BLOCK: The "Dual-Unit Stock Math" Bar */}
        <section className="px-4 py-16 mx-auto w-full max-w-7xl lg:px-8">
          <div className="bg-[#171717] border-2 border-[#404040] rounded-3xl p-6 sm:p-8 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center">
                <Layers className="w-5 h-5 text-[#00E600]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Automatic Unit Conversion</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Buy in Tonnes ➔ Store in 50kg Bags ➔ Sell Loose Kgs
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Box 1 */}
              <div className="bg-[#000000] border border-[#404040] p-5 rounded-2xl">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#A2A2A2] uppercase">
                  <Truck className="w-4 h-4 text-[#00E600]" />
                  <span>1. Truck Arrival (Purchase)</span>
                </div>
                <p className="text-xl font-bold text-white">10 Metric Tonnes</p>
                <p className="text-xs text-[#BFBFBF] mt-1">Cattle Feed / Mahadhan Urea (₹2,40,000)</p>
                <div className="mt-3 text-xs font-semibold text-[#00E600] bg-[#00E600]/10 border border-[#00E600]/30 px-3 py-1.5 rounded-lg inline-block">
                  Purchase Rate: ₹24,000 / Tonne
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-[#000000] border-2 border-[#00E600] p-5 rounded-2xl relative shadow-lg">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#00E600] uppercase">
                  <Layers className="w-4 h-4" />
                  <span>2. Godown Stock Split</span>
                </div>
                <p className="text-xl font-bold text-white">200 Bags (50kg each)</p>
                <p className="text-xs text-[#BFBFBF] mt-1">120 Bags in Godown A • 80 Bags in Godown B</p>
                <div className="mt-3 text-xs font-semibold text-[#FFFFFF] bg-[#171717] border border-[#404040] px-3 py-1.5 rounded-lg inline-block">
                  Unit Cost: ₹1,200 / Bag
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-[#000000] border border-[#404040] p-5 rounded-2xl">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#A2A2A2] uppercase">
                  <ShoppingBag className="w-4 h-4 text-[#00E600]" />
                  <span>3. Retail Bill Deduction</span>
                </div>
                <p className="text-xl font-bold text-white">Sell 4 Bags + 25 Loose Kg</p>
                <p className="text-xs text-[#BFBFBF] mt-1">Counter bill prints in 4 seconds</p>
                <div className="mt-3 text-xs font-semibold text-[#00E600] bg-[#00E600]/10 border border-[#00E600]/30 px-3 py-1.5 rounded-lg inline-block">
                  Deducts 4.5 bags live from godown
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Capabilities: Balanced 3-Column Equal Card Grid on Solid #000000 */}
        <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-[#000000] border-y border-[#404040] text-white">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Inventory Engine</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white mt-1">
              {t("inv_cap_title", "Core Capabilities")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
            {/* Card 1: Multi-godown stock tracking */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <PackageSearch className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("inv_card_a_title", "Multi-godown stock tracking")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("inv_card_a_desc", "Track stock across your retail shop floor, main godowns, and transit trucks at the same time. Transfer stock between locations in one click.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/Reports.webp" 
                  caption="Godown-Wise Stock Depletion & Valuation Report" 
                />
              </div>
            </div>

            {/* Card 2: Instant stock audits */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("inv_card_b_title", "Instant stock audits")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("inv_card_b_desc", "Spot missing bags right away. Match your physical godown count against computer records and log adjustments in seconds.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/TransactionRecords.webp" 
                  caption="Physical Count vs Computer Audit Trail History" 
                />
              </div>
            </div>

            {/* Card 3: Low-stock reorder alerts */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("inv_card_c_title", "Low-stock reorder alerts")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("inv_card_c_desc", "Set minimum bag limits for your fastest-moving feed and seeds. ScaleERP flags low stock on your screen before your godown runs dry.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/Dashboard.webp" 
                  caption="Real-Time Low Stock Warning Widget on Dashboard" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pre-Footer CTA Section (Solid #171717 with #00E600 Border) */}
        <section className="px-4 py-16 mx-auto w-full max-w-7xl">
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#171717] border-2 border-[#00E600] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {t("feat_cta_headline", "Take complete control of your godown inventory.")}
              </h2>
              <p className="text-base sm:text-lg text-[#BFBFBF] max-w-2xl mx-auto leading-relaxed">
                {t("feat_cta_copy", "Download ScaleERP free for 30 days and see live stock balances update with every printed bill.")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/download" passHref>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-[#00E600] hover:bg-[#4DEE4D] text-[#000000] font-bold rounded-xl shadow-md border-0">
                    {t("feat_cta_primary", "Download for your store")} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                    {t("feat_cta_secondary", "View simple pricing")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
