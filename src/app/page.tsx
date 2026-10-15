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
  FaWindows,
  FaLanguage,
  FaCloudUploadAlt,
  FaLock,
  FaStore,
  FaUserCheck,
  FaWhatsapp,
  FaKeyboard,
  FaReceipt,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurIn } from "@/components/ui/blur-in";
import { Marquee } from "@/components/ui/marquee";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [activePreviewLang, setActivePreviewLang] = useState<"mr" | "hi" | "en">("mr");
  const [staffTab, setStaffTab] = useState<"marathi" | "invoice">("marathi");
  const [activeKeyboardStep, setActiveKeyboardStep] = useState<number>(0);
  const [keyboardPreviewTab, setKeyboardPreviewTab] = useState<"billing" | "receipt">("billing");
  const [waLanguage, setWaLanguage] = useState<"mr" | "hi" | "en">("mr");

  const waMessages = {
    mr: "नमस्कार रमेश ट्रेडर्स, किसान फर्टिलायझर्स अँड फीड्स कडून नम्र आठवण. दि. १५/१०/२०२६ पर्यंत आपली एकूण थकबाकी रक्कम ₹१४,२५०.०० आहे. सोबत तपशीलवार बिल जोडले आहे. कृपया सोयीनुसार जमा करावी. धन्यवाद!",
    hi: "नमस्ते रमेश ट्रेडर्स, किसान फर्टिलाइजर्स एंड फीड्स की ओर से विनम्र स्मरण। दिनांक १५/१०/२०२६ तक आपकी कुल बकाया राशि ₹१४,२५०.०० है। साथ में बिल का विवरण संलग्न है। कृपया सुविधानुसार जमा करें। धन्यवाद!",
    en: "Hello Ramesh Traders, polite reminder from Kisan Fertilizers & Feeds. As of 15/10/2026, your total pending khata balance is ₹14,250.00. Detailed statement is attached. Kindly arrange settlement at your convenience. Thank you!",
  };

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
      
      {/* 1. Hero Section & Primary Workstation Preview */}
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] font-notch font-extrabold tracking-tight text-foreground drop-shadow-sm max-w-4xl">
              {t('hero_headline_pt1', 'Print Bills in ')}
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t('hero_headline_pt2', '4 Seconds')}</span>
              {t('hero_headline_pt3', '. Recover ')}
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t('hero_headline_pt4', 'Every Rupee')}</span>
              {t('hero_headline_pt5', ' of Udhari. Runs 100% Without Internet.')}
            </h1>
          </BlurIn>
          
          <BlurIn delay={0.2}>
            <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/80 font-normal max-w-2xl mx-auto leading-relaxed">
              {t('hero_subheadline', 'Stop losing customers to slow software and internet cuts. Manage counter billing, multi-godown stock, broker commissions, and customer khatas in English, Hindi, and Marathi.')}
            </p>
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
                <Button size="lg" variant="outline" className="border-2 border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl px-8 h-14 text-base w-full sm:w-auto shadow-sm font-semibold">
                  {t('nav_pricing', 'Simple Pricing')}
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground pt-3 flex items-center justify-center gap-2">
              <FaCheckCircle className="text-emerald-500" />
              <span>{t('hero_trust_note', 'Works on Windows 10 & 11 • No Internet Needed at Counter • Instant 30-Day Full Trial')}</span>
            </p>
          </BlurIn>
          
          {/* Primary Workstation Preview: Clean Dashboard with 100% opacity */}
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

      {/* 3. The 8:00 AM Counter Rush Comparison (Morning Rush Calculator & Keyboard Flow) */}
      <section className="w-full py-16 md:py-24 px-4 relative overflow-hidden bg-background">
        <div className="container max-w-5xl mx-auto space-y-12">
          {/* Integrated Morning Rush Calculator */}
          <MorningRushCalculator />

          {/* Block 1: Interactive Keyboard-Only Counter Strip */}
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <FaKeyboard className="w-3.5 h-3.5" />
                  <span>Zero Mouse Clicks During Rush Hour</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-outfit font-bold tracking-tight text-white">
                  4 Keystrokes. 4 Seconds. Silent Print.
                </h3>
                <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
                  Counter operators never touch the mouse. Every keystroke is executed locally in under 2 milliseconds:
                </p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setKeyboardPreviewTab("billing")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    keyboardPreviewTab === "billing" ? "bg-emerald-500 text-zinc-950 shadow-md" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Billing Screen
                </button>
                <button
                  type="button"
                  onClick={() => setKeyboardPreviewTab("receipt")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    keyboardPreviewTab === "receipt" ? "bg-emerald-500 text-zinc-950 shadow-md" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Printed Receipt
                </button>
              </div>
            </div>

            {/* Keyboard Step Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div
                onClick={() => { setActiveKeyboardStep(0); setKeyboardPreviewTab("billing"); }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeKeyboardStep === 0 ? "bg-zinc-900 border-emerald-500/60 ring-2 ring-emerald-500/20" : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <kbd className="px-2.5 py-1 bg-zinc-800 border-b-2 border-zinc-950 rounded-md font-mono text-emerald-400 font-bold text-xs shadow">F2</kbd>
                  <span className="text-xs font-bold text-zinc-200">1. Open New Bill</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">New customer invoice sheet opens instantly without clearing screen.</p>
              </div>

              <div
                onClick={() => { setActiveKeyboardStep(1); setKeyboardPreviewTab("billing"); }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeKeyboardStep === 1 ? "bg-zinc-900 border-emerald-500/60 ring-2 ring-emerald-500/20" : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <kbd className="px-2.5 py-1 bg-zinc-800 border-b-2 border-zinc-950 rounded-md font-mono text-emerald-400 font-bold text-xs shadow">URE</kbd>
                  <span className="text-xs font-bold text-zinc-200">2. 3-Letter Search</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">Type 3 letters of item, farmer name, or village for instantaneous match.</p>
              </div>

              <div
                onClick={() => { setActiveKeyboardStep(2); setKeyboardPreviewTab("billing"); }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeKeyboardStep === 2 ? "bg-zinc-900 border-emerald-500/60 ring-2 ring-emerald-500/20" : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <kbd className="px-2.5 py-1 bg-zinc-800 border-b-2 border-zinc-950 rounded-md font-mono text-emerald-400 font-bold text-xs shadow">Enter</kbd>
                  <span className="text-xs font-bold text-zinc-200">3. Set Bags & Godown</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">Hit Enter to add quantity, apply rate tier, and assign source godown.</p>
              </div>

              <div
                onClick={() => { setActiveKeyboardStep(3); setKeyboardPreviewTab("receipt"); }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeKeyboardStep === 3 ? "bg-zinc-900 border-emerald-500/60 ring-2 ring-emerald-500/20" : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <kbd className="px-2.5 py-1 bg-zinc-800 border-b-2 border-zinc-950 rounded-md font-mono text-emerald-400 font-bold text-xs shadow">Ctrl+Enter</kbd>
                  <span className="text-xs font-bold text-zinc-200">4. Silent Print (0.5s)</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">Direct ESC/POS hardware print without annoying browser popup dialogs.</p>
              </div>
            </div>

            {/* Active Preview Showcase */}
            <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
              <Image
                src={keyboardPreviewTab === "billing" ? "/assets/AddTransaction.webp" : "/assets/InvoiceExample.webp"}
                alt="ScaleERP keyboard-driven counter flow"
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-xs text-zinc-300 px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-medium">
                  {keyboardPreviewTab === "billing"
                    ? "AddTransaction.webp: 3-Letter Fast Search, Bag Count & Cash/Credit Split"
                    : "InvoiceExample.webp: Dispute-Free Mandi Bill with Old Balance + Current Bill"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4 Pillars of Shop Control (Asymmetric 12-Column Bento Grid) */}
      <section className="w-full py-20 md:py-28 px-4 relative overflow-hidden bg-muted/20 border-y border-border/60">
        <div className="container max-w-7xl mx-auto space-y-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-terracotta border-terracotta/30 bg-terracotta/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Shop Management
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold tracking-tight text-foreground text-balance">
              {t('pillars_heading', 'Complete Control Over Your Shop, Godown, and Cash Drawer')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Designed around the real morning routine of Indian wholesale and retail merchants.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Pillar 1: Lightning Fast Billing (col-span-7) */}
            <Card className="col-span-12 lg:col-span-7 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta">
                  <FaBolt className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-outfit font-bold text-foreground">
                  {t('pillar_1_title', 'Lightning-Fast Counter Billing')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_1_desc', 'Find any item or customer by typing 3 letters of their name, village, or phone number. Settle cash, UPI, or part-credit bills and print on 3-inch thermal rolls or A4 sheets immediately.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/70 shadow-sm group-hover:scale-[1.01] transition-transform bg-zinc-950">
                  <Image src="/assets/AddTransaction.webp" alt="Fast counter billing interface" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2: Zero Forgotten Udhari (col-span-5) - FIXED ASSET: TransactionRecords.webp */}
            <Card className="col-span-12 lg:col-span-5 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FaBookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-outfit font-bold text-foreground">
                  {t('pillar_2_title', 'Zero Forgotten Udhari (Bahi-Khata)')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_2_desc', "Every bill automatically prints the customer's previous balance plus today's total. Send polite payment reminders with exact pending dues on WhatsApp in one click.")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/70 shadow-sm group-hover:scale-[1.01] transition-transform bg-zinc-950">
                  <Image src="/assets/TransactionRecords.webp" alt="Running party khata ledger with dues and settlements" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>

            {/* Pillar 3: Multi-Godown Stock (col-span-5) */}
            <Card className="col-span-12 lg:col-span-5 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaStore className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-outfit font-bold text-foreground">
                  {t('pillar_3_title', 'Multi-Godown & Brand Stock Tracking')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_3_desc', 'Buy in tonnes or quintals and sell in 50kg bags or loose kilos. Know exactly how many bags of each brand are sitting in Godown A vs Godown B before you run out.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/70 shadow-sm group-hover:scale-[1.01] transition-transform bg-zinc-950">
                  <Image src="/assets/Reports.webp" alt="Godown stock and inventory balance reports" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>

            {/* Pillar 4: Google Drive Backup (col-span-7) */}
            <Card className="col-span-12 lg:col-span-7 rounded-3xl border border-border/80 bg-card/90 backdrop-blur-sm shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between overflow-hidden group">
              <CardHeader className="p-8 pb-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FaCloudUploadAlt className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-outfit font-bold text-foreground">
                  {t('pillar_4_title', '2:00 AM Automatic Google Drive Backup')}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('pillar_4_desc', 'Worried about computer crashes, viruses, or theft? ScaleERP automatically locks and saves a backup of your entire shop khata to your personal Google Drive every night.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/70 shadow-sm group-hover:scale-[1.01] transition-transform bg-zinc-950">
                  <Image src="/assets/Backups.webp" alt="Google Drive automated shop backup" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover object-top" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 3: The 1-Click Free WhatsApp Recovery Interactive Preview */}
      <section className="w-full py-20 px-4 bg-background">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/20 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Uncropped WhatsApp Manager UI */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>₹0 Per-Message Cost • Uses Your Existing Shop WhatsApp</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-outfit font-bold tracking-tight text-foreground">
                  Send Polite Udhari Reminders on WhatsApp in 1 Click
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Competitors charge ₹0.25 to ₹0.50 per SMS or cloud WhatsApp message. ScaleERP connects directly to your desktop WhatsApp without third-party API charges or monthly gateway subscriptions.
                </p>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/80 shadow-lg bg-zinc-950">
                  <Image
                    src="/assets/WhatappManager.webp"
                    alt="ScaleERP 1-Click WhatsApp Manager with Marathi and Hindi templates"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Side: Simulated WhatsApp Chat Bubble */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider font-outfit">
                    Preview Reminder in Script:
                  </span>
                  <div className="flex items-center gap-1.5 bg-background p-1 rounded-xl border border-border">
                    <button
                      type="button"
                      onClick={() => setWaLanguage("mr")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        waLanguage === "mr" ? "bg-emerald-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      मराठी
                    </button>
                    <button
                      type="button"
                      onClick={() => setWaLanguage("hi")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        waLanguage === "hi" ? "bg-emerald-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      हिन्दी
                    </button>
                    <button
                      type="button"
                      onClick={() => setWaLanguage("en")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        waLanguage === "en" ? "bg-emerald-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>

                {/* Simulated WhatsApp Phone Frame */}
                <div className="rounded-2xl bg-[#ECE5DD] dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-5 shadow-inner space-y-4">
                  <div className="flex items-center gap-3 border-b border-zinc-300 dark:border-zinc-800 pb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold font-outfit">
                      RT
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Ramesh Traders (Sawarde)</p>
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">Online • +91 98221 44550</p>
                    </div>
                  </div>

                  {/* Chat bubble */}
                  <div className="bg-[#DCF8C6] dark:bg-emerald-950 text-zinc-900 dark:text-zinc-100 rounded-2xl rounded-tr-none p-4 shadow-md border border-emerald-500/20 space-y-2 text-xs leading-relaxed font-sans">
                    <p>{waMessages[waLanguage]}</p>
                    <div className="flex justify-between items-center text-[10px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-emerald-500/20">
                      <span>PDF Attached: Ramesh_Traders_Statement.pdf (42 KB)</span>
                      <span>08:16 AM ✓✓</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/80 dark:bg-zinc-950/80 p-3 text-xs text-muted-foreground space-y-1 border border-border/60">
                    <p className="font-semibold text-foreground flex items-center gap-1.5">
                      <FaCheckCircle className="text-emerald-500" />
                      <span>Zero Typing Needed for Munim</span>
                    </p>
                    <p>
                      ScaleERP auto-fills the party name, exact dues, and date. One click opens WhatsApp with the message already typed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The 1-Day Staff Training Proof (Expanded 12-Column Split Showcase) */}
      <section className="w-full py-20 px-4 bg-muted/20 border-t border-border/60">
        <div className="container max-w-7xl mx-auto space-y-10">
          
          <div className="p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column (5 cols): Copy and Controls */}
              <div className="lg:col-span-5 space-y-6">
                <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
                  Clerk Simplicity
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight text-foreground leading-[1.15]">
                  {t('home_munim_freedom_title', 'Any 12th-Pass Clerk Can Bill on Day 1. No Tally Course Needed.')}
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {t('home_munim_freedom_desc', 'Switch the entire screen between English, Hindi, and Marathi in one click. Your counter staff reads in their own language while your GST reports stay ready for your CA.')}
                </p>

                {/* Tab Switcher */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-outfit">
                    Switch Workstation Visual:
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => setStaffTab("marathi")}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                        staffTab === "marathi"
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                          : "bg-background text-muted-foreground border-border hover:text-foreground"
                      }`}
                    >
                      <FaLanguage className="text-sm" />
                      <span>Vernacular Marathi Software UI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStaffTab("invoice")}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                        staffTab === "invoice"
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                          : "bg-background text-muted-foreground border-border hover:text-foreground"
                      }`}
                    >
                      <FaReceipt className="text-sm" />
                      <span>Dispute-Free Mandi Receipt</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" />
                    <span><strong>Zero Accounting Knowledge Required:</strong> Staff types item quantity and presses Enter. GST rates and HSN codes calculate automatically.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" />
                    <span><strong>Never Argue Over Dues:</strong> Previous balance and loading hamali are printed explicitly on every ticket.</span>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): Large Dual-Tabbed Preview */}
              <div className="lg:col-span-7">
                {staffTab === "marathi" ? (
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-zinc-950">
                      <Image
                        src="/assets/MarathiDashboard.webp"
                        alt="ScaleERP completely vernacular Marathi desktop interface"
                        fill
                        sizes="(max-width: 1024px) 100vw, 750px"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      <strong className="text-foreground">MarathiDashboard.webp:</strong> Full Devanagari navigation (आजची विक्री, पार्टी खाते, गोडाऊन स्टॉक, बँक शिल्लक).
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Block 2: Anatomy of a Dispute-Free Mandi Bill Callout Showcase */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-zinc-950">
                      <Image
                        src="/assets/InvoiceExample.webp"
                        alt="Anatomy of a Dispute-Free Mandi Bill"
                        fill
                        sizes="(max-width: 1024px) 100vw, 750px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* 4 Numbered Emerald Hotspots */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-[10px] mr-1.5">1</span>
                        <strong className="text-foreground">Dual Header & GSTIN:</strong>
                        <p className="text-muted-foreground text-[11px]">Prints TAX INVOICE / कर बीजक with shop name, phone and valid GSTIN.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-[10px] mr-1.5">2</span>
                        <strong className="text-foreground">Godown & Bag Breakdown:</strong>
                        <p className="text-muted-foreground text-[11px]">Exact bag weight (50kg), batch, and source godown for lorry loading.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-[10px] mr-1.5">3</span>
                        <strong className="text-foreground">Dedicated Hamali Row:</strong>
                        <p className="text-muted-foreground text-[11px]">Loading labour & vehicle number accounted for without calculator friction.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-[10px] mr-1.5">4</span>
                        <strong className="text-foreground">Previous Udhari + Today:</strong>
                        <p className="text-muted-foreground text-[11px]">Automatic Previous Balance + Today's Bill = Net Payable prevents disputes.</p>
                      </div>
                    </div>
                  </div>
                )}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white">
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
                <h3 className="font-outfit font-bold text-lg text-white">
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
                <h3 className="font-outfit font-bold text-lg text-white">
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
                <h3 className="font-outfit font-bold text-lg text-white">
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

      {/* 7. Closing Call-to-Action (High-Contrast Floating Card - Breaks Black Hole Effect) */}
      <section className="w-full bg-background py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-8 sm:p-14 shadow-2xl text-center text-white space-y-8">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white">
              {t('cta_title_1', 'Upgrade your counter.')}{' '}
              <span className="text-emerald-400 font-extrabold">{t('cta_title_2', 'Today.')}</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Install genuine ScaleERP on your Windows PC and try all Wholesale Pro features free for 30 days. No credit card required.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/download" passHref>
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-dark rounded-xl px-10 h-14 text-base w-full sm:w-auto font-bold transition-all flex items-center justify-center gap-2.5 shadow-lg">
                <FaWindows className="text-lg text-brand-dark" />
                <span>{t('hero_cta_primary', 'Download Free for Windows')}</span>
              </Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-xl px-10 h-14 text-base w-full sm:w-auto font-semibold transition-colors backdrop-blur-md">
                {t('nav_pricing', 'Simple Pricing')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
