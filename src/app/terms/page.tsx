import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Terms & Conditions | ScaleERP",
  description: "ScaleERP Terms and Conditions of use.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 md:pt-32 md:pb-32 px-4 selection:bg-terracotta/20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-terracotta hover:text-terracotta/80 transition-colors gap-2">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-foreground/60 text-lg">
            Effective Date: May 2026
          </p>
        </div>

        <div className="space-y-10 text-lg text-foreground/80 leading-relaxed font-sans">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By purchasing, downloading, or using ScaleERP, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">2. License Grant</h2>
            <p>
              ScaleERP grants you a non-exclusive, non-transferable, hardware-bound license to use ScaleERP on the specific machine(s) for which it was purchased. This license is subject to annual renewal depending on your pricing tier.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">3. Hardware-Bound Licensing</h2>
            <p>
              The software uses RSA cryptography to bind your license to your hardware. Attempting to bypass, tamper with, or transfer the license without ScaleERP authorization is strictly prohibited and will result in immediate termination of the license.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">4. Data Responsibility</h2>
            <p>
              ScaleERP is an offline-first application. You are solely responsible for maintaining local backups or utilizing the encrypted cloud sync feature. ScaleERP is not liable for any local hardware failures resulting in data loss.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              In no event shall ScaleERP be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-foreground">6. Contact Information</h2>
            <p>
              For legal inquiries, please contact us at: <a href="mailto:support@scaleerp.com" className="text-terracotta hover:underline">support@scaleerp.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
