"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { Zap, BookOpenCheck, Languages, WifiOff, ChevronRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";
import Head from "next/head";

export default function FeedStoresPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("fs_title_tag")}</title>
        <meta name="description" content={t("fs_meta_desc")} />
      </Head>
      <div className="flex flex-col min-h-screen">
        
        {/* 1. Hero Section (Bright, High-Energy Canvas) */}
        <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
          <div className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta mb-2 shadow-sm font-semibold text-sm tracking-wide uppercase">
                  <Calculator className="w-4 h-4" />
                  {t("fs_badge", "Retail Checkout")}
                </div>
              </BlurIn>
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  {t("fs_hero_h1")}
                </h1>
              </BlurIn>
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-xl sm:text-2xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed mx-auto lg:mx-0">
                  {t("fs_hero_h2")}
                </p>
              </BlurIn>
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/pricing" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white rounded-lg">
                      {t("fs_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </BlurIn>
            </div>
            
            <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
              <div className="absolute inset-0 bg-terracotta/20 rounded-lg blur-3xl transform rotate-3 scale-105 opacity-50 dark:opacity-30"></div>
              <div className="relative z-10">
                <MediaMockup 
                  type="image" 
                  src="/assets/AddTransaction.png"
                  caption="High-speed billing interface with thermal receipt printing" 
                  className="rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-900"
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* 2. The Counter Grid (Light Mode: #FFFFFF Base with Terracotta Accents) */}
        <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">{t("fs_section_2_title", "Speed and Control at the Counter.")}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
            
            {/* Card A (Large Left): Lightning-Fast Entry */}
            <Card className="lg:col-span-2 lg:row-span-2 flex flex-col bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-terracotta" />
                </div>
                <CardTitle className="text-2xl font-bold">{t("fs_card_a_headline")}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  {t("fs_card_a_copy")}
                </CardDescription>
                <div className="relative w-full h-48 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-6">
                  <MediaMockup type="image" src="/assets/TransactionRecords.png" caption="Predictive Text & Instant Godown Check" />
                </div>
              </CardContent>
            </Card>

            {/* Card B (Top Right): Seamless Ledgers */}
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
              <CardHeader>
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpenCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("fs_card_b_headline")}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  {t("fs_card_b_copy")}
                </p>
                <div className="mt-auto">
                  <MediaMockup type="image" src="/assets/TransactionRecords.png" caption="Toggle: Cash Sale / Add to Party Ledger" className="h-24" />
                </div>
              </CardContent>
            </Card>

            {/* Card C (Bottom Right): Native Marathi Support */}
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("fs_card_c_headline")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("fs_card_c_copy")}
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* 3. The Reliability Grid (Dark Mode: Deep Navy/Charcoal) */}
        <section className="px-4 py-24 w-full bg-zinc-950 dark:bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10 max-w-5xl mx-auto">
            
            <Card className="bg-zinc-900 border-zinc-800 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <CardHeader className="text-center md:text-left pt-12 px-8 md:px-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0 border border-emerald-500/30">
                  <WifiOff className="w-8 h-8 text-emerald-400" />
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-extrabold">{t("fs_card_d_headline")}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 md:px-12 pb-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {t("fs_card_d_copy").split(' ').map((word, i) => 
                      word.toLowerCase().includes('sqlite') || word.includes('इंजिन')
                        ? <JargonTooltip key={i} explanation={t("tooltip_sqlite_wal") || "A high-performance local database system."}>{word} </JargonTooltip> 
                        : word + ' '
                    )}
                  </p>
                </div>
                <div className="w-full md:w-80 shrink-0">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 shadow-inner">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wide">{t("fs_offline_mode", "Offline Mode Active")}</span>
                    </div>
                    <p className="text-xs text-zinc-500">{t("fs_offline_bills", "142 Bills Processed Today")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* 4. Closing Call-to-Action (Light Canvas) */}
        <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
            {t("fs_cta_headline")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            {t("fs_cta_copy")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" passHref>
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white">
                {t("fs_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700">
                {t("view_pricing", "View Pricing")}
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
