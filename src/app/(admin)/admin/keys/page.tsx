"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Key,
  RotateCcw,
  Database,
  Server,
  CalendarPlus,
  Ban,
  Clock,
  Copy,
  User,
  RefreshCw,
  Cpu,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAdminAuth } from "../admin-context";

export default function AdminKeysPage() {
  const { t } = useTranslation();
  const { adminSecret } = useAdminAuth();

  const [keys, setKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [durationMonths, setDurationMonths] = useState("12");
  const [edition, setEdition] = useState("Pro");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const fetchKeys = async (secret: string) => {
    if (!secret) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        headers: { "x-admin-secret": secret },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setKeys(data.keys || []);
      } else {
        setError(data.message || "Authentication failed.");
      }
    } catch {
      setError("Network error fetching keys.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminSecret) {
      fetchKeys(adminSecret);
    }
  }, [adminSecret]);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({ durationMonths, edition, customerName, customerPhone }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchKeys(adminSecret);
        setCustomerName("");
        setCustomerPhone("");
      } else {
        setError(data.message || "Failed to generate key.");
      }
    } catch {
      setError("Network error generating key.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (keyCode: string) => {
    if (!confirm("Are you sure you want to reset the hardware binding for this key? The user will need to re-activate on their new machine.")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/v1/admin/keys/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({ keyCode }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchKeys(adminSecret);
      } else {
        alert(data.message || "Reset failed.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async (keyCode: string) => {
    if (!confirm("Revoke this key? The machine will be locked out immediately on next sync or startup.")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({ action: "revoke", keyCode }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchKeys(adminSecret);
      } else {
        alert(data.message || "Revoke failed.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyBlob = (blob: string) => {
    navigator.clipboard.writeText(blob);
    alert("License file content copied to clipboard!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Top Banner / Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground tracking-tight">Key Generator & Registry</h1>
          <p className="text-xs text-muted-foreground mt-1">Issue new retail license keys, manage device bindings, and view raw signed blobs.</p>
        </div>
        <button
          onClick={() => fetchKeys(adminSecret)}
          disabled={loading}
          className="border border-border bg-card text-foreground hover:bg-muted text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 self-start sm:self-auto transition shadow-sm"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          <span>Refresh List</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="font-bold hover:opacity-80">
            ×
          </button>
        </div>
      )}

      {/* 1. Generate Key Box */}
      <div className="bg-card border border-border p-6 rounded-xl shadow-sm text-foreground">
        <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <Key className="w-4 h-4 text-brand-dark dark:text-brand-primary" />
          <span>{t("Issue New License Key")}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="text-xs text-muted-foreground block mb-1.5 font-medium">{t("Edition")}</label>
            <select
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
              className="w-full bg-background border border-border text-foreground p-2.5 rounded-lg text-xs outline-none focus:border-brand-primary transition"
            >
              <option value="Pro">Pro (Full Features)</option>
              <option value="Standard">Standard</option>
              <option value="Enterprise">Enterprise Multi-Counter</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-muted-foreground block mb-1.5 font-medium">{t("Duration")}</label>
            <select
              value={durationMonths}
              onChange={(e) => setDurationMonths(e.target.value)}
              className="w-full bg-background border border-border text-foreground p-2.5 rounded-lg text-xs outline-none focus:border-brand-primary transition"
            >
              <option value="1">1 Month (Trial)</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">1 Year (Standard)</option>
              <option value="24">2 Years</option>
              <option value="36">3 Years</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-muted-foreground block mb-1.5 font-medium">{t("Customer / Store Name")}</label>
            <input
              type="text"
              placeholder="e.g. Kisan Agri Mart"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-background border border-border text-foreground p-2.5 rounded-lg text-xs outline-none focus:border-brand-primary transition"
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground block mb-1.5 font-medium">{t("Phone Number")}</label>
            <input
              type="text"
              placeholder="e.g. +91 98765 43210"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full bg-background border border-border text-foreground p-2.5 rounded-lg text-xs outline-none focus:border-brand-primary transition"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-brand-primary text-brand-dark p-2.5 rounded-lg text-xs font-bold hover:bg-brand-primary/90 disabled:opacity-50 transition shadow-sm h-[38px] flex items-center justify-center gap-1.5"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>{loading ? t("Creating...") : t("Create Key")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Key Registry Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Database className="w-4 h-4 text-muted-foreground" />
            <span>{t("Active License Keys")} ({keys.length})</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-muted-foreground font-semibold">
                <th className="p-3.5">{t("Activation Key")}</th>
                <th className="p-3.5">{t("Customer")}</th>
                <th className="p-3.5">{t("Workstation Binding")}</th>
                <th className="p-3.5">{t("Validity & Sync")}</th>
                <th className="p-3.5 text-right">{t("Actions")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {keys.map((k) => (
                <tr key={k.id} className="hover:bg-muted/40 transition">
                  <td className="p-3.5 font-mono text-foreground select-all">
                    <div className="flex items-center gap-2">
                      <span className="font-bold tracking-wider">{k.key_code}</span>
                      <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground uppercase border border-border">
                        {k.edition}
                      </span>
                    </div>
                    {k.is_revoked && (
                      <span className="text-[10px] text-red-600 dark:text-red-400 font-semibold block mt-1">REVOKED / BLOCKED</span>
                    )}
                  </td>

                  <td className="p-3.5">
                    {k.customers ? (
                      <div>
                        <div className="font-semibold text-foreground">{k.customers.name}</div>
                        <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3 text-muted-foreground" />
                          <span>{k.customers.phone}</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground italic">{t("No customer linked")}</span>
                    )}
                  </td>

                  <td className="p-3.5 font-mono">
                    {k.bound_fingerprint ? (
                      <div className="space-y-0.5">
                        <div className="text-foreground flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-sans font-medium">{k.hostname || "Registered Machine"}</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate max-w-[150px]" title={k.bound_fingerprint}>
                          {k.bound_fingerprint.substring(0, 16)}...
                        </div>
                      </div>
                    ) : (
                      <span className="text-amber-700 dark:text-yellow-400 text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {t("Unbound (Ready for first device)")}
                      </span>
                    )}
                  </td>

                  <td className="p-3.5">
                    <div className="text-foreground font-semibold">{new Date(k.valid_until).toLocaleDateString()}</div>
                    <div className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>Sync: {k.last_sync_at ? new Date(k.last_sync_at).toLocaleDateString() : t("Never")}</span>
                    </div>
                  </td>

                  <td className="p-3.5 text-right space-x-1.5">
                    {k.license_blob && (
                      <button
                        onClick={() => handleCopyBlob(k.license_blob)}
                        title="Copy raw cryptographic signed license blob"
                        className="p-1.5 bg-muted hover:bg-muted/80 text-foreground rounded transition border border-border"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => handleReset(k.key_code)}
                      disabled={loading || !k.bound_fingerprint}
                      title="Reset Hardware Binding (Allow user to transfer to new PC)"
                      className="p-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded transition border border-amber-500/20 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    {!k.is_revoked && (
                      <button
                        onClick={() => handleRevoke(k.key_code)}
                        disabled={loading}
                        title="Revoke / Cancel License immediately"
                        className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded transition border border-red-500/20 disabled:opacity-30"
                      >
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {keys.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-muted-foreground">
                    {t("No license keys found. Generate one above to get started.")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
