"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { useTranslation } from "react-i18next";
import { Check, Zap, HardDrive, Download, ChevronRight, FileSpreadsheet, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      
      {/* 1. Hero Section & Zero Hidden Costs Checklist */}
      <section className="relative px-4 pt-32 pb-36 sm:pb-44 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        
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
                <span className="text-sm font-semibold tracking-wide text-zinc-200 dark:text-zinc-800 uppercase font-outfit">
                  {t("pricing_badge", "Honest, Transparent Shop Pricing")}
                </span>
              </div>
            </BlurIn>
            <BlurIn delay={0.2}>
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                {t("pricing_title", "No Per-Bill Charges. No Monthly Cloud Trap. Pay Once a Year.")}
              </h1>
            </BlurIn>
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed font-sans">
                {t("pricing_subtitle", "Every plan includes unlimited bills, unlimited products, unlimited party khatas, and full Marathi/English counter support.")}
              </p>
            </BlurIn>
          </div>

          {/* Right Visual Component: Zero Hidden Costs Checklist + 10-Day Recovery Guarantee */}
          <BlurIn delay={0.6} className="w-full lg:w-[460px] shrink-0 relative">
            <div className="relative bg-zinc-900/90 dark:bg-white/95 backdrop-blur-2xl border border-emerald-500/30 dark:border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 dark:border-black/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-700 font-outfit">
                  10-Day Udhari Recovery Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 dark:text-emerald-700 text-xs font-bold border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Risk Free
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold font-outfit text-white dark:text-zinc-900">
                  Zero Hidden Costs Checklist
                </h3>
                <ul className="space-y-3 text-sm text-zinc-300 dark:text-zinc-700 font-sans">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
                    <span className="font-semibold text-white dark:text-zinc-900">₹0 Per-Bill or Per-SMS Charges</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
                    <span className="font-medium">Unlimited Parties, Items & Invoices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
                    <span className="font-medium">Free Excel Migration from Tally / Marg</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
                    <span className="font-medium">Machine-Locked License • Runs 100% Offline</span>
                  </li>
                </ul>
              </div>

              {/* Sample printed invoice showing Previous Balance */}
              <div className="pt-1">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 dark:border-black/10 shadow-lg bg-zinc-950">
                  <Image
                    src="/assets/InvoiceExample.webp"
                    alt="Printed invoice showing previous balance recovery"
                    fill
                    sizes="450px"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-zinc-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] text-zinc-300 text-center font-medium border border-zinc-800">
                    Previous Balance + Today's Bill printed automatically
                  </div>
                </div>
              </div>
            </div>
          </BlurIn>

        </div>
      </section>

      {/* 2. The Licensing Grid (Pulled up to overlap Hero) */}
      <section className="-mt-16 sm:-mt-24 relative z-20 px-4 pb-20 mx-auto w-full max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">       
          
          {/* Card A: Standard Retail */}
          <Card className="flex flex-col border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="w-full h-2 bg-zinc-300 dark:bg-zinc-700" />
            <CardHeader className="pt-8 pb-4 space-y-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold font-outfit">{t("tier_std_name", "Standard Retail Counter")}</CardTitle>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full font-outfit">
                  Single Counter
                </span>
              </div>
              <div className="pt-2 flex items-baseline">
                <span className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 font-outfit tabular-nums tracking-tight">
                  ₹4,999
                </span>
                <span className="ml-1.5 text-base font-medium text-muted-foreground">/ Year</span>
              </div>
              <CardDescription className="text-sm sm:text-base leading-relaxed pt-1">
                {t("tier_std_desc", "Ideal for single-counter agro, feed, hardware, and kirana shops that need fast billing and zero customer queues.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 pt-2 pb-8">
              <div className="border-t border-border/60 pt-4">
                <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4 font-outfit">Included in Standard:</p>
                <ul className="space-y-3.5 text-sm sm:text-base font-sans">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <span className="font-medium text-foreground">1 Shop Computer Machine-Locked License</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <span>Unlimited 3-Inch Thermal & A4 GST Invoices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <span>Customer Bahi-Khata with Previous Dues on Bill</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <span>Stock by Brand, Batch, and Purchase Rate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <span>100% Offline Speed (Zero Wi-Fi dependence)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <span>English, Hindi & Marathi Screen Switcher</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="pb-8 pt-0">
              <Button asChild className="w-full h-14 text-base font-bold rounded-2xl border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all shadow-sm" variant="outline">
                <Link href="/download">
                  {t("pricing_cta_primary", "Download 30-Day Free Trial")}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card B: Wholesale & Mandi Broker Pro */}
          <Card className="flex flex-col border-2 border-emerald-500/50 bg-white dark:bg-zinc-950 shadow-2xl rounded-3xl relative overflow-hidden ring-1 ring-emerald-500/20 hover:shadow-2xl transition-all">
            <div className="w-full h-2.5 bg-emerald-500" />
            <div className="absolute top-6 right-6 bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase font-outfit">
              Popular for Mandis
            </div>
            <CardHeader className="pt-8 pb-4 space-y-3">
              <CardTitle className="text-2xl font-bold font-outfit">{t("tier_pro_name", "Wholesale & Mandi Broker Pro")}</CardTitle>
              <div className="pt-2 flex items-baseline">
                <span className="text-4xl sm:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 font-outfit tabular-nums tracking-tight">
                  ₹9,999
                </span>
                <span className="ml-1.5 text-base font-medium text-muted-foreground">/ Year</span>
              </div>
              <CardDescription className="text-sm sm:text-base leading-relaxed pt-1">
                {t("tier_pro_desc", "Built for wholesale distributors and APMC commission brokers managing multiple godowns, truck consignments, and heavy market Udhari.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 pt-2 pb-8">
              <div className="border-t border-border/60 pt-4">
                <p className="font-semibold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 font-outfit">Everything in Standard, plus:</p>
                <ul className="space-y-3.5 text-sm sm:text-base font-sans">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mr-3 mt-0.5" />
                    <span className="font-semibold text-foreground">Multi-Godown Stock Allocation (Godown A vs B vs Transit)</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mr-3 mt-0.5" />
                    <span className="font-semibold text-foreground">Wholesale Commission & Per-Bag Aadhati Ledgers</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mr-3 mt-0.5" />
                    <span className="font-semibold text-foreground">1-Click WhatsApp Payment Reminders in Marathi & Hindi</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mr-3 mt-0.5" />
                    <span>Automatic 2:00 AM Encrypted Google Drive Backups</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mr-3 mt-0.5" />
                    <span>Custom Invoice Header with Firm Logo & Mandi Terms</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mr-3 mt-0.5" />
                    <span>Priority Pune WhatsApp & Phone Setup Support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="pb-8 pt-0">
              <Button asChild className="w-full h-14 text-base font-bold rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl transition-all">
                <Link href="/download">
                  {t("pricing_cta_primary", "Download 30-Day Free Trial")}
                </Link>
              </Button>
            </CardFooter>
          </Card>

        </div>

        {/* Enterprise Multi-Counter Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground font-outfit">
              <span>{t("tier_ent_name", "Multi-Counter Enterprise")}</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold font-outfit">{t("tier_ent_price", "Custom Quote")}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-outfit text-zinc-900 dark:text-zinc-100">
              Running Multiple Counters, Mandi Stalls or Godown Branches?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              {t("tier_ent_desc", "For large trading yards and wholesale firms running multiple billing counters across branches.")} Includes dedicated setup assistance, custom invoice formatting, and direct phone support.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700 flex-shrink-0 h-12 px-6 rounded-xl font-bold">
            <Link href="/contact" prefetch={false}>
              Contact Sales for Setup
            </Link>
          </Button>
        </div>
      </section>

      {/* Block 4: The 10-Minute Tally / Marg / Paper Khata Migration Stepper */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 p-8 sm:p-12 space-y-10 shadow-lg">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Zero Re-Typing Anxiety</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold tracking-tight text-foreground">
              Switching from Tally, Marg, or Paper Register? Move in 10 Minutes.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              You never have to re-type 500 customer names or old opening dues. Here is our seamless 3-step transition:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border/80 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-outfit font-bold">
                1
              </div>
              <h3 className="text-lg font-bold font-outfit text-foreground flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Export Parties & Items</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Export your parties from Tally/Marg, or enter them into a simple Excel sheet with columns: <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">Party Name | Village | Mobile | Opening Due (₹)</code>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border/80 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-outfit font-bold">
                2
              </div>
              <h3 className="text-lg font-bold font-outfit text-foreground flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>1-Click Bulk Import</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Open ScaleERP Tools &gt; Bulk Import. Select your Excel file. All customer ledgers, past balances, and inventory categories load into your local database in 3 seconds.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-border/80 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-outfit font-bold">
                3
              </div>
              <h3 className="text-lg font-bold font-outfit text-foreground flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Ready at 8:00 AM</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Your very first morning receipt prints with the customer's exact past balance already carried forward. No customer dispute, not a single rupee lost.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-600/10 border border-emerald-500/30 text-center">
            <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-medium">
              <strong>Don't know Excel?</strong> Send a photo of your paper register or old software backup on WhatsApp to <a href="tel:+919175960000" className="underline font-bold">+91 91759 60000</a>, and our Pune team will prepare and import your parties during setup for free.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hardware Compatibility Reassurance (Directly on section background) */}
      <section className="px-4 py-8 mx-auto w-full max-w-7xl">
        <HardwareGrid />
      </section>

      {/* 4. The Trust & FAQ Grid */}
      <section className="bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
        <div className="px-4 py-24 mx-auto w-full max-w-6xl lg:px-8">
          <div className="mb-12 text-center space-y-3">
            <h2 className="font-outfit text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("download_faq_title", "Frequently Asked Questions")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
              Practical answers to the common objections shopkeepers have before switching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2 font-outfit">
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

            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2 font-outfit">
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

            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2 font-outfit">
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

      {/* 5. Closing CTA */}
      <section className="px-4 py-24 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16 rounded-3xl">
        <h2 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("pricing_cta_headline")}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t("pricing_cta_copy")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
            <Link href="/download">
              {t("pricing_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold">
            <Link href="/contact">
              {t("pricing_cta_secondary")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
