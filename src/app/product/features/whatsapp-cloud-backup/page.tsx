"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight, MessageCircle, CloudUpload, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import Link from "next/link";

export default function WhatsappCloudBackupPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] dark:bg-[#000000] font-sans selection:bg-[#00E600] selection:text-[#000000]">
      <main>
        {/* 1. Hero Section (Solid #F5F5F5 light / #171717 dark - No Gradients) */}
        <section className="relative px-4 pt-32 pb-24 w-full bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FFFFFF] rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden border-b border-[#DCDCDC] dark:border-[#404040] shadow-sm transition-colors duration-500">
          <TopographicPattern className="opacity-15 dark:opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            {/* Left Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] text-sm font-bold text-[#171717] dark:text-[#00E600] uppercase tracking-wider shadow-sm">
                  <MessageCircle className="w-4 h-4 text-[#00E600]" />
                  {t("wc_title_tag", "WhatsApp & Cloud Backups")}
                </div>
              </BlurIn>
              
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#FFFFFF]">
                  {t("wc_hero_h1", "Automate Recovery. Secure Your Data.")}
                </h1>
              </BlurIn>
              
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#404040] dark:text-[#BFBFBF]">
                  {t("wc_hero_h2", "Stop chasing payments manually. Use WhatsApp automation to recover dues faster, and protect your local data with encrypted cloud syncs.")}
                </p>
              </BlurIn>
              
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/download" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-[#00E600] hover:bg-[#4DEE4D] text-[#000000] font-bold rounded-xl shadow-md border-0 transition-colors">
                      {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/pricing" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-[#FFFFFF] text-[#171717] border-2 border-[#DCDCDC] hover:border-[#171717] font-semibold rounded-xl shadow-sm transition-colors">
                      {t("nav_pricing", "Simple Pricing")}
                    </Button>
                  </Link>
                </div>
              </BlurIn>
            </div>

            {/* Right Visual Component */}
            <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
              <div className="relative bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] rounded-2xl p-4 shadow-xl">
                <MediaMockup 
                  type="image" 
                  src="/assets/WhatappManager.webp"
                  priority={true}
                  caption="WhatsApp Balance Reminder Queue with Pre-Filled Templates" 
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* 2. Core Capabilities: Clean Flat Cards on Solid #000000 (No Blue Borders, Zero Jargon) */}
        <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-[#000000] border-y border-[#404040] text-white">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Zero Hidden Costs</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white mt-1">
              {t("inv_cap_title", "Core Capabilities")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
            {/* Card 1: Bulk WhatsApp payment reminders */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("wc_card_a_headline", "Automated Payment Reminders")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("wc_card_a_copy", "Select multiple high-balance parties and send polite, formatted payment reminders directly to their WhatsApp with a single click.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/TransactionRecords.webp" 
                  caption="Select Overdue Debtors from Running Ledger to Dispatch Reminders" 
                />
              </div>
            </div>

            {/* Card 2: Direct WhatsApp invoice dispatch */}
            <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("wc_card_b_headline", "Direct WhatsApp Invoicing")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                  {t("wc_card_b_copy", "Send beautifully formatted digital invoices directly to a customer’s WhatsApp right from the checkout counter. Go paperless.")}
                </p>
              </div>
              <div className="mt-auto">
                <MediaMockup 
                  type="image" 
                  src="/assets/InvoiceExample.webp" 
                  caption="Digital Invoices with Previous Balance Delivered Directly via WhatsApp" 
                />
              </div>
            </div>

            {/* Card 3: 2:00 AM Encrypted Google Drive Backups (Full Width with Working Backups.webp) */}
            <div className="md:col-span-2 bg-[#171717] border border-[#404040] rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#00E600] transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-2">
                    <CloudUpload className="w-5 h-5 text-[#00E600]" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#FFFFFF]">
                    {t("wc_card_c_headline", "Encrypted Cloud Backups")}
                  </h3>
                  <p className="text-base font-sans text-[#BFBFBF] leading-relaxed">
                    {t("wc_card_c_copy", "ScaleERP runs 100% offline. But at the end of the day, a single click locks and saves a private backup copy of your entire shop khata and stock records to Google Drive for instant crash recovery.")}
                  </p>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#BFBFBF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00E600]" />
                      <span>Zero monthly cloud subscription fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#BFBFBF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00E600]" />
                      <span>Backs up directly to your own personal Google Drive</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#BFBFBF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00E600]" />
                      <span>5-minute instant restore on any replacement shop PC</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-[#404040] bg-[#000000] p-3 shadow-xl">
                    <MediaMockup 
                      type="image" 
                      src="/assets/Backups.webp" 
                      caption="Automatic Nightly Google Drive Backup & Recovery Center" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pre-Footer CTA Section (Solid #171717 with #00E600 Border) */}
        <section className="px-4 py-16 mx-auto w-full max-w-7xl">
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#171717] border-2 border-[#00E600] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {t("feat_cta_headline", "Never lose a single rupee of khata records.")}
              </h2>
              <p className="text-base sm:text-lg text-[#BFBFBF] max-w-2xl mx-auto leading-relaxed">
                {t("feat_cta_copy", "Download ScaleERP free for 30 days and connect WhatsApp reminders with automated Google Drive backups today.")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/download" passHref>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-[#00E600] hover:bg-[#4DEE4D] text-[#000000] font-bold rounded-xl shadow-md border-0">
                    {t("feat_cta_primary", "Download for your store")} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                    {t("feat_cta_secondary", "View simple pricing")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
