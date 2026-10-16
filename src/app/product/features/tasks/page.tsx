"use client";

import React from "react";
import { ProductPattern } from "@/components/ui/product-pattern";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import Link from "next/link";
import { ChevronRight, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TasksPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-32 pb-24 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <ProductPattern />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-700 backdrop-blur-md text-sm font-semibold uppercase tracking-wider">
                {t('ScaleERP Tasks', 'Daily Tasks & Automation')}
              </div>
            </BlurIn>
            
            <BlurIn delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {t('tasks_hero_h1', 'Stop dialing for dues. Automate your recovery and backups.')}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-zinc-300 dark:text-zinc-700">
                {t('tasks_hero_h2', 'Spend your hours buying right and selling fast, not calling parties for old balances. ScaleERP sends bulk WhatsApp payment reminders and runs automated encrypted backups to your Google Drive.')}
              </p>
            </BlurIn>
            
            <BlurIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/product/use-cases/wholesale-brokers" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                    {t('tasks_cta_primary', 'Wholesale & broker workflow')} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/product/use-cases/feed-stores" passHref>
                  <Button size="lg" className="h-14 px-8 text-base bg-white/90 text-zinc-900 border-2 border-zinc-300 hover:bg-zinc-100 font-semibold rounded-xl shadow-sm">
                    {t('tasks_cta_secondary', 'Retail feed store workflow')}
                  </Button>
                </Link>
              </div>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
            <div className="relative bg-zinc-900/50 dark:bg-white/50 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-2xl p-4 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <MediaMockup 
                type="image" 
                src="/assets/WhatappManager.webp" 
                caption={t("tasks_hero_caption", "Instant WhatsApp Share & Payment Tracking")} 
                priority={true}
              />
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The Communication Grid (Light High-Contrast Surface) */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
              {t("tasks_comm_title", "WhatsApp Billing & Recovery")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-base">
              Send PDF invoices and polite balance reminders directly to customer phones for ₹0 per message.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('tasks_comm_card_a_headline', 'Instant digital bills on WhatsApp.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('tasks_comm_card_a_copy', 'Save thermal paper when a buyer wants a digital copy. With one click at the checkout screen, send a clean PDF invoice straight to the customer\'s WhatsApp number.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/InvoiceExample.webp" 
                caption={t("tasks_bill_share", "Digital Invoices with Shop Header & Terms via WhatsApp")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">{t('tasks_comm_card_b_headline', 'Recover pending udhari faster.')}</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t('tasks_comm_card_b_copy', 'Select multiple parties with high pending balances from your khata list and send polite, formatted payment reminders in one click. Every message automatically includes their exact due amount and last payment date.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/TransactionRecords.webp" 
                caption={t("tasks_whatsapp_reminder", "Filter Overdue Ledgers and Trigger 1-Click WhatsApp Follow-Ups")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Security & Cloud Backup Grid (Dark Surface) */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-950 text-white rounded-3xl shadow-2xl my-8 transition-colors duration-500">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">Nightly Protection</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-50">
              {t("tasks_sec_title", "Backup, Export & PC Disaster Recovery")}
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-white">{t('tasks_sec_card_c_headline', '100% offline by day. Encrypted cloud backup at night.')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed mb-6 flex-1">{t('tasks_sec_card_c_copy', 'ScaleERP runs 100% locally during shop hours so your counter never slows down. At 2:00 AM (or with one click at closing time), the app encrypts your entire database and uploads a backup copy to your Google Drive.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Backups.webp" 
                caption={t("tasks_backup_status", "Automated Local & Cloud Backup Encryption")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-white">{t('tasks_sec_card_d_headline', 'Full Excel & CSV data ownership.')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed mb-6 flex-1">{t('tasks_sec_card_d_copy', 'We never hold your business records hostage. Export your entire godown inventory, party list, and khata transactions to standard Excel (.xlsx) or CSV files whenever you want.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/Reports.webp" 
                caption={t("tasks_export_reports", "Comprehensive Data Export to Excel & PDF Reports")} 
              />
            </div>
          </div>

          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-white">{t('tasks_sec_card_e_headline', 'PC crash recovery in 5 minutes.')}</h3>
            <p className="text-base text-zinc-300 leading-relaxed mb-6 flex-1">{t('tasks_sec_card_e_copy', 'If your shop computer suffers a hardware failure, install ScaleERP on a replacement PC, pull your latest encrypted backup from Google Drive or local disk, transfer your license, and start billing again in minutes.')}</p>
            <div className="mt-auto">
              <MediaMockup 
                type="image" 
                src="/assets/LicenseMangement.webp" 
                caption={t("tasks_license_mgmt", "Machine-Locked License Transfer & Fast Restore")} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA - Floating High-Contrast Card */}
      <section className="px-4 py-16 mx-auto w-full max-w-7xl">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {t("tasks_cta_headline", "See how ScaleERP fits your counter.")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {t("tasks_cta_copy", "Explore how retail feed stores and wholesale commission brokers run their daily operations on ScaleERP.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/product/use-cases/wholesale-brokers" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md border-0">
                  {t("tasks_cta_primary", "Wholesale & broker workflow")} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/product/use-cases/feed-stores" passHref>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-2 border-zinc-300/40 rounded-xl font-semibold">
                  {t("tasks_cta_secondary", "Retail feed store workflow")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
