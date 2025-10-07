"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  innerPaddingClassName?: string
  mouseX?: number
  mouseY?: number
}

export function SpotlightCard({ className, children, innerPaddingClassName, mouseX = 0, mouseY = 0, ...props }: SpotlightCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [localX, setLocalX] = React.useState(0)
  const [localY, setLocalY] = React.useState(0)

  React.useEffect(() => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = mouseX - rect.left
    const y = mouseY - rect.top
    
    // Only update if values actually changed
    setLocalX(prevX => {
      const newX = x
      return prevX === newX ? prevX : newX
    })
    setLocalY(prevY => {
      const newY = y
      return prevY === newY ? prevY : newY
    })
  }, [mouseX, mouseY])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative",
        // outer shell provides rounded corners
        // use padding to create the visible rim where the glow will show
        "rounded-[15px] p-[3px]",
        className
      )}
      style={{ 
        backgroundColor: "rgba(145, 145, 145, 0.2)",
        ["--spotlight-x" as string]: `${localX}px`,
        ["--spotlight-y" as string]: `${localY}px`
      }}
      {...props}
    >
      {/* Glow overlay: absolute background that follows cursor. It sits beneath
          the inner content. Because the outer container uses padding for the rim,
          the inner content (below) will cover the center and the glow will only
          be visible in the padded rim area. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[15px] transition-opacity duration-200"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(420px circle at var(--spotlight-x, -100px) var(--spotlight-y, -100px), rgba(255,255,255,0.6), transparent 45%)",
        }}
      />

      {/* Inner content: sits above the glow and fills the padded area, hiding the
          center so only the rim shows the glow. */}
      <div className={cn("relative z-10 rounded-[13px] bg-[rgb(29,29,29)] h-full w-full", innerPaddingClassName ?? "p-4")}>
        {children}
      </div>
    </div>
  )
}


