"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Key,
  Cpu,
  Download,
  Copy,
  Check,
  CheckCircle2,
  RefreshCw,
  User,
  Phone,
  Laptop,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAdminAuth } from "../admin-context";

function OfflineSignerForm() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const { adminSecret } = useAdminAuth();

  const [activationKey, setActivationKey] = useState("");
  const [deviceFingerprint, setDeviceFingerprint] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [hostname, setHostname] = useState("");

  const [signingLoading, setSigningLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [successData, setSuccessData] = useState<{
    edition: string;
    validUntil: string;
    licenseBlob: string;
    licenseId?: string;
  } | null>(null);

  // Pre-fill fields from query params if passed
  useEffect(() => {
    const keyParam = searchParams.get("key");
    const fpParam = searchParams.get("fp") || searchParams.get("fingerprint");
    const nameParam = searchParams.get("name");
    const phoneParam = searchParams.get("phone");
    const hostParam = searchParams.get("host") || searchParams.get("hostname");

    if (keyParam) setActivationKey(formatKey(keyParam));
    if (fpParam) setDeviceFingerprint(fpParam.trim().toUpperCase());
    if (nameParam) setCustomerName(nameParam);
    if (phoneParam) setCustomerPhone(phoneParam);
    if (hostParam) setHostname(hostParam);
  }, [searchParams]);

  const formatKey = (val: string) => {
    const raw = val.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    const parts = [];
    for (let i = 0; i < raw.length && i < 16; i += 4) {
      parts.push(raw.substring(i, i + 4));
    }
    return parts.join("-");
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivationKey(formatKey(e.target.value));
  };

  const handleSignLicense = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessData(null);

    const cleanKey = activationKey.trim().toUpperCase();
    const cleanFp = deviceFingerprint.trim().toUpperCase();

    if (!cleanKey || cleanKey.replace(/-/g, "").length !== 16) {
      setError("Please provide a valid 16-character ScaleERP activation key.");
      return;
    }

    if (!cleanFp || cleanFp.length !== 64 || !/^[0-9A-F]{64}$/.test(cleanFp)) {
      setError("Device fingerprint must be a 64-character hexadecimal SHA-256 string.");
      return;
    }

    setSigningLoading(true);
    try {
      const res = await fetch("/api/v1/licensing/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({
          activationKey: cleanKey,
          deviceFingerprint: cleanFp,
          customerName: customerName.trim() || undefined,
          phone: customerPhone.trim() || undefined,
          hostname: hostname.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessData({
          edition: data.edition || "Pro",
          validUntil: data.validUntil,
          licenseBlob: data.licenseBlob,
          licenseId: data.licenseId,
        });

        // Trigger automatic .lic download
        triggerFileDownload(data.licenseBlob, "scaleerp.lic");
      } else {
        setError(data.message || "Failed to sign offline license certificate.");
      }
    } catch {
      setError("Network error communicating with license authority.");
    } finally {
      setSigningLoading(false);
    }
  };

  const triggerFileDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyBlob = async () => {
    if (!successData?.licenseBlob) return;
    await navigator.clipboard.writeText(successData.licenseBlob);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
          <Cpu className="w-7 h-7 text-brand-dark dark:text-brand-primary" />
          <span>Offline License Signer (.lic)</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Cryptographically sign offline license tokens for air-gapped retail workstations without internet connectivity.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="hover:opacity-80">
            ✕
          </button>
        </div>
      )}

      {/* Main Signing Card */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm text-foreground">
        <form onSubmit={handleSignLicense} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 16-Digit Activation Key */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                <Key className="w-3.5 h-3.5 text-brand-dark dark:text-brand-primary" />
                <span>16-Digit Activation Key</span>
              </label>
              <input
                type="text"
                value={activationKey}
                onChange={handleKeyChange}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                maxLength={19}
                className="w-full bg-background border border-border text-foreground font-mono text-base tracking-wider p-3 rounded-xl focus:border-brand-primary outline-none transition uppercase select-all shadow-inner"
                required
              />
              <p className="text-[11px] text-muted-foreground">Unused commercial or trial license key issued in ScaleERP Admin.</p>
            </div>

            {/* Device Hardware Fingerprint */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-blue-500" />
                <span>Device Hardware Fingerprint (64-Hex)</span>
              </label>
              <input
                type="text"
                value={deviceFingerprint}
                onChange={(e) => setDeviceFingerprint(e.target.value.toUpperCase())}
                placeholder="Paste 64-character SHA-256 hardware hash from desktop app"
                maxLength={64}
                className="w-full bg-background border border-border text-foreground font-mono text-xs p-3 rounded-xl focus:border-brand-primary outline-none transition uppercase select-all shadow-inner"
                required
              />
              <p className="text-[11px] text-muted-foreground">Provided on the desktop computer screen under "Offline Activation".</p>
            </div>

            {/* Customer Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Customer / Store Name</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Kisan Agri Feed Mart"
                className="w-full bg-background border border-border text-foreground text-sm p-3 rounded-xl focus:border-brand-primary outline-none transition shadow-inner"
              />
            </div>

            {/* Customer Phone */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Contact Phone Number</span>
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-background border border-border text-foreground text-sm p-3 rounded-xl focus:border-brand-primary outline-none transition shadow-inner"
              />
            </div>

            {/* Workstation Hostname */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Machine Hostname / Counter Name (Optional)</span>
              </label>
              <input
                type="text"
                value={hostname}
                onChange={(e) => setHostname(e.target.value)}
                placeholder="e.g. COUNTER-01-GODOWN"
                className="w-full bg-background border border-border text-foreground text-sm p-3 rounded-xl focus:border-brand-primary outline-none transition shadow-inner"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={signingLoading}
              className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold rounded-xl py-6 text-sm sm:text-base shadow-md flex items-center justify-center gap-2"
            >
              {signingLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Signing Cryptographic Certificate...</span>
                </>
              ) : (
                <>
                  <FileCheck className="w-5 h-5" />
                  <span>Generate & Sign Offline License File (.lic)</span>
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Success Output State */}
        {successData && (
          <div className="mt-8 p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-base">License Certificate Successfully Signed!</h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400/90">Bound to device fingerprint: {deviceFingerprint.substring(0, 16)}...</p>
                </div>
              </div>
              <Badge variant="outline" className="border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-xs">
                {successData.edition} Edition
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-card border border-border rounded-lg space-y-1">
                <span className="text-muted-foreground">Valid Until:</span>
                <div className="font-semibold text-foreground">{new Date(successData.validUntil).toLocaleDateString()}</div>
              </div>
              <div className="p-3 bg-card border border-border rounded-lg space-y-1">
                <span className="text-muted-foreground">Package Type:</span>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400">Asymmetric Signed Token (Base64)</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => triggerFileDownload(successData.licenseBlob, "scaleerp.lic")}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs h-11 flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download scaleerp.lic Again</span>
              </Button>

              <Button
                onClick={handleCopyBlob}
                variant="outline"
                className="flex-1 border-border hover:bg-muted text-foreground text-xs h-11 flex items-center justify-center gap-2"
              >
                {copySuccess ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copySuccess ? "Copied to Clipboard!" : "Copy Raw License String"}</span>
              </Button>
            </div>

            {/* Dispatch Instructions */}
            <div className="p-4 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground space-y-1.5 leading-relaxed">
              <div className="font-semibold text-foreground">Delivery Instructions for Field Workstation:</div>
              <p>1. Send the downloaded <code className="text-emerald-600 dark:text-emerald-400 font-semibold">scaleerp.lic</code> file to the client counter via USB drive, WhatsApp, or local share.</p>
              <p>2. In the desktop application, click <strong>"Import License (.lic)"</strong> and select this file.</p>
              <p>3. ScaleERP verifies the hardware binding offline and immediately unlocks the full workstation.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminActivatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground text-xs">Loading Signer...</div>}>
      <OfflineSignerForm />
    </Suspense>
  );
}
