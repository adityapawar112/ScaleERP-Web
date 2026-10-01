"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { PackageSearch, TrendingUp, MessageCircle, FileText, Lock, ChevronRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";
import Head from "next/head";

export default function WholesaleBrokersPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("wb_title_tag")}</title>
        <meta name="description" content={t("wb_meta_desc")} />
      </Head>
      <div className="flex flex-col min-h-screen">
        
        {/* 1. Hero Section (Authoritative & Professional Canvas) */}
        <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none invert dark:invert-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 mb-2 shadow-sm font-semibold text-sm tracking-wide uppercase">
                  <Truck className="w-4 h-4" />
                  {t("wb_badge", "Wholesale & Distribution")}
                </div>
              </BlurIn>
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  {t("wb_hero_h1")}
                </h1>
              </BlurIn>
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-xl sm:text-2xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed mx-auto lg:mx-0">
                  {t("wb_hero_h2")}
                </p>
              </BlurIn>
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/pricing" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                      {t("wb_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </BlurIn>
            </div>
            
            <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-3xl transform -rotate-3 scale-105 opacity-50 dark:opacity-30"></div>
              <div className="relative z-10">
                <MediaMockup 
                  type="image" 
                  src="/assets/CustomBills.png"
                  caption="A4 Invoice Generation & WhatsApp Reminders Blast" 
                  className="rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-950"
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* 2. The Operations Grid (Light Mode: #FFFFFF Base with Terracotta Accents) */}
        <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">{t("wb_section_2_title", "Absolute Operational Clarity.")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card A (Left Column): Multi-Godown Visibility */}
            <Card className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <PackageSearch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{t("wb_card_a_headline")}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  {t("wb_card_a_copy")}
                </CardDescription>
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-6">
                  <MediaMockup type="image" src="/assets/stock_tracking.png" caption={t("wb_mockup_1", "Godown 1: 450 Bags | Godown 2: 120 Bags")} />
                </div>
              </CardContent>
            </Card>

            {/* Card B (Right Column): Powerful B2B Ledgers */}
            <Card className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-2xl font-bold">{t("wb_card_b_headline")}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                  {t("wb_card_b_copy")}
                </CardDescription>
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-6">
                  <MediaMockup type="image" src="/assets/TransactionRecords.png" caption={t("wb_mockup_2", "Top Outstanding Accounts Widget")} />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* 3. The Automation & Security Grid (Dark Mode: Deep Navy/Charcoal) */}
        <section className="px-4 py-24 w-full bg-zinc-950 dark:bg-zinc-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zinc-950 via-slate-900 to-black pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white">{t("wb_section_3_title", "Business Automation & Security.")}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card C: WhatsApp Automation */}
              <Card className="bg-zinc-900/80 border-zinc-800 text-white shadow-xl backdrop-blur-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center mb-4 border border-[#25D366]/30">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <CardTitle className="text-xl font-bold">{t("wb_card_c_headline")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 leading-relaxed">
                    {t("wb_card_c_copy")}
                  </p>
                </CardContent>
              </Card>

              {/* Card D: Professional B2B Invoicing */}
              <Card className="bg-zinc-900/80 border-zinc-800 text-white shadow-xl backdrop-blur-md flex flex-col justify-between">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold">{t("wb_card_d_headline")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {t("wb_card_d_copy").split(' ').map((word, i) => 
                      word.includes('A4') || word.includes('ए4')
                        ? <JargonTooltip key={i} explanation={t("tooltip_a4_invoice") || "Standard 8.27 x 11.69 inches paper format commonly used for official business invoices."}>{word} </JargonTooltip> 
                        : word + ' '
                    )}
                  </p>
                  <MediaMockup type="image" src="/assets/InvoiceExample.png" caption={t("wb_mockup_3", "A4 Invoice Header with GST")} className="h-24 bg-zinc-950 border-zinc-800" />
                </CardContent>
              </Card>

              {/* Card E (Full Width Bottom): Secure Cloud Backups */}
              <Card className="md:col-span-2 bg-gradient-to-r from-zinc-900 to-zinc-900/80 border-zinc-800 text-white shadow-2xl relative overflow-hidden mt-2">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{t("wb_card_e_headline")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 leading-relaxed max-w-4xl text-lg">
                    {t("wb_card_e_copy").split(' ').map((word, i) => 
                      word.toLowerCase().includes('scaleerp') || word.includes('ओरोस्केल')
                        ? <JargonTooltip key={i} explanation={t("tooltip_scaleerp") || "The enterprise-grade architecture supporting ScaleERP."}>{word} </JargonTooltip> 
                        : word + ' '
                    )}
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* 4. Closing Call-to-Action (Light Canvas) */}
        <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
            {t("wb_cta_headline")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            {t("wb_cta_copy")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" passHref>
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white">
                {t("wb_cta_primary")} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700">
                {t("talk_sales", "Talk to Sales")}
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
