"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaWifi, FaBolt, FaUsers, FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MorningRushCalculator() {
  const { t } = useTranslation();
  const [billsCount, setBillsCount] = useState<number>(40);

  // Time calculations (in minutes)
  // Legacy / Cloud: ~45 seconds (0.75 min) per bill due to loading, search lag, mouse clicks, wifi stalls
  const legacyTimeMins = Math.round((billsCount * 45) / 60);
  // ScaleERP: ~4 seconds (0.067 min) per bill via Enter-driven keyboard workflow
  const scaleErpTimeMins = Math.max(1, Math.round((billsCount * 4) / 60));
  const timeSavedMins = Math.max(0, legacyTimeMins - scaleErpTimeMins);
  const monthlyHoursSaved = Math.round((timeSavedMins * 26) / 60);

  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <Badge variant="outline" className="text-terracotta border-terracotta/30 bg-terracotta/10 px-3.5 py-1 text-xs font-bold tracking-wide uppercase rounded-full mb-2">
            {t("rush_calc_badge", "The 8:00 AM Counter Test")}
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground tracking-tight">
            {t("rush_calc_title", "When 15 Customers Are Waiting, Slow Software Costs You Sales")}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            {t("rush_calc_desc", "During peak morning hours, internet drops and cloud software freezes. With ScaleERP installed directly on your shop computer, your counter never stops for a single second.")}
          </p>
        </div>
      </div>

      {/* Interactive Rush Hour Slider */}
      <div className="p-6 rounded-xl bg-muted/40 border border-border/60 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label htmlFor="morning-bills-slider" className="text-sm font-semibold text-foreground flex items-center gap-2">
            <FaUsers className="text-brand-dark dark:text-brand-primary" />
            <span>Morning Counter Rush Volume:</span>
            <span className="text-base font-bold text-terracotta font-outfit tabular-nums tracking-tight">{billsCount} Bills / Morning</span>
          </label>
          <span className="text-xs text-muted-foreground">Adjust to match your shop's peak morning traffic</span>
        </div>
        <input
          id="morning-bills-slider"
          type="range"
          min="10"
          max="150"
          step="5"
          value={billsCount}
          onChange={(e) => setBillsCount(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:ring-4 [&::-webkit-slider-thumb]:ring-emerald-500/25 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-emerald-500 [&::-moz-range-thumb]:ring-4 [&::-moz-range-thumb]:ring-emerald-500/25 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          aria-label="Morning Counter Rush Volume"
        />
        <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
          <span>10 bills (Light morning)</span>
          <span>50 bills (Mandi peak)</span>
          <span>100+ bills (Festival / Sowing season)</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Cloud Software Card */}
        <Card className="border-border/60 bg-background/60 shadow-sm flex flex-col justify-between">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-foreground">Cloud / Online Software</CardTitle>
              <FaWifi className="text-amber-500 text-lg" />
            </div>
            <CardDescription className="text-xs text-muted-foreground">
              Browser-based, dependent on 4G dongle or Wi-Fi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-outfit tabular-nums">~{legacyTimeMins} min</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">to clear {billsCount} customers (45s per bill)</p>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc list-inside">
              <li>Spinning circle when mobile network drops</li>
              <li>Takes 8 mouse clicks to pick item & party</li>
              <li>Printer popup dialog delays every bill</li>
            </ul>
          </CardContent>
        </Card>

        {/* Legacy Accounting Card */}
        <Card className="border-border/60 bg-background/60 shadow-sm flex flex-col justify-between">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-foreground">Old Legacy Software</CardTitle>
              <FaClock className="text-rose-500 text-lg" />
            </div>
            <CardDescription className="text-xs text-muted-foreground">
              Complex accounting menus meant for CA offices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-center">
              <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-400 font-outfit tabular-nums">~{legacyTimeMins} min</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">confusing screens slow down billing</p>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc list-inside">
              <li>Clerk needs 3 months of training</li>
              <li>Cannot bill easily in Marathi or Hindi</li>
              <li>Must flip between khata and stock menus</li>
            </ul>
          </CardContent>
        </Card>

        {/* ScaleERP Card (Winner) */}
        <Card className="border-2 border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/20 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider font-outfit">
            4-Sec Billing
          </div>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                <FaBolt className="text-emerald-500" />
                <span>ScaleERP Counter</span>
              </CardTitle>
            </div>
            <CardDescription className="text-xs text-muted-foreground">
              Direct PC installation with Enter-driven speed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-center">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-outfit tabular-nums">~{scaleErpTimeMins} min</span>
              <p className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 mt-0.5 tabular-nums">
                Saved ~{timeSavedMins} mins every morning!
              </p>
            </div>
            <ul className="text-xs text-foreground/80 space-y-1.5 list-disc list-inside font-medium">
              <li>Enter-Enter-Print in under 4 seconds</li>
              <li>100% offline, zero internet lag</li>
              <li>Previous Udhari prints directly on bill</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Financial ROI Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs uppercase font-bold text-muted-foreground tracking-wider font-outfit">Estimated Monthly Shop Recovery</span>
          <p className="text-sm sm:text-base font-semibold text-foreground">
            You save <span className="text-emerald-600 dark:text-emerald-400 font-bold font-outfit tabular-nums">{monthlyHoursSaved} hours of counter rush every month</span> while eliminating customer drop-offs and calculation disputes.
          </p>
        </div>
        <Link href="/download" passHref className="flex-shrink-0">
          <Button size="sm" className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold px-5 h-10 shadow-sm flex items-center gap-2">
            <span>{t("hero_cta_primary", "Download Free for Windows")}</span>
            <FaArrowRight className="text-xs" />
          </Button>
        </Link>
      </div>

      {/* High-Contrast Integrated Dark Footer Bar */}
      <div className="-mx-6 -mb-6 sm:-mx-8 sm:-mb-8 bg-zinc-950 text-white rounded-b-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 border-t border-zinc-800 shadow-inner">
        <div className="py-3 sm:py-0 sm:px-6 first:pl-0 text-center sm:text-left space-y-1.5">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-outfit tracking-tight">
            {t('rush_metric_1_val', 'Under 4 Sec')}
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {t('rush_metric_1_label', 'To print a complete receipt using just your keyboard Enter key')}
          </p>
        </div>

        <div className="py-3 sm:py-0 sm:px-6 text-center sm:text-left space-y-1.5">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-outfit tracking-tight">
            {t('rush_metric_2_val', '100% Offline')}
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {t('rush_metric_2_label', 'Zero dependence on Wi-Fi, mobile data, or remote servers during billing')}
          </p>
        </div>

        <div className="py-3 sm:py-0 sm:px-6 last:pr-0 text-center sm:text-left space-y-1.5">
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-outfit tracking-tight">
            {t('rush_metric_3_val', '1-Day Training')}
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {t('rush_metric_3_label', 'Any counter clerk can bill in Marathi, Hindi, or English on their very first day')}
          </p>
        </div>
      </div>
    </div>
  );
}
