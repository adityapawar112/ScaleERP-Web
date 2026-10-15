"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  FaBolt,
  FaBookOpen,
  FaBoxOpen,
  FaShieldAlt,
  FaWifi,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaWindows,
  FaLanguage,
  FaCloudUploadAlt,
  FaLock,
  FaStore,
  FaUserCheck,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurIn } from "@/components/ui/blur-in";
import { Marquee } from "@/components/ui/marquee";
import { useTranslation } from "react-i18next";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MorningRushCalculator } from "@/components/MorningRushCalculator";

const SafariMockup = dynamic(
  () => import("@/components/ui/safari-mockup").then((m) => m.SafariMockup),
  { ssr: true }
);

const HeroVideoFrame = dynamic(
  () => import("@/components/ui/hero-video-frame").then((m) => m.HeroVideoFrame),
  { ssr: true }
);

const FarmHeroPattern = dynamic(
  () => import("@/components/ui/farm-hero-pattern").then((m) => m.FarmHeroPattern),
  { ssr: true }
);

export default function Home() {
  const { t, i18n } = useTranslation();
  const [activePreviewLang, setActivePreviewLang] = useState<"mr" | "hi" | "en">("mr");

  return (
    <div className="flex flex-col w-full bg-background selection:bg-brand-primary/20 relative">
      {/* Schema.org SoftwareApplication Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ScaleERP",
            "operatingSystem": "Windows 10, Windows 11",
            "applicationCategory": "BusinessApplication",
            "description": "Lightning-fast, offline-first inventory management and rapid billing platform for wholesale distributors, feed retailers, and agricultural brokers.",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "4999",
              "highPrice": "9999",
              "offerCount": "2",
            },
            "softwareVersion": "1.0.0",
            "author": {
              "@type": "Organization",
              "name": "ScaleERP",
              "url": "https://scale-erp.vercel.app",
            },
            "featureList": [
              "Print bills in 4 seconds using keyboard Enter key",
              "100% Offline operation with zero internet lag",
              "Automatic digital khata with previous balance on receipts",
              "Multi-godown stock tracking across feed and agricultural brands",
              "1-Click WhatsApp payment reminders in Marathi and Hindi",
              "2:00 AM automatic Google Drive backups",
            ],
          }),
        }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Organic Farm Field SVG Pattern with subtle opacity */}
        <FarmHeroPattern />
        
        {/* Subtle Radial Glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-background/40 rounded-full blur-[100px] z-0 pointer-events-none"></div>
        
        <div className="z-10 max-w-5xl space-y-8 w-full flex flex-col items-center">
          <Badge variant="outline" className="text-brand-dark dark:text-brand-primary border-brand-primary/40 bg-background/80 backdrop-blur-md px-5 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full shadow-sm">
            {t('hero_badge', 'Built for Indian Wholesale Traders, Mandi Brokers & Retail Counters')}
          </Badge>
          
          <BlurIn delay={0}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.08] font-heading font-extrabold tracking-tight text-foreground drop-shadow-sm max-w-4xl">
              {t('hero_headline', 'Print Bills in 4 Seconds. Recover Every Rupee of Udhari. Runs 100% Without Internet.')}
            </h1>
          </BlurIn>
          
          <BlurIn delay={0.2}>
            <h2 className="font-heading text-base sm:text-lg md:text-xl text-foreground/80 font-normal max-w-2xl mx-auto leading-relaxed">
              {t('hero_subheadline', 'Stop losing customers to slow software and internet cuts. Manage counter billing, multi-godown stock, broker commissions, and customer khatas in English, Hindi, and Marathi.')}
            </h2>
          </BlurIn>
          
          <BlurIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 z-20 relative w-full sm:w-auto">
              <Link href="/download" passHref>
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-dark font-bold rounded-xl px-8 h-14 text-base w-full sm:w-auto flex items-center justify-center gap-2.5 group shadow-md transition-all border border-brand-primary/20">
                  <FaWindows className="text-lg text-brand-dark" />
                  <span>{t('hero_cta_primary', 'Download Free for Windows')}</span>
                </Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-md border-border/80 text-foreground hover:bg-muted/80 rounded-xl px-8 h-14 text-base w-full sm:w-auto shadow-sm">
                  {t('nav_pricing', 'Simple Pricing')}
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground pt-3 flex items-center justify-center gap-2">
              <FaCheckCircle className="text-emerald-500" />
              <span>{t('hero_trust_note', 'Works on Windows 10 & 11 • No Internet Needed at Counter • Instant 30-Day Full Trial')}</span>
            </p>
          </BlurIn>
          
          {/* Visual Focus: Safari Mockup with Live Counter Video Facade */}
          <BlurIn delay={0.6} className="w-full px-2 sm:px-0">
            <div className="mt-8 sm:mt-12 mx-auto relative w-full max-w-5xl rounded-xl z-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-border/50 bg-background/70 p-2 backdrop-blur-xl">
              <SafariMockup url="app.scaleerp.com/counter-billing">
                <HeroVideoFrame
                  posterSrc="/assets/Dashboard.webp"
                  videoSrc="https://www.youtube.com/embed/y1WYCrMw0UY?autoplay=1&mute=1&loop=1&playlist=y1WYCrMw0UY&controls=0&modestbranding=1"
                  title="ScaleERP High-Stress Counter Checkout Demo"
                />
              </SafariMockup>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. Marquee Trust Banner */}
      <section className="w-full py-6 bg-muted/40 border-y border-border/60 overflow-hidden flex flex-col items-center relative z-20">
        <Marquee speed={40}>
          <div className="flex gap-10 items-center px-4">
            <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <FaCheckCircle className="text-emerald-500" />
              <span>{t('rush_metric_1_val', 'Under 4 Sec')} Billing Speed</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <FaWifi className="text-terracotta" />
              <span>{t('rush_metric_2_val', '100% Offline')} (Zero Server Wait)</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <FaBookOpen className="text-blue-500" />
              <span>Automatic Bahi-Khata & Udhari Receipts</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <FaBoxOpen className="text-amber-500" />
              <span>Multi-Godown Stock Alerts</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <FaShieldAlt className="text-purple-500" />
              <span>Anti-Clock Tamper & Safe Cash Drawer</span>
            </div>
          </div>
        </Marquee>
      </section>

      {/* 3. The 8:00 AM Counter Rush Comparison (Morning Rush Calculator) */}
      <section className="w-full py-16 md:py-24 px-4 relative overflow-hidden bg-background">
        <div className="container max-w-5xl mx-auto space-y-10">
          <MorningRushCalculator />

          {/* 3 Speed Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-terracotta font-heading">
                {t('rush_metric_1_val', 'Under 4 Sec')}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t('rush_metric_1_label', 'To print a complete receipt using just your keyboard Enter key')}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-heading">
                {t('rush_metric_2_val', '100% Offline')}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t('rush_metric_2_label', 'Zero dependence on Wi-Fi, mobile data, or remote servers during billing')}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-heading">
                {t('rush_metric_3_val', '1-Day Training')}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t('rush_metric_3_label', 'Any counter clerk can bill in Marathi, Hindi, or English on their very first day')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4 Pillars of Shop Control */}
      <section className="w-full py-20 md:py-28 px-4 relative overflow-hidden bg-muted/20 border-y border-border/60">
        <div className="container max-w-6xl mx-auto space-y-14 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge variant="outline" className="text-terracotta border-terracotta/30 bg-terracotta/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Shop Management
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">
              {t('pillars_heading', 'Complete Control Over Your Shop, Godown, and Cash Drawer')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Designed around the real morning routine of Indian wholesale and retail merchants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <Card className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta">
                  <FaBolt className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  {t('pillar_1_title', 'Lightning-Fast Counter Billing')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_1_desc', 'Find any item or customer by typing 3 letters of their name, village, or phone number. Settle cash, UPI, or part-credit bills and print on 3-inch thermal rolls or A4 sheets immediately.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border/60 shadow-inner group-hover:scale-[1.01] transition-transform">
                  <Image src="/assets/AddTransaction.webp" alt="Fast counter billing interface" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FaBookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  {t('pillar_2_title', 'Zero Forgotten Udhari (Bahi-Khata)')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_2_desc', "Every bill automatically prints the customer's previous balance plus today's total. Send polite payment reminders with exact pending dues on WhatsApp in one click.")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border/60 shadow-inner group-hover:scale-[1.01] transition-transform">
                  <Image src="/assets/TransactionRecords.webp" alt="Running party khata ledger" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaStore className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  {t('pillar_3_title', 'Multi-Godown & Brand Stock Tracking')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_3_desc', 'Buy in tonnes or quintals and sell in 50kg bags or loose kilos. Know exactly how many bags of each brand are sitting in Godown A vs Godown B before you run out.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border/60 shadow-inner group-hover:scale-[1.01] transition-transform">
                  <Image src="/assets/Reports.webp" alt="Godown stock and inventory balance reports" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>

            {/* Pillar 4 */}
            <Card className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FaCloudUploadAlt className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  {t('pillar_4_title', '2:00 AM Automatic Google Drive Backup')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_4_desc', 'Worried about computer crashes, viruses, or theft? ScaleERP automatically locks and saves a backup of your entire shop khata to your personal Google Drive every night.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border/60 shadow-inner group-hover:scale-[1.01] transition-transform">
                  <Image src="/assets/Backups.webp" alt="Google Drive automated shop backup" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. The 1-Day Staff Training Proof (Native Marathi / Hindi Screen Preview) */}
      <section className="w-full py-20 px-4 bg-background">
        <div className="container max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Clerk Simplicity
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-foreground">
              {t('home_munim_freedom_title', 'Any 12th-Pass Clerk Can Bill on Day 1. No Tally Course Needed.')}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t('home_munim_freedom_desc', 'Switch the entire screen between English, Hindi, and Marathi in one click. Your counter staff reads in their own language while your GST reports stay ready for your CA.')}
            </p>
          </div>

          {/* Interactive Language Preview Box */}
          <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card/70 backdrop-blur-md shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <FaLanguage className="text-lg text-terracotta" />
                <span>Simulate Counter Screen Language:</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/60 p-1 rounded-xl border border-border">
                <button
                  onClick={() => setActivePreviewLang("mr")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activePreviewLang === "mr" ? "bg-terracotta text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  मराठी (Marathi)
                </button>
                <button
                  onClick={() => setActivePreviewLang("hi")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activePreviewLang === "hi" ? "bg-terracotta text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  हिंदी (Hindi)
                </button>
                <button
                  onClick={() => setActivePreviewLang("en")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activePreviewLang === "en" ? "bg-terracotta text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Simulated Receipt Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground font-heading">
                    {activePreviewLang === "mr"
                      ? "स्थानिक शेतकरी आणि ग्राहकांना लगेच समजणारी पावती"
                      : activePreviewLang === "hi"
                      ? "स्थानीय किसान और ग्राहकों को तुरंत समझ में आने वाला बिल"
                      : "Receipts That Farmers and Local Buyers Can Read Easily"}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activePreviewLang === "mr"
                      ? "मागील बाकी, आजचे बिल आणि हमालीची नोंद मराठीत छापून आल्यामुळे काउंटरवर कोणताही वाद होत नाही."
                      : activePreviewLang === "hi"
                      ? "पिछला बकाया, आज का बिल और हमाली साफ-साफ छपकर आने से काउंटर पर कोई झगड़ा नहीं होता।"
                      : "With previous dues and loading charges clearly printed in their own script, calculation arguments drop to zero."}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/50 text-xs text-muted-foreground space-y-1.5">
                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                    <FaUserCheck className="text-emerald-500" />
                    <span>Zero Accounting Knowledge Required</span>
                  </p>
                  <p>
                    Staff simply types the quantity of bags and presses Enter. GST rates, HSN codes, and ledger debits are calculated automatically in the background.
                  </p>
                </div>
              </div>

              {/* Thermal Slip Simulation */}
              <div className="bg-amber-50/70 dark:bg-zinc-900 border border-amber-200/80 dark:border-zinc-800 rounded-2xl p-6 font-mono text-xs shadow-inner space-y-3 max-w-sm mx-auto w-full">
                <div className="text-center border-b border-dashed border-amber-300 dark:border-zinc-700 pb-2 space-y-0.5">
                  <p className="font-bold text-sm text-foreground">श्री गणेश कृषी सेवा केंद्र</p>
                  <p className="text-[10px] text-muted-foreground">APMC Market Yard • Ph: 9876543210</p>
                  <p className="text-[10px] text-muted-foreground">GSTIN: 27AAAAA0000A1Z5</p>
                </div>

                <div className="space-y-1 text-[11px] text-foreground/90">
                  <div className="flex justify-between">
                    <span>{activePreviewLang === "mr" ? "ग्राहक:" : activePreviewLang === "hi" ? "ग्राहक:" : "Customer:"}</span>
                    <span className="font-semibold">रमेश शिंदे (गाव: सावर्डे)</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{activePreviewLang === "mr" ? "पावती क्र:" : activePreviewLang === "hi" ? "बिल क्र:" : "Bill No:"}</span>
                    <span>#B-1048 (08:15 AM)</span>
                  </div>
                </div>

                <div className="border-t border-b border-dashed border-amber-300 dark:border-zinc-700 py-1.5 space-y-1 text-[11px]">
                  <div className="flex justify-between font-semibold">
                    <span>10 बोरी कपिला पशुआहार (50kg)</span>
                    <span>₹14,500</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-[10px]">
                    <span>{activePreviewLang === "mr" ? "हमाली / मजुरी (₹10/बोरी):" : activePreviewLang === "hi" ? "हमाली (₹10/बोरी):" : "Hamali/Labour:"}</span>
                    <span>₹100</span>
                  </div>
                </div>

                <div className="space-y-1 text-[11px] pt-1 font-semibold">
                  <div className="flex justify-between text-muted-foreground">
                    <span>{activePreviewLang === "mr" ? "मागील बाकी:" : activePreviewLang === "hi" ? "पिछला बकाया:" : "Previous Due:"}</span>
                    <span>₹3,200</span>
                  </div>
                  <div className="flex justify-between text-base text-foreground font-bold border-t border-dashed border-amber-300 dark:border-zinc-700 pt-1">
                    <span>{activePreviewLang === "mr" ? "एकूण देय बाकी:" : activePreviewLang === "hi" ? "कुल बकाया रकम:" : "Net Payable:"}</span>
                    <span className="text-terracotta font-notch font-bold">₹17,800</span>
                  </div>
                </div>

                <div className="text-center pt-2 text-[10px] text-muted-foreground border-t border-dashed border-amber-300 dark:border-zinc-700">
                  {activePreviewLang === "mr"
                    ? "धन्यवाद! पुन्हा भेट द्या."
                    : activePreviewLang === "hi"
                    ? "धन्यवाद! फिर पधारें।"
                    : "Thank you for your business!"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Crash & Theft Protection (Dark Mode Section) */}
      <section className="w-full py-20 md:py-28 bg-[#0a0a0a] text-white px-4 relative overflow-hidden dark dark-section border-t border-white/10">
        <div className="container max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="space-y-4 max-w-2xl mx-auto text-center">
            <Badge variant="outline" className="text-brand-primary border-brand-primary/30 bg-brand-primary/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Cash Drawer & Data Guard
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
              {t('sec_clerk_audit_title', 'Stop Cash Drawer Leakage and Backdated Bill Manipulation')}
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              {t('sec_clerk_audit_desc', "Staff cannot roll back the computer clock to change yesterday's cash bills or delete paid receipts. Every rupee collected in Cash or UPI is locked into your daily Rokad.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Anti-Backdating */}
            <Card className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white p-6 space-y-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/20 text-terracotta flex items-center justify-center">
                  <FaLock className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {t('feat_sec_point_1', "Anti-Backdating Guard")}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  If a clerk changes the Windows computer clock to modify yesterday's receipts, ScaleERP locks the screen and alerts the owner immediately.
                </p>
              </div>
              <div className="text-[11px] text-terracotta font-semibold pt-2 border-t border-white/10">
                100% Tamper-Proof Daily Rokad
              </div>
            </Card>

            {/* Card 2: 2:00 AM Google Drive Backup */}
            <Card className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white p-6 space-y-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <FaCloudUploadAlt className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  2:00 AM Auto-Cloud Backup
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  Every night, an encrypted backup of your entire ledger and inventory uploads directly to your personal Google Drive. Never lose data to power spikes or hardware failure.
                </p>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold pt-2 border-t border-white/10">
                5-Minute New PC Recovery
              </div>
            </Card>

            {/* Card 3: Machine Locked License */}
            <Card className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white p-6 space-y-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <FaShieldAlt className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {t('feat_sec_point_2', "Machine-Locked License")}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  Tied safely to your shop computer hardware. Your confidential margins, customer phone numbers, and trade dues never sit on an unmonitored external server.
                </p>
              </div>
              <div className="text-[11px] text-blue-400 font-semibold pt-2 border-t border-white/10">
                Private Offline Sovereignty
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Closing Call-to-Action */}
      <section className="w-full bg-[#121A15] text-white border-t border-white/10 dark-section py-24 sm:py-32 px-4 text-center">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight">
              {t('cta_title_1', 'Take control of your operations.')}{' '}
              <span className="text-terracotta italic font-notch font-extrabold">{t('cta_title_2', 'Today.')}</span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Install genuine ScaleERP on your Windows PC and try all Wholesale Pro features free for 30 days. No credit card required.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/download" passHref>
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-dark rounded-xl px-10 h-14 text-base w-full sm:w-auto font-bold transition-all flex items-center justify-center gap-2.5 shadow-lg">
                <FaWindows className="text-lg text-brand-dark" />
                <span>{t('hero_cta_primary', 'Download Free for Windows')}</span>
              </Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl px-10 h-14 text-base w-full sm:w-auto font-semibold transition-colors backdrop-blur-md">
                {t('nav_pricing', 'Simple Pricing')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
