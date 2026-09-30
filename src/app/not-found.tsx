"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Compass } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-muted p-4 rounded-full mb-6">
        <Compass className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="text-4xl font-heading font-bold tracking-tight mb-2 text-foreground">
        404 - Page Not Found
      </h2>
      <p className="text-muted-foreground max-w-md mb-8 text-lg">
        {t('It looks like this page is missing or currently under construction. Check back soon!')}
      </p>
      <Link href="/" passHref>
        <Button className="bg-navy hover:bg-navy/90 text-white rounded-lg px-8 h-12 text-base">
          {t('Return to Home')}
        </Button>
      </Link>
    </div>
  )
}
