"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";

export default function WhatsappCloudBackupPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      {/* 1. Hero Section (Split Light/Dark Canvas) */}
      <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        
        {/* Split Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-900/10 border border-white/20 dark:border-zinc-900/20 text-sm font-semibold tracking-wide">
                {t("wc_title_tag", "WhatsApp & Cloud Backups | ScaleERP")}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                {t("wc_hero_h1", "Automate Recovery. Secure Your Data.")}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed text-zinc-400 dark:text-zinc-600">
                {t("wc_hero_h2", "Stop chasing payments manually. Use WhatsApp automation to recover dues faster, and protect your local data with encrypted cloud syncs.")}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white border-transparent">
                  {t("get_started", "Get Started")}
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base border-white/20 dark:border-zinc-900/20 !bg-transparent !text-white dark:!text-white hover:!bg-white/10 dark:hover:!bg-zinc-900/10">
                  {t("bookDemo", "Book Demo")}
                </Button>
              </div>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
            <div className="relative bg-zinc-900/80 dark:bg-zinc-100/80 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-lg p-8 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <MediaMockup 
                type="image" 
                caption={t("wc_mockup_1", "Payment Reminder Sent | Cloud Sync Successful")} 
                className="h-48"
                src="/assets/whatsapp_sync.png"
              />
            </div>
          </BlurIn>

        </div>
      </section>

      {/* 2. Standard Content Grid / Strip Pattern */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("inv_cap_title", "Core Capabilities")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
          {/* Card 1 */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md">
            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {t("wc_card_a_headline", "Automated Payment Reminders")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-8">
              <p className="text-muted-foreground leading-relaxed">
                {t("wc_card_a_copy", "Select multiple high-balance parties and send polite, formatted payment reminders directly to their WhatsApp with a single click.")}
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md">
            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {t("wc_card_b_headline", "Direct WhatsApp Invoicing")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t("wc_card_b_copy", "Send beautifully formatted digital invoices directly to a customer’s WhatsApp right from the checkout counter. Go paperless.")}
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md md:col-span-2">
            <CardHeader className="pt-8 pb-4">
              <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {t("wc_card_c_headline", "Encrypted Cloud Backups")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-8">
              <p className="text-muted-foreground leading-relaxed">
                {t("wc_card_c_copy_pt1", "ScaleERP runs 100% offline. But at the end of the day, a single click ")}
                <JargonTooltip explanation={t("tooltip_encrypts", "Converted into a secure code to prevent unauthorized access.")}>
                  <strong className="text-zinc-900 dark:text-zinc-100 font-mono">{t("wc_card_c_encrypts", "encrypts")}</strong>
                </JargonTooltip>
                {t("wc_card_c_copy_pt2", " your entire local ")}
                <JargonTooltip explanation={t("tooltip_sqlite", "A high-performance local database system.")}>
                  <strong className="text-zinc-900 dark:text-zinc-100 font-mono">SQLite</strong>
                </JargonTooltip>
                {t("wc_card_c_copy_pt3", " database and pushes a secure backup to the cloud for disaster recovery.")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Closing Call-to-Action (CTA) Pattern */}
      <section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
          {t("feat_cta_headline", "Ready to streamline your operations?")}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
          {t("feat_cta_copy", "Experience the speed and precision of ScaleERP in your own business.")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-terracotta hover:bg-terracotta/90 text-white border-transparent">
            {t("feat_cta_primary", "Get Started Today")} <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700">
            {t("feat_cta_secondary", "Book a Free Demo")}
          </Button>
        </div>
      </section>
    </div>
  );
}
