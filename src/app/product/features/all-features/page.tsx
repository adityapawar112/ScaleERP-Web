"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { JargonTooltip } from "@/components/JargonTooltip";
import Link from "next/link";
import { ChevronRight, Database, PackageSearch, Receipt, Users, ShieldCheck } from "lucide-react";

export default function AllFeaturesPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* 1. Hero Section Blueprint */}
      <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-900/10 border border-white/20 dark:border-zinc-900/20 backdrop-blur-md text-sm font-medium">
                {t('All Features')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                {t('af_hero_h1')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('af_meta_desc')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/pricing" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white border-0">
                    {t('view_pricing')}
                  </Button>
                </Link>
              </div>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
            <div className="relative bg-zinc-900/50 dark:bg-white/50 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-lg p-8 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                <MediaMockup type="image" src="/assets/full_feature_suite.png" caption="Full Feature Suite" />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. Inventory & Godown Management */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <PackageSearch className="w-8 h-8 text-emerald-500" />
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("af_section_1_title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_1a_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{t('af_card_1a_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_1b_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{t('af_card_1b_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_1c_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{t('af_card_1c_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_1d_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{t('af_card_1d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 3. Billing & Invoicing (Terracotta Accents) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <Receipt className="w-8 h-8 text-terracotta" />
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("af_section_2_title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2a_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('af_card_2a_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2b_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('af_card_2b_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2c_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('af_card_2c_copy')}</p>
          </div>
          <div className="flex flex-col bg-terracotta/10 dark:bg-terracotta/5 border border-terracotta/20 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t('af_card_2d_headline')}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('af_card_2d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 4. Ledgers & Party Management (Dark Mode) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-lg shadow-2xl my-12 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <Users className="w-8 h-8 text-blue-400" />
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-50">
            {t("af_section_3_title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t('af_card_3a_headline')}</h3>
            <p className="text-zinc-400">{t('af_card_3a_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t('af_card_3b_headline')}</h3>
            <p className="text-zinc-400">{t('af_card_3b_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t('af_card_3c_headline')}</h3>
            <p className="text-zinc-400">{t('af_card_3c_copy')}</p>
          </div>
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">{t('af_card_3d_headline')}</h3>
            <p className="text-zinc-400">{t('af_card_3d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 5. Architecture & Security (Deep Navy/Charcoal) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-emerald-500" />
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("af_section_4_title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_4a_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
               <JargonTooltip explanation={t("tooltip_sqlite_wal")}>{t('af_card_4a_copy')}</JargonTooltip>
            </p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_4b_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
               <JargonTooltip explanation={t("tooltip_rsa_offline")}>{t('af_card_4b_copy')}</JargonTooltip>
            </p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_4c_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{t('af_card_4c_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t('af_card_4d_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{t('af_card_4d_copy')}</p>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("comp_cta_headline")}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
          {t("comp_cta_copy")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white">
              {t("comp_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/pricing" passHref>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              {t("comp_cta_secondary")}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
