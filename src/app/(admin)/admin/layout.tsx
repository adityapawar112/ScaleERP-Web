"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, RefreshCw, Key, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AdminAuthProvider, useAdminAuth } from "./admin-context";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated, isChecking, error, login, logout } = useAdminAuth();
  const [inputSecret, setInputSecret] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await login(inputSecret);
    setSubmitting(false);
  };

  // 1. Initial silent verification state - avoid any flashing login prompt
  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-3">
        <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
        <span className="text-xs text-muted-foreground font-mono">Verifying admin session...</span>
      </div>
    );
  }

  // 2. Unauthenticated State - Clean light/dark adaptive login modal
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border p-8 rounded-2xl w-full max-w-md space-y-6 shadow-xl text-foreground"
        >
          <div className="flex justify-center mb-2">
            <img
              src="/brand/logomark-icon-green.png"
              alt="ScaleERP Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain block dark:hidden"
            />
            <img
              src="/brand/app-icon-square-dark-green.png"
              alt="ScaleERP Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain rounded-xl shadow-lg hidden dark:block"
            />
          </div>

          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground tracking-wide">ScaleERP Admin Portal</h1>
            <p className="text-sm text-muted-foreground mt-1">Authenticate to access license telemetry and controls.</p>
          </div>

          {error && (
            <div className="text-xs text-red-600 dark:text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground">Administrator Secret Key</label>
            <input
              type="password"
              value={inputSecret}
              onChange={(e) => setInputSecret(e.target.value)}
              placeholder="Enter ADMIN_SECRET"
              className="w-full bg-background border border-border text-foreground p-3 rounded-lg focus:border-brand-primary outline-none transition text-sm shadow-inner"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-brand-primary text-brand-dark p-3 rounded-lg font-bold hover:bg-brand-primary/90 disabled:opacity-50 transition shadow-md text-sm"
          >
            {submitting ? "Authenticating..." : "Unlock Admin Portal"}
          </button>
        </form>
      </div>
    );
  }

  // 3. Authenticated State - Shared layout with persistent navigation
  const isOverview = pathname === "/admin";
  const isKeys = pathname === "/admin/keys";
  const isActivate = pathname === "/admin/activate";

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Top Persistent Admin Navigation Header */}
      <header className="border-b border-border bg-card/85 backdrop-blur sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Brand Logo & Title */}
            <Link href="/admin" className="flex items-center gap-2.5 group">
              <img
                src="/brand/logomark-icon-green.png"
                alt="ScaleERP"
                width={28}
                height={28}
                className="h-7 w-7 object-contain block dark:hidden transition-transform group-hover:scale-105"
              />
              <img
                src="/brand/app-icon-square-dark-green.png"
                alt="ScaleERP"
                width={28}
                height={28}
                className="h-7 w-7 object-contain rounded-md hidden dark:block transition-transform group-hover:scale-105"
              />
              <span className="font-heading font-bold text-lg text-foreground">
                ScaleERP
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border ml-2">
                  Admin
                </span>
              </span>
            </Link>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1.5">
              <Link
                href="/admin"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isOverview
                    ? "bg-muted text-foreground border border-border shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                Overview & Alerts
              </Link>
              <Link
                href="/admin/keys"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isKeys
                    ? "bg-muted text-foreground border border-border shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                Key Generator & List
              </Link>
              <Link
                href="/admin/activate"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isActivate
                    ? "bg-muted text-foreground border border-border shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                Offline Signer (.lic)
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Badge variant="outline" className="hidden sm:inline-flex border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 text-xs px-2.5 py-1">
              Authorized Session
            </Badge>
            <Button
              onClick={logout}
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-muted text-xs flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock / Exit</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden border-t border-border/80 px-4 py-2 flex items-center gap-1 overflow-x-auto bg-card/60">
          <Link
            href="/admin"
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              isOverview ? "bg-muted text-foreground font-bold" : "text-muted-foreground"
            }`}
          >
            Overview
          </Link>
          <Link
            href="/admin/keys"
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              isKeys ? "bg-muted text-foreground font-bold" : "text-muted-foreground"
            }`}
          >
            Keys
          </Link>
          <Link
            href="/admin/activate"
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              isActivate ? "bg-muted text-foreground font-bold" : "text-muted-foreground"
            }`}
          >
            Offline Signer
          </Link>
        </div>
      </header>

      {/* Main Page Content */}
      <main>{children}</main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminAuthProvider>
  );
}
