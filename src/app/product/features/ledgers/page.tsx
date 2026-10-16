"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import Link from "next/link";
import { ChevronRight, Users, Check, X, FileSpreadsheet, CreditCard, BookOpen } from "lucide-react";

export default function LedgersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#000000] font-sans selection:bg-[#00E600] selection:text-[#000000]">
      <main>
        {/* 1. Hero Section (Solid #F5F5F5 light / #171717 dark - No Gradients or Peach Tints) */}
        <section className="relative px-4 pt-32 pb-24 w-full bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FFFFFF] rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden border-b border-[#DCDCDC] dark:border-[#404040] shadow-sm transition-colors duration-500">
          <TopographicPattern className="opacity-15 dark:opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            {/* Left Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] text-sm font-bold text-[#171717] dark:text-[#00E600] uppercase tracking-wider shadow-sm">
                  <Users className="w-4 h-4 text-[#00E600]" />
                  {t("ledgers_badge", "Khata & Party Dues")}
                </div>
              </BlurIn>
              
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#FFFFFF]">
                  {t("ledgers_hero_h1", "Replace your paper bahi-khata.")}
                </h1>
              </BlurIn>
              
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#404040] dark:text-[#BFBFBF]">
                  {t("ledgers_hero_h2", "Track every customer and supplier account without flipping through ink-stained registers. Record every rupee, inspect full bill histories, and settle cash payments with zero math errors.")}
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

            {/* Right Visual Component */}
            <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
              <div className="relative bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] rounded-2xl p-4 shadow-xl">
                <MediaMockup 
                  type="image" 
                  src="/assets/TransactionRecords.webp"
                  priority={true}
                  caption="Party Profiles with Running Due Balances & Full Bill Histories" 
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* NEW BLOCK: The "Paper Register vs ScaleERP Khata" Ledger Strip */}
        <section className="px-4 py-16 mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-2 border-[#404040] bg-[#171717] rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Paper Bahi-Khata Risks */}
              <div className="bg-[#000000] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#404040] space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">Traditional Ink Registers</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Paper Bahi-Khata Risks
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                    <div className="w-6 h-6 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Forgotten entries during morning rush</p>
                      <p className="text-xs text-[#BFBFBF] mt-0.5">When 10 farmers queue up, clerks scribble amounts on scraps of paper that get misplaced.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                    <div className="w-6 h-6 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Manual totaling mistakes across pages</p>
                      <p className="text-xs text-[#BFBFBF] mt-0.5">Adding up multi-page Udhari by hand at night frequently results in ₹500 - ₹2,000 calculation errors.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                    <div className="w-6 h-6 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Farmers dispute balances without proof</p>
                      <p className="text-xs text-[#BFBFBF] mt-0.5">Without printed itemized slips showing previous balance, recovery turns into uncomfortable arguments.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: ScaleERP Digital Khata */}
              <div className="bg-[#171717] p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">ScaleERP Digital Ledger</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Dispute-Free Digital Khata
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-[#000000] border border-[#00E600]/40 p-4 rounded-xl">
                    <div className="w-6 h-6 rounded bg-[#00E600]/20 border border-[#00E600] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#00E600]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Previous dues print automatically on every bill</p>
                      <p className="text-xs text-[#BFBFBF] mt-0.5">Every printed receipt displays: Previous Dues + Today's Bill = Net Amount Due. Zero forgotten entries.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#000000] border border-[#00E600]/40 p-4 rounded-xl">
                    <div className="w-6 h-6 rounded bg-[#00E600]/20 border border-[#00E600] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#00E600]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">1-second cash or UPI partial settlement</p>
                      <p className="text-xs text-[#BFBFBF] mt-0.5">Type ₹5,000 received against a ₹12,000 balance. The system logs Rokad and reduces balance instantly.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#000000] border border-[#00E600]/40 p-4 rounded-xl">
                    <div className="w-6 h-6 rounded bg-[#00E600]/20 border border-[#00E600] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#00E600]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">1-click WhatsApp statement in local language</p>
                      <p className="text-xs text-[#BFBFBF] mt-0.5">Send a polite Marathi or Hindi account statement directly to the customer's phone for ₹0 cost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Capabilities: Balanced 3-Column Equal Card Grid on Solid #000000 */}
        <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-[#000000] border-y border-[#404040] text-white">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Credit & Khata Tools</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white mt-1">
              {t("ledgers_cap_title", "Core Capabilities")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
            {/* Card 1: Live party dues tracking */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("ledgers_card_a_title", "Live party dues tracking")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  Get complete clarity on party dues. Instantly filter your ledgers to see top debtors, set credit limits, and track historical payments.
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/Dashboard.webp" 
                  caption="Executive Receivables Metric & High-Due Party Overview" 
                />
              </div>
            </div>

            {/* Card 2: One-second cash settlements */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("ledgers_card_b_title", "One-second cash settlements")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("ledgers_card_b_desc", "When a farmer or dealer walks in with cash, settling their khata takes one second. Log full or partial settlements and print a clear receipt.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/AddTransaction.webp" 
                  caption="Settle Account Modal: Record Cash or UPI Payment in 1 Click" 
                />
              </div>
            </div>

            {/* Card 3: PDF & Excel khata statements */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <FileSpreadsheet className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("ledgers_card_c_title", "PDF & Excel khata statements")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("ledgers_card_c_desc", "Export clean party ledgers to PDF or Excel for recovery staff or tax auditors. Every invoice, payment, and return is itemized.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/Reports.webp" 
                  caption="Comprehensive Party Ledger Export & Recovery Schedule" 
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
                {t("feat_cta_headline", "Eliminate udhari disputes and recover faster.")}
              </h2>
              <p className="text-base sm:text-lg text-[#BFBFBF] max-w-2xl mx-auto leading-relaxed">
                {t("feat_cta_copy", "Download ScaleERP free for 30 days and import your parties from Excel in under 10 minutes.")}
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
