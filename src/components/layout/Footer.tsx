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
            <span className="font-bebas text-3xl font-bold tracking-wider text-terracotta mb-4 block">
              ScaleERP
            </span>
            <p className="text-sm text-gray-300 font-public mb-6">
              {t('Rooted in Soil, Empowered by Precision. The lightning-fast, ')}<JargonTooltip explanation={t("Works without an active internet connection by saving data locally on your device.")}>{t('offline-first')}</JargonTooltip>{t(' inventory and ledger engine built explicitly for India’s feed stores.')}
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Product')}</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-public">
              <li><Link href="/product/features/all-features" className="hover:text-terracotta transition-colors">{t('All Features')}</Link></li>
              <li><Link href="/product/use-cases/feed-stores" className="hover:text-terracotta transition-colors">{t('Feed Stores')}</Link></li>
              <li><Link href="/product/use-cases/wholesale-brokers" className="hover:text-terracotta transition-colors">{t('Wholesale Brokers')}</Link></li>
              <li><Link href="/product/features/comparison" className="hover:text-terracotta transition-colors">{t('Compare to Tally')}</Link></li>
              <li><Link href="/pricing" className="hover:text-terracotta transition-colors">{t('pricing', 'Pricing')}</Link></li>
              <li><Link href="/demo" className="hover:text-terracotta transition-colors">{t('demo_badge', 'Free Trial License')}</Link></li>
              <li><Link href="/download" className="hover:text-terracotta transition-colors">{t('Download Client', 'Download Client')}</Link></li>
              <li><Link href="/activate" className="hover:text-terracotta transition-colors">{t('activateLicense', 'License Activation')}</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Resources & Support')}</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-public mb-6">
              <li><Link href="/about" className="hover:text-terracotta transition-colors">{t('about', 'About Us')}</Link></li>
              <li><Link href="/contact" className="hover:text-terracotta transition-colors">{t('contact', 'Contact')}</Link></li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link href="/docs" passHref>
                <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white justify-start text-gray-200">
                  <BookOpen className="w-4 h-4 mr-2 text-terracotta" />
                  {t('SOPs / Tutorials')}
                </Button>
              </Link>
              <Link href="/resources" passHref>
                <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white justify-start text-gray-200">
                  <Newspaper className="w-4 h-4 mr-2 text-terracotta" />
                  {t('Blogs & News')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Legal')}</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-public mb-6">
              <li><Link href="/privacy" className="hover:text-terracotta transition-colors">{t('Privacy Policy')}</Link></li>
              <li><Link href="/terms" className="hover:text-terracotta transition-colors">{t('Terms of Service')}</Link></li>
            </ul>
            <h3 className="font-bebas text-xl mb-4 tracking-wide text-gray-100">{t('Social')}</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta transition-colors">
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta transition-colors">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta transition-colors">
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
            <span className="font-bebas text-xl tracking-wider text-white">ScaleERP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
