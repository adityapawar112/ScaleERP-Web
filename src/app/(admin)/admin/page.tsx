"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Key,
  Clock,
  Calendar,
  AlertTriangle,
  RotateCcw,
  PlusCircle,
  ExternalLink,
  Laptop,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  RefreshCw,
  Phone,
  User,
  Cpu,
  ArrowRight,
  Sliders,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "./admin-context";

interface CustomerInfo {
  name: string;
  phone: string;
}

interface LicenseRecord {
  id: string;
  key_code: string;
  edition: string;
  valid_until: string;
  maintenance_until: string;
  bound_fingerprint: string | null;
  hostname: string | null;
  last_sync_at: string | null;
  license_blob: string | null;
  is_revoked: boolean;
  customers?: CustomerInfo | null;
  created_at: string;
}

export default function AdminOverviewPage() {
  const { t } = useTranslation();
  const { adminSecret } = useAdminAuth();
  const [keys, setKeys] = useState<LicenseRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
        setError(data.message || "Failed to retrieve license telemetry.");
      }
    } catch {
      setError("Network error fetching license telemetry.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminSecret) {
      fetchKeys(adminSecret);
    }
  }, [adminSecret]);

  // Quick Action: Extend Maintenance by 90 Days
  const handleExtendMaintenance = async (key: LicenseRecord) => {
    if (!confirm(`Add 90 Days maintenance to key ${key.key_code} (${key.customers?.name || "Retailer"})?`)) return;
    setActionLoading(`maint-${key.key_code}`);
    try {
      const baseDate = new Date(key.maintenance_until);
      const now = new Date();
      const targetDate = baseDate.getTime() < now.getTime() ? now : baseDate;
      targetDate.setDate(targetDate.getDate() + 90);

      const res = await fetch("/api/v1/admin/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({
          action: "update-maintenance",
          keyCode: key.key_code,
          newMaintenanceUntil: targetDate.toISOString(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage(`Extended maintenance for ${key.key_code} until ${targetDate.toLocaleDateString()}`);
        setTimeout(() => setSuccessMessage(null), 4000);
        fetchKeys(adminSecret);
      } else {
        setError(data.message || "Failed to extend maintenance.");
      }
    } catch {
      setError("Network error extending maintenance.");
    } finally {
      setActionLoading(null);
    }
  };

  // Quick Action: Renew Validity by 1 Year
  const handleExtendValidity = async (key: LicenseRecord) => {
    if (!confirm(`Renew validity by 1 Year for key ${key.key_code} (${key.customers?.name || "Retailer"})?`)) return;
    setActionLoading(`valid-${key.key_code}`);
    try {
      const baseDate = new Date(key.valid_until);
      const now = new Date();
      const targetDate = baseDate.getTime() < now.getTime() ? now : baseDate;
      targetDate.setFullYear(targetDate.getFullYear() + 1);

      const res = await fetch("/api/v1/admin/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({
          action: "renew-validity",
          keyCode: key.key_code,
          newValidUntil: targetDate.toISOString(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage(`Renewed license ${key.key_code} until ${targetDate.toLocaleDateString()}`);
        setTimeout(() => setSuccessMessage(null), 4000);
        fetchKeys(adminSecret);
      } else {
        setError(data.message || "Failed to renew license.");
      }
    } catch {
      setError("Network error renewing license.");
    } finally {
      setActionLoading(null);
    }
  };

  const now = Date.now();
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

  // 1. Licenses with Maintenance Expirations (Soft Lock / View-Only triggers)
  const maintenanceExpiringKeys = useMemo(() => {
    return keys
      .filter((k) => !k.is_revoked)
      .filter((k) => {
        const mTime = new Date(k.maintenance_until).getTime();
        return mTime <= now + THIRTY_DAYS_MS;
      })
      .sort((a, b) => new Date(a.maintenance_until).getTime() - new Date(b.maintenance_until).getTime());
  }, [keys, now, THIRTY_DAYS_MS]);

  // 2. Licenses with Renewal Expirations (Hard Lock / Lockout triggers)
  const renewalExpiringKeys = useMemo(() => {
    return keys
      .filter((k) => !k.is_revoked)
      .filter((k) => {
        const vTime = new Date(k.valid_until).getTime();
        return vTime <= now + THIRTY_DAYS_MS;
      })
      .sort((a, b) => new Date(a.valid_until).getTime() - new Date(b.valid_until).getTime());
  }, [keys, now, THIRTY_DAYS_MS]);

  // Telemetry Aggregates
  const totalIssued = keys.length;
  const activeBound = keys.filter((k) => !k.is_revoked && k.bound_fingerprint).length;
  const totalMaintAlerts = keys.filter((k) => !k.is_revoked && new Date(k.maintenance_until).getTime() <= now + THIRTY_DAYS_MS).length;
  const totalRenewalAlerts = keys.filter((k) => !k.is_revoked && new Date(k.valid_until).getTime() <= now + THIRTY_DAYS_MS).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Notifications */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="font-bold ml-4 hover:opacity-80">
            ×
          </button>
        </div>
      )}

      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-center justify-between">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)} className="font-bold ml-4 hover:opacity-80">
            ×
          </button>
        </div>
      )}

      {/* 1. Global License Health Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-xs font-medium">
            <span>Total Issued Licenses</span>
            <Key className="w-4 h-4 text-brand-dark dark:text-brand-primary" />
          </div>
          <div className="text-3xl font-heading font-extrabold text-foreground mt-2">{totalIssued}</div>
          <p className="text-[11px] text-muted-foreground mt-1">Across all retail counter installations</p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-xs font-medium">
            <span>Active Bound Workstations</span>
            <Laptop className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-3xl font-heading font-extrabold text-emerald-600 dark:text-emerald-400 mt-2">{activeBound}</div>
          <p className="text-[11px] text-muted-foreground mt-1">Locked to physical hardware CPU/motherboard</p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 text-xs font-medium">
            <span>Maintenance Alerts (Soft-Lock)</span>
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="text-3xl font-heading font-extrabold text-amber-600 dark:text-amber-400 mt-2">{totalMaintAlerts}</div>
          <p className="text-[11px] text-muted-foreground mt-1">Updates paused or view-only mode</p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between text-red-600 dark:text-red-400 text-xs font-medium">
            <span>Renewal Alerts (Hard-Lock)</span>
            <Clock className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
          <div className="text-3xl font-heading font-extrabold text-red-600 dark:text-red-400 mt-2">{totalRenewalAlerts}</div>
          <p className="text-[11px] text-muted-foreground mt-1">Term ending or in 7-day grace</p>
        </div>
      </div>

      {/* 2. Admin Action Shortcuts */}
      <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-brand-primary/10 text-brand-dark dark:text-brand-primary border border-brand-primary/20">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground">Administrator Key Operations</h2>
            <p className="text-xs text-muted-foreground">Generate fresh 16-digit commercial keys or sign offline certificates for field godowns.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchKeys(adminSecret)}
            disabled={loading}
            className="border-border text-foreground hover:bg-muted text-xs flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Telemetry</span>
          </Button>
          <Link href="/admin/keys" className="flex-1 sm:flex-none">
            <Button size="sm" className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold text-xs flex items-center gap-1.5 shadow-sm">
              <PlusCircle className="w-3.5 h-3.5" />
              Generate Keys
            </Button>
          </Link>
          <Link href="/admin/activate" className="flex-1 sm:flex-none">
            <Button size="sm" variant="outline" className="w-full border-border bg-card text-foreground hover:bg-muted font-semibold text-xs flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-brand-dark dark:text-brand-primary" />
              Offline Signer
            </Button>
          </Link>
        </div>
      </div>

      {/* 3. Dashboard A: Maintenance Expiration Tracking (Soft-Lock Warning) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-heading font-bold text-foreground">Maintenance Tracking Dashboard</h2>
              <Badge variant="outline" className="text-xs border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10">
                Soft-Lock Enforcer
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Tracks active maintenance support. When maintenance expires, the desktop workstation enters <strong>Soft Lock</strong> (view-only mode; billing and database writes are disabled until renewed).
            </p>
          </div>
          <span className="text-xs font-mono text-muted-foreground self-start sm:self-auto">
            {maintenanceExpiringKeys.length} license(s) need attention
          </span>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          {maintenanceExpiringKeys.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-500/40 mx-auto mb-2" />
              All active client workstation licenses have healthy maintenance coverage (&gt;30 days).
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/50 text-muted-foreground font-semibold">
                    <th className="py-3 px-4">License Key</th>
                    <th className="py-3 px-4">Customer / Store</th>
                    <th className="py-3 px-4">Workstation</th>
                    <th className="py-3 px-4">Maintenance Expiry</th>
                    <th className="py-3 px-4">Desktop Status</th>
                    <th className="py-3 px-4 text-right">Quick Extend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {maintenanceExpiringKeys.map((k) => {
                    const mDate = new Date(k.maintenance_until);
                    const diffDays = Math.ceil((mDate.getTime() - now) / (1000 * 60 * 60 * 24));
                    const isExpired = diffDays <= 0;
                    const isCritical = diffDays > 0 && diffDays <= 7;

                    return (
                      <tr key={k.id} className="hover:bg-muted/40 transition">
                        <td className="py-3.5 px-4 font-mono font-bold text-foreground select-all">
                          {k.key_code}
                          <span className="ml-2 text-[10px] text-muted-foreground uppercase">{k.edition}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-foreground">{k.customers?.name || "Unassigned"}</div>
                          {k.customers?.phone && (
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                              <Phone className="w-3 h-3" />
                              <span>{k.customers.phone}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          {k.bound_fingerprint ? (
                            <div className="space-y-0.5">
                              <div className="text-foreground font-mono text-[11px]">{k.hostname || "Workstation Bound"}</div>
                              <div className="text-muted-foreground font-mono text-[10px] truncate max-w-[130px]" title={k.bound_fingerprint}>
                                {k.bound_fingerprint.substring(0, 16)}...
                              </div>
                            </div>
                          ) : (
                            <span className="text-muted-foreground italic">Unbound (Universal)</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className={`font-semibold ${isExpired ? "text-red-600 dark:text-red-400" : isCritical ? "text-amber-600 dark:text-amber-400" : "text-foreground"}`}>
                            {mDate.toLocaleDateString()}
                          </div>
                          <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                            {isExpired ? `${Math.abs(diffDays)} days ago` : `in ${diffDays} days`}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          {isExpired ? (
                            <Badge variant="outline" className="border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/10 text-[10px]">
                              Expired (Soft Lock)
                            </Badge>
                          ) : isCritical ? (
                            <Badge variant="outline" className="border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10 text-[10px]">
                              Critical ({diffDays}d left)
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-yellow-500/30 text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 text-[10px]">
                              Expiring Soon
                            </Badge>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleExtendMaintenance(k)}
                            disabled={actionLoading === `maint-${k.key_code}`}
                            className="text-foreground border-border hover:bg-muted font-semibold text-[11px] h-7 px-3"
                          >
                            {actionLoading === `maint-${k.key_code}` ? "Extending..." : "+90 Days"}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* 4. Dashboard B: Term Expiration & Renewal Tracking (Hard-Lock Warning) */}
      <section className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-heading font-bold text-foreground">License Renewal Tracking Dashboard</h2>
              <Badge variant="outline" className="text-xs border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/10">
                Hard-Lock Enforcer
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Tracks commercial annual validity (<code className="font-mono text-foreground font-semibold">valid_until</code>). When expired for more than 7 days, the desktop app enters <strong>Hard Lock</strong> (complete application lockout).
            </p>
          </div>
          <span className="text-xs font-mono text-muted-foreground self-start sm:self-auto">
            {renewalExpiringKeys.length} license(s) expiring/expired
          </span>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          {renewalExpiringKeys.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-500/40 mx-auto mb-2" />
              All active store licenses have valid terms with no imminent hard locks.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/50 text-muted-foreground font-semibold">
                    <th className="py-3 px-4">License Key</th>
                    <th className="py-3 px-4">Customer / Store</th>
                    <th className="py-3 px-4">Workstation</th>
                    <th className="py-3 px-4">Valid Until</th>
                    <th className="py-3 px-4">Enforcement State</th>
                    <th className="py-3 px-4 text-right">Quick Renew</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {renewalExpiringKeys.map((k) => {
                    const vDate = new Date(k.valid_until);
                    const diffDays = Math.ceil((vDate.getTime() - now) / (1000 * 60 * 60 * 24));
                    const isHardLocked = diffDays < -7;
                    const isGracePeriod = diffDays <= 0 && diffDays >= -7;

                    return (
                      <tr key={k.id} className="hover:bg-muted/40 transition">
                        <td className="py-3.5 px-4 font-mono font-bold text-foreground select-all">
                          {k.key_code}
                          <span className="ml-2 text-[10px] text-muted-foreground uppercase">{k.edition}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-foreground">{k.customers?.name || "Unassigned"}</div>
                          {k.customers?.phone && (
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                              <Phone className="w-3 h-3" />
                              <span>{k.customers.phone}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          {k.bound_fingerprint ? (
                            <div className="space-y-0.5">
                              <div className="text-foreground font-mono text-[11px]">{k.hostname || "Workstation Bound"}</div>
                              <div className="text-muted-foreground font-mono text-[10px] truncate max-w-[130px]" title={k.bound_fingerprint}>
                                {k.bound_fingerprint.substring(0, 16)}...
                              </div>
                            </div>
                          ) : (
                            <span className="text-muted-foreground italic">Unbound (Universal)</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className={`font-semibold ${isHardLocked ? "text-red-600 font-bold" : isGracePeriod ? "text-red-500 dark:text-red-400" : "text-amber-600 dark:text-amber-400"}`}>
                            {vDate.toLocaleDateString()}
                          </div>
                          <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                            {diffDays < 0 ? `expired ${Math.abs(diffDays)}d ago` : `in ${diffDays} days`}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          {isHardLocked ? (
                            <Badge variant="destructive" className="bg-red-600 text-white font-bold text-[10px]">
                              HARD LOCKED
                            </Badge>
                          ) : isGracePeriod ? (
                            <Badge variant="outline" className="border-red-500/40 text-red-600 dark:text-red-400 bg-red-500/10 font-bold text-[10px]">
                              7-Day Grace ({Math.abs(diffDays)}/7d)
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10 text-[10px]">
                              Renew Soon ({diffDays}d)
                            </Badge>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Button
                            size="sm"
                            onClick={() => handleExtendValidity(k)}
                            disabled={actionLoading === `valid-${k.key_code}`}
                            className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold text-[11px] h-7 px-3 shadow-sm"
                          >
                            {actionLoading === `valid-${k.key_code}` ? "Renewing..." : "+1 Year"}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
