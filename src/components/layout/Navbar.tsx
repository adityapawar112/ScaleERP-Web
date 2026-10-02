"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldCheck, Menu, ChevronDown, Layers, Wrench, ListTodo, LayoutGrid, ArrowRightLeft, Package, BookOpenCheck, ReceiptText, MessageCircle } from "lucide-react"
import { FaKey, FaWindows } from "react-icons/fa"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useTranslation } from "react-i18next"

// ... (in the imports section, make sure lucide-react has what we need or use react-icons if it's ready, but wait react-icons might not be ready yet. Actually, let's just use the `multi_replace_file_content` to fix the buttons precisely).

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const { t } = useTranslation();
  const [isOverDarkSection, setIsOverDarkSection] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const darkSections = document.querySelectorAll('.dark-section');
          if (darkSections.length === 0) {
            setIsOverDarkSection(false);
            ticking = false;
            return;
          }
          let overDark = false;
          const navHeight = 64; 
          
          for (let i = 0; i < darkSections.length; i++) {
            const rect = darkSections[i].getBoundingClientRect();
            if (rect.top <= navHeight && rect.bottom >= 0) {
              overDark = true;
              break;
            }
          }
          setIsOverDarkSection(overDark);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Defer initial layout measurement to avoid forced synchronous reflow during React hydration
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isOverDarkSection ? 'dark bg-dark/80 backdrop-blur-md border-b border-white/10 text-white' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Light mode brand icon */}
            <img
              src="/brand/logomark-icon-green.png"
              alt="ScaleERP Logo"
              width={28}
              height={28}
              className={`h-7 w-7 object-contain transition-transform group-hover:scale-105 ${
                isOverDarkSection ? 'hidden' : 'block dark:hidden'
              }`}
            />
            {/* Dark mode brand icon */}
            <img
              src="/brand/app-icon-square-dark-green.png"
              alt="ScaleERP Logo"
              width={28}
              height={28}
              className={`h-7 w-7 object-contain transition-transform group-hover:scale-105 rounded-sm ${
                isOverDarkSection ? 'block' : 'hidden dark:block'
              }`}
            />
            <span className="font-logo font-bold text-2xl tracking-tight text-foreground">
              ScaleERP
            </span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">
                    {t('home', 'Home')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/pricing">
                    {t('pricing', 'Pricing')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative group">
                <button className={navigationMenuTriggerStyle() + " cursor-default"}>
                  {t('product', 'Product')} <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-popover text-popover-foreground border shadow-2xl rounded-xl w-[700px] flex overflow-hidden">
                    {/* Left Panel: Use Cases & Explore */}
                    <div className="w-1/3 bg-muted/50 p-5 flex flex-col gap-6 border-r border-border/50">
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t('Use Cases')}</span>
                        <Link href="/product/use-cases/feed-stores" prefetch={false} className="text-sm font-medium hover:text-terracotta transition-colors">{t('Feed Stores')}</Link>
                        <Link href="/product/use-cases/wholesale-brokers" prefetch={false} className="text-sm font-medium hover:text-terracotta transition-colors">{t('Wholesale Brokers')}</Link>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t('Explore')}</span>
                        <Link href="/product/features/all-features" prefetch={false} className="text-sm font-medium flex items-center gap-2 hover:text-terracotta transition-colors group/link">
                          <LayoutGrid className="w-4 h-4 text-muted-foreground group-hover/link:text-terracotta transition-colors" />
                          {t('All Features')}
                        </Link>
                        <Link href="/product/features/comparison" prefetch={false} className="text-sm font-medium flex items-center gap-2 hover:text-terracotta transition-colors group/link">
                          <ArrowRightLeft className="w-4 h-4 text-muted-foreground group-hover/link:text-terracotta transition-colors" />
                          {t('Comparison')}
                        </Link>
                      </div>
                    </div>

                    {/* Right Panel: Features */}
                    <div className="w-2/3 p-5 bg-background flex flex-col gap-4">
                      
                      {/* Top row: 3 main modules */}
                      <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border/50">
                        <Link href="/product/features/platform" prefetch={false} className="flex flex-col gap-1 hover:bg-muted p-2 rounded-lg transition-colors group/item">
                          <Layers className="w-5 h-5 text-terracotta mb-1" />
                          <div className="text-sm font-bold">{t('Platform')}</div>
                          <p className="text-xs text-muted-foreground leading-tight">{t('Core Inventory Engine')}</p>
                        </Link>
                        <Link href="/product/features/tools" prefetch={false} className="flex flex-col gap-1 hover:bg-muted p-2 rounded-lg transition-colors group/item">
                          <Wrench className="w-5 h-5 text-emerald-500 mb-1" />
                          <div className="text-sm font-bold">{t('Tools')}</div>
                          <p className="text-xs text-muted-foreground leading-tight">{t('Advanced Invoicing')}</p>
                        </Link>
                        <Link href="/product/features/tasks" prefetch={false} className="flex flex-col gap-1 hover:bg-muted p-2 rounded-lg transition-colors group/item">
                          <ListTodo className="w-5 h-5 text-blue-500 mb-1" />
                          <div className="text-sm font-bold">{t('Tasks')}</div>
                          <p className="text-xs text-muted-foreground leading-tight">{t('Automation & Sync')}</p>
                        </Link>
                      </div>

                      {/* Bottom row: Deep Dives (2 columns) */}
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">{t('Deep Dives')}</span>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                          <Link href="/product/features/inventory-tracking" prefetch={false} className="flex items-center gap-2 hover:bg-muted p-2 rounded-md transition-colors group/link">
                            <Package className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground" />
                            <span className="text-sm font-medium">{t('Inventory Tracking')}</span>
                          </Link>
                          <Link href="/product/features/ledgers" prefetch={false} className="flex items-center gap-2 hover:bg-muted p-2 rounded-md transition-colors group/link">
                            <BookOpenCheck className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground" />
                            <span className="text-sm font-medium">{t('Ledgers & Dues')}</span>
                          </Link>
                          <Link href="/product/features/invoice-customization" prefetch={false} className="flex items-center gap-2 hover:bg-muted p-2 rounded-md transition-colors group/link">
                            <ReceiptText className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground" />
                            <span className="text-sm font-medium">{t('Invoice Customization')}</span>
                          </Link>
                          <Link href="/product/features/offline-security" prefetch={false} className="flex items-center gap-2 hover:bg-muted p-2 rounded-md transition-colors group/link">
                            <ShieldCheck className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground" />
                            <span className="text-sm font-medium">{t('Offline Security')}</span>
                          </Link>
                          <Link href="/product/features/whatsapp-cloud-backup" prefetch={false} className="flex items-center gap-2 hover:bg-muted p-2 rounded-md transition-colors col-span-2 group/link">
                            <MessageCircle className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground" />
                            <span className="text-sm font-medium">{t('WhatsApp & Cloud Backup')}</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about" prefetch={false}>
                    {t('about', 'About Us')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact" prefetch={false}>
                    {t('contact', 'Contact')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold rounded-lg px-5 flex items-center gap-2 shadow-sm">
            <Link href="/download">
              <FaWindows className="w-4 h-4 text-brand-dark" />
              <span>{t('nav_download', 'Download')}</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t('Toggle Menu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-3 pt-2 pb-2">
                <img
                  src="/brand/logomark-icon-green.png"
                  alt="ScaleERP Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain block dark:hidden"
                />
                <img
                  src="/brand/app-icon-square-dark-green.png"
                  alt="ScaleERP Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain rounded-sm hidden dark:block"
                />
                <span className="font-logo font-bold text-2xl tracking-tight text-foreground">
                  ScaleERP
                </span>
              </div>
              <nav className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-4 mb-4 border-b pb-4">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <Link href="/" className="text-lg font-medium hover:text-brand-primary">{t('home', 'Home')}</Link>
                <Link href="/pricing" className="text-lg font-medium hover:text-brand-primary">{t('pricing', 'Pricing')}</Link>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium text-zinc-500">{t('Features')}</span>
                  <Link href="/product/features/platform" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('Platform')}</Link>
                  <Link href="/product/features/tools" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('Tools')}</Link>
                  <Link href="/product/features/tasks" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('Tasks')}</Link>
                  <Link href="/product/features/all-features" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('All Features')}</Link>
                  <Link href="/product/features/comparison" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('Comparison')}</Link>
                  
                  <span className="text-lg font-medium text-zinc-500 mt-2">{t('Use Cases')}</span>
                  <Link href="/product/use-cases/feed-stores" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('Feed Stores')}</Link>
                  <Link href="/product/use-cases/wholesale-brokers" prefetch={false} className="text-base font-medium hover:text-brand-primary pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">{t('Wholesale Brokers')}</Link>
                </div>
                <Link href="/about" prefetch={false} className="text-lg font-medium hover:text-brand-primary">{t('about', 'About Us')}</Link>
                <Link href="/contact" prefetch={false} className="text-lg font-medium hover:text-brand-primary">{t('contact', 'Contact')}</Link>
                
                <div className="flex flex-col gap-2 mt-4 border-t pt-4">
                  <Button asChild className="w-full justify-center bg-brand-primary text-brand-dark hover:bg-brand-primary/90 font-bold flex items-center gap-2">
                    <Link href="/download">
                      <FaWindows className="w-4 h-4 text-brand-dark" />
                      <span>{t('nav_download', 'Download')}</span>
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
