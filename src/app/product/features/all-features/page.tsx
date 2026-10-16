"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import Link from "next/link";
import { ChevronRight, Database, PackageSearch, Receipt, Users, ShieldCheck, CheckCircle2, Lock, ArrowDownRight, Layers, Smartphone, RefreshCw } from "lucide-react";

export default function AllFeaturesPage() {
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
                {t('All Features', 'All Capabilities Directory')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t('af_hero_h1', 'Every Tool You Need to Run Counter & Godown.')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('af_meta_desc', 'Full capability breakdown of ScaleERP: 3-field offline billing, multi-godown tracking, WhatsApp payment recovery, and tamper-proof shop data protection.')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/pricing" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                    {t('view_pricing', 'View simple pricing')} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-white/90 text-zinc-900 border-2 border-zinc-300 hover:bg-zinc-100 font-semibold rounded-xl shadow-sm">
                    {t('contact_sales', 'Talk to shop support')}
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
                src="/assets/Reports.webp" 
                caption="Consolidated Godown Inventory & Financial Health Suite" 
                priority={true} 
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. Inventory & Godown Management (Light High-Contrast Surface) */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <PackageSearch className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Stock & Multi-Location</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("af_section_1_title", "Inventory & Godown Tracking")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_1a_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_1a_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_1b_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_1b_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <ArrowDownRight className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_1c_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_1c_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <PackageSearch className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_1d_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_1d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 3. Billing & Invoicing */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center border border-terracotta/20">
            <Receipt className="w-6 h-6 text-terracotta" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta">Counter Speed</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("af_section_2_title", "Billing & Thermal/A4 Invoicing")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2a_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_2a_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2b_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_2b_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2c_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_2c_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2d_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_2d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 4. Ledgers & Party Management */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Khata & Recovery</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("af_section_3_title", "Party Ledgers & Bahi-Khata")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_3a_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_3a_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_3b_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_3b_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_3c_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_3c_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{t('af_card_3d_headline')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{t('af_card_3d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 5. Counter Security, Backups & Migration (Purged Jargon, Clean Dark Surface) */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-3xl shadow-2xl my-8 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">Tamper-Proof Reliability</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white">
              {t("af_section_4_title", "Counter Security, Backups & Easy Migration")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{t('af_card_4a_headline', 'Zero internet lag & power-cut protection')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed">{t('af_card_4a_copy', 'Bills save in under 1 second directly to your computer hard drive, even if power or Wi-Fi cuts out mid-bill.')}</p>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{t('af_card_4b_headline', 'Machine-locked license & anti-backdating guard')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed">{t('af_card_4b_copy', 'Locks safely to your shop PC with no monthly cloud rent, and stops clerks from changing computer dates to alter past cash bills.')}</p>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{t('af_card_4c_headline', '2:00 AM Automated Cloud Backup')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed">{t('af_card_4c_copy', 'Automatically encrypts your local shop database at 2:00 AM (or on demand) and syncs an off-site backup to Google Drive.')}</p>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{t('af_card_4d_headline', '1-Click WhatsApp Udhari Recovery')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed">{t('af_card_4d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("comp_cta_headline", "Put ScaleERP on Your Counter Today.")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("comp_cta_copy", "Keep your business grounded in trust, and let fast local software handle the numbers.")}
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
    </div>
  );
}
