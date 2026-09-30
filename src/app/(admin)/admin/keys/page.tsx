"use client";

import React, { useState, useEffect } from "react";
import { Key, RotateCcw, ShieldAlert, ShieldCheck, Database, Server, CalendarPlus, Ban, Clock, Copy, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AdminKeysPage() {
  const { t } = useTranslation();
  const [adminSecret, setAdminSecret] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [keys, setKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [durationMonths, setDurationMonths] = useState("12");
  const [edition, setEdition] = useState("Pro");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const fetchKeys = async (secret: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        headers: { "x-admin-secret": secret }
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setKeys(data.keys);
        setIsAuthenticated(true);
        setAdminSecret(secret);
      } else {
        setError(data.message || "Authentication failed.");
        setIsAuthenticated(false);
      }
    } catch (err) {
      setError("Network error fetching keys.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchKeys(adminSecret);
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret
        },
        body: JSON.stringify({ durationMonths, edition, customerName, customerPhone })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchKeys(adminSecret); // Refresh the list
        setCustomerName("");
        setCustomerPhone("");
      } else {
        setError(data.message || "Failed to generate key.");
      }
    } catch (err) {
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
          "x-admin-secret": adminSecret
        },
        body: JSON.stringify({ keyCode })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchKeys(adminSecret); // Refresh the list
      } else {
        setError(data.message || "Failed to reset key.");
      }
    } catch (err) {
      setError("Network error resetting key.");
    } finally {
      setLoading(false);
    }
  };

  const handleExtend = async (key: any) => {
    if (!confirm("Add 1 Year to this license expiration? (The desktop app will automatically sync this on next heartbeat).")) return;
    setLoading(true);
    try {
      const newValidUntil = new Date(key.valid_until);
      newValidUntil.setFullYear(newValidUntil.getFullYear() + 1);
      
      const newMaintenanceUntil = new Date(key.maintenance_until);
      newMaintenanceUntil.setFullYear(newMaintenanceUntil.getFullYear() + 1);

      const res = await fetch("/api/v1/admin/keys", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-secret": adminSecret },
        body: JSON.stringify({ 
          keyCode: key.key_code, 
          validUntil: newValidUntil.toISOString(), 
          maintenanceUntil: newMaintenanceUntil.toISOString() 
        })
      });
      if (res.ok) fetchKeys(adminSecret);
      else setError("Failed to extend license.");
    } catch (err) {
      setError("Network error extending license.");
    } finally {
      setLoading(false);
    }
  };

  const handleExtendMaintenance = async (key: any) => {
    if (!confirm("Add 90 Days to the maintenance/updates timer?")) return;
    setLoading(true);
    try {
      const newMaintenanceUntil = new Date(key.maintenance_until);
      newMaintenanceUntil.setDate(newMaintenanceUntil.getDate() + 90);

      const res = await fetch("/api/v1/admin/keys", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-secret": adminSecret },
        body: JSON.stringify({ 
          keyCode: key.key_code, 
          maintenanceUntil: newMaintenanceUntil.toISOString() 
        })
      });
      if (res.ok) fetchKeys(adminSecret);
      else setError("Failed to extend maintenance.");
    } catch (err) {
      setError("Network error extending maintenance.");
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async (key: any) => {
    const action = key.is_revoked ? "Un-revoke" : "Revoke";
    if (!confirm(`Are you sure you want to ${action} this key?`)) return;
    setLoading(true);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-secret": adminSecret },
        body: JSON.stringify({ keyCode: key.key_code, isRevoked: !key.is_revoked })
      });
      if (res.ok) fetchKeys(adminSecret);
      else setError("Failed to update revocation status.");
    } catch (err) {
      setError("Network error updating status.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyBlob = (blob: string) => {
    navigator.clipboard.writeText(blob);
    alert("License file content copied to clipboard!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg w-full max-w-md space-y-6 shadow-2xl">
          <div className="flex justify-center mb-2">
            <div className="p-4 bg-brand-primary/20 rounded-full">
              <ShieldCheck className="size-8 text-brand-primary" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-heading text-xl font-bold text-white tracking-wide">{t('Developer Portal')}</h1>
            <p className="text-sm text-zinc-400 mt-1">{t('Authenticate to manage license keys.')}</p>
          </div>
          {error && <div className="text-xs text-red-400 bg-red-400/10 p-3 rounded border border-red-400/20">{error}</div>}
          <input
            type="password"
            value={adminSecret}
            onChange={e => setAdminSecret(e.target.value)}
            placeholder="Enter ADMIN_SECRET"
            className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-brand-primary outline-none transition"
            required
          />
          <button type="submit" disabled={loading} className="w-full bg-brand-primary text-brand-dark p-3 rounded-lg font-bold hover:bg-brand-primary/90 disabled:opacity-50">
            {loading ? "Authenticating..." : "Unlock Dashboard"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-6 md:p-12 text-zinc-300 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="font-heading text-3xl font-bold text-white flex items-center gap-3">
              <Database className="size-6 text-brand-primary" />
              License Keys Management
            </h1>
            <p className="text-zinc-500 mt-1">{t('Generate, monitor, and reset 16-digit activation keys for ScaleERP.')}</p>
          </div>
          
          <div className="flex flex-col gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex flex-col flex-1 w-full">
                <label className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{t('Customer Name')}</label>
                <input type="text" value={customerName} onChange={e=>setCustomerName(e.target.value)} placeholder="e.g. John Doe" className="bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-white outline-none focus:border-cyan-500" />
              </div>
              <div className="flex flex-col flex-1 w-full">
                <label className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{t('Phone Number')}</label>
                <input type="text" value={customerPhone} onChange={e=>setCustomerPhone(e.target.value)} placeholder="e.g. 9876543210" className="bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-white outline-none focus:border-cyan-500" />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{t('Edition')}</label>
                <select value={edition} onChange={e=>setEdition(e.target.value)} className="bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-white outline-none">
                  <option value="Basic">{t('Basic')}</option>
                  <option value="Pro">{t('Pro')}</option>
                  <option value="Enterprise">{t('Enterprise')}</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{t('Duration')}</label>
                <select value={durationMonths} onChange={e=>setDurationMonths(e.target.value)} className="bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-white outline-none">
                  <option value="1">{t('1 Month')}</option>
                  <option value="6">{t('6 Months')}</option>
                  <option value="12">{t('1 Year')}</option>
                  <option value="1200">{t('Lifetime (100 Yrs)')}</option>
                </select>
              </div>
              <button onClick={handleGenerate} disabled={loading} className="bg-brand-primary hover:bg-brand-primary/90 text-brand-dark text-xs font-bold px-4 py-2.5 rounded mt-5 flex items-center justify-center gap-2 transition disabled:opacity-50 whitespace-nowrap">
                <Key className="size-4" />
                {t('Generate Key')}
              </button>
            </div>
          </div>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-sm">{error}</div>}

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-950/50 text-zinc-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 font-semibold">{t('16-Digit Key & Customer')}</th>
                  <th className="p-4 font-semibold">{t('Edition')}</th>
                  <th className="p-4 font-semibold">{t('Valid Until')}</th>
                  <th className="p-4 font-semibold">{t('Bound Fingerprint / Host')}</th>
                  <th className="p-4 font-semibold text-right">{t('Actions')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {keys.map((key: any) => (
                  <tr key={key.key_code} className={`hover:bg-zinc-800/20 transition group ${key.is_revoked ? 'opacity-50 grayscale' : ''}`}>
                    <td className="p-4">
                      <div className="font-mono text-white tracking-wider font-semibold">{key.key_code}</div>
                      {key.customers ? (
                        <div className="text-xs text-cyan-400 mt-1 flex items-center gap-1.5">
                          <User className="size-3" /> {key.customers.name} {key.customers.phone ? `(${key.customers.phone})` : ''}
                        </div>
                      ) : (
                        <div className="text-[10px] text-zinc-500 mt-1">{t('Unassigned Customer')}</div>
                      )}
                      <div className="text-[10px] text-zinc-600 mt-0.5">{t('Created: ')}{new Date(key.created_at).toLocaleDateString()}</div>
                    </td>
                    <td className="p-4">
                      <span className="bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full text-xs font-medium border border-zinc-700">
                        {key.edition}
                      </span>
                    </td>
                    <td className="p-4 text-zinc-400">
                      <div>{new Date(key.valid_until).toLocaleDateString()}</div>
                      <div className="text-[10px] text-zinc-600 mt-0.5">{t('Maint: ')}{new Date(key.maintenance_until).toLocaleDateString()}</div>
                    </td>
                    <td className="p-4">
                      {key.bound_fingerprint ? (
                        <div>
                          <div className="font-mono text-[10px] text-zinc-400 bg-zinc-950 px-2 py-1 rounded inline-block max-w-[150px] truncate" title={key.bound_fingerprint}>
                            {key.bound_fingerprint}
                          </div>
                          <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1.5">
                            <Server className="size-3" /> {key.hostname || "Unknown Host"}
                          </div>
                          {key.license_blob && (
                            <button
                              onClick={() => handleCopyBlob(key.license_blob)}
                              className="mt-2 text-[10px] flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition"
                            >
                              <Copy className="size-3" /> Copy License File Blob
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-zinc-600 italic text-xs">{t('Unbound (Ready for Activation)')}</span>
                      )}
                    </td>
                    <td className="p-4 flex flex-col gap-2 items-end">
                      <button
                        onClick={() => handleExtend(key)}
                        disabled={loading}
                        className="text-xs flex items-center justify-end gap-1.5 ml-auto text-emerald-400 hover:text-emerald-300 transition opacity-60 group-hover:opacity-100 disabled:opacity-30"
                        title="Extend Full License by 1 Year"
                      >
                        <CalendarPlus className="size-3.5" />
                        <span>{t('Renew +1 Yr')}</span>
                      </button>

                      <button
                        onClick={() => handleExtendMaintenance(key)}
                        disabled={loading}
                        className="text-xs flex items-center justify-end gap-1.5 ml-auto text-blue-400 hover:text-blue-300 transition opacity-60 group-hover:opacity-100 disabled:opacity-30"
                        title="Extend Maintenance by 90 Days"
                      >
                        <Clock className="size-3.5" />
                        <span>{t('Maint. +90 Days')}</span>
                      </button>

                      <button
                        onClick={() => handleRevoke(key)}
                        disabled={loading}
                        className={`text-xs flex items-center justify-end gap-1.5 ml-auto transition opacity-60 group-hover:opacity-100 disabled:opacity-30 ${key.is_revoked ? 'text-zinc-400 hover:text-white' : 'text-red-400 hover:text-red-300'}`}
                        title={key.is_revoked ? "Restore License" : "Revoke License"}
                      >
                        <Ban className="size-3.5" />
                        <span>{key.is_revoked ? "Un-revoke" : "Revoke"}</span>
                      </button>

                      {key.bound_fingerprint && (
                        <button
                          onClick={() => handleReset(key.key_code)}
                          disabled={loading}
                          className="text-xs flex items-center justify-end gap-1.5 ml-auto text-amber-400 hover:text-amber-300 transition opacity-60 group-hover:opacity-100 disabled:opacity-30"
                          title="Reset Hardware Binding"
                        >
                          <RotateCcw className="size-3.5" />
                          <span>{t('Reset Device')}</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {keys.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-zinc-500">
                      {t('No license keys found. Generate one above to get started.')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
