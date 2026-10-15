"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaFileExcel, FaUpload, FaPrint, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MigrationWalkthrough() {
  const { t } = useTranslation();

  return (
    <div id="migration-guide" className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-10 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md shadow-xl">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
          Zero Downtime Switch
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-tight">
          {t("mig_title", "Switching From Paper Khatas, Tally, or Marg? Start in 10 Minutes.")}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          You don't need to stop business or manually re-enter years of history. Follow 3 straightforward steps to bring your shop live today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Step 1 */}
        <Card className="border border-border/70 bg-background/70 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
              1
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                <FaFileExcel className="text-emerald-600" />
                <span>Export to Simple Excel</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {t("mig_step_1", "Step 1: Put your existing customer list, pending opening balances, and product stock into a simple Excel sheet.")}
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-0 text-[11px] text-muted-foreground border-t border-border/40 bg-muted/20 py-2.5">
            Works from Tally XML/Excel, Marg, Vyapar, or handwritten registers
          </div>
        </Card>

        {/* Step 2 */}
        <Card className="border border-border/70 bg-background/70 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/30">
              2
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                <FaUpload className="text-blue-500" />
                <span>1-Click Bulk Import</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {t("mig_step_2", "Step 2: Open ScaleERP Tools and click Bulk Excel Import to load all your parties and stock in seconds.")}
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-0 text-[11px] text-muted-foreground border-t border-border/40 bg-muted/20 py-2.5">
            Auto-detects duplicates and verifies phone numbers and GSTINs
          </div>
        </Card>

        {/* Step 3 */}
        <Card className="border-2 border-brand-primary/50 bg-background/80 shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary text-brand-dark flex items-center justify-center font-bold text-lg shadow-sm">
              3
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-base text-foreground flex items-center gap-2">
                <FaPrint className="text-terracotta" />
                <span>Bill With Old Dues Intact</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {t("mig_step_3", "Step 3: Start printing counter bills immediately with every customer's old Udhari balance automatically attached.")}
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-0 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold border-t border-border/40 bg-brand-primary/10 py-2.5 flex items-center gap-1.5">
            <FaCheckCircle className="text-xs" />
            <span>Ready for counter sales immediately</span>
          </div>
        </Card>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          Need help moving your accounts? Our team provides free remote support to import your Excel file during your 30-day trial.
        </p>
      </div>
    </div>
  );
}
