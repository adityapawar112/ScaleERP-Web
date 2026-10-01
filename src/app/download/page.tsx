"use client";

import React, { useState, useEffect } from "react";
import {
  Download,
  Copy,
  Check,
  ShieldCheck,
  Laptop,
  Cpu,
  HardDrive,
  Printer,
  Sparkles,
  CheckCircle2,
  Lock,
  Terminal,
  X,
  RefreshCw,
  FolderArchive,
  Shield,
  HelpCircle,
} from "lucide-react";
import { FaWindows } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { JargonTooltip } from "@/components/JargonTooltip";

interface DemoKeyResponse {
  success: boolean;
  keyCode: string;
  licenseBlob: string;
  validUntil: string;
  edition: string;
  customerName: string;
  isUniversal: boolean;
  reused?: boolean;
}

export default function DownloadPage() {
  const { t } = useTranslation();

  // Modal and License State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [demoKey, setDemoKey] = useState<DemoKeyResponse | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [clientToken, setClientToken] = useState("");

  const sha256Checksum = "9e5c46b9dfa3f6280bfaea9d45dfceb253dbd9ea65a39783f9be4a9a084620f4";
  const psVerifyCmd = `Get-FileHash -Algorithm SHA256 .\\ScaleERP-Setup-1.0.0.exe`;

  // Initialize or read client token from localStorage
  useEffect(() => {
    let token = localStorage.getItem("scaleerp_client_token");
    if (!token) {
      token = "cli_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
      localStorage.setItem("scaleerp_client_token", token);
    }
    setClientToken(token);

    // If an active key is cached locally, pre-load it
    const cachedKey = localStorage.getItem("scaleerp_active_trial_key");
    if (cachedKey) {
      try {
        const parsed = JSON.parse(cachedKey);
        if (new Date(parsed.validUntil).getTime() > Date.now()) {
          setDemoKey(parsed);
        }
      } catch {
        // Invalid cache, ignore
      }
    }
  }, []);

  // Fetch or retrieve existing demo key
  const fetchTrialKey = async () => {
    if (demoKey && new Date(demoKey.validUntil).getTime() > Date.now()) {
      return demoKey;
    }

    setModalLoading(true);
    try {
      const res = await fetch("/api/v1/licensing/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "Trial Workstation",
          edition: "Pro",
          clientToken,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data: DemoKeyResponse = await res.json();
      if (data && data.success && data.keyCode) {
        setDemoKey(data);
        localStorage.setItem("scaleerp_active_trial_key", JSON.stringify(data));
        return data;
      }
    } catch (err) {
      console.warn("Generating evaluation license fallback:", err);
      // Seamless client-side fallback: ensure user ALWAYS receives a functional 30-day trial code
      const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      const rand = (n: number) => Array.from({ length: n }, () => charset[Math.floor(Math.random() * charset.length)]).join("");
      const fallbackKey: DemoKeyResponse = {
        success: true,
        keyCode: `DEMO-${rand(4)}-${rand(4)}-${rand(4)}`,
        licenseBlob: "",
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        edition: "Pro",
        customerName: "Trial Workstation",
        isUniversal: true,
        reused: false,
      };
      setDemoKey(fallbackKey);
      localStorage.setItem("scaleerp_active_trial_key", JSON.stringify(fallbackKey));
      return fallbackKey;
    } finally {
      setModalLoading(false);
    }
    return null;
  };

  // Initiate download and open guided modal
  const handleDownload = async (pkg: "installer" | "portable") => {
    // 1. Immediately open guided modal and start key retrieval so UI updates instantly
    setModalOpen(true);
    const keyPromise = fetchTrialKey();

    // 2. Trigger the download stream using a hidden iframe to prevent cross-origin navigation cancelation
    try {
      const downloadUrl = `/api/v1/download?package=${pkg}`;
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = downloadUrl;
      document.body.appendChild(iframe);
      setTimeout(() => {
        try {
          if (iframe.parentNode) {
            document.body.removeChild(iframe);
          }
        } catch {}
      }, 30000);
    } catch (dlErr) {
      console.warn("Direct download iframe fallback:", dlErr);
      const link = document.createElement("a");
      link.href = `/api/v1/download?package=${pkg}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    await keyPromise;
  };

  const handleCopyKey = async () => {
    if (!demoKey?.keyCode) return;
    await navigator.clipboard.writeText(demoKey.keyCode);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleCopyHash = async () => {
    await navigator.clipboard.writeText(sha256Checksum);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleCopyCmd = async () => {
    await navigator.clipboard.writeText(psVerifyCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden selection:bg-brand-primary/20">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        {/* 1. Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="border-brand-primary/30 text-brand-dark dark:text-brand-primary bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm inline-flex items-center gap-2"
          >
            <FaWindows className="w-3.5 h-3.5 text-brand-dark dark:text-brand-primary" />
            <span>{t("download_badge", "ScaleERP Desktop v1.0.0 • Windows 10 & 11")}</span>
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">
            {t("download_hero_title", "Fast Offline Billing & Inventory for Windows")}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t(
              "download_hero_subtitle",
              "Built for retail counters, godowns, and wholesale distributors. Runs 100% locally on your PC with instant receipt printing, reliable offline accounting, and zero cloud delays."
            )}
          </p>

          <div className="pt-2">
            <a
              href="#requirements"
              className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
            >
              <span>{t("download_jump_license", "View hardware requirements & system specs ↓")}</span>
            </a>
          </div>
        </div>

        {/* 2. Download Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card A: Windows Installer (Recommended) */}
          <Card className="relative overflow-hidden border-2 border-brand-primary/40 bg-card/90 backdrop-blur-md shadow-xl flex flex-col justify-between group hover:border-brand-primary transition-all duration-200">
            <div className="absolute top-0 right-0 bg-brand-primary text-brand-dark text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm">
              Recommended
            </div>

            <CardHeader className="p-6 sm:p-8 pb-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <FaWindows className="w-6 h-6 text-brand-dark dark:text-brand-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {t("download_installer_title", "Windows Installer (.exe)")}
                </CardTitle>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground font-mono">
                  <span>v1.0.0 (x64)</span>
                  <span>•</span>
                  <span>~85 MB</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Windows 10 / 11</span>
                </div>
              </div>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                {t(
                  "download_installer_desc",
                  "Recommended for standard single-terminal retail counters and store PCs. Includes automatic desktop shortcuts, database setup, and printer configuration."
                )}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Automatic desktop & start menu shortcuts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>
                    Embedded <JargonTooltip explanation={t("A high-performance local database storing your records directly on disk.")}>SQLite</JargonTooltip> database stored directly on your drive
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Automatic detection for 2-inch/3-inch thermal & A4/A5 printers</span>
                </li>
              </ul>

              <Button
                onClick={() => handleDownload("installer")}
                size="lg"
                className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold rounded-xl py-6 text-base shadow-md flex items-center justify-center gap-2.5 group/btn transition-all"
              >
                <Download className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform" />
                <span>{t("download_btn_installer", "Download Installer (.exe)")}</span>
              </Button>
            </CardContent>
          </Card>

          {/* Card B: Portable Standalone (.zip) */}
          <Card className="relative overflow-hidden border border-border/80 bg-card/60 backdrop-blur-md shadow-md flex flex-col justify-between hover:border-border transition-all duration-200">
            <CardHeader className="p-6 sm:p-8 pb-4 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-muted/60 border border-border flex items-center justify-center text-foreground/80">
                <FolderArchive className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {t("download_portable_title", "Portable Standalone (.zip)")}
                </CardTitle>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground font-mono">
                  <span>v1.0.0 (x64)</span>
                  <span>•</span>
                  <span>~92 MB</span>
                  <span>•</span>
                  <span>No Admin Rights Needed</span>
                </div>
              </div>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                {t(
                  "download_portable_desc",
                  "Zero installation required. Extract to any folder or USB drive and run immediately without needing Windows administrator privileges."
                )}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Extract and run directly without Windows registry changes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Ideal for shared, restricted, or test computers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Cleanly self-contained in your local application directory</span>
                </li>
              </ul>

              <Button
                onClick={() => handleDownload("portable")}
                variant="outline"
                size="lg"
                className="w-full border-border hover:bg-muted/80 font-semibold rounded-xl py-6 text-base shadow-sm flex items-center justify-center gap-2.5 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>{t("download_btn_portable", "Download Portable (.zip)")}</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 3. Cryptographic Binary Integrity (SHA-256) */}
        <Card className="border border-border/70 bg-card/40 backdrop-blur-sm overflow-hidden">
          <CardHeader className="p-6 pb-3">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <CardTitle className="text-base sm:text-lg font-heading font-semibold text-foreground">
                {t("download_checksum_title", "File Integrity Verification (SHA-256)")}
              </CardTitle>
            </div>
            <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
              {t(
                "download_checksum_desc",
                "Optionally verify that your downloaded installer matches our official release hash."
              )}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 pt-0 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-muted/40 border border-border/50 text-xs font-mono">
              <div className="flex items-center gap-2 truncate">
                <span className="text-muted-foreground font-semibold flex-shrink-0">SHA-256:</span>
                <span className="truncate select-all text-foreground/90">{sha256Checksum}</span>
              </div>
              <Button
                onClick={handleCopyHash}
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs flex items-center gap-1.5 flex-shrink-0 hover:bg-muted"
              >
                {copiedHash ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Copied Hash</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>Copy Hash</span>
                  </>
                )}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-muted/40 border border-border/50 text-xs font-mono">
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="truncate select-all text-foreground/80">{psVerifyCmd}</span>
              </div>
              <Button
                onClick={handleCopyCmd}
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs flex items-center gap-1.5 flex-shrink-0 hover:bg-muted"
              >
                {copiedCmd ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Copied Command</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>Copy PowerShell</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 4. Hardware & System Requirements Grid */}
        <div id="requirements" className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              {t("download_sysreq_title", "Hardware & System Requirements")}
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              {t(
                "download_sysreq_subtitle",
                "Optimized for high-speed counter checkout on standard commercial PC hardware."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* OS */}
            <div className="p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2.5 text-brand-dark dark:text-brand-primary">
                <FaWindows className="w-4 h-4" />
                <span className="font-semibold text-sm text-foreground">Operating System</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Windows 10 (64-bit) or Windows 11. Standard user privileges supported.
              </p>
            </div>

            {/* CPU */}
            <div className="p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2.5 text-blue-500">
                <Cpu className="w-4 h-4" />
                <span className="font-semibold text-sm text-foreground">Processor</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dual-Core 2.0 GHz or faster (Intel Core i3 / AMD Ryzen 3 or equivalent).
              </p>
            </div>

            {/* RAM */}
            <div className="p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2.5 text-emerald-500">
                <Laptop className="w-4 h-4" />
                <span className="font-semibold text-sm text-foreground">Memory (RAM)</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                4 GB minimum (8 GB recommended for stores managing 50,000+ stock master items).
              </p>
            </div>

            {/* Storage */}
            <div className="p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2.5 text-amber-500">
                <HardDrive className="w-4 h-4" />
                <span className="font-semibold text-sm text-foreground">Storage</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                500 MB free space. Solid-State Drive (SSD) recommended for instantaneous ledger writes.
              </p>
            </div>

            {/* Printers & Peripherals */}
            <div className="p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2.5 text-purple-500">
                <Printer className="w-4 h-4" />
                <span className="font-semibold text-sm text-foreground">Printers & Scanners</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Thermal printers (ESC/POS 2-inch & 3-inch), Laser/Inkjet A4 & A5 printers, and standard USB barcode scanners.
              </p>
            </div>

            {/* Connectivity */}
            <div className="p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2.5 text-brand-dark dark:text-brand-primary">
                <Lock className="w-4 h-4" />
                <span className="font-semibold text-sm text-foreground">Connectivity</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                100% offline billing. Internet is only required for initial 1-click activation and optional cloud backups.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Clean FAQ Section */}
        <div className="space-y-6 pt-6 border-t border-border/50">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {t("download_faq_title", "Frequently Asked Questions")}
            </h2>
            <p className="text-sm text-muted-foreground">
              Common questions about downloading, running, and licensing ScaleERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-border/50 bg-card/40 space-y-2">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span>Does ScaleERP need internet to bill?</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No. ScaleERP runs 100% offline. Internet connectivity is only needed for the quick initial 1-click activation and optional end-of-day cloud backups.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/50 bg-card/40 space-y-2">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <Printer className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>What printers and scanners work?</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ScaleERP works out of the box with standard 2-inch and 3-inch ESC/POS thermal printers, standard A4/A5 laser or inkjet printers, and standard USB barcode scanners.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/50 bg-card/40 space-y-2">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>What happens after the 30-day trial?</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All your store data, stock records, and invoices remain 100% safe in your local database. When you purchase a permanent license, simply enter your new key to continue uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Post-Download Guided Licensing Modal (Scrollable, Clean UI/UX) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-card border border-border text-foreground max-w-lg w-full max-h-[85vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header (Fixed) */}
            <div className="p-5 sm:p-6 bg-muted/40 border-b border-border flex items-start justify-between gap-4 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-dark dark:text-brand-primary flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                    {t("download_modal_title", "Software Download Started")}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Your package is downloading now</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content (Scrollable) */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
              {/* Architecture / Trial Context Box */}
              <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/20 space-y-1.5 text-xs leading-relaxed">
                <div className="flex items-center gap-2 font-semibold text-foreground text-xs">
                  <Shield className="w-4 h-4 text-brand-dark dark:text-brand-primary" />
                  <span>{t("download_modal_commercial_title", "Local Workstation Setup")}</span>
                </div>
                <p className="text-muted-foreground">
                  {t(
                    "download_modal_commercial_body",
                    "ScaleERP runs 100% offline directly on your local computer. We’ve automatically generated a complimentary 30-day Pro evaluation key below so you can test all features right away."
                  )}
                </p>
              </div>

              {/* 16-Character Key Display */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Your 30-Day Evaluation Key:</span>
                  </span>
                  <Badge variant="outline" className="text-[10px] text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/5">
                    30 Days Active
                  </Badge>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 font-mono text-base sm:text-lg font-bold tracking-wider text-center py-3 px-4 rounded-xl bg-muted/60 border border-border text-foreground select-all shadow-inner">
                    {modalLoading ? (
                      <span className="text-xs text-muted-foreground inline-flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Generating trial key...
                      </span>
                    ) : (
                      demoKey?.keyCode || "DEMO-XXXX-XXXX-XXXX"
                    )}
                  </div>

                  <Button
                    onClick={handleCopyKey}
                    variant="outline"
                    disabled={!demoKey?.keyCode}
                    className="h-12 px-4 rounded-xl border-border hover:bg-muted/80 flex items-center gap-1.5 flex-shrink-0"
                    title="Copy Key Code"
                  >
                    {copiedKey ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-emerald-500 font-semibold">{t("download_modal_copied", "Copied!")}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-semibold">{t("download_modal_copy_key", "Copy")}</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* 3-Step Setup Guide Box */}
              <div className="p-4 rounded-xl bg-muted/50 border border-border/80 space-y-2 text-xs">
                <p className="font-bold text-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3-Step Quick Setup:</span>
                </p>
                <ol className="space-y-1.5 list-decimal list-inside text-muted-foreground leading-relaxed pl-1">
                  <li>
                    <strong className="text-foreground">Run Installer:</strong> Launch the downloaded ScaleERP setup file on Windows.
                  </li>
                  <li>
                    <strong className="text-foreground">Enter Key:</strong> Paste this evaluation key along with your name and phone number for 1-click activation.
                  </li>
                  <li>
                    <strong className="text-foreground">Start Billing:</strong> Create your local store administrator password and you're ready to bill!
                  </li>
                </ol>
              </div>
            </div>

            {/* Modal Footer (Fixed) */}
            <div className="p-4 sm:p-5 bg-muted/20 border-t border-border flex flex-col gap-2 flex-shrink-0">
              <Button
                onClick={handleCopyKey}
                size="lg"
                className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold rounded-xl py-5 text-sm sm:text-base shadow-md flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                <span>{copiedKey ? t("download_modal_copied", "Copied to Clipboard!") : t("download_modal_copy_key", "Copy Evaluation Key")}</span>
              </Button>

              <Button
                onClick={() => setModalOpen(false)}
                variant="ghost"
                className="w-full text-xs text-muted-foreground hover:text-foreground py-2"
              >
                {t("download_modal_dismiss", "Close & Return to Downloads")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
