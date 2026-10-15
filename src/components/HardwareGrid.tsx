"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaWindows, FaPrint, FaWifi, FaBarcode, FaMicrochip, FaCheckCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HardwareGrid() {
  const { t } = useTranslation();

  return (
    <div id="hardware-compatibility" className="w-full max-w-6xl mx-auto my-12">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <Badge variant="outline" className="text-brand-dark dark:text-brand-primary border-brand-primary/40 bg-brand-primary/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
          Hardware Compatibility
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold text-foreground tracking-tight">
          {t("hw_grid_title", "Runs Smoothly on Your Existing Shop Computer & Printers")}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {t("hw_grid_desc", "No need to buy expensive new hardware. ScaleERP runs lightning fast on the budget PCs and printers already sitting on Indian shop counters.")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Spec 1: Computer */}
        <Card className="border border-border/70 bg-background/70 shadow-sm flex flex-col justify-between hover:border-brand-primary/40 transition-colors">
          <CardHeader className="p-6 pb-3 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FaMicrochip className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">
              Any Shop PC or Laptop
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Zero need to buy an expensive ₹60,000 computer
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3 text-xs text-muted-foreground">
            <p className="leading-relaxed">
              {t("hw_pc_spec", "Any Windows 10 or Windows 11 Desktop/Laptop with basic Dual-Core processor and 4GB RAM.")}
            </p>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
              <FaCheckCircle className="text-sm" />
              <span>Works on 5-year-old shop PCs</span>
            </div>
          </CardContent>
        </Card>

        {/* Spec 2: Printers & Scanners */}
        <Card className="border border-border/70 bg-background/70 shadow-sm flex flex-col justify-between hover:border-brand-primary/40 transition-colors">
          <CardHeader className="p-6 pb-3 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <FaPrint className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">
              Thermal, Laser & Scanners
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Plugs right into your existing USB counter hardware
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3 text-xs text-muted-foreground">
            <p className="leading-relaxed">
              {t("hw_print_spec", "Works out-of-the-box with all 3-inch (80mm) POS Thermal Printers, Laser/Inkjet A4 Printers, and USB Barcode Scanners.")}
            </p>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
              <FaCheckCircle className="text-sm" />
              <span>TVS, EPSON, NGX, HP, Canon compatible</span>
            </div>
          </CardContent>
        </Card>

        {/* Spec 3: Internet Connection */}
        <Card className="border border-border/70 bg-background/70 shadow-sm flex flex-col justify-between hover:border-brand-primary/40 transition-colors">
          <CardHeader className="p-6 pb-3 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <FaWifi className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">
              Zero Internet Mandate
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              No broadband bills or SIM cards needed for counter
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3 text-xs text-muted-foreground">
            <p className="leading-relaxed">
              {t("hw_net_spec", "Internet Required? ZERO for daily billing, printing, and khata updates. Optional Wi-Fi/mobile hotspot only if you want night-time Google Drive backups.")}
            </p>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
              <FaCheckCircle className="text-sm" />
              <span>Bill seamlessly during network blackouts</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">No hidden IT costs:</span> Install yourself in 2 minutes. No technician visit, no server rack, and no paid database installation required.
        </p>
      </div>
    </div>
  );
}
