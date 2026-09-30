"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] text-foreground" />
          <span className="sr-only">{t('Toggle language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          {t('English', 'English')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("hi")}>
          हिंदी (Hindi)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("mr")}>
          मराठी (Marathi)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
