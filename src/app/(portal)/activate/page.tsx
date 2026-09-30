"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Key, Laptop, ShieldAlert, CheckCircle2, Download, FileText, HelpCircle, ShieldCheck, Copy, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

function ActivationForm() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [activationKey, setActivationKey] = useState("");
  const [deviceFingerprint, setDeviceFingerprint] = useState("");
  const [isFingerprintLocked, setIsFingerprintLocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    edition: string;
    validUntil: string;
    licenseBlob: string;
  } | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    if (successData?.licenseBlob) {
      await navigator.clipboard.writeText(successData.licenseBlob);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  // 1. Prefill Fingerprint from URL query ?fp=hash
  useEffect(() => {
    const fpParam = searchParams.get("fp");
    if (fpParam) {
      setDeviceFingerprint(fpParam.trim());
      setIsFingerprintLocked(true);
    }
  }, [searchParams]);

  // 2. Format key code as XXXX-XXXX-XXXX-XXXX while typing
  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const clean = val.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 16);
    const parts = [];
    for (let i = 0; i < clean.length; i += 4) {
      parts.push(clean.slice(i, i + 4));
    }
    setActivationKey(parts.join("-"));
  };

  // 3. Trigger File Download of scaleerp.lic
  const triggerDownload = (blobContent: string) => {
    const blob = new Blob([blobContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "scaleerp.lic";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessData(null);

    if (!activationKey || activationKey.length < 19) {
      setError("Please enter a valid 16-digit activation key.");
      setLoading(false);
      return;
    }

    if (!deviceFingerprint) {
      setError("Device fingerprint is required.");
      setLoading(false);
      return;
    }

    const fpRegex = /^[a-fA-F0-9]{64}$/;
    if (!fpRegex.test(deviceFingerprint)) {
      setError("Invalid device fingerprint. It must be exactly 64 hexadecimal characters.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/v1/licensing/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          activationKey,
          deviceFingerprint,
          hostname: "Air-Gapped Workstation",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Activation failed. Please check your credentials.");
      } else {
        setSuccessData({
          edition: data.edition,
          validUntil: new Date(data.validUntil).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          licenseBlob: data.licenseBlob,
        });

        // Trigger automatic license file download
        triggerDownload(data.licenseBlob);
      }
    } catch (err) {
      console.error(err);
      setError("A connection error occurred. Please verify your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 font-public">
      <div className="text-center space-y-3">
        <h1 className="font-heading font-bebas text-5xl md:text-6xl tracking-widest text-[#004B72] dark:text-cyan-400 uppercase drop-shadow-md">
          {t('Offline Licensing Authority')}
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-medium">
          {t('Generate cryptographic license certificates for air-gapped ScaleERP retail workstations.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Form */}
        <div className="md:col-span-7 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#004B72]/10 rounded-full blur-3xl group-hover:bg-[#004B72]/15 transition-all"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="font-heading text-lg font-bold tracking-tight text-white border-b border-zinc-800/80 pb-3 flex items-center gap-2">
              <ShieldCheck className="size-5 text-cyan-400" />
              <span>{t('License Registration')}</span>
            </h2>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs font-semibold flex items-start gap-2.5 animate-shake">
                <ShieldAlert className="size-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Input 1: Key */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Key className="size-3.5 text-zinc-500" />
                <span>{t('16-Digit Activation Key')}</span>
              </label>
              <input
                type="text"
                value={activationKey}
                onChange={handleKeyChange}
                placeholder="SERP-XXXX-XXXX-XXXX"
                disabled={loading || !!successData}
                className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-950/30 rounded-xl px-4 py-3.5 text-white font-mono text-center tracking-widest text-lg outline-none transition disabled:opacity-50 uppercase placeholder:text-zinc-700"
                maxLength={19}
                required
              />
            </div>

            {/* Input 2: Fingerprint */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Laptop className="size-3.5 text-zinc-500" />
                <span>{t('Device Hardware Fingerprint')}</span>
              </label>
              <input
                type="text"
                value={deviceFingerprint}
                onChange={(e) => setDeviceFingerprint(e.target.value.trim())}
                placeholder="Paste the hash generated by the desktop app"
                disabled={loading || isFingerprintLocked || !!successData}
                className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-950/30 rounded-xl px-4 py-3.5 text-white font-mono text-xs text-center outline-none transition disabled:opacity-50 placeholder:text-zinc-700"
                required
              />
              {isFingerprintLocked && !successData && (
                <p className="text-[10px] text-cyan-400 font-semibold italic text-right">
                  * Hardware fingerprint bound automatically from scanned QR.
                </p>
              )}
            </div>

            {!successData ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#004B72] hover:bg-[#004B72]/90 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-[#004B72]/20 flex items-center justify-center gap-2 outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span className="inline-block size-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>{t('Generate Cryptographic License')}</span>
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-xs font-semibold flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-bold text-sm">{t('License Successfully Signed!')}</p>
                    <p className="text-zinc-400 font-medium mt-0.5">{t('Edition: ')}{successData.edition} • Expiry: {successData.validUntil}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => triggerDownload(successData.licenseBlob)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 outline-none cursor-pointer"
                >
                  <Download className="size-5" />
                  <span>{t('Download scaleerp.lic Again')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full bg-zinc-800/80 hover:bg-zinc-700 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 outline-none cursor-pointer border border-zinc-700/50"
                >
                  {copySuccess ? <Check className="size-5 text-emerald-400" /> : <Copy className="size-5 text-zinc-400" />}
                  <span className={copySuccess ? "text-emerald-400" : ""}>{copySuccess ? "Copied to Clipboard!" : "Copy License Key"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSuccessData(null);
                    setActivationKey("");
                    if (!isFingerprintLocked) {
                      setDeviceFingerprint("");
                    }
                  }}
                  className="w-full border border-zinc-800 text-zinc-400 hover:bg-zinc-800/30 font-semibold py-3 px-6 rounded-xl transition text-xs text-center cursor-pointer"
                >
                  {t('Register Another Device')}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Instructions */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-lg p-6 flex flex-col gap-5 flex-grow">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 border-b border-zinc-800/80 pb-3">
              <HelpCircle className="size-4 text-zinc-500" />
              <span>{t('Air-Gapped Deployment Guide')}</span>
            </h2>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-3">
                <span className="flex items-center justify-center size-5 bg-[#004B72] text-white text-xs font-bold rounded-full mt-0.5 shrink-0">
                  1
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">{t('Generate License Certificate')}</p>
                  <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
                    {t('Fill in the details on the left form and click ')}<strong>{t('Generate')}</strong>{t('. The browser will automatically trigger a download of your signed ')}<strong>`scaleerp.lic`</strong>{t(' certificate.')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3">
                <span className="flex items-center justify-center size-5 bg-[#004B72] text-white text-xs font-bold rounded-full mt-0.5 shrink-0">
                  2
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">{t('Transfer via Secure Drive')}</p>
                  <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
                    {t('Copy the downloaded license file onto a clean USB Flash Drive or connect your mobile device via Bluetooth to transfer the file to your secure environment.')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3">
                <span className="flex items-center justify-center size-5 bg-[#004B72] text-white text-xs font-bold rounded-full mt-0.5 shrink-0">
                  3
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">{t('Connect to Offline Workstation')}</p>
                  <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
                    {t('Plug the secure USB drive into your offline store computer running the ScaleERP desktop dashboard.')}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-3">
                <span className="flex items-center justify-center size-5 bg-[#004B72] text-white text-xs font-bold rounded-full mt-0.5 shrink-0">
                  4
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">{t('Activate Software')}</p>
                  <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
                    {t("Open the desktop application, click the ")}<strong>{t("'Import License File'")}</strong>{t(" button, select the ")}<strong>`scaleerp.lic`</strong>{t(" file from your drive, and instantly unlock your software.")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-950/10 border border-cyan-900/20 rounded-lg p-4 flex gap-3 items-center">
            <FileText className="size-5 text-cyan-400 shrink-0" />
            <div className="text-[10px] text-zinc-400 font-medium leading-relaxed">
              <span className="text-white font-bold">{t('Cryptographic Note:')}</span> The activation file uses standard 2048-bit RSA signatures. Do not modify or rename the contents of the license file as it will trigger an validation error on your offline machine.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ActivatePage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute top-1/4 left-1/4 size-80 bg-[#004B72]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 size-80 bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Suspense fallback={
        <div className="flex items-center justify-center">
          <span className="inline-block size-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></span>
        </div>
      }>
        <ActivationForm />
      </Suspense>
    </main>
  );
}
