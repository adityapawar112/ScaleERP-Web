"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { useTranslation } from "react-i18next";
import { MessageSquare, PhoneCall, Building2, MapPin, Mail, ChevronRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurIn } from "@/components/ui/blur-in";

export default function ContactPage() {
  const { t } = useTranslation();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    city: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    // Use default email if shopkeeper did not provide one
    const safeEmail = formData.email.trim() || `${formData.phone.replace(/[^0-9]/g, "") || "counter"}@scaleerp.demo.internal`;
    const safeMessage = `Requesting Free Shop Counter Demo & Setup Callback. Firm: ${formData.companyName || "N/A"}, Mandi/City: ${formData.city || "N/A"}, Phone: ${formData.phone}`;

    try {
      const res = await fetch("/api/v1/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType: "BOOK_DEMO",
          name: formData.name,
          companyName: formData.companyName,
          phone: formData.phone,
          email: safeEmail.includes("@") && safeEmail.includes(".") ? safeEmail : `${formData.phone}@scaleerp.demo.internal`,
          message: safeMessage,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your demo request has been received. Our Pune setup team will call you within 15 minutes.");
        setFormData({ name: "", companyName: "", phone: "", city: "", email: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Failed to submit demo request. Please call or WhatsApp our helpline directly.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Could not connect to inquiry server. Please click WhatsApp below for instant assistance.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* 1. Hero Section & Support Portrait */}
      <section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
        <TopographicPattern />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        {/* Subtle decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <BlurIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-black/5 border border-white/20 dark:border-black/10 shadow-sm mb-4 lg:mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-zinc-200 dark:text-zinc-800 uppercase font-outfit">
                  Pune Support Team is Online
                </span>
              </div>
            </BlurIn>

            <BlurIn delay={0.2}>
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                {t("contact_h1", "Direct Counter Help. Real Humans in Maharashtra.")}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-lg sm:text-xl font-medium text-zinc-400 dark:text-zinc-600 leading-relaxed font-sans">
                {t("contact_h2", "Need help setting up your thermal printer, migrating Excel sheets from Tally, or activating ScaleERP on your shop computer? Reach our team directly in Marathi, Hindi, or English.")}
              </p>
            </BlurIn>
          </div>

          {/* Right Visual: Clean Unwrapped Portrait Card with Real Status Badge */}
          <BlurIn delay={0.6} className="w-full lg:w-[420px] shrink-0 relative flex justify-center lg:justify-end">
            <div className="rounded-3xl border border-emerald-500/30 bg-zinc-900/90 dark:bg-white/90 p-4 shadow-2xl backdrop-blur-md space-y-4 w-full max-w-sm">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-800 dark:border-zinc-200 shadow-md bg-zinc-950">
                <Image
                  src="/assets/contact_expert.webp"
                  alt="ScaleERP Customer Setup & Technical Support Specialist"
                  fill
                  priority
                  sizes="400px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-950/80 dark:bg-zinc-100 text-center space-y-1 border border-zinc-800 dark:border-zinc-200">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-400 dark:text-emerald-700 font-outfit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Phone & WhatsApp Support</span>
                </div>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-600 font-medium">
                  Pune, Maharashtra • Mon – Sat (9:00 AM – 8:00 PM IST)
                </p>
              </div>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. The Communication Grid */}
      <section className="px-4 py-20 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
            Fast Response
          </Badge>
          <h2 className="font-outfit text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("contact_section_2_title", "We Are Here to Help.")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Choose your preferred channel for instant remote setup or billing assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card A: WhatsApp Support */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#25D366]" />
            <CardHeader className="pt-8">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-outfit">{t("contact_grid_a_headline", "Chat on Official WhatsApp")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {t("contact_grid_a_copy", "Send us a message in Marathi, Hindi, or English. We assist with Excel imports, thermal printer setup, and license unlocks right on WhatsApp.")}
              </p>
            </CardContent>
            <CardFooter className="pb-8">
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 rounded-xl" size="lg">
                <a href="https://wa.me/919175960000?text=Hello%20ScaleERP%20Team%2C%20I%20need%20assistance%20with%20my%20shop%20setup." target="_blank" rel="noopener noreferrer">
                  {t("contact_grid_a_cta", "Chat with Support")} <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Card B: Direct Phone Support (Real Number + Clickable Link) */}
          <Card className="flex flex-col border-emerald-500/30 dark:border-emerald-500/30 bg-white dark:bg-zinc-950 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden ring-1 ring-emerald-500/20 rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-600" />
            <CardHeader className="pt-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-outfit">Direct Phone & Remote Setup</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Prefer speaking directly? Call our Pune counter helpdesk. We can connect via AnyDesk or TeamViewer to configure your printers and import your customer list.
              </p>
            </CardContent>
            <CardFooter className="pb-8">
              <Button asChild variant="outline" className="w-full border-2 border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-mono font-bold text-base h-12 rounded-xl" size="lg">
                <a href="tel:+919175960000">
                  <PhoneCall className="mr-2 w-4 h-4" />
                  +91 91759 60000
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Card C: Official Pune Headquarters */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg hover:-translate-y-1 transition-transform duration-300 lg:col-span-1 md:col-span-2 rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-400 dark:bg-zinc-700" />
            <CardHeader className="pt-8">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold font-outfit">{t("contact_grid_c_headline", "Headquarters & Billing Helpdesk")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {t("contact_grid_c_copy", "For enterprise dealership inquiries, wholesale distributor licensing, or official correspondence.")}
              </p>
              
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm font-sans">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{t("contact_email_label", "Email Support")}</p>
                    <a href="mailto:support@scaleerp.in" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                      support@scaleerp.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{t("contact_address_label", "Registered Office")}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      ScaleERP Systems, Shivajinagar Trade Hub, Pune, Maharashtra 411005
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* 3. Interactive "Request a Callback / Free Shop Demo" Form */}
      <section className="px-4 py-16 mx-auto w-full max-w-4xl lg:px-8">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="outline" className="text-terracotta border-terracotta/30 bg-terracotta/10 px-4 py-1 text-xs font-bold uppercase rounded-full">
              Free Assistance
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-zinc-900 dark:text-zinc-100">
              Request a Callback / Free Shop Demo
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Leave your shop details. Our team will call you to walk through the software and help import your existing Excel list.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-xl font-bold font-outfit text-zinc-900 dark:text-zinc-100">
                Demo Request Received!
              </h4>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {statusMessage}
              </p>
              <Button
                onClick={() => setStatus("idle")}
                variant="outline"
                className="mt-2 text-xs font-bold"
              >
                Send Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Name */}
                <div className="space-y-2">
                  <label htmlFor="owner-name" className="text-xs font-bold uppercase tracking-wider text-foreground font-outfit">
                    Your Name *
                  </label>
                  <input
                    id="owner-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Pawar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* 2. Shop / Firm Name */}
                <div className="space-y-2">
                  <label htmlFor="shop-name" className="text-xs font-bold uppercase tracking-wider text-foreground font-outfit">
                    Shop / Firm Name *
                  </label>
                  <input
                    id="shop-name"
                    type="text"
                    required
                    placeholder="e.g. Shri Ganesh Krushi Kendra"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* 3. Mobile / WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="phone-number" className="text-xs font-bold uppercase tracking-wider text-foreground font-outfit">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    placeholder="e.g. 98221 44550"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* 4. City / Mandi */}
                <div className="space-y-2">
                  <label htmlFor="mandi-city" className="text-xs font-bold uppercase tracking-wider text-foreground font-outfit">
                    City / Mandi Yard *
                  </label>
                  <input
                    id="mandi-city"
                    type="text"
                    required
                    placeholder="e.g. Sangli APMC / Kolhapur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* 5. Optional Email for Quotation */}
              <div className="space-y-2">
                <label htmlFor="email-address" className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-outfit flex items-center justify-between">
                  <span>Email Address (Optional)</span>
                  <span className="text-[11px] font-normal lowercase">for official invoice quotation</span>
                </label>
                <input
                  id="email-address"
                  type="email"
                  placeholder="name@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">
                  {statusMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-lg transition-all"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Connecting with Helpline...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Request Callback & Free Trial Setup
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
