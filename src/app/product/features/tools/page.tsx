"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import Link from "next/link";
import { ChevronRight, FileText, PieChart, CheckCircle2 } from "lucide-react";

export default function ToolsPage() {
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
                {t('ScaleERP Tools', 'Billing Tools & Reports')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t('tools_hero_h1', 'Print clean bills. Know your daily numbers.')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('tools_hero_h2', 'Give every farmer and dealer a clear printed receipt while tracking every rupee of cash and credit moving through your shop.')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/product/features/tasks" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                    {t('tools_cta_primary', 'Tasks & automation')} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-white/90 text-zinc-900 border-2 border-zinc-300 hover:bg-zinc-100 font-semibold rounded-xl shadow-sm">
                    {t('tools_cta_secondary', 'View simple pricing')}
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
                src="/assets/CustomBills.webp" 
                caption={t("tools_hero_caption", "Customizable Thermal & A4 Invoice Builder")} 
                priority={true}
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The Presentation Grid (Light High-Contrast Surface) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("tools_pres_title", "Billing & Printing Formats")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-base">
              Dual print formats for high-speed thermal rolls and full A4 tax invoices.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('tools_pres_card_a_headline', 'Bills that build trust.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('tools_pres_card_a_copy', 'Stop handing out kaccha paper slips. Print sharp invoices with your firm\'s name, logo, GST breakdown, and payment terms. Use full A4 sheets for wholesale dispatches or fast 3-inch thermal rolls at the counter.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/InvoiceExample.webp"
                caption={t("tools_invoice_settings", "A4 Mandi Tax Invoice with Itemized Bag & Hamali Breakdown")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('tools_pres_card_b_headline', 'Print bills in your buyer\'s language.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('tools_pres_card_b_copy', 'Your counter clerk can type in English while the bill prints in Marathi or Hindi. Farmers read the exact bag count, rate, and remaining khata balance in their own script.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/MarathiDashboard.webp" 
                caption={t("tools_marathi_invoice", "Bilingual Localized Interface (मराठी, हिन्दी & English)")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Analytics Grid (Dark Slate Surface) */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-3xl shadow-2xl my-8 transition-colors duration-500">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
            <PieChart className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">Nightly Reconciliation</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-50">
              {t("tools_ana_title", "Daily Reports & Credit Recovery")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-white">{t('tools_ana_card_c_headline', 'Your entire day on one screen.')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed mb-6 flex-1">{t('tools_ana_card_c_copy', 'When you close the shutter at night, get one-click totals for cash in the drawer, new udhari added today, and total bags dispatched across all godowns.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Dashboard.webp" 
                caption={t("tools_summary_widget", "Executive Dashboard: Live Net Receivables & Profit Metrics")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-white">{t('tools_ana_card_d_headline', 'See who owes you money.')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed mb-6 flex-1">{t('tools_ana_card_d_copy', 'Sort your party ledgers by highest pending balance or oldest due date. Export the list to PDF or Excel in one click for your recovery staff.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/TransactionRecords.webp" 
                caption={t("tools_party_table", "Audit Trails & Party Ledger Breakdown")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-white">{t('tools_ana_card_e_headline', 'See which items move fastest.')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed mb-6 flex-1">{t('tools_ana_card_e_copy', 'Check which feed brands, seeds, or hardware items sold the most this month so you stock the right goods and avoid dead inventory.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Reports.webp" 
                caption={t("tools_analytics_chart", "Comprehensive Reporting: Sales, Purchases, Stock Flow")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("tools_cta_headline", "Cut out the manual follow-ups.")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("tools_cta_copy", "See how ScaleERP sends WhatsApp payment reminders and backs up your local database every night.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/product/features/tasks" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                  {t("tools_cta_primary", "Explore tasks & automation")} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                  {t("tools_cta_secondary", "View simple pricing")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
