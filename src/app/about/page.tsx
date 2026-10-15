"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { useTranslation } from "react-i18next";
import { ChevronRight, ShieldCheck, CheckCircle2, Zap, WifiOff, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-black/5 border border-white/20 dark:border-black/10 backdrop-blur-md mb-2 shadow-sm">
                <span className="text-xs font-semibold tracking-wide text-zinc-200 dark:text-zinc-800 uppercase font-outfit">
                  Grounded in Soil • Engineered for Speed
                </span>
              </div>
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                {t("about_h1", "Built for Real Indian Mandi and Shop Realities.")}
              </h1>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="max-w-2xl text-lg sm:text-xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed font-sans">
                {t("about_h2", "We built ScaleERP because cloud accounting software fails Indian merchants during the 8:00 AM rush when broadband drops and farmers wait for bags.")}
              </p>
            </BlurIn>
          </div>

          {/* Right Visual Component: Hero Workstation UI */}
          <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-zinc-950">
              <Image
                src="/assets/Dashboard.webp"
                alt="ScaleERP Desktop Workstation Dashboard"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-zinc-200 text-center font-medium border border-zinc-800">
                Paper Ledgers → ScaleERP High-Velocity Digital Transition
              </div>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The Mission Grid: 3 Equal-Height Vertical Cards with Clean Uncropped Screenshots */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="outline" className="text-terracotta border-terracotta/30 bg-terracotta/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
            Our Purpose
          </Badge>
          <h2 className="font-outfit text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("about_section_2_title", "Why We Built ScaleERP.")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Practical software built around how grain merchants, feed retailers, and APMC brokers actually do business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Bahi-khatas shouldn't leak money -> TransactionRecords.webp */}
          <Card className="flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-zinc-950">
              <Image
                src="/assets/TransactionRecords.webp"
                alt="Zero Forgotten Udhari Digital Bahi-Khata Ledger"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>
            <CardHeader className="pt-6 pb-2 space-y-2">
              <CardTitle className="text-xl font-bold font-outfit text-zinc-900 dark:text-zinc-50">
                {t("about_mission_grid_card_a_headline", "Bahi-Khatas Shouldn't Leak Money")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-8">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {t("about_mission_grid_card_a_copy", "In paper khatas, missed bills and calculation errors cost shops thousands every season. ScaleERP carries previous balance directly onto customer receipts so dues are settled with zero disputes.")}
              </p>
            </CardContent>
          </Card>

          {/* Card 2: You run a trade counter, not a CA firm -> AddTransaction.webp */}
          <Card className="flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-zinc-950">
              <Image
                src="/assets/AddTransaction.webp"
                alt="Fast 3-Letter Counter Billing Workflow"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>
            <CardHeader className="pt-6 pb-2 space-y-2">
              <CardTitle className="text-xl font-bold font-outfit text-zinc-900 dark:text-zinc-50">
                {t("about_mission_grid_card_b_headline", "You Run a Trade Counter, Not a CA Firm")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-8">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {t("about_mission_grid_card_b_copy", "Traditional ERPs force clerks to navigate 15 accounting menus just to sell 10 bags of feed. ScaleERP lets staff find products in 3 keystrokes and hit Enter to print in 4 seconds.")}
              </p>
            </CardContent>
          </Card>

          {/* Card 3: English, Hindi, and Marathi built in -> MarathiDashboard.webp */}
          <Card className="flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-zinc-950">
              <Image
                src="/assets/MarathiDashboard.webp"
                alt="Vernacular Marathi and Hindi Counter Interface"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>
            <CardHeader className="pt-6 pb-2 space-y-2">
              <CardTitle className="text-xl font-bold font-outfit text-zinc-900 dark:text-zinc-50">
                {t("about_mission_grid_card_c_headline", "English, Hindi, and Marathi Built In")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-8">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {t("about_mission_grid_card_c_copy", "Language should never slow down your business. Your counter clerks can operate entirely in Marathi or Hindi, while your CA still gets clean, standardized GST reports for filing.")}
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* 3. The Mandi Conditions Section (Cleaned Merchant Language - Zero Dev Jargon & Real Asset) */}
      <section className="px-4 py-24 sm:py-32 w-full bg-zinc-950 text-zinc-50 border-y border-zinc-800 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold tracking-wide text-emerald-400 uppercase font-outfit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              BUILT FOR REAL MANDI CONDITIONS
            </div>
            
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Built to survive power cuts, Wi-Fi drops, and 14-hour counter days.
            </h2>
            
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                Most modern billing software runs inside a web browser. The moment your shop broadband drops or 4G slows down, the screen spins and your counter queue halts. ScaleERP installs directly onto your shop computer so bills print in under 1 second with the internet cable completely unplugged.
              </p>
              <p>
                Instead of charging you monthly per-user cloud rent, your license locks safely to your shop PC. Every night at 2:00 AM, an encrypted copy of your entire Bahi-Khata backs up automatically to your personal Google Drive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <WifiOff className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-outfit">100% Offline Speed</h4>
                  <p className="text-xs text-zinc-400">Zero dependency on internet during morning rush</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <HardDrive className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-outfit">Machine-Locked Security</h4>
                  <p className="text-xs text-zinc-400">Tied safely to your shop PC hardware</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Visual: Clean Uncropped License Management UI (Zero Dev Flowcharts) */}
          <div className="w-full lg:w-[480px] shrink-0 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 font-outfit">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Shop Workstation License Portal</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Offline Authority</span>
            </div>
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src="/assets/LicenseMangement.webp"
                alt="ScaleERP Genuine Offline Workstation License Portal"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
              />
            </div>
            <p className="text-xs text-center text-zinc-400 pt-1 font-sans">
              Instant hardware-locked offline activation for your shop desktop.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Closing Call-to-Action */}
      <section className="px-4 py-24 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16 rounded-3xl">
        <h2 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("about_cta_headline", "Experience True Counter Velocity.")}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-sans">
          {t("about_cta_copy", "Download the genuine Windows build and try all Wholesale Pro features free for 30 days on your shop PC.")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold">
            <Link href="/download">
              {t("about_cta_primary", "Download 30-Day Free Trial")} <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold">
            <Link href="/contact">
              {t("about_cta_secondary", "Speak with Support")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
