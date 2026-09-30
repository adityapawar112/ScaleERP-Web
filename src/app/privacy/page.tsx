import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Privacy Policy | ScaleERP",
  description: "ScaleERP Privacy Policy. Learn how we protect your offline data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 md:pt-32 md:pb-32 px-4 selection:bg-terracotta/20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-terracotta hover:text-terracotta/80 transition-colors gap-2">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-foreground/60 text-lg">
            Effective Date: May 2026
          </p>
        </div>

        <div className="space-y-10 text-lg text-foreground/80 leading-relaxed font-sans">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">1. Introduction</h2>
            <p>
              ScaleERP ("we", "us", or "our") respects your privacy. ScaleERP is built with a fundamentally offline-first architecture, meaning the vast majority of your data never leaves your device. This policy explains what limited data we do collect and how we use it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">2. Data Stored Locally</h2>
            <p>
              <strong>Your Business Data:</strong> All inventory, ledgers, party details, and invoices are stored entirely locally on your machine using a local SQLite database. We do not have access to this data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">3. Data We Collect</h2>
            <p>
              <strong>Licensing Information:</strong> To validate your hardware-bound RSA license, we collect your unique machine ID and license key status.
            </p>
            <p>
              <strong>Cloud Backups (Optional):</strong> If you choose to use the End-of-Day Cloud Sync feature, your local database is securely encrypted on your machine before being uploaded to our servers. We cannot decrypt or read your business data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">4. How We Use Your Data</h2>
            <p>
              We use licensing data solely to prevent software piracy and ensure you have access to the product you purchased. We use encrypted cloud backups strictly for your disaster recovery purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">5. Contact Us</h2>
            <p>
              For any privacy-related concerns, please contact us at: <a href="mailto:support@scaleerp.com" className="text-terracotta hover:underline">support@scaleerp.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
