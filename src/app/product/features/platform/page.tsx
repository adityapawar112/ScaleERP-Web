"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import Link from "next/link";
import { ChevronRight, PackageSearch, Users, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PlatformPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-700 backdrop-blur-md text-sm font-semibold uppercase tracking-wider">
                {t('ScaleERP Platform', 'ScaleERP Platform')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t('platform_hero_h1', 'Built to run fast when the internet is dead.')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('platform_hero_h2', 'ScaleERP installs directly on your shop computer. Print bills in 4 seconds, check godown bag counts, and update customer khatas even when your broadband cable is cut.')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/product/features/tools" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                    {t('platform_hero_cta_1', 'Explore tools & invoicing')} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-white/90 text-zinc-900 border-2 border-zinc-300 hover:bg-zinc-100 font-semibold rounded-xl shadow-sm">
                    {t('platform_hero_cta_2', 'See simple pricing')}
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
                src="/assets/Dashboard.webp" 
                caption={t("platform_hero_caption", "Offline-First Point of Sale & Operational Terminal")} 
                priority={true}
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The Inventory Grid (Light High-Contrast Surface) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <PackageSearch className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("platform_inv_title", "The Inventory Grid")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-base">
              Real-time stock deduction, multi-godown visibility, and low-bag alerts.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('platform_inv_card_a_headline', 'Never guess what is in stock again.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('platform_inv_card_a_copy', 'See live stock across every godown. ScaleERP deducts every bag, bottle, and unit as bills print at the counter. Stop counting bags by hand every night.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Reports.webp" 
                caption={t("platform_inv_preview", "Live Godown Stock Inventory Grid")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('platform_inv_card_b_headline', 'Catch stock mismatches early.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('platform_inv_card_b_copy', 'Run physical stock checks in minutes. Compare actual godown counts with computer numbers and save corrections in one click.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/AddTransaction.webp" 
                caption={t("platform_stock_adjust", "Rapid Stock Entry and Barcode/SKU Selection")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('platform_inv_card_c_headline', 'Prevent stock-outs during peak season.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('platform_inv_card_c_copy', 'Set minimum stock limits for high-demand items. ScaleERP warns you early so you can place mill orders on time.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Dashboard.webp" 
                caption={t("platform_stock_reports", "Low Stock Alerts & Fast-Depleting Inventory Widget")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Ledger Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("platform_led_title", "The Khata Ledger Grid")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-base">
              Farmer and supplier accounts with zero math errors and multi-language support.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('platform_led_card_d_headline', 'Clear overdue accounts faster.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('platform_led_card_d_copy', 'See every customer balance at a glance. Filter parties by oldest due dates or highest amounts, and export the list to Excel for recovery staff.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/TransactionRecords.webp" 
                caption={t("platform_party_ledger", "Party Balances & Full Transaction History")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('platform_led_card_e_headline', 'Eliminate payment disputes.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('platform_led_card_e_copy', 'When a farmer makes a partial cash payment, log it in one step. The printed receipt shows previous balance, current payment, and remaining dues.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/InvoiceExample.webp" 
                caption={t("platform_settle_invoice", "Dispute-Free Receipt: Previous Balance + Today Bill")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('platform_led_card_f_headline', 'Operate in English, Hindi, or Marathi.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('platform_led_card_f_copy', 'Switch languages with one click. Counter clerks type product codes while party accounts and printed invoices appear in local language.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/MarathiDashboard.webp" 
                caption={t("platform_marathi_ui", "Native Marathi & Hindi Counter Interface")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Engine Room (Zero Cloud Rent & Machine Locking) */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-3xl shadow-2xl my-8 transition-colors duration-500">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">Shop Machine Security</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-50">
              {t("platform_eng_title", "Zero Monthly Cloud Rent. Zero Internet Lag.")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white leading-snug">
              {t('platform_eng_card_g_headline', 'Zero loading spinners. Your bills write directly to your PC hard drive.')}
            </h3>
            <p className="text-base text-zinc-300 leading-relaxed">
              {t('platform_eng_card_g_copy', 'Why should your counter queue halt because a fiber cable snapped down the road? ScaleERP installs directly on your shop Windows computer with zero monthly cloud rent. Your license locks securely to your machine, and every bill and khata entry saves straight to your hard drive in under 1 second without internet.')}
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Runs 100% offline with zero external cloud server dependence</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Machine-locked license prevents unauthorized copies or tampering</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Automatic 2:00 AM encrypted backup straight to your Google Drive</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-2 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
              <MediaMockup 
                type="image" 
                src="/assets/LicenseMangement.webp" 
                caption={t("platform_engine_arch", "Machine-Locked Offline License & Local Security Status")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("platform_cta_headline", "Ready to put this engine on your counter?")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("platform_cta_copy", "See how ScaleERP formats your A4 GST bills, prints 3-inch thermal receipts, and generates daily cash closing reports.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/product/features/tools" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                  {t("platform_cta_primary", "Explore tools & invoicing")} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                  {t("platform_cta_secondary", "View Simple Pricing")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
