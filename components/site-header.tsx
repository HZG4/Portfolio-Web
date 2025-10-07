"use client"

import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between py-4">
        <div className="select-none">
          <Link href="/" aria-label="HZG4 home" className="inline-flex items-center">
            <Image
              src="/hzg4 logo.png"
              alt="HZG4 logo"
              width={160}
              height={64}
              priority
              className="h-10 w-auto md:h-15"
            />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open navigation"
              className="group h-12 w-12 rounded-full bg-white ring-1 ring-black/10 shadow flex items-center justify-center"
            >
              <span className="sr-only">Open navigation</span>
              <span className="flex flex-col items-center justify-center">
                <span className="block h-1 w-7 bg-black rounded"></span>
                <span className="block h-1 w-7 bg-black rounded my-1.5"></span>
                <span className="block h-1 w-7 bg-black rounded"></span>
              </span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <SheetHeader className="p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav className="pl-6 pr-24 pt-32">
              <ul className="space-y-10">
                <li>
                  <Link href="/" className="group block text-4xl md:text-6xl tracking-wide font-semibold [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
                    <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_white]">
                      Home
                      <span className="absolute inset-0 w-0 group-hover:w-full transition-[width] duration-500 ease-out overflow-hidden">
                        <span className="text-white">Home</span>
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/#featured-projects" className="group block text-4xl md:text-6xl tracking-wide font-semibold [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
                    <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_white]">
                      Projects
                      <span className="absolute inset-0 w-0 group-hover:w-full transition-[width] duration-500 ease-out overflow-hidden">
                        <span className="text-white">Projects</span>
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="group block text-4xl md:text-6xl tracking-wide font-semibold [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
                    <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_white]">
                      Resources
                      <span className="absolute inset-0 w-0 group-hover:w-full transition-[width] duration-500 ease-out overflow-hidden">
                        <span className="text-white">Resources</span>
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="group block text-4xl md:text-6xl tracking-wide font-semibold [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
                    <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_white]">
                      Contact
                      <span className="absolute inset-0 w-0 group-hover:w-full transition-[width] duration-500 ease-out overflow-hidden">
                        <span className="text-white">Contact</span>
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


