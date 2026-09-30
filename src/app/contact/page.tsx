"use client";

import React from "react";
import { TopographicPattern } from "@/components/ui/topographic-pattern";
import { useTranslation } from "react-i18next";
import { MessageSquare, PhoneCall, Building2, MapPin, Mail, ChevronRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MediaMockup } from "@/components/MediaMockup";
import { BlurIn } from "@/components/ui/blur-in";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* 1. Hero Section (Light & Welcoming Canvas) */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm mb-4 lg:mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase">
                  Support is Online
                </span>
              </div>
            </BlurIn>

            <BlurIn delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                {t("contact_h1")}
              </h1>
            </BlurIn>
            
            <BlurIn delay={0.4}>
              <p className="max-w-2xl text-xl sm:text-2xl font-medium text-zinc-400 dark:text-zinc-600 leading-relaxed">
                {t("contact_h2")}
              </p>
            </BlurIn>
          </div>

          {/* Right Visual Component */}
          <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative flex justify-center lg:justify-end">
            <MediaMockup 
              type="image" 
              caption="ScaleERP Technical Expert Avatar" 
              className="h-48 w-48 lg:h-64 lg:w-64 rounded-full border-4 border-white dark:border-zinc-800 shadow-xl p-0 overflow-hidden" 
              src="/assets/contact_expert.png"
            />
          </BlurIn>
        </div>
      </section>

      {/* 2. The Communication Grid */}
      <section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
            {t("contact_section_2_title", "We Are Here to Help.")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card A: WhatsApp Support */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366]" />
            <CardHeader className="pt-8">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("contact_grid_a_headline")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                {t("contact_grid_a_copy")}
              </p>
            </CardContent>
            <CardFooter className="pb-8">
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" size="lg">
                {t("contact_grid_a_cta")} <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Card B: Phone Support */}
          <Card className="flex flex-col border-terracotta/20 dark:border-terracotta/20 bg-white dark:bg-zinc-950 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden ring-1 ring-terracotta/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-terracotta" />
            <CardHeader className="pt-8">
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("contact_grid_b_headline")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                {t("contact_grid_b_copy")}
              </p>
            </CardContent>
            <CardFooter className="pb-8">
              <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-700 font-mono text-lg" size="lg">
                {t("contact_grid_b_cta")}
              </Button>
            </CardFooter>
          </Card>

          {/* Card C: Official Correspondence */}
          <Card className="flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg hover:-translate-y-1 transition-transform duration-300 lg:col-span-1 md:col-span-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-400 dark:bg-zinc-700" />
            <CardHeader className="pt-8">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">{t("contact_grid_c_headline")}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t("contact_grid_c_copy")}
              </p>
              
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{t("contact_email_label")}</p>
                    <a href={`mailto:${t("contact_email_value")}`} className="text-primary hover:underline">
                      {t("contact_email_value")}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">{t("contact_address_label")}</p>
                    <p className="text-muted-foreground">
                      {t("contact_address_value")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-terracotta hover:bg-terracotta/10 transition-colors">
                      <FaInstagram className="w-5 h-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-terracotta hover:bg-terracotta/10 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-terracotta hover:bg-terracotta/10 transition-colors">
                      <FaFacebook className="w-5 h-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
