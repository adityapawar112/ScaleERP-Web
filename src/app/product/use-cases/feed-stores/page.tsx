"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Zap, BookOpenCheck, Languages, WifiOff, ChevronRight, Calculator, Truck, Clock, CheckCircle2, MessageCircle, Scale, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";

export default function FeedStoresPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <div className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-700 shadow-sm font-semibold text-xs tracking-wider uppercase">
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
              <p className="max-w-2xl text-lg sm:text-xl text-zinc-300 dark:text-zinc-700 font-medium leading-relaxed mx-auto lg:mx-0">
                {t("uc_feed_desc", "During sowing and dairy collection hours, farmers arrive together. ScaleERP lets you bill bags from multiple godowns, add loading hamali, and track village-wise farmer Udhari effortlessly.")}
              </p>
            </BlurIn>
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/download" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                    {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-white/90 text-zinc-900 border-2 border-zinc-300 hover:bg-zinc-100 font-semibold rounded-xl shadow-sm">
                    {t("nav_pricing", "Simple Pricing")}
                  </Button>
                </Link>
              </div>
            </BlurIn>
          </div>
          
          <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
            <div className="relative z-10 bg-zinc-900/50 dark:bg-white/50 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-2xl p-4 shadow-2xl">
              <MediaMockup 
                type="image" 
                src="/assets/AddTransaction.webp"
                priority={true}
                caption="High-speed counter billing with thermal receipt printing" 
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. Day-in-the-Life Mandi & Counter Workflow (With Timeline Line & Large Badges) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900/50 border-b border-border transition-colors">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
            Real Shop Routine
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            A Day in the Life Behind the Feed Store Counter
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            From 7:30 AM truck unloading to 8:00 PM cash drawer settlement, ScaleERP handles the chaotic reality of Indian agriculture stores.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-emerald-500/30 via-emerald-500 to-emerald-500/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1: 07:30 AM */}
            <Card className="rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold px-3 py-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-md">
                    07:30 AM
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    <Truck className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Truck Arrival & Hamali Entry
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    Split stock across Godown 1, Godown 2, and floor display
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Receive 10 tonnes of cattle feed or fertilizer. Instantly allocate 150 bags to Godown A and 50 bags to the shop counter.
                </p>
                <p className="font-semibold text-foreground pt-2 border-t border-border/50">
                  {t("uc_feed_bag_kg_title", "Buy in Tonnes and Quintals. Sell in 50kg Bags or Loose Kilos.")}
                </p>
              </CardContent>
            </Card>

            {/* Step 2: 09:00 AM */}
            <Card className="rounded-2xl border-2 border-emerald-500/50 bg-card shadow-md flex flex-col justify-between">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold px-3 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 rounded-md">
                    09:00 AM
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Peak Farmer Counter Rush
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    15 farmers waiting before morning milk dairy dispatch
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Clerk types 3 letters of farmer name or village. Enter-Enter-Print in 4 seconds. Bill prints in Marathi/Hindi with exact previous pending Udhari attached.
                </p>
                <p className="font-semibold text-emerald-700 dark:text-emerald-400 pt-2 border-t border-border/50">
                  Zero arguments over previous balance or bag loading rates.
                </p>
              </CardContent>
            </Card>

            {/* Step 3: 08:00 PM */}
            <Card className="rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between">
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold px-3 py-1 bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 rounded-md">
                    08:00 PM
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    1-Click Rokad & WhatsApp
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    Match physical cash drawer before rolling down shutters
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Click Daily Settlement. Cash matches screen down to the rupee. Send polite WhatsApp reminders to parties exceeding 30-day credit limits.
                </p>
                <p className="font-semibold text-blue-600 dark:text-blue-400 pt-2 border-t border-border/50">
                  2:00 AM auto-backup safely copies entire shop ledger to Google Drive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW BLOCK: Bag-to-Tonne Unit Conversion Visualizer */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl lg:px-8">
        <div className="rounded-3xl bg-emerald-950/10 dark:bg-emerald-950/30 border border-emerald-500/30 p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Automatic Unit Mathematics</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Inbound Tonnes ➔ Automatic 50kg Bags ➔ Loose Kg Counter Sales
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Step 1 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-mono font-bold text-muted-foreground uppercase">1. Inbound Purchase</span>
              <p className="text-lg font-bold text-foreground mt-2">10 Metric Tonnes</p>
              <p className="text-sm text-muted-foreground mt-1">Godrej Cattle Feed / Mahadhan Urea</p>
              <div className="mt-4 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                Purchase Rate: ₹24,000 / Tonne
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-zinc-900 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-md relative">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">2. Auto Godown Stock</span>
              <p className="text-lg font-bold text-foreground mt-2">200 Bags (50kg Each)</p>
              <p className="text-sm text-muted-foreground mt-1">Allocated across Godown A (150) & Counter (50)</p>
              <div className="mt-4 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1.5 rounded-lg border border-blue-500/20">
                Calculated Cost: ₹1,200 / Bag
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-mono font-bold text-muted-foreground uppercase">3. Rapid Counter Sale</span>
              <p className="text-lg font-bold text-foreground mt-2">Sell by Bag or Loose Kg</p>
              <p className="text-sm text-muted-foreground mt-1">Farmer buys 3 bags + 10 kg loose feed</p>
              <div className="mt-4 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-3 py-1.5 rounded-lg border border-purple-500/20">
                Deducts 3.2 bags automatically
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Counter Grid: Clean 3-Column Equal Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-border transition-colors">
        <div className="mb-12">
          <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full mb-3">
            Counter Speed
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("fs_section_2_title", "Speed and Control at the Counter.")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Lightning-Fast Entry */}
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t("fs_card_a_headline", "Fastest Counter Billing in the Market")}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">
              {t("fs_card_a_copy", "Type 3 letters of an item name or brand. Add bags or loose weight. Hit Enter to print on 3-inch thermal roll or A4 tax invoice.")}
            </p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/AddTransaction.webp" 
                caption="Predictive Text & Instant Godown Check" 
              />
            </div>
          </div>

          {/* Card 2: Seamless Ledgers */}
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <BookOpenCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t("fs_card_b_headline", "Automatic Bahi-Khata Ledger")}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">
              {t("fs_card_b_copy", "Every credit bill adds to the farmer's running account. Set maximum credit limits so clerks cannot hand out excess Udhari without owner PIN.")}
            </p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/TransactionRecords.webp" 
                caption="Farmer Ledger with Running Udhari and Payment Slips" 
              />
            </div>
          </div>

          {/* Card 3: Native Marathi Support */}
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t("fs_card_c_headline", "100% Marathi and Hindi Interface")}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">
              {t("fs_card_c_copy", "Operate the counter in Marathi or Hindi. Item names, bills, and payment terms print in your customer's native script.")}
            </p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/MarathiDashboard.webp" 
                caption="Full Counter Interface in Marathi & Hindi" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Reliability Section (Dark Surface) */}
      <section className="px-4 py-20 w-full bg-zinc-950 text-white overflow-hidden relative">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 shrink-0">
                <WifiOff className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="space-y-4 flex-1 text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">Offline Resilience</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {t("fs_card_d_headline", "Never Stops for Internet Cuts")}
                </h3>
                <p className="text-base text-zinc-300 leading-relaxed">
                  {t("fs_card_d_copy", "Broadband cuts and weak mobile signals never stall your shop. ScaleERP runs directly on your PC hard drive, writing every bill in under 1 second without internet.")}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant thermal print in 4 seconds</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Full stock deduction with wire unplugged</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("fs_cta_headline", "Stop making farmers wait in line.")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("fs_cta_copy", "Replace paper bahi-khatas and slow accounting software with a counter engine built for agro-retail.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/download" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                  {t("fs_cta_primary", "Download for your store")} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                  {t("nav_pricing", "Simple Pricing")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
