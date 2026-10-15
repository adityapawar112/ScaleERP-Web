"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight, ShieldCheck, Lock, Clock, Key, CloudUpload, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JargonTooltip } from "@/components/JargonTooltip";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import Link from "next/link";
import Head from "next/head";

export default function OfflineSecurityPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("os_title_tag", "ScaleERP | Anti-Theft Cash Drawer & Offline Data Protection")}</title>
        <meta name="description" content={t("os_meta_desc", "Protect your shop from backdated bill manipulation, clerk cash leakage, and monthly cloud fees with ScaleERP.")} />
      </Head>
      <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
        
        {/* 1. Hero Section */}
        <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-900/10 border border-white/20 dark:border-zinc-900/20 text-sm font-semibold tracking-wide uppercase text-brand-primary">
                  <Lock className="w-4 h-4" />
                  {t("feat_sec_badge", "Cash Drawer & Data Protection")}
                </div>
              </BlurIn>
              
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  {t("feat_sec_title", "Protect Your Shop From Clerk Manipulation, Viruses, and Monthly Cloud Fees")}
                </h1>
              </BlurIn>
              
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-zinc-400 dark:text-zinc-600">
                  {t("feat_sec_desc", "You cannot sit at the counter 14 hours a day. ScaleERP locks down your daily billing so staff cannot alter past cash records or copy your business data to another PC.")}
                </p>
              </BlurIn>
              
              <BlurIn delay={0.6}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/download" passHref>
                    <Button size="lg" className="h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md">
                      {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/pricing" passHref>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-base border-zinc-700 dark:border-zinc-300 rounded-xl">
                      {t("nav_pricing", "Simple Pricing")}
                    </Button>
                  </Link>
                </div>
              </BlurIn>
            </div>

            {/* Right Visual Component */}
            <BlurIn delay={0.6} className="w-full lg:w-[480px] shrink-0 relative">
              <div className="relative bg-zinc-900/80 dark:bg-zinc-100/80 backdrop-blur-2xl border border-white/10 dark:border-zinc-900/10 rounded-2xl p-6 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                <MediaMockup 
                  type="image" 
                  caption="PIN-Protected Cash Drawer & Tamper-Proof Audit Log" 
                  className="h-56"
                  src="/assets/LicenseMangement.webp"
                  priority={true}
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* 2. The 3-Point Merchant ROI Breakdown (The Headache -> The Fix -> The Proof) */}
        <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Anti-Theft Security
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {t("sec_clerk_audit_title", "Stop Cash Drawer Leakage and Backdated Bill Manipulation")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t("sec_clerk_audit_desc", "Staff cannot roll back the computer clock to change yesterday's cash bills or delete paid receipts. Every rupee collected in Cash or UPI is locked into your daily Rokad.")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ROI Point 1 */}
            <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Anti-Backdating Clock Guard
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("feat_sec_point_1", "Anti-Backdating Guard: If a clerk rolls back the Windows computer clock to alter yesterday's bills, the software detects it and locks the screen.")}
              </p>
              <div className="mt-auto pt-3 border-t border-border/50 text-xs font-semibold text-rose-600 dark:text-rose-400">
                Prevents cash deletion after closing hours
              </div>
            </Card>

            {/* ROI Point 2 */}
            <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center font-bold">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Lifetime Machine-Locked License
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("feat_sec_point_2", "Machine-Locked License: Your license is tied safely to your shop computer hardware. Your data stays on your machine, never on a stranger's server.")}
              </p>
              <div className="mt-auto pt-3 border-t border-border/50 text-xs font-semibold text-blue-600 dark:text-blue-400">
                Zero unauthorized software copying
              </div>
            </Card>

            {/* ROI Point 3 */}
            <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Private Owner PIN Controls
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("feat_sec_point_3", "PIN-Protected Owner Controls: Keep sensitive profit margins, ledger deletions, and price edits locked behind your private owner PIN.")}
              </p>
              <div className="mt-auto pt-3 border-t border-border/50 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Clerk bills; only owner edits master rates
              </div>
            </Card>
          </div>
        </section>

        {/* 3. Direct Objection FAQs */}
        <section className="px-4 py-24 mx-auto w-full max-w-5xl">
          <div className="text-center space-y-3 mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Data Security & Ownership Questions
            </h2>
            <p className="text-sm text-muted-foreground">
              What traditional merchants need to know before installing on their accounting PC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 rounded-2xl border border-border/70 bg-card/60 space-y-2">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Can my competitors or cloud companies see my prices and party dues?</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No. Unlike cloud apps that store your customer lists on remote servers, ScaleERP saves 100% of your records directly on your local computer hard disk in encrypted format.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl border border-border/70 bg-card/60 space-y-2">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <CloudUpload className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>How does the 2:00 AM Google Drive backup work?</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every night at 2:00 AM, ScaleERP packs an encrypted snapshot of your shop database and uploads it to your own personal Google Drive account. If your PC gets stolen or damaged, we restore your business in 5 minutes on any new PC.
              </p>
            </Card>
          </div>
        </section>

        {/* 4. Bottom Trial Download Bar */}
        <section className="px-4 py-24 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
            Protect Your Cash Drawer and Party Khatas Today
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Download the official Windows installer and try anti-backdating and automated backups free for 30 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/download" passHref>
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md">
                {t("hero_cta_primary", "Download Free for Windows")} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-zinc-300 dark:border-zinc-700 rounded-xl">
                {t("nav_pricing", "Simple Pricing")}
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
