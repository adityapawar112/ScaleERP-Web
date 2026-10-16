"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import Link from "next/link";
import { ChevronRight, Check, X, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ComparisonPage() {
  const { t } = useTranslation();

  const comparisonRows = [
    {
      feature: "Time to print 1 bill during 8 AM rush",
      paper: "45 sec (handwritten slip)",
      legacy: "35 sec (slow navigation)",
      scaleerp: "4 seconds (Keyboard F2 + Enter)",
      scaleerpHighlight: true,
    },
    {
      feature: "Staff training time for new clerk",
      paper: "None, but constant math mistakes",
      legacy: "3-month accounting course",
      scaleerp: "15 minutes (Any 12th-pass clerk)",
      scaleerpHighlight: true,
    },
    {
      feature: "Marathi & Hindi screen + bills",
      paper: "Manual ink writing only",
      legacy: "Broken fonts or English only",
      scaleerp: "1-Click built-in (Screen + Prints)",
      scaleerpHighlight: true,
    },
    {
      feature: "WhatsApp balance reminder with bill",
      paper: "Manual phone typing",
      legacy: "Paid 3rd-party plugin (₹0.50/SMS)",
      scaleerp: "1-Click Free via Shop WhatsApp",
      scaleerpHighlight: true,
    },
    {
      feature: "Multi-godown bag stock tracking",
      paper: "Separate registers, manual count",
      legacy: "Complex godown voucher menus",
      scaleerp: "Live bag counts on billing screen",
      scaleerpHighlight: true,
    },
    {
      feature: "2:00 AM automated cloud backup",
      paper: "Zero (Fire/water loss risk)",
      legacy: "Manual pen drive copy (Forgotten)",
      scaleerp: "Automatic Google Drive backup",
      scaleerpHighlight: true,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-700 backdrop-blur-md text-sm font-semibold uppercase tracking-wider">
                {t('Comparison', 'Counter vs Accounting Software')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t('comp_hero_h1', 'Stop Running a Busy Trade Counter on Software Built for CAs.')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('comp_hero_h2', 'Tally and Marg are great for tax auditors filing year-end balance sheets. ScaleERP is built for the shopkeeper with 15 farmers waiting at the counter at 8:00 AM.')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/contact" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                    {t('comp_cta_primary', 'Talk to shop support')} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-white/90 text-zinc-900 border-2 border-zinc-300 hover:bg-zinc-100 font-semibold rounded-xl shadow-sm">
                    {t('comp_cta_secondary', 'Compare pricing plans')}
                  </Button>
                </Link>
              </div>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
            <div className="relative bg-zinc-900/50 dark:bg-white/50 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-2xl p-4 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <MediaMockup 
                type="image" 
                src="/assets/InvoiceExample.webp" 
                caption="Clean, High-Velocity Invoice Generation vs Legacy Accounting Suites" 
                priority={true}
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The 2x2 Contrast Grid (With Pain Breakdown Lists) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
        <div className="mb-12">
          <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full mb-3">
            Real Difference
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("comp_feature_headline", "Why Indian Merchants Switch from Legacy Software")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          {/* Card A: Legacy Learning Curve */}
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-8 shadow-lg justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">CA Accounting Software (Tally / Marg)</span>
              <h3 className="text-2xl font-bold mt-2 mb-3 text-white">{t('comp_card_a_headline', 'Takes weeks to teach counter staff.')}</h3>
              <p className="text-base text-zinc-300 leading-relaxed mb-6">{t('comp_card_a_copy', 'Traditional software requires understanding complex accounting principles, chart of accounts, and debit/credit rules. If your clerk makes a typo, fixing it requires debit notes and reversal vouchers.')}</p>
            </div>
            
            {/* Pain Breakdown List */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-5 space-y-2.5 mt-auto">
              <div className="flex items-start gap-2.5 text-sm text-red-300">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Requires understanding Debit/Credit voucher rules</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-red-300">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>14-step menu navigation just to print a counter receipt</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-red-300">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>English-only accounting terms that confuse local clerks</span>
              </div>
            </div>
          </div>

          {/* Card B: ScaleERP Rapid Entry */}
          <div className="flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">ScaleERP Trade Counter</span>
              <h3 className="text-2xl font-bold mt-2 mb-3 text-zinc-900 dark:text-zinc-100">{t('comp_card_b_headline', 'Zero training needed. Bill on Day 1.')}</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{t('comp_card_b_copy', 'ScaleERP looks and feels like a fast retail cash register. 3 fields only: Item, Quantity, Rate. Any clerk can run the counter during rush hour with zero errors.')}</p>
            </div>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/AddTransaction.webp" 
                caption="Modern 3-Field Counter Transaction Screen" 
              />
            </div>
          </div>
          
          {/* Card C: Cluttered Fields */}
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-8 shadow-lg justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">Legacy ERP Clutter</span>
              <h3 className="text-2xl font-bold mt-2 mb-3 text-white">{t('comp_card_c_headline', '50 cluttered fields per voucher.')}</h3>
              <p className="text-base text-zinc-300 leading-relaxed mb-6">{t('comp_card_c_copy', 'Legacy suites ask for ledger groups, sub-cost centres, and multiple tax codes for every single cash transaction. At 8:00 AM when 15 farmers are waiting, this causes long queues.')}</p>
            </div>

            {/* Pain Breakdown List */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-5 space-y-2.5 mt-auto">
              <div className="flex items-start gap-2.5 text-sm text-red-300">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Excessive popup windows before printing</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-red-300">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>No live bag counts visible while selecting products</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-red-300">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Old khata balance requires opening a separate ledger menu</span>
              </div>
            </div>
          </div>

          {/* Card D: Streamlined Ledger View */}
          <div className="flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">ScaleERP Khata Engine</span>
              <h3 className="text-2xl font-bold mt-2 mb-3 text-zinc-900 dark:text-zinc-100">{t('comp_card_d_headline', 'Clear Bahi-Khata ledger on one screen.')}</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{t('comp_card_d_copy', 'Every transaction updates the customer khata instantly. Previous dues automatically print on the receipt, and settlement takes one click.')}</p>
            </div>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/TransactionRecords.webp" 
                caption="Streamlined Transaction & Running Ledger Audit View" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW BLOCK: Head-to-Head Comparison Matrix Table (Light High-Contrast Surface) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-border transition-colors">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full mb-3">
            Side-by-Side Matrix
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            Head-to-Head Comparison Matrix
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            See exactly how ScaleERP compares against traditional paper registers and complex CA accounting software.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase tracking-wider">
                <th className="p-4 sm:p-5 text-zinc-900 dark:text-zinc-100">Daily Shop Requirement</th>
                <th className="p-4 sm:p-5 text-zinc-600 dark:text-zinc-400">Paper Bahi-Khata</th>
                <th className="p-4 sm:p-5 text-zinc-600 dark:text-zinc-400">CA Software (Tally / Marg)</th>
                <th className="p-4 sm:p-5 text-emerald-700 dark:text-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/40">ScaleERP Trade Counter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-zinc-900 dark:text-zinc-100">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-zinc-600 dark:text-zinc-400 flex-wrap">{row.paper}</td>
                  <td className="p-4 sm:p-5 text-zinc-600 dark:text-zinc-400">{row.legacy}</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/20">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.scaleerp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Bottom 4-Card Strip (Purged Jargon, Dark Slate Surface) */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-3xl shadow-2xl my-8 transition-colors duration-500">
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">Built for Indian Counters</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white mt-1">
            Engineered for Ground Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">4-second offline billing</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Bills save directly to your shop computer hard drive in under 1 second with zero internet required.
            </p>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">3-field keyboard speed</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Never touch the mouse during morning rush. F2 to open, Enter to add quantity, Ctrl+Enter to print.
            </p>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Marathi & Hindi native</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Switch languages with one click so any family member or clerk can run the counter without confusion.
            </p>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">One-time annual PC license</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Locks safely to your shop computer with zero monthly cloud rent and anti-backdating protection.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("comp_cta_headline", "Experience the Difference at Your Counter.")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("comp_cta_copy", "Download ScaleERP free for 30 days and see how fast your counter runs tomorrow morning.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                  {t("comp_cta_primary", "Talk to shop support")} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                  {t("comp_cta_secondary", "View simple pricing")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
