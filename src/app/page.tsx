"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBolt, FaBookOpen, FaBoxOpen, FaShieldAlt, FaWifi, FaArrowRight, FaCheckCircle, FaChartLine, FaWindows } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurIn } from "@/components/ui/blur-in";
import { SafariMockup } from "@/components/ui/safari-mockup";
import { Marquee } from "@/components/ui/marquee";
import { FarmHeroPattern } from "@/components/ui/farm-hero-pattern";
import { useTranslation } from "react-i18next";
import { JargonTooltip } from "@/components/JargonTooltip";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full bg-background selection:bg-brand-primary/20 relative">
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-24 pb-20 md:pt-36 md:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Organic Farm Field SVG Pattern with subtle opacity */}
        <FarmHeroPattern />
        
        {/* Subtle Radial Glow in center to ensure text readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-background/40 rounded-full blur-[100px] z-0 pointer-events-none"></div>
        
        <div className="z-10 max-w-5xl space-y-10 w-full flex flex-col items-center">
          <Badge variant="outline" className="text-brand-dark dark:text-brand-primary border-brand-primary/40 bg-background/80 backdrop-blur-md px-5 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full shadow-sm">
            {t('hero_badge', 'Rooted in Soil, Empowered by Precision')}
          </Badge>
          
          <BlurIn delay={0}>
            <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] font-heading font-extrabold tracking-tight text-foreground drop-shadow-sm">
              {t('hero_title_1', 'Reclaim Your Counter.')}<br />
              <span className="text-brand-primary italic">{t('hero_title_2', 'Master Your Stock.')}</span>
            </h1>
          </BlurIn>
          
          <BlurIn delay={0.2}>
            <h2 className="font-heading text-lg md:text-xl text-foreground/80 font-normal max-w-2xl mx-auto leading-relaxed">
              {t('hero_subtitle', 'The lightning-fast, offline-first inventory and ledger engine built explicitly for India’s feed stores, agricultural distributors, and wholesale brokers.')}
            </h2>
          </BlurIn>
          
          <BlurIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 z-20 relative w-full sm:w-auto">
              <Link href="/download" passHref>
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-dark font-bold rounded-lg px-8 h-14 text-base w-full sm:w-auto flex items-center gap-2.5 group shadow-sm transition-all border border-brand-primary/20">
                  <FaWindows className="text-lg text-brand-dark" />
                  <span>{t('hero_download_btn', 'Download for Windows')}</span>
                </Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button size="lg" variant="outline" className="bg-background/70 backdrop-blur-md border-border/60 text-foreground hover:bg-background/90 rounded-lg px-8 h-14 text-base w-full sm:w-auto shadow-sm">
                  {t('view_pricing', 'View Pricing')}
                </Button>
              </Link>
            </div>
          </BlurIn>
          
          {/* Visual Focus: Massive Safari Mockup with YouTube Video */}
          <BlurIn delay={0.6} className="w-full px-2 sm:px-0">
            <div className="mt-12 sm:mt-20 mx-auto relative w-full max-w-5xl rounded-xl z-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-border/50 bg-background/70 p-2 backdrop-blur-xl">
              <SafariMockup url="app.scaleerp.com/dashboard">
                <iframe 
                  className="w-full aspect-video border-b-xl object-cover pointer-events-auto bg-black"
                  src="https://www.youtube.com/embed/y1WYCrMw0UY?autoplay=1&mute=1&loop=1&playlist=y1WYCrMw0UY&controls=0&modestbranding=1" 
                  title="ScaleERP High-Stress Checkout"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </SafariMockup>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* 2. Marquee Feature Banner */}
      <section className="w-full py-8 bg-background border-y border-border/40 overflow-hidden flex flex-col items-center relative z-20">
        <Marquee speed={40}>
          <div className="flex gap-8 items-center px-4">
            <div className="flex items-center gap-2 text-sm text-foreground/80"><FaCheckCircle className="text-active" /> <span className="font-medium"><JargonTooltip explanation={t('tooltip_ledger', 'A digital or physical book used to record financial transactions.') as string}>{t('marquee_ledger', 'Instant Ledger Sync')}</JargonTooltip></span></div>
            <div className="w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80"><FaWifi className="text-terracotta" /> <span className="font-medium">{t('marquee_offline', '100% Offline Capability')}</span></div>
            <div className="w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80"><FaBoxOpen className="text-navy" /> <span className="font-medium">{t('marquee_alerts', 'Real-time Stock Alerts')}</span></div>
            <div className="w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80"><FaShieldAlt className="text-foreground/40" /> <span className="font-medium"><JargonTooltip explanation={t('tooltip_rsa', 'A highly secure cryptographic method tied specifically to your physical device.') as string}>{t('marquee_rsa', 'RSA Hardware Bound')}</JargonTooltip></span></div>
            <div className="w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2 text-sm text-foreground/80"><FaChartLine className="text-active" /> <span className="font-medium">{t('marquee_reports', 'Daily Settlement Reports')}</span></div>
          </div>
        </Marquee>
      </section>

      {/* 3. The Operator's Grid (Light Mode) */}
      <section className="w-full py-20 md:py-28 px-4 relative overflow-hidden bg-background">
        
        {/* Organic Farm Field Background (Reused, Faded, Rotated) */}
        <div className="absolute inset-4 md:inset-8 z-0 overflow-hidden rounded-[3rem] border border-border/40 bg-background/50">
           <FarmHeroPattern className="opacity-[0.05]" variant="rotated" />
        </div>
        
        <div className="container max-w-[1200px] mx-auto space-y-12 md:space-y-16 relative z-10">
          
          <div className="space-y-4 max-w-2xl bg-card/60 backdrop-blur-md p-6 rounded-lg border border-border/50">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight" dangerouslySetInnerHTML={{ __html: t('built_title', 'Built for Operators.<br/>Not Boardrooms.') }}></h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t('built_desc', 'We let the interface do the talking. Clean ledgers, fast billing, zero friction. Tools you\'ll actually want to use everyday.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">
            {/* Card A (Large Left) */}
            <Card className="md:col-span-7 min-h-[450px] md:min-h-0 h-full rounded-lg overflow-hidden border border-border/50 shadow-sm bg-card/80 backdrop-blur-md flex flex-col group relative transition-colors hover:bg-card/95">
              <CardHeader className="p-8 md:p-10 pb-4 flex-none z-10 relative">
                <CardTitle className="text-2xl font-heading text-foreground tracking-tight">{t('lightning_title', 'Lightning-Fast Billing.')}</CardTitle>
                <CardDescription className="text-foreground/60 mt-3 text-base max-w-md leading-relaxed">{t('lightning_desc', 'Designed for the chaos of the retail checkout counter. Generate invoices and clear parties instantly with keyboard-first navigation.')}</CardDescription>
              </CardHeader>
              <CardContent className="relative flex-grow ml-6 md:ml-10 mt-2 md:mt-0 p-0 overflow-hidden rounded-tl-2xl border-t border-l border-border/40 shadow-sm group-hover:scale-[1.01] transition-transform duration-500 ease-out origin-top-left bg-card">
                <Image src="/media/billing_checkout_ui.png" alt="Billing UI" fill className="object-cover object-left-top" />
              </CardContent>
            </Card>

            {/* Right Column Stack */}
            <div className="md:col-span-5 h-full flex flex-col gap-6">
              {/* Card B (Top Right) */}
              <Card className="flex-1 min-h-[350px] md:min-h-0 rounded-lg overflow-hidden border border-border/50 shadow-sm bg-card/80 backdrop-blur-md flex flex-col group relative transition-colors hover:bg-card/95">
                <CardHeader className="p-6 md:p-8 pb-2 flex-none z-10 relative">
                  <CardTitle className="text-xl font-heading text-foreground tracking-tight">{t('replace_title', 'Replace the Paper Register.')}</CardTitle>
                  <CardDescription className="text-foreground/50 mt-1 text-sm">{t('replace_desc', 'Automate your ledgers securely.')}</CardDescription>
                </CardHeader>
                <CardContent className="relative flex-grow ml-6 md:ml-8 mt-2 md:mt-0 p-0 overflow-hidden rounded-tl-xl border-t border-l border-border/40 shadow-sm group-hover:scale-[1.02] transition-transform duration-500 ease-out origin-top-left bg-card">
                  <Image src="/media/ledger_ui.png" alt="Ledger UI" fill className="object-cover object-left-top" />
                </CardContent>
              </Card>

              {/* Card C (Bottom Right) */}
              <Card className="flex-1 min-h-[350px] md:min-h-0 rounded-lg overflow-hidden border border-border/50 shadow-sm bg-card/80 backdrop-blur-md flex flex-col group relative transition-colors hover:bg-card/95">
                <CardHeader className="p-6 md:p-8 pb-2 flex-none z-10 relative">
                  <CardTitle className="text-xl font-heading text-foreground tracking-tight">{t('know_title', 'Know Your Godown.')}</CardTitle>
                  <CardDescription className="text-foreground/50 mt-1 text-sm">{t('know_desc', 'Real-time alerts & tracking.')}</CardDescription>
                </CardHeader>
                <CardContent className="relative flex-grow ml-6 md:ml-8 mt-2 md:mt-0 p-0 overflow-hidden rounded-tl-xl border-t border-l border-border/40 shadow-sm group-hover:scale-[1.02] transition-transform duration-500 ease-out origin-top-left bg-card">
                  <Image src="/media/inventory_stock_ui.png" alt="Inventory UI" fill className="object-cover object-left-top" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Technical Guardian Grid (Dark Mode) */}
      <section className="w-full py-20 md:py-28 bg-[#0a0a0a] text-white px-4 relative overflow-hidden dark dark-section">
        <div className="container max-w-[1200px] mx-auto space-y-12 md:space-y-16 relative z-10">
          
          <div className="space-y-4 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">{t('own_ops', 'Own your ops.')}<br/><span className="text-foreground/50 italic">{t('stay_control', 'Stay in control.')}</span></h2>
            <p className="text-lg text-foreground/50 leading-relaxed">
              {t('own_desc', 'Offline architecture, local databases, and RSA security.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[450px]">
            {/* Card D (Left) */}
            <Card className="min-h-[450px] md:min-h-0 rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-white flex flex-col group relative h-full transition-colors hover:bg-white/10">
              <CardHeader className="p-8 md:p-10 pb-4 flex-none z-20 relative">
                <CardTitle className="text-2xl font-heading text-white tracking-tight flex items-center gap-3"><FaWifi className="text-terracotta text-lg" /> {t('offline_title', '100% Offline.')}</CardTitle>
                <CardDescription className="text-base text-white/50 max-w-sm mt-3 leading-relaxed">
                  {t('offline_desc', 'Forget loading spinners. ScaleERP runs natively on your desktop, powered by a high-performance local database.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex-grow ml-6 md:ml-10 mt-2 md:mt-0 p-0 overflow-hidden rounded-tl-2xl border-t border-l border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-700 origin-top-left bg-black ring-1 ring-white/10">
                <div className="absolute inset-0 w-full h-full flex flex-col">
                  <div className="flex items-center px-4 py-3 bg-[#1e1e1e] border-b border-white/5 flex-none">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  <iframe 
                    className="w-full flex-grow object-cover pointer-events-auto"
                    src="https://www.youtube.com/embed/9PQ3zLulW5w?autoplay=1&mute=1&controls=0" 
                    title="ScaleERP Offline Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Card E (Right) */}
            <Card className="min-h-[400px] md:min-h-0 rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-white flex flex-col group relative h-full transition-colors hover:bg-white/10">
              <CardHeader className="p-8 md:p-10 pb-4 flex-none z-20 relative">
                <CardTitle className="text-2xl font-heading text-white tracking-tight flex items-center gap-3"><FaShieldAlt className="text-navy text-lg" /> <JargonTooltip explanation={t('tooltip_airgapped', 'A security measure where a computer network is completely isolated from the internet.') as string}>{t('airgapped_title', 'Air-gapped Security.')}</JargonTooltip></CardTitle>
                <CardDescription className="text-base text-white/50 max-w-sm mt-3 leading-relaxed">
                  {t('airgapped_desc', 'Your data remains yours. Our robust, hardware-bound RSA licensing architecture ensures your application is protected and tamper-proof.')}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex-grow ml-6 md:ml-10 mt-2 md:mt-0 p-0 overflow-hidden rounded-tl-2xl border-t border-l border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-700 origin-top-left bg-black ring-1 ring-white/10">
                <Image src="/assets/LicenseMangement.png" alt="Hardware-Bound RSA License Manager" fill className="object-cover object-left-top" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Closing Call-to-Action (Keel Dark Footer Style) */}
      <section className="w-full bg-[#121A15] text-white border-t border-white/10 dark-section">
        <div className="container max-w-5xl mx-auto py-32 px-4 text-center space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
              {t('cta_title_1', 'Take control of your operations.')} <span className="text-terracotta italic">{t('cta_title_2', 'Today.')}</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
              {t('cta_desc', 'Leave behind the complexity of legacy ERPs. Keep your roots in the soil, but run your business with precision.')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/download" passHref>
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-brand-dark rounded-lg px-10 h-14 text-base w-full sm:w-auto font-bold transition-all flex items-center justify-center gap-2.5 shadow-md">
                <FaWindows className="text-lg text-brand-dark" />
                <span>{t('hero_download_btn', 'Download for Windows')}</span>
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-lg px-10 h-14 text-base w-full sm:w-auto font-medium transition-colors backdrop-blur-md">
                {t('talk_sales', 'Talk to Sales')}
              </Button>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
