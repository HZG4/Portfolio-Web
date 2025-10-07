"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags: string[]
  mouseX?: number
  mouseY?: number
  className?: string
}

export function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  tags, 
  mouseX = 0, 
  mouseY = 0,
  className 
}: ProjectCardProps) {
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
        "rounded-[15px] p-[3px]",
        className
      )}
      style={{ 
        backgroundColor: "rgba(145, 145, 145, 0.2)",
        ["--spotlight-x" as string]: `${localX}px`,
        ["--spotlight-y" as string]: `${localY}px`
      }}
      {...{}}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[15px]"
        style={{
          background: `radial-gradient(circle 150px at var(--spotlight-x) var(--spotlight-y), rgba(255,255,255,0.6), transparent 100%)`,
        }}
      />

      {/* Inner card content with dark background */}
      <div className="relative z-10 h-full w-full rounded-[13px] bg-[rgb(29,29,29)] overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <svg height="20" width="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2217 8.93569C18.3449 9.05883 18.4086 9.23128 18.3989 9.4151C18.3893 9.59893 18.307 9.77907 18.1701 9.91589L9.9158 18.1702C9.77897 18.3071 9.59884 18.3894 9.41501 18.399C9.23119 18.4087 9.05874 18.345 8.9356 18.2218L0.578075 9.8643C0.454933 9.74116 0.391188 9.56871 0.400863 9.38488C0.410538 9.20106 0.49284 9.02092 0.629665 8.8841L8.88401 0.629756C9.02083 0.492931 9.20097 0.410629 9.38479 0.400954C9.56862 0.391279 9.74107 0.455024 9.86421 0.578166L18.2217 8.93569ZM8.4197 9.45158L5.16955 6.20144L2.07417 9.29681L5.32432 12.547L8.4197 9.45158ZM12.5985 13.6303L9.34831 10.3802L6.25293 13.4756L9.50308 16.7257L12.5985 13.6303ZM12.5469 5.32441L9.29672 2.07427L6.20134 5.16964L9.45149 8.41979L12.5469 5.32441ZM16.7256 9.50317L13.4755 6.25303L10.3801 9.3484L13.6303 12.5986L16.7256 9.50317Z" fill="#ffffffb7"></path>
              </svg>
              <div style={{ color: '#ffffffcc', fontSize: '20px', fontFamily: "'General Sans', sans-serif", fontWeight: 550, lineHeight: 1.2 }}>
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" + title}
              </div>
            </div>
            {/* Arrow icon at right */}
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#fff" viewBox="0 0 16 16" className="transition-transform duration-300 group-hover:-rotate-45 flex-shrink-0">
              <path fill="#ffffffb9" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path>
            </svg>
          </div>
          <p className="text-gray-400 text-sm" style={{ fontFamily: "'General Sans', sans-serif" }}>
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="px-6 pt-1 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block  rounded-sm border-2 border-gray-500 px-3 py-1 text-sm font-medium text-gray-300 mr-2 mb-2"
              style={{ fontFamily: "'General Sans', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
