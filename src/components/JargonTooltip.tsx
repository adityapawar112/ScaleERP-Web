"use client"

import React, { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface JargonTooltipProps {
  children: React.ReactNode
  explanation: string
}

export function JargonTooltip({ children, explanation }: JargonTooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <Tooltip open={open} onOpenChange={setOpen} delayDuration={1000}>
      <TooltipTrigger asChild>
        <span 
          className="underline decoration-dotted underline-offset-4 cursor-help"
          onClick={(e) => {
            // For mobile: tap to toggle
            e.preventDefault()
            setOpen(!open)
          }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent 
        sideOffset={5} 
        className="max-w-xs text-sm bg-popover text-popover-foreground border-border shadow-md"
        onPointerDownOutside={() => setOpen(false)}
      >
        <p>{explanation}</p>
      </TooltipContent>
    </Tooltip>
  )
}
