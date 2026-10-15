"use client";

import React from "react";
import Link from "next/link";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { useTranslation } from "react-i18next";
import { Check, Zap, HardDrive, Download, ChevronRight, Key, Server, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import { HardwareGrid } from "@/components/HardwareGrid";

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org Product & Pricing Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ScaleERP Desktop Software License",
            "description": "High-velocity, offline-first inventory management, rapid billing, and ledger platform for retail feed stores and wholesale agricultural brokers.",
            "brand": {
              "@type": "Brand",
              "name": "ScaleERP",
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "4999",
              "highPrice": "9999",
              "offerCount": "2",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "ScaleERP Standard Retail Edition",
                  "price": "4999",
                  "priceCurrency": "INR",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition",
                  "url": "https://scale-erp.vercel.app/pricing",
                  "description": "Designed for single retail feed stores and counter billing with local SQLite storage, thermal printing, and WhatsApp receipts.",
                },
                {
                  "@type": "Offer",
                  "name": "ScaleERP Wholesale Pro Edition",
                  "price": "9999",
                  "priceCurrency": "INR",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition",
                  "url": "https://scale-erp.vercel.app/pricing",
                  "description": "For high-volume wholesale distributors and broker networks with multi-godown tracking, broker commissions, and cloud synchronization.",
                },
              ],
            },
          }),
        }}
      />
      {/* 1. Hero Section - Redesigned from scratch with inverted theme support */}
      <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        
        {/* Topographic Background Pattern */}
        <TopographicPattern />
        
        {/* Dynamic Gradients for depth */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-[100%] blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-black/5 border border-white/20 dark:border-black/10 backdrop-blur-md mb-2 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-emerald-600"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-zinc-200 dark:text-zinc-800 uppercase">
                  {t("pricing_badge", "Honest, Transparent Shop Pricing")}
                </span>
              </div>
            </BlurIn>
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t("pricing_title", "No Per-Bill Charges. No Monthly Cloud Trap. Pay Once a Year.")}
              </h1>
            </BlurIn>
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed">
                {t("pricing_subtitle", "Every plan includes unlimited bills, unlimited products, unlimited party khatas, and full Marathi/English counter support.")}
              </p>
            </BlurIn>
          </div>

          {/* Right Visual Component (Asymmetric Glassmorphism Card) */}
          <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
            {/* Decorative background blur behind the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-emerald-400/40 rounded-lg blur-2xl transform rotate-3 scale-105 opacity-50 dark:opacity-30"></div>
            
            <div className="relative bg-zinc-900/60 dark:bg-white/60 backdrop-blur-2xl border border-white/10 dark:border-black/10 rounded-lg p-8 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              {/* Internal abstract pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 dark:bg-black/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className="bg-white/10 dark:bg-black/5 p-4 rounded-lg border border-white/10 dark:border-black/5 shadow-inner">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">Hardware ID</p>
                  <p className="font-mono text-sm text-zinc-300 dark:text-zinc-700 bg-white/5 dark:bg-black/5 px-2 py-1 rounded border border-white/10 dark:border-black/10">
                    4F9A-2B1C-88E3
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 dark:border-black/10 pb-4">
                  <span className="text-zinc-300 dark:text-zinc-600 font-medium flex items-center gap-2">
                    <Key className="w-4 h-4 text-emerald-400 dark:text-emerald-600" /> License Status
                  </span>
                  <span className="text-white dark:text-zinc-900 font-bold">{t("pricing_status_auth")}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 dark:border-black/10 pb-4">
                  <span className="text-zinc-300 dark:text-zinc-600 font-medium flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-primary" /> Offline Engine
                  </span>
                  <span className="text-white dark:text-zinc-900 font-bold">100% Active</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 dark:border-black/10">
                <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 shadow-lg text-lg h-12">
                  View Editions Below <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </BlurIn>

        </div>
      </section>

      {/* 2. The Licensing Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("pricing_section_2_title", "Choose Your Licensing Plan.")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">       
          {/* Card A: Standard */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800" />
            <CardHeader className="pt-10 pb-6">
              <CardTitle className="text-2xl font-bold">{t("tier_std_name", "Standard Retail Counter")}</CardTitle>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 font-notch tracking-tight">
                {t("tier_std_price", "₹4,999 / year").split('/')[0]}
                <span className="ml-1 text-xl font-medium text-muted-foreground">/{t("tier_std_price", "₹4,999 / year").split('/')[1] || "Year"}</span>
              </div>
              <CardDescription className="text-base mt-4">
                {t("tier_std_desc", "Ideal for single-counter agro, feed, hardware, and kirana shops that need fast billing and zero customer queues.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-8">
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>1 Shop Computer Lifetime Machine-Locked License</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Unlimited 3-Inch Thermal & A4 GST Invoices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Customer Bahi-Khata with Previous Dues Printed on Bill</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Stock by Brand, Batch, and Purchase Rate</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>100% Offline Speed (Zero Wi-Fi or Cloud Dependence)</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <MediaMockup 
                  type="image" 
                  src="/assets/CustomBills.webp" 
                  caption="Print Thermal or A4 Invoice" 
                  className="h-40" 
                />
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Button asChild className="w-full h-12 text-md" variant="outline">
                <Link href="/download">
                  {t("pricing_cta_primary", "Download 30-Day Free Trial")}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card B: Pro */}
          <Card className="flex flex-col border-terracotta dark:border-terracotta bg-white dark:bg-zinc-950 shadow-2xl relative overflow-hidden ring-1 ring-terracotta/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-terracotta" />
            <div className="absolute top-6 right-6 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase font-notch">
              Popular for Mandis
            </div>
            <CardHeader className="pt-10 pb-6">
              <CardTitle className="text-2xl font-bold">{t("tier_pro_name", "Wholesale & Mandi Broker Pro")}</CardTitle>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-terracotta font-notch tracking-tight">
                {t("tier_pro_price", "₹9,999 / year").split('/')[0]}
                <span className="ml-1 text-xl font-medium text-muted-foreground">/{t("tier_pro_price", "₹9,999 / year").split('/')[1] || "Year"}</span>
              </div>
              <CardDescription className="text-base mt-4">
                {t("tier_pro_desc", "Built for wholesale distributors and APMC commission brokers managing multiple godowns, truck consignments, and heavy market Udhari.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-8">
              <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Everything in Standard, plus:</p>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>Multi-Godown Stock Allocation (Godown A vs B vs Transit)</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>Wholesale Commission & Per-Bag Aadhati Ledgers</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>1-Click WhatsApp Payment Reminders in Marathi & Hindi</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>Automatic 2:00 AM Google Drive Khata Backups</span>
                </li>
              </ul>

              <div className="mt-8">
                <MediaMockup 
                  type="image" 
                  src="/assets/WhatappManager.webp" 
                  caption="1-Click WhatsApp Reminders & Statements" 
                  className="h-40 border-terracotta/20" 
                />
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Button asChild className="w-full h-12 text-md bg-terracotta hover:bg-terracotta/90 text-white">
                <Link href="/download">
                  {t("pricing_cta_primary", "Download 30-Day Free Trial")}
                </Link>
              </Button>
            </CardFooter>
          </Card>

        </div>

        {/* Enterprise Multi-Counter Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground font-notch">
              <span>{t("tier_ent_name", "Multi-Counter Enterprise")}</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold font-notch">{t("tier_ent_price", "Custom Quote")}</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
              Running Multiple Counters, Mandi Stalls or Godown Branches?
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              {t("tier_ent_desc", "For large trading yards and wholesale firms running multiple billing counters across branches.")} Includes dedicated setup assistance, custom invoice formatting, and direct phone support.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700 flex-shrink-0">
            <Link href="/contact" prefetch={false}>
              Contact Sales for Setup
            </Link>
          </Button>
        </div>
      </section>

      {/* 3. Hardware Compatibility Reassurance */}
      <section className="px-4 py-8 mx-auto w-full max-w-7xl">
        <HardwareGrid />
      </section>

      {/* 4. The Trust & FAQ Grid */}
      <section className="bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
        <div className="px-4 py-24 mx-auto w-full max-w-6xl lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-zinc-900 dark:text-zinc-100">
              {t("download_faq_title", "Frequently Asked Questions")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Practical answers to the common objections shopkeepers have before switching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="h-5 w-5 text-terracotta flex-shrink-0" />
                  <span>{t("faq_q1", "What happens if my shop internet goes down for 3 days?")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t("faq_a1", "Nothing stops. Your billing, stock deduction, thermal printing, and party khatas run 100% inside your shop computer. You can print 5,000 bills with the internet cable unplugged.")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{t("faq_q2", "What if my computer hard disk crashes or catches a virus?")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t("faq_a2", "ScaleERP creates a daily local backup zip on your PC and automatically uploads an encrypted copy to your personal Google Drive at 2:00 AM. If you change your PC, we restore your entire business down to the last rupee in 5 minutes.")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Download className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>{t("faq_q3", "My counter staff only reads Marathi or Hindi. Can they use this?")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t("faq_a3", "Yes. You can switch the entire software screen and printed customer receipts to Marathi or Hindi in one click. It is designed so a newly hired clerk can learn billing in 15 minutes without any accounting background.")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("pricing_cta_headline")}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t("pricing_cta_copy")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base">
            {t("pricing_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700">
            {t("pricing_cta_secondary")}
          </Button>
        </div>
      </section>
    </div>
  );
}
