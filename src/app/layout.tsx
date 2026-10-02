import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import localFont from "next/font/local";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/components/I18nProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const stackSansNotch = localFont({
  src: "../../public/fonts/StackSansNotch-VariableFont_wght.ttf",
  variable: "--font-stack-sans-notch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScaleERP | Premium Offline Inventory & Ledger Software for Feed Stores",
  description: "Upgrade your wholesale or retail business with ScaleERP. A lightning-fast, offline-first desktop application for inventory management, ledgers, and billing.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen flex flex-col ${outfit.variable} ${plusJakarta.variable} ${stackSansNotch.variable} font-sans`}>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={1000}>
              <Navbar />
              <Breadcrumbs />
              <main className="flex-grow min-h-[calc(100vh-16rem)]">
                {children}
              </main>
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </I18nProvider>
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
