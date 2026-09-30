"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslation();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-red-500/10 p-4 rounded-full mb-6">
        <AlertTriangle className="h-10 w-10 text-red-500" />
      </div>
      <h2 className="text-3xl font-heading font-bold tracking-tight mb-4 text-foreground">
        {t('error_title', 'Something went wrong!')}
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        {t('error_desc', 'We encountered an unexpected issue while trying to load this page. Our team has been notified.')}
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} className="bg-navy hover:bg-navy/90 text-white rounded-full px-8">
          {t('try_again', 'Try again')}
        </Button>
        <Button variant="outline" onClick={() => window.location.href = '/'} className="rounded-full px-8">
          {t('go_home', 'Go Home')}
        </Button>
      </div>
    </div>
  )
}
