"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Zap, BookOpenCheck, Languages, WifiOff, ChevronRight, Calculator, Truck, Clock, CheckCircle2, MessageCircle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <title>{t("fs_title_tag", "ScaleERP | Cattle Feed, Fertilizer & Agro Retail Billing Software")}</title>
        <meta name="description" content={t("fs_meta_desc", "Built for agro dealers and cattle feed shops. Manage tonne to 50kg bag conversion, truck loading hamali, farmer khata balances, and offline receipt printing.")} />
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
                  {t("uc_feed_badge", "For Cattle Feed, Fertilizer & Agro Counters")}
                </div>
              </BlurIn>
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  {t("uc_feed_title", "Built for the Seasonal Rush of Feed and Krushi Seva Kendras")}
                </h1>
              </BlurIn>
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-lg sm:text-xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed mx-auto lg:mx-0">
                  {t("uc_feed_desc", "During sowing and dairy collection hours, farmers arrive together. ScaleERP lets you bill bags from multiple godowns, add loading hamali, and track village-wise farmer Udhari effortlessly.")}
                </p>
              </BlurIn>
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/download" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white rounded-xl font-bold shadow-md">
                      {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/pricing" passHref>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-base border-zinc-700 dark:border-zinc-300 rounded-xl">
                      {t("nav_pricing", "Simple Pricing")}
                    </Button>
                  </Link>
                </div>
              </BlurIn>
            </div>
            
            <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
              <div className="absolute inset-0 bg-terracotta/20 rounded-2xl blur-3xl transform rotate-3 scale-105 opacity-50 dark:opacity-30"></div>
              <div className="relative z-10">
                <MediaMockup 
                  type="image" 
                  src="/assets/AddTransaction.webp"
                  priority={true}
                  caption="High-speed counter billing with thermal receipt printing" 
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-900"
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* 2. Day-in-the-Life Mandi & Counter Workflow */}
        <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900/50 border-b border-border transition-colors">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="outline" className="text-terracotta border-terracotta/30 bg-terracotta/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Real Shop Routine
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              A Day in the Life Behind the Feed Store Counter
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              From morning truck unloading to late-night cash drawer tallying, ScaleERP handles the chaotic reality of Indian agriculture stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: 7:30 AM */}
            <Card className="rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between">
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-terracotta/10 text-terracotta">
                    07:30 AM
                  </span>
                  <Truck className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  Truck Arrival & Hamali Entry
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Split stock across Godown 1, Godown 2, and floor display
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-xs text-muted-foreground leading-relaxed">
                <p>
                  Receive 10 tonnes of cattle feed or fertilizer. Instantly allocate 150 bags to Godown A and 50 bags to the shop counter.
                </p>
                <p className="font-semibold text-foreground pt-1 border-t border-border/50">
                  {t("uc_feed_bag_kg_title", "Buy in Tonnes and Quintals. Sell in 50kg Bags or Loose Kilos.")}
                </p>
              </CardContent>
            </Card>

            {/* Step 2: 09:00 AM */}
            <Card className="rounded-2xl border-2 border-brand-primary/40 bg-card shadow-md flex flex-col justify-between">
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    09:00 AM
                  </span>
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  Peak Farmer Counter Rush
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  15 farmers waiting before morning milk dairy dispatch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-xs text-muted-foreground leading-relaxed">
                <p>
                  Clerk types 3 letters of farmer name or village. Enter-Enter-Print in 4 seconds. Bill prints in Marathi/Hindi with exact previous pending Udhari attached.
                </p>
                <p className="font-semibold text-emerald-700 dark:text-emerald-300 pt-1 border-t border-border/50">
                  Zero arguments over previous balance or bag loading rates.
                </p>
              </CardContent>
            </Card>

            {/* Step 3: 08:00 PM */}
            <Card className="rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between">
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    08:00 PM
                  </span>
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  1-Click Rokad & WhatsApp
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Match physical cash drawer before rolling down shutters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-xs text-muted-foreground leading-relaxed">
                <p>
                  Click Daily Settlement. Cash matches screen down to the rupee. Send polite WhatsApp reminders to parties exceeding 30-day credit limits.
                </p>
                <p className="font-semibold text-blue-600 dark:text-blue-400 pt-1 border-t border-border/50">
                  2:00 AM auto-backup safely copies entire shop ledger to Google Drive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. The Counter Grid (Light Mode: #FFFFFF Base with Terracotta Accents) */}
        <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-b border-border transition-colors">
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
                <CardTitle className="text-2xl font-bold">{t("fs_card_a_headline", "Fastest Counter Billing in the Market")}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t("fs_card_a_copy", "Type 3 letters of an item name or brand. Add bags or loose weight. Hit Enter to print on 3-inch thermal roll or A4 tax invoice.")}
                </CardDescription>
                <div className="relative w-full h-56 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-6">
                  <MediaMockup type="image" src="/assets/TransactionRecords.webp" caption="Predictive Text & Instant Godown Check" />
                </div>
              </CardContent>
            </Card>

            {/* Card B (Top Right): Seamless Ledgers */}
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
              <CardHeader>
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpenCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("fs_card_b_headline", "Automatic Bahi-Khata Ledger")}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {t("fs_card_b_copy", "Every credit bill adds to the farmer's running account. Set maximum credit limits so clerks cannot hand out excess Udhari without owner PIN.")}
                </p>
                <div className="mt-auto">
                  <MediaMockup type="image" src="/assets/TransactionRecords.webp" caption="Toggle: Cash Sale / Add to Party Ledger" className="h-24" />
                </div>
              </CardContent>
            </Card>

            {/* Card C (Bottom Right): Native Marathi Support */}
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("fs_card_c_headline", "100% Marathi and Hindi Interface")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t("fs_card_c_copy", "Operate the counter in Marathi or Hindi. Item names, bills, and payment terms print in your customer's native script.")}
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* 4. The Reliability Grid (Dark Mode) */}
        <section className="px-4 py-24 w-full bg-zinc-950 dark:bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10 max-w-5xl mx-auto">
            
            <Card className="bg-zinc-900 border-zinc-800 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <CardHeader className="text-center md:text-left pt-12 px-8 md:px-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0 border border-emerald-500/30">
                  <WifiOff className="w-8 h-8 text-emerald-400" />
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-extrabold">{t("fs_card_d_headline", "Never Stops for Internet Cuts")}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 md:px-12 pb-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    ScaleERP runs 100% locally on your computer hard drive. Even if rural telecom towers go down or fiber cables are cut during road work, your counter prints receipts without missing a beat.
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

        {/* 5. Closing Call-to-Action */}
        <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
            {t("fs_cta_headline", "Take Control of Your Feed Store Counter")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("fs_cta_copy", "Download genuine ScaleERP on your shop computer and print bills in 4 seconds flat. Free 30-day trial with all wholesale pro features included.")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/download" passHref>
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white font-bold rounded-xl shadow-md">
                {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700 rounded-xl">
                {t("nav_pricing", "Simple Pricing")}
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
