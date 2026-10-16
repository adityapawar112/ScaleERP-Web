"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight, ShieldCheck, Lock, Clock, Key, CloudUpload, HelpCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
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
      <div className="flex flex-col min-h-screen bg-[#F5F5F5] dark:bg-[#000000] font-sans selection:bg-[#00E600] selection:text-[#000000]">
        <main>
          {/* 1. Hero Section (Solid #F5F5F5 light / #171717 dark - No Blue Gradients) */}
          <section className="relative px-4 pt-32 pb-24 w-full bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FFFFFF] rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden border-b border-[#DCDCDC] dark:border-[#404040] shadow-sm transition-colors duration-500">
            <TopographicPattern className="opacity-15 dark:opacity-10" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                <BlurIn>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] text-sm font-bold text-[#171717] dark:text-[#00E600] uppercase tracking-wider shadow-sm">
                    <Lock className="w-4 h-4 text-[#00E600]" />
                    {t("Offline Security", "Cash & Data Protection")}
                  </div>
                </BlurIn>
                
                <BlurIn delay={0.2}>
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#FFFFFF]">
                    {t("feat_sec_title", "Protect Your Shop From Clerk Manipulation, Viruses, and Monthly Cloud Fees")}
                  </h1>
                </BlurIn>
                
                <BlurIn delay={0.4}>
                  <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#404040] dark:text-[#BFBFBF]">
                    {t("feat_sec_desc", "You cannot sit at the counter 14 hours a day. ScaleERP locks down your daily billing so staff cannot alter past cash records or copy your business data to another PC.")}
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
                    src="/assets/LicenseMangement.webp"
                    priority={true}
                    caption="PIN-Protected Cash Drawer & Tamper-Proof Machine Audit Log" 
                  />
                </div>
              </BlurIn>
            </div>
          </section>

          {/* 2. The 3-Point Merchant Security Breakdown on Solid #000000 */}
          <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-[#000000] border-y border-[#404040] text-white">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Anti-Theft Counter Security</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {t("sec_clerk_audit_title", "Stop Cash Drawer Leakage and Backdated Bill Manipulation")}
              </h2>
              <p className="text-base text-[#BFBFBF] leading-relaxed">
                {t("sec_clerk_audit_desc", "Staff cannot roll back the computer clock to change yesterday's cash bills or delete paid receipts. Every rupee collected in Cash or UPI is locked into your daily Rokad.")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
              {/* ROI Point 1: Anti-Backdating */}
              <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-4 text-rose-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                    Anti-Backdating Clock Guard
                  </h3>
                  <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                    {t("feat_sec_point_1", "If a clerk rolls back the Windows computer clock to alter yesterday's bills, the software detects it and locks the screen.")}
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-[#404040] text-xs font-semibold text-rose-400">
                  ✓ Prevents cash deletion after closing hours
                </div>
              </div>

              {/* ROI Point 2: Machine-Locked License */}
              <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4 text-[#00E600]">
                    <Key className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                    Lifetime Machine-Locked License
                  </h3>
                  <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                    {t("feat_sec_point_2", "Your license is tied safely to your shop computer hardware. Your data stays on your machine, never on a stranger's server.")}
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-[#404040] text-xs font-semibold text-[#00E600]">
                  ✓ Zero unauthorized software copying
                </div>
              </div>

              {/* ROI Point 3: Private Owner PIN */}
              <div className="flex flex-col bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4 text-[#00E600]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                    Private Owner PIN Controls
                  </h3>
                  <p className="text-base font-sans text-[#BFBFBF] leading-relaxed mb-6">
                    {t("feat_sec_point_3", "Keep sensitive profit margins, ledger deletions, and price edits locked behind your private owner PIN.")}
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-[#404040] text-xs font-semibold text-[#00E600]">
                  ✓ Clerk bills; only owner edits master rates
                </div>
              </div>
            </div>
          </section>

          {/* 3. Direct Objection FAQs (No Blue Borders, Solid #404040) */}
          <section className="px-4 py-20 mx-auto w-full max-w-5xl">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Security FAQ</span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                Data Security & Ownership Questions
              </h2>
              <p className="text-sm text-muted-foreground">
                What traditional merchants need to know before installing on their counter PC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-[#404040] bg-[#171717] text-white space-y-3 shadow-sm">
                <h3 className="font-semibold text-base text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#00E600] shrink-0" />
                  <span>Can my competitors or cloud companies see my prices and party dues?</span>
                </h3>
                <p className="text-sm text-[#BFBFBF] leading-relaxed">
                  No. Unlike cloud apps that store your customer lists on remote servers, ScaleERP saves 100% of your records directly on your local computer hard disk in encrypted format.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#404040] bg-[#171717] text-white space-y-3 shadow-sm">
                <h3 className="font-semibold text-base text-white flex items-center gap-2">
                  <CloudUpload className="w-5 h-5 text-[#00E600] shrink-0" />
                  <span>How does the 2:00 AM Google Drive backup work?</span>
                </h3>
                <p className="text-sm text-[#BFBFBF] leading-relaxed">
                  Every night at 2:00 AM, ScaleERP packs an encrypted snapshot of your shop database and uploads it to your own personal Google Drive account. If your PC gets stolen or damaged, we restore your business in 5 minutes on any new PC.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Pre-Footer CTA Section (Solid #171717 with #00E600 Border) */}
          <section className="px-4 py-16 mx-auto w-full max-w-7xl">
            <div className="max-w-5xl mx-auto rounded-3xl bg-[#171717] border-2 border-[#00E600] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                  Protect Your Cash Drawer and Party Khatas Today
                </h2>
                <p className="text-base sm:text-lg text-[#BFBFBF] max-w-2xl mx-auto leading-relaxed">
                  Download the official Windows installer and try anti-backdating and automated backups free for 30 days.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/download" passHref>
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-[#00E600] hover:bg-[#4DEE4D] text-[#000000] font-bold rounded-xl shadow-md border-0 transition-colors">
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
        </main>
      </div>
    </>
  );
}
