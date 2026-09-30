"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { JargonTooltip } from "@/components/JargonTooltip";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ComparisonPage() {
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
                {t('Comparison')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                {t('comp_hero_h1')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('comp_hero_h2')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/contact" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white border-0">
                    {t('comp_cta_primary')}
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button variant="ghost" size="lg" className="h-14 px-8 text-base border border-white/20 hover:bg-white/10 text-white hover:text-white dark:border-zinc-900/20 dark:text-zinc-900 dark:hover:bg-zinc-900/10 dark:hover:text-zinc-900">
                    {t('comp_cta_secondary')}
                  </Button>
                </Link>
              </div>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
            <div className="relative bg-zinc-900/50 dark:bg-white/50 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-lg p-8 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                <MediaMockup type="video" caption="Video: A 5-second split-screen loop. Left side (Legacy) vs Right side (ScaleERP) fast billing." />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The Contrast Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("comp_feature_headline")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
          {/* Card A & B - Learning Curve */}
          <div className="flex flex-col bg-zinc-950 dark:bg-zinc-800 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('comp_card_a_headline')}</h3>
            <p className="text-zinc-400">{t('comp_card_a_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 rounded-lg p-8 shadow-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">{t('comp_card_b_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-1">{t('comp_card_b_copy')}</p>
            <div className="mt-auto pt-6">
               <MediaMockup type="image" caption='Micro-UI: A clean, inviting "Add New Bill" button contrasting heavily with a grey, cluttered menu bar.' />
            </div>
          </div>
          
          {/* Card C & D - Bloated Interfaces vs 3 Fields */}
          <div className="flex flex-col bg-zinc-950 dark:bg-zinc-800 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('comp_card_c_headline')}</h3>
            <p className="text-zinc-400">{t('comp_card_c_copy')}</p>
          </div>
          <div className="flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 rounded-lg p-8 shadow-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">{t('comp_card_d_headline')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-1">{t('comp_card_d_copy')}</p>
            <div className="mt-auto pt-6">
               <MediaMockup type="image" caption="Micro-UI: A tightly zoomed crop of the 3-field input row in ScaleERP." />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Matrix */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                 {t(`comp_feat_${i}`)}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                 {i === 1 ? <JargonTooltip explanation={t("tooltip_sqlite_wal")}>{t(`comp_feat_${i}_desc`)}</JargonTooltip> : 
                  i === 4 ? <JargonTooltip explanation={t("tooltip_rsa_offline")}>{t(`comp_feat_${i}_desc`)}</JargonTooltip> : 
                  t(`comp_feat_${i}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("comp_cta_headline")}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
          {t("comp_cta_copy")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" passHref>
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-terracotta hover:bg-[#C96B50] text-white">
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
