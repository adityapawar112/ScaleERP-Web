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

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
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
                <span className="text-sm font-semibold tracking-wide text-zinc-200 dark:text-zinc-800 uppercase">Enterprise Ready</span>
              </div>
            </BlurIn>
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                {t("pricing_page_title")}
              </h1>
            </BlurIn>
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-xl sm:text-2xl text-zinc-400 dark:text-zinc-600 font-medium leading-relaxed">
                {t("pricing_page_subtitle")}
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
              <CardTitle className="text-2xl font-bold">{t("pricing_plan_retail")}</CardTitle>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
                {t("pricing_standard_price").split('/')[0]}
                <span className="ml-1 text-xl font-medium text-muted-foreground">/{t("pricing_standard_price").split('/')[1] || "Year"}</span>
              </div>
              <CardDescription className="text-base mt-4">
                {t("pricing_standard_copy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-8">
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_1")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_2")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>
                    {t("pricing_feat_3").split(' ').map((word, i) => 
                      word.toLowerCase().includes('ledger') || word.includes('लेजर्स') 
                        ? <JargonTooltip key={i} explanation={t("tooltip_ledger")}>{word} </JargonTooltip> 
                        : word + ' '
                    )}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_4")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>
                    {t("pricing_feat_5").split(' ').map((word, i) => 
                      word.includes('RSA') 
                        ? <JargonTooltip key={i} explanation={t("tooltip_rsa")}>{word} </JargonTooltip> 
                        : word + ' '
                    )}
                  </span>
                </li>
              </ul>
              
              <div className="mt-8">
                <MediaMockup type="image" caption="Print Thermal or A4 Invoice" className="h-40" />
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Button asChild className="w-full h-12 text-md" variant="outline">
                <Link href="/download">
                  {t("pricing_cta_primary")}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card B: Pro */}
          <Card className="flex flex-col border-terracotta dark:border-terracotta bg-white dark:bg-zinc-950 shadow-2xl relative overflow-hidden ring-1 ring-terracotta/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-terracotta" />
            <div className="absolute top-6 right-6 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              Popular
            </div>
            <CardHeader className="pt-10 pb-6">
              <CardTitle className="text-2xl font-bold">{t("pricing_plan_wholesale")}</CardTitle>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-terracotta">
                {t("pricing_pro_price").split('/')[0]}
                <span className="ml-1 text-xl font-medium text-muted-foreground">/{t("pricing_pro_price").split('/')[1] || "Year"}</span>
              </div>
              <CardDescription className="text-base mt-4">
                {t("pricing_pro_copy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-8">
              <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{t("pricing_feat_pro_1")}</p>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_pro_2")}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_pro_3")}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_pro_4")}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-terracotta shrink-0 mr-3 mt-0.5" />
                  <span>{t("pricing_feat_pro_5")}</span>
                </li>
              </ul>

              <div className="mt-8">
                <MediaMockup type="video" caption="1-Click WhatsApp Reminders" className="h-40 border-terracotta/20" />
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              <Button asChild className="w-full h-12 text-md bg-terracotta hover:bg-terracotta/90 text-white">
                <Link href="/download">
                  {t("pricing_cta_primary")}
                </Link>
              </Button>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* 3. The Trust & FAQ Grid */}
      <section className="bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
        <div className="px-4 py-24 mx-auto w-full max-w-6xl lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-zinc-900 dark:text-zinc-100">Questions? We have answers.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Everything you need to know about ScaleERP billing and security.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  {t("pricing_faq_title_1")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t("pricing_faq_copy_1").split(' ').map((word, i) => 
                      word.includes('SQLite') 
                        ? <JargonTooltip key={i} explanation={t("tooltip_airgapped")}>{word} </JargonTooltip> 
                        : word + ' '
                  )}
                </p>
                <div className="mt-6">
                  <MediaMockup type="image" caption="1-Click Local Backups" className="h-32" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  {t("pricing_faq_title_2")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t("pricing_faq_copy_2")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm md:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  {t("pricing_faq_title_3")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t("pricing_faq_copy_3")}
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
