"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BlurIn } from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { MediaMockup } from "@/components/MediaMockup";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import Link from "next/link";
import { ChevronRight, FileText, Printer, Languages, Building2, Check, QrCode } from "lucide-react";

export default function InvoiceCustomizationPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"a4" | "modern" | "a5" | "thermal">("a4");

  const tabDetails = {
    a4: {
      title: "Standard A4 GST Wholesale Tax Invoice",
      dimensions: "210 × 297 mm • Full Sheet Laser/Inkjet",
      desc: "Designed for wholesale truck dispatches, commission brokers, and APMC traders. Prints complete company letterhead, GSTIN, HSN summary, transport truck number, and bank payment QR code.",
      asset: "/assets/InvoiceExample.webp",
      badge: "Wholesale & Mandi Dispatch",
    },
    modern: {
      title: "Modern Clean A4 Corporate Format",
      dimensions: "210 × 297 mm • Streamlined Accounting",
      desc: "Minimalist tabular layout with highlighted payable boxes and automatic breakdown of Previous Dues + Today's Net Bill.",
      asset: "/assets/InvoiceExample.webp",
      badge: "Institutional Buyers",
    },
    a5: {
      title: "Compact A5 Half-Page Invoice",
      dimensions: "148 × 210 mm • Economic Sheet",
      desc: "Saves 50% paper while maintaining full GST compliance, firm header, and signature authorization for medium-volume traders.",
      asset: "/assets/CustomBills.webp",
      badge: "Paper Saver",
    },
    thermal: {
      title: "Thermal 80mm (3-Inch) High-Speed Roll",
      dimensions: "80 mm Roll • Continuous Silent Print in 0.5s",
      desc: "Engineered for 8:00 AM farmer counter rush. Uses standard ESC/POS thermal printers. Prints in Marathi, Hindi, or English with zero ink ribbons required.",
      asset: "/assets/CustomBills.webp",
      badge: "Retail Counter Speed",
    },
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#000000] font-sans selection:bg-[#00E600] selection:text-[#000000]">
      <main>
        {/* 1. Hero Section (Solid #F5F5F5 light / #171717 dark - No Gradients) */}
        <section className="relative px-4 pt-32 pb-24 w-full bg-[#F5F5F5] dark:bg-[#171717] text-[#171717] dark:text-[#FFFFFF] rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden border-b border-[#DCDCDC] dark:border-[#404040] shadow-sm transition-colors duration-500">
          <TopographicPattern className="opacity-15 dark:opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            {/* Left Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <BlurIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#000000] border border-[#DCDCDC] dark:border-[#404040] text-sm font-bold text-[#171717] dark:text-[#00E600] uppercase tracking-wider shadow-sm">
                  <FileText className="w-4 h-4 text-[#00E600]" />
                  {t("inv_cust_badge", "Custom Invoicing")}
                </div>
              </BlurIn>
              
              <BlurIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#FFFFFF]">
                  {t("inv_cust_hero_h1", "Bills that build trust.")}
                </h1>
              </BlurIn>
              
              <BlurIn delay={0.4}>
                <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-[#404040] dark:text-[#BFBFBF]">
                  {t("inv_cust_hero_h2", "Hand over clean, accurate bills to every party. Print your shop header, GST numbers, and trade terms in the exact format your counter or depot needs.")}
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
                  src="/assets/CustomBills.webp"
                  priority={true}
                  caption="Thermal & A4 Invoice Builder with Live Layout Selector" 
                />
              </div>
            </BlurIn>
          </div>
        </section>

        {/* NEW BLOCK: The "80mm Thermal vs A4 Wholesale" Format Switcher */}
        <section className="px-4 py-16 mx-auto w-full max-w-7xl lg:px-8">
          <div className="bg-[#171717] border-2 border-[#404040] rounded-3xl p-6 sm:p-8 shadow-xl text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Hardware & Print Formats</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Choose the Exact Print Layout for Your Trade
                </h3>
              </div>
              
              {/* 4-Tab Selector Bar */}
              <div className="inline-flex flex-wrap p-1.5 rounded-xl bg-[#000000] border border-[#404040]">
                {(["a4", "modern", "a5", "thermal"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                      activeTab === tab
                        ? "bg-[#00E600] text-[#000000] shadow-sm"
                        : "text-[#BFBFBF] hover:text-white"
                    }`}
                  >
                    {tab === "a4" && "Standard A4"}
                    {tab === "modern" && "Modern Clean"}
                    {tab === "a5" && "Compact A5"}
                    {tab === "thermal" && "80mm Thermal"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Spec Sheet */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00E600]/10 text-[#00E600] border border-[#00E600]/30">
                  {tabDetails[activeTab].badge}
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {tabDetails[activeTab].title}
                </h4>
                <p className="text-sm font-mono text-[#00E600]">
                  {tabDetails[activeTab].dimensions}
                </p>
                <p className="text-base text-[#BFBFBF] leading-relaxed">
                  {tabDetails[activeTab].desc}
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#BFBFBF]">
                    <Check className="w-4 h-4 text-[#00E600]" />
                    <span>Works with any Windows thermal, laser, or inkjet printer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#BFBFBF]">
                    <Check className="w-4 h-4 text-[#00E600]" />
                    <span>Displays Previous Udhari + Current Bill = Total Due</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Screenshot Preview */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#404040] bg-[#000000] p-3 shadow-2xl">
                  <MediaMockup 
                    type="image" 
                    src={tabDetails[activeTab].asset} 
                    caption={`${tabDetails[activeTab].title} Preview`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Capabilities: 12-Column Showcase with Full-Sized Printed Invoice on Right */}
        <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-[#000000] border-y border-[#404040] text-white">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Invoice Customization</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white mt-1">
              {t("inv_cust_cap_title", "Core Capabilities")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-20">
            {/* Left 5 Columns: 3 Stacked Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1 */}
              <div className="bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <Printer className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("inv_cust_card_a_title", "A4 wholesale & 3-inch thermal formats")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed">
                  {t("inv_cust_card_a_desc", "Print full A4 GST invoices for wholesale buyers and transport trucks, or switch to fast 3-inch thermal receipts for walk-in retail counters.")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <Languages className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("inv_cust_card_b_title", "English, Hindi, and Marathi billing")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed">
                  {t("inv_cust_card_b_desc", "Print item names, quantities, and payment terms in English, Hindi, or Marathi so local farmers and buyers can read every line clearly.")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#171717] border border-[#404040] rounded-2xl p-6 shadow-sm hover:border-[#00E600] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#00E600]/10 border border-[#00E600] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-[#00E600]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-3">
                  {t("inv_cust_card_c_title", "Shop header & GST details")}
                </h3>
                <p className="text-base font-sans text-[#BFBFBF] leading-relaxed">
                  {t("inv_cust_card_c_desc", "Add your firm name, logo, GSTIN, HSN codes, bank details, and mandi terms to your bill headers and footers.")}
                </p>
              </div>
            </div>

            {/* Right 7 Columns: Crystal-Clear Full-Sized Printed Invoice Preview */}
            <div className="lg:col-span-7">
              <div className="bg-[#171717] border-2 border-[#404040] rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#404040]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E600]">Official Mandi Print Preview</span>
                  <span className="text-xs text-[#BFBFBF]">A4 GST Mandi Invoice • 100% Readable</span>
                </div>
                <MediaMockup 
                  type="image" 
                  src="/assets/InvoiceExample.webp" 
                  caption="Full Mandi Tax Invoice: Header, Itemized Bags, Hamali, and Previous Udhari Balance" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pre-Footer CTA Section (Solid #171717 with #00E600 Border) */}
        <section className="px-4 py-16 mx-auto w-full max-w-7xl">
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#171717] border-2 border-[#00E600] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {t("feat_cta_headline", "Print professional bills that build customer trust.")}
              </h2>
              <p className="text-base sm:text-lg text-[#BFBFBF] max-w-2xl mx-auto leading-relaxed">
                {t("feat_cta_copy", "Download ScaleERP free for 30 days and connect your existing thermal or laser printer in under 5 minutes.")}
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
