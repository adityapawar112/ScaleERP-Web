"use client";

import React from "react";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { useTranslation } from "react-i18next";
import { ChevronRight, Shield, ShieldCheck, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Earthy & Grounded: Terracotta Canvas) */}
      <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <TopographicPattern />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                {t("about_h1")}
              </h1>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="max-w-2xl text-xl sm:text-2xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed">
                {t("about_h2")}
              </p>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
            <MediaMockup 
              type="video" 
              caption="Paper Ledger -> ScaleERP Digital UI Transition" 
              className="h-64 sm:h-80 border-terracotta/20 shadow-xl" 
              src="/assets/about_hero.png"
            />
          </BlurIn>
        </div>
      </section>

      {/* 2. The Mission Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("about_section_2_title", "Why We Built ScaleERP.")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card A (Left) */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md lg:col-span-1 lg:row-span-2">
            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {t("about_mission_grid_card_a_headline")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-6 pb-8">
              <p className="text-muted-foreground leading-relaxed">
                {t("about_mission_grid_card_a_copy")}
              </p>
              <div className="mt-4 opacity-80">
                <MediaMockup type="image" caption="Digital Stock Tracking" className="h-40" src="/assets/stock_tracking.png" />
              </div>
            </CardContent>
          </Card>

          {/* Card B (Right Top) */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md lg:col-span-2">
            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {t("about_mission_grid_card_b_headline")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 pb-8 flex flex-col sm:flex-row gap-6">
              <p className="text-muted-foreground leading-relaxed flex-1">
                {t("about_mission_grid_card_b_copy")}
              </p>
              <div className="flex-1 shrink-0 w-full sm:w-1/2">
                <MediaMockup type="image" caption="Legacy vs ScaleERP Fast Billing" className="h-32" src="/assets/fast_billing.png" />
              </div>
            </CardContent>
          </Card>

          {/* Card C (Right Bottom) */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md lg:col-span-2">
            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-terracotta">
                {t("about_mission_grid_card_c_headline")}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-muted-foreground leading-relaxed">
                {t("about_mission_grid_card_c_copy")}
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* 3. The Engineering Grid (Forced Dark Mode Section) */}
      <section className="px-4 py-32 w-full bg-zinc-950 text-zinc-50 border-y border-zinc-800 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              SECURITY & ARCHITECTURE
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {t("about_engineering_grid_headline")}
            </h2>
            
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>{t("about_engineering_grid_copy_1")}</p>
              <p>
                {t("about_engineering_grid_copy_2")}
                <JargonTooltip explanation={t("tooltip_sqlite_wal")}>
                  <strong className="text-white font-mono">SQLite WAL</strong>
                </JargonTooltip>
                {t("about_engineering_grid_copy_3")}
                <JargonTooltip explanation={t("tooltip_rsa_offline")}>
                  <strong className="text-white font-mono">RSA Offline Licensing</strong>
                </JargonTooltip>
                {t("about_engineering_grid_copy_4")}
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-[450px] shrink-0 bg-black/40 border border-white/10 rounded-lg p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Server className="w-10 h-10 text-emerald-500" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Local Engine</p>
                <p className="text-sm font-mono text-zinc-300">127.0.0.1:DB_SYNC</p>
              </div>
            </div>
            <MediaMockup type="video" caption="Cryptographic Offline Data Streams" className="h-48 border-zinc-800 bg-zinc-900/80" src="/assets/crypto_data.png" />
          </div>
        </div>
      </section>

      {/* 4. Closing Call-to-Action */}
      <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("about_cta_headline")}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t("about_cta_copy")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-terracotta hover:bg-[#C96B50] text-white">
            {t("about_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700">
            {t("about_cta_secondary")}
          </Button>
        </div>
      </section>
    </div>
  );
}
