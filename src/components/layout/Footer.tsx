"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { JargonTooltip } from "@/components/JargonTooltip"
import { Button } from "@/components/ui/button"
import { BookOpen, Newspaper } from "lucide-react"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t bg-navy text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/brand/app-icon-square-dark-green.png"
                alt="ScaleERP Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain rounded-sm"
              />
              <span className="font-logo font-bold text-3xl tracking-tight text-white">
                ScaleERP
              </span>
            </div>
            <p className="text-sm text-gray-300 font-public mb-6">
              {t('Rooted in Soil, Empowered by Precision. The lightning-fast, ')}<JargonTooltip explanation={t("Works without an active internet connection by saving data locally on your device.")}>{t('offline-first')}</JargonTooltip>{t(' inventory and ledger engine built explicitly for India’s feed stores.')}
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Product')}</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-public">
              <li><Link href="/product/features/all-features" className="hover:text-brand-primary transition-colors">{t('All Features')}</Link></li>
              <li><Link href="/product/use-cases/feed-stores" className="hover:text-brand-primary transition-colors">{t('Feed Stores')}</Link></li>
              <li><Link href="/product/use-cases/wholesale-brokers" className="hover:text-brand-primary transition-colors">{t('Wholesale Brokers')}</Link></li>
              <li><Link href="/product/features/comparison" className="hover:text-brand-primary transition-colors">{t('Compare to Tally')}</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-primary transition-colors">{t('pricing', 'Pricing')}</Link></li>
              <li><Link href="/download" className="hover:text-brand-primary transition-colors">{t('Download Client', 'Download Desktop App')}</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Resources & Support')}</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-public mb-6">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">{t('about', 'About Us')}</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">{t('contact', 'Contact')}</Link></li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link href="/docs" passHref>
                <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white justify-start text-gray-200">
                  <BookOpen className="w-4 h-4 mr-2 text-brand-primary" />
                  {t('SOPs / Tutorials')}
                </Button>
              </Link>
              <Link href="/resources" passHref>
                <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white justify-start text-gray-200">
                  <Newspaper className="w-4 h-4 mr-2 text-brand-primary" />
                  {t('Blogs & News')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Legal')}</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-public mb-6">
              <li><Link href="/privacy" className="hover:text-brand-primary transition-colors">{t('Privacy Policy')}</Link></li>
              <li><Link href="/terms" className="hover:text-brand-primary transition-colors">{t('Terms of Service')}</Link></li>
            </ul>
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Social')}</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <p className="text-sm text-gray-400 font-public mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} ScaleERP. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-xs text-gray-400 font-public uppercase tracking-widest">{t('Engineered By')}</span>
            <span className="font-logo font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              <img src="/brand/app-icon-square-dark-green.png" alt="ScaleERP" width={16} height={16} className="h-4 w-auto inline rounded-sm" />
              ScaleERP
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
