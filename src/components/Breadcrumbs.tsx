"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Breadcrumbs() {
  const pathname = usePathname()
  const { t } = useTranslation()

  // Do not show breadcrumbs on the home page
  if (pathname === '/') return null

  // Split path into segments, remove empty strings
  const pathNames = pathname.split('/').filter(path => path)

  return (
    <div className="w-full bg-background/95 backdrop-blur-sm border-b border-border/40 py-2.5 z-40 sticky top-16">
      <div className="container flex items-center text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide px-4 md:px-8">
        <Link href="/" className="flex items-center hover:text-foreground transition-colors">
          <Home className="w-4 h-4" />
          <span className="sr-only">{t('Home')}</span>
        </Link>
        
        {pathNames.length > 0 && (
          <ChevronRight className="w-4 h-4 mx-2 text-border flex-shrink-0" />
        )}
        
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const isLast = index === pathNames.length - 1
          
          // Capitalize and format the link text
          const itemText = link.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

          return (
            <div key={index} className="flex items-center">
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {t(itemText)}
                </span>
              ) : (
                <Link href={href} className="hover:text-foreground transition-colors">
                  {t(itemText)}
                </Link>
              )}
              {!isLast && <ChevronRight className="w-4 h-4 mx-2 text-border flex-shrink-0" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
