"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PackageSearch, TrendingUp, MessageCircle, FileText, Lock, ChevronRight, Truck, Clock, CheckCircle2, Scale, Calculator, ArrowRight, Building2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";

export default function WholesaleBrokersPage() {
  const { t } = useTranslation();
  const [bagRate, setBagRate] = useState(1200);
  const totalAmount = 400 * bagRate;
  const freight = 18000;
  const hamali = 2000;
  const brokerage = 4000;
  const supplierCredit = totalAmount - freight - hamali - brokerage;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 dark:text-blue-700 shadow-sm font-semibold text-xs tracking-wider uppercase">
                <Truck className="w-4 h-4" />
                {t("uc_broker_badge", "For APMC Mandi Brokers & Wholesale Distributors")}
              </div>
            </BlurIn>
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t("uc_broker_title", "Complete Aadhat, Truck Consignment, and Supplier Ledger Control")}
              </h1>
            </BlurIn>
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl text-zinc-300 dark:text-zinc-700 font-medium leading-relaxed mx-auto lg:mx-0">
                {t("uc_broker_desc", "Manage three-way wholesale trades between mills, transport trucks, and buyers. Automatically calculate per-bag or per-tonne brokerage (Dalali), deduct freight, and settle supplier accounts accurately.")}
              </p>
            </BlurIn>
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/download" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md border-0">
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
                src="/assets/InvoiceExample.webp"
                priority={true}
                caption="A4 Mandi Tax Invoices with Transport & Hamali Breakdowns" 
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. Day-in-the-Life Mandi Aadhati Workflow */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900/50 border-b border-border transition-colors">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
            Mandi Operations
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {t("uc_broker_hamali_title", "Built for APMC Mandi Aadhatis: Track Truck Weight, Hamali, and Per-Bag Dalali")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Wholesale brokerage isn't standard retail. You need three-way settlement between mills, transport drivers, and wholesale buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: 06:30 AM */}
          <Card className="rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between">
            <CardHeader className="space-y-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono font-bold px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  06:30 AM
                </span>
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <Scale className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-foreground">
                  Truck Weighing & Kanta Parchi
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  Record gross truck weight, tare weight, and bag deductions
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground leading-relaxed">
              <p>
                Enter net quintals from weighing scale receipt. ScaleERP calculates empty bag (Bardana) weight and moisture cut automatically.
              </p>
              <p className="font-semibold text-foreground pt-2 border-t border-border/50">
                Print weighbridge slips for farmers and mill suppliers.
              </p>
            </CardContent>
          </Card>

          {/* Step 2: 11:30 AM */}
          <Card className="rounded-2xl border-2 border-blue-500/40 bg-card shadow-md flex flex-col justify-between">
            <CardHeader className="space-y-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono font-bold px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  11:30 AM
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-foreground">
                  Aadhat & Per-Bag Dalali
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  Auto-calculate commission (₹/bag or % value) + Hamali
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground leading-relaxed">
              <p>
                Dispatch 500 bags to wholesale buyers. ScaleERP adds your commission, loading hamali, and freight bilty right to the party debit khata.
              </p>
              <p className="font-semibold text-emerald-700 dark:text-emerald-400 pt-2 border-t border-border/50">
                Never miss deducting transport advances or brokerage.
              </p>
            </CardContent>
          </Card>

          {/* Step 3: 07:30 PM */}
          <Card className="rounded-2xl border border-border bg-card shadow-sm flex flex-col justify-between">
            <CardHeader className="space-y-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono font-bold px-3 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  07:30 PM
                </span>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-foreground">
                  3-Way Balance Reconciliation
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  Mill payables, buyer receivables, and net brokerage profit
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-0 text-sm text-muted-foreground leading-relaxed">
              <p>
                Generate 1-click ledger summaries for CA tax audits. Send bulk WhatsApp account statements to distant mill owners with full consignment history.
              </p>
              <p className="font-semibold text-purple-600 dark:text-purple-400 pt-2 border-t border-border/50">
                Every consignment ledger is locked and backed up automatically.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* NEW BLOCK: Interactive "3-Way Mandi Aadhat Calculator" Diagram */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl lg:px-8">
        <div className="rounded-3xl bg-blue-950/10 dark:bg-blue-950/30 border border-blue-500/30 p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Consignment Settlement Flow</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                3-Way Trade Math: 1 Truck Consignment Entry Clears 3 Separate Accounts
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Column 1: Supplier Mill */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-zinc-500" />
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase">Supplier Mill Khata</span>
              </div>
              <p className="text-xl font-bold text-foreground">Credit: ₹{supplierCredit.toLocaleString('en-IN')}</p>
              <p className="text-xs text-muted-foreground mt-1">400 Bags Shipped (20 Tonnes)</p>
              <div className="mt-4 space-y-1.5 text-xs text-muted-foreground border-t border-border pt-3">
                <div className="flex justify-between"><span>Gross Value:</span><span className="font-semibold text-foreground">₹{totalAmount.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between text-red-500"><span>Less Truck Freight:</span><span>-₹{freight.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between text-red-500"><span>Less Loading Hamali:</span><span>-₹{hamali.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between text-red-500"><span>Less Broker Dalali:</span><span>-₹{brokerage.toLocaleString('en-IN')}</span></div>
              </div>
            </div>

            {/* Column 2: Broker Dalali */}
            <div className="bg-white dark:bg-zinc-900 border-2 border-blue-500/50 rounded-2xl p-6 shadow-md relative">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">Your Net Dalali</span>
              </div>
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">₹{brokerage.toLocaleString('en-IN')}</p>
              <p className="text-xs text-muted-foreground mt-1">₹10 / Bag Commission on 400 Bags</p>
              <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-500/20 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                ✓ Recorded automatically in your commission book with zero double entries or Excel formulas.
              </div>
            </div>

            {/* Column 3: Wholesale Buyer */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Store className="w-5 h-5 text-zinc-500" />
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase">Buyer Shop Khata</span>
              </div>
              <p className="text-xl font-bold text-foreground">Debit: ₹{totalAmount.toLocaleString('en-IN')}</p>
              <p className="text-xs text-muted-foreground mt-1">Delivered to Ramesh Traders, Kolhapur</p>
              <div className="mt-4 space-y-1.5 text-xs text-muted-foreground border-t border-border pt-3">
                <div className="flex justify-between"><span>Rate per Bag:</span><span className="font-semibold text-foreground">₹{bagRate}</span></div>
                <div className="flex justify-between"><span>Payment Terms:</span><span className="font-semibold text-foreground">15 Days Mandi Credit</span></div>
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400"><span>WhatsApp Statement:</span><span>Ready in 1-Click</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Operations Grid (Light High-Contrast Surface) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-border transition-colors">
        <div className="mb-12">
          <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full mb-3">
            Godown & Transit
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("wb_section_2_title", "Absolute Operational Clarity.")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card A: Multi-Godown Visibility */}
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <PackageSearch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t("wb_card_a_headline", "Multi-Godown & Transit Bag Allocation")}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">
              {t("wb_card_a_copy", "Know exact bag counts across all godowns, railheads, and trucks in transit. Move stock between locations with zero accounting mistakes.")}
            </p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Reports.webp" 
                caption={t("wb_mockup_1", "Consolidated Stock across Godown 1, Godown 2 & Transit Trucks")} 
              />
            </div>
          </div>

          {/* Card B: B2B Running Ledgers */}
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t("wb_card_b_headline", "Crystal-Clear Mandi Ledgers")}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">
              {t("wb_card_b_copy", "Keep suppliers, freight transporters, and wholesale buyers completely separate. Filter by oldest overdue accounts and recover market Udhari fast.")}
            </p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/TransactionRecords.webp" 
                caption={t("wb_mockup_2", "Top Outstanding Accounts & Consignment Dues")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Automation & Invoicing Grid (Dark Slate Surface) */}
      <section className="px-4 py-20 w-full bg-zinc-950 text-white overflow-hidden relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">Marketplace Recovery</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white mt-1">
              {t("wb_section_3_title", "Business Automation & Invoicing.")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card C: WhatsApp Automation */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center mb-4 border border-[#25D366]/30">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t("wb_card_c_headline", "1-Click WhatsApp Payment Follow-Ups")}</h3>
                <p className="text-base text-zinc-300 leading-relaxed mb-6">
                  {t("wb_card_c_copy", "Send full khata summaries and polite payment reminders on WhatsApp in Marathi or Hindi. No copy-pasting numbers or manual typing.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/WhatappManager.webp" 
                  caption="WhatsApp Balance Reminder Templates & Party Dispatch" 
                />
              </div>
            </div>

            {/* Card D: Professional B2B Invoicing */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t("wb_card_d_headline", "Custom A4/A5 Mandi GST Invoices")}</h3>
                <p className="text-base text-zinc-300 leading-relaxed mb-6">
                  {t("wb_card_d_copy", "Print GST tax invoices with your firm logo, HSN summary, transport truck number, and bank payment QR code.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/CustomBills.webp" 
                  caption={t("wb_mockup_3", "A4 Wholesale Tax Invoice Header with GST & Terms")} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-950 via-zinc-900 to-zinc-950 border border-blue-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("wb_cta_headline", "Master Your Mandi Brokerage and Commission Ledgers")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("wb_cta_copy", "Get instant access to ScaleERP Wholesale Pro. Try multi-godown stock, broker dalali calculations, and automated WhatsApp statements free for 30 days.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/download" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md border-0">
                  {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
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
