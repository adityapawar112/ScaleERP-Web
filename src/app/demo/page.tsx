"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Key,
  ShieldCheck,
  Download,
  Copy,
  Check,
  Laptop,
  Cpu,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  FileText,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";

interface DemoResponse {
  success: boolean;
  keyCode: string;
  licenseBlob: string;
  validFrom: string;
  validUntil: string;
  edition: string;
  customerName: string;
  isUniversal: boolean;
  deviceFingerprint: string | null;
  message?: string;
}

export default function DemoLicensePage() {
  const { t } = useTranslation();

  const [mode, setMode] = useState<"universal" | "hardware">("universal");
  const [customerName, setCustomerName] = useState("Demo Enterprise");
  const [edition, setEdition] = useState("Pro");
  const [deviceFingerprint, setDeviceFingerprint] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DemoResponse | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedBlob, setCopiedBlob] = useState(false);
  const [blobExpanded, setBlobExpanded] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (mode === "hardware") {
      const cleanFp = deviceFingerprint.trim();
      const fpRegex = /^[a-fA-F0-9]{64}$/;
      if (!cleanFp) {
        setError("Device fingerprint is required in Hardware-Locked mode.");
        setLoading(false);
        return;
      }
      if (!fpRegex.test(cleanFp)) {
        setError("Invalid device fingerprint. Must be exactly 64 hexadecimal characters (SHA-256).");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/v1/licensing/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim() || "Demo Enterprise",
          edition,
          deviceFingerprint: mode === "hardware" ? deviceFingerprint.trim() : "",
        }),
      });

      const data: DemoResponse = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to generate trial license.");
      }

      setResult(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadFile = () => {
    if (!result?.licenseBlob) return;
    const blob = new Blob([result.licenseBlob], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "scaleerp-trial.lic";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyKey = async () => {
    if (!result?.keyCode) return;
    await navigator.clipboard.writeText(result.keyCode);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleCopyBlob = async () => {
    if (!result?.licenseBlob) return;
    await navigator.clipboard.writeText(result.licenseBlob);
    setCopiedBlob(true);
    setTimeout(() => setCopiedBlob(false), 2000);
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-terracotta/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="border-terracotta/30 text-terracotta bg-terracotta/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
            {t("demo_badge", "Instant 30-Day Evaluation")}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            {t("demo_hero_title", "Generate ScaleERP Trial License")}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t(
              "demo_hero_subtitle",
              "Instantly generate and download a cryptographically signed trial license for ScaleERP Desktop. Fully functional offline with zero cloud dependency."
            )}
          </p>
        </div>

        {/* Generator Form or Results View */}
        {!result ? (
          <Card className="border border-border/70 shadow-xl bg-card/80 backdrop-blur-md overflow-hidden">
            <CardHeader className="p-6 sm:p-8 border-b border-border/50 bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-heading">
                    {t("demo_hero_title", "Generate ScaleERP Trial License")}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-0.5">
                    {t(
                      "Air-Gapped Deployment Guide",
                      "Generate cryptographic license certificates for air-gapped ScaleERP retail workstations."
                    )}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-8">
              <form onSubmit={handleGenerate} className="space-y-6">
                {/* License Mode Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span>{t("demo_license_type", "License Type")}</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Universal Mode Card */}
                    <div
                      onClick={() => setMode("universal")}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        mode === "universal"
                          ? "border-terracotta bg-terracotta/5 shadow-sm"
                          : "border-border/60 hover:border-border hover:bg-muted/30"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                            <Laptop className="w-4 h-4 text-terracotta" />
                            {t("demo_universal_tag", "Universal (Portable)")}
                          </span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {t("Recommended", "Recommended")}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-normal">
                          {t(
                            "demo_mode_universal_desc",
                            "Works immediately on any computer or virtual machine without needing a hardware fingerprint."
                          )}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Zero setup required</span>
                      </div>
                    </div>

                    {/* Hardware Locked Card */}
                    <div
                      onClick={() => setMode("hardware")}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        mode === "hardware"
                          ? "border-terracotta bg-terracotta/5 shadow-sm"
                          : "border-border/60 hover:border-border hover:bg-muted/30"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-terracotta" />
                            {t("demo_hardware_tag", "Hardware Bound")}
                          </span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                            Strict
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-normal">
                          {t(
                            "demo_mode_hardware_desc",
                            "Binds strictly to a 64-character SHA-256 device fingerprint extracted from the desktop app."
                          )}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-blue-500" />
                        <span>Locked to single machine</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Name & Edition Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="company-name" className="text-sm font-semibold text-foreground">
                      {t("demo_company_label", "Store or Company Name")}
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={t("demo_company_placeholder", "e.g., Mahalakshmi Traders")}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="edition-select" className="text-sm font-semibold text-foreground">
                      {t("demo_edition_label", "Edition")}
                    </label>
                    <select
                      id="edition-select"
                      value={edition}
                      onChange={(e) => setEdition(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                    >
                      <option value="Pro">Pro (Full Features)</option>
                      <option value="Enterprise">Enterprise</option>
                      <option value="Standard">Standard</option>
                    </select>
                  </div>
                </div>

                {/* Hardware Fingerprint Input (Shown only in hardware mode) */}
                {mode === "hardware" && (
                  <div className="space-y-2 p-4 rounded-xl bg-muted/40 border border-border/70 animate-in fade-in-50 duration-200">
                    <div className="flex items-center justify-between">
                      <label htmlFor="device-fp" className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-terracotta" />
                        <span>{t("demo_fingerprint_label", "Device Hardware Fingerprint (64 hex characters)")}</span>
                      </label>
                      <span className="text-xs text-muted-foreground">
                        {deviceFingerprint.trim().length}/64
                      </span>
                    </div>
                    <input
                      id="device-fp"
                      type="text"
                      value={deviceFingerprint}
                      onChange={(e) => setDeviceFingerprint(e.target.value.toLowerCase().replace(/[^a-f0-9]/g, "").slice(0, 64))}
                      placeholder="e.g., 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
                      className="w-full font-mono text-xs px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                    />
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
                      <Info className="w-3.5 h-3.5 flex-shrink-0 text-terracotta" />
                      <span>{t("demo_fingerprint_help", "Open ScaleERP Desktop > License Activation screen to copy your device fingerprint, or switch to Universal mode.")}</span>
                    </p>
                  </div>
                )}

                {/* Error Banner */}
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-sm flex items-center gap-2">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Action */}
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-terracotta text-white hover:bg-terracotta/90 rounded-xl py-6 text-base font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>{t("demo_generating", "Generating Cryptographic Certificate...")}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>{t("demo_generate_btn", "Generate 30-Day Trial License")}</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          /* Result Card */
          <Card className="border border-border/70 shadow-2xl bg-card/90 backdrop-blur-md overflow-hidden animate-in fade-in-50 zoom-in-95 duration-300">
            {/* Result Header */}
            <div className="p-6 sm:p-8 bg-emerald-500/10 border-b border-emerald-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    {t("demo_success_title", "Trial License Generated Successfully!")}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t("demo_success_desc", "Your 30-day evaluation certificate is ready. Download the .lic file or copy the raw certificate blob.")}
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="w-fit border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-3 py-1 text-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 mr-1 inline" />
                <JargonTooltip explanation={t("tooltip_rsapss", "An asymmetric cryptographic signature scheme verifying license authenticity without cloud communication.")}>
                  RSA-PSS SHA-256 Signed
                </JargonTooltip>
              </Badge>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 text-sm">
                <div>
                  <span className="text-xs text-muted-foreground block">{t("demo_edition", "Edition")}</span>
                  <span className="font-semibold text-foreground">{result.edition}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">{t("demo_valid_until", "Valid Until")}</span>
                  <span className="font-semibold text-foreground">
                    {new Date(result.validUntil).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">{t("demo_license_type", "License Type")}</span>
                  <span className="font-semibold text-foreground">
                    {result.isUniversal ? t("demo_universal_tag", "Universal (Portable)") : t("demo_hardware_tag", "Hardware Bound")}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Customer</span>
                  <span className="font-semibold text-foreground truncate block">{result.customerName}</span>
                </div>
              </div>

              {/* Key Code Highlight Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Key className="w-4 h-4 text-terracotta" />
                    <span>{t("demo_key_code", "Activation Key Code")}</span>
                  </label>
                  <span className="text-xs text-muted-foreground">30-Day Evaluation Key</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 font-mono text-xl sm:text-2xl font-bold tracking-widest text-center py-3.5 px-4 rounded-xl bg-muted/60 border border-border text-foreground select-all shadow-inner">
                    {result.keyCode}
                  </div>
                  <Button
                    onClick={handleCopyKey}
                    variant="outline"
                    className="h-14 px-5 rounded-xl border-border hover:bg-muted/80 flex items-center gap-2 flex-shrink-0"
                    title="Copy Key Code"
                  >
                    {copiedKey ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-emerald-500 font-semibold">{t("demo_copied", "Copied!")}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-semibold">Copy Key</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Primary Actions: Download .lic & Copy Blob */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Button
                  onClick={handleDownloadFile}
                  size="lg"
                  className="bg-terracotta text-white hover:bg-terracotta/90 rounded-xl py-6 font-semibold shadow-md flex items-center justify-center gap-2.5 group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>{t("demo_download_lic", "Download scaleerp-trial.lic")}</span>
                </Button>

                <Button
                  onClick={handleCopyBlob}
                  variant="outline"
                  size="lg"
                  className="rounded-xl py-6 font-semibold border-border hover:bg-muted/80 flex items-center justify-center gap-2.5"
                >
                  {copiedBlob ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-emerald-500">{t("demo_copied", "Copied to Clipboard!")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 text-muted-foreground" />
                      <span>{t("demo_copy_blob", "Copy License Blob")}</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Collapsible Raw Signed Certificate Blob */}
              <div className="pt-2 border-t border-border/50 space-y-2">
                <button
                  type="button"
                  onClick={() => setBlobExpanded(!blobExpanded)}
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t("demo_raw_blob_label", "Raw Signed Certificate Blob (Base64)")}</span>
                  {blobExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {blobExpanded && (
                  <div className="space-y-2 animate-in fade-in-50 duration-200">
                    <textarea
                      readOnly
                      rows={5}
                      value={result.licenseBlob}
                      className="w-full font-mono text-[11px] leading-relaxed p-3 rounded-lg border border-border bg-muted/40 text-foreground/80 resize-none focus:outline-none select-all"
                    />
                  </div>
                )}
              </div>

              {/* Reset to generate another key */}
              <div className="pt-4 flex justify-center">
                <Button
                  onClick={handleReset}
                  variant="ghost"
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t("demo_generate_another", "Generate Another Key")}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 3-Step Desktop Import Walkthrough */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {t("demo_steps_title", "How to Activate in ScaleERP Desktop")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("Air-Gapped Deployment Guide", "Complete these 3 simple steps on your offline workstation.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <Card className="border border-border/60 bg-card/60 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
              <CardHeader className="p-6 pb-3 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta font-heading font-bold">
                  1
                </div>
                <CardTitle className="text-lg font-heading">
                  {t("demo_step1_title", "1. Download Desktop App")}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "demo_step1_desc",
                    "If you haven't already, download and install ScaleERP Desktop on Windows."
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Link href="/download" className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1">
                  <span>Go to Download Hub</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border border-border/60 bg-card/60 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
              <CardHeader className="p-6 pb-3 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta font-heading font-bold">
                  2
                </div>
                <CardTitle className="text-lg font-heading">
                  {t("demo_step2_title", "2. Import License File")}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "demo_step2_desc",
                    "Launch ScaleERP Desktop, navigate to License Activation, and click 'Import License File' (or paste the blob)."
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <span className="text-xs text-muted-foreground">Select scaleerp-trial.lic</span>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border border-border/60 bg-card/60 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
              <CardHeader className="p-6 pb-3 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-terracotta/10 border border-terracotta/20 flex items-center justify-center text-terracotta font-heading font-bold">
                  3
                </div>
                <CardTitle className="text-lg font-heading">
                  {t("demo_step3_title", "3. Run 100% Offline")}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "demo_step3_desc",
                    "Your workstation is activated immediately with full Pro features. No ongoing internet connection required."
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">30 days full offline access</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical & FAQ Accordion Section */}
        <div className="space-y-6 pt-6 border-t border-border/50">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {t("demo_faq_title", "Frequently Asked Questions")}
            </h2>
            <p className="text-sm text-muted-foreground">
              Everything you need to know about ScaleERP trial licensing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-border/50 bg-card/40 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">
                {t("demo_faq_q1", "Is an internet connection required to use ScaleERP?")}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  "demo_faq_a1",
                  "No. ScaleERP is built offline-first. Once you import the signed .lic file, the software validates the signature using local public-key cryptography and runs entirely offline."
                )}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/50 bg-card/40 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">
                {t("demo_faq_q2", "What is the difference between Universal and Hardware-Bound licenses?")}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  "demo_faq_a2",
                  "A Universal license contains no machine lock, allowing you to test on any PC or VM. A Hardware-Bound license is cryptographically tied to your specific machine's CPU, motherboard, and disk fingerprint for anti-tamper security."
                )}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/50 bg-card/40 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">
                {t("demo_faq_q3", "What happens when the 30-day trial expires?")}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(
                  "demo_faq_a3",
                  "All your local inventory, invoices, and ledger records remain 100% safe in your local SQLite database. Simply input a permanent commercial license to resume uninterrupted operations."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
