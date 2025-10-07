"use client"

import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center gap-6 md:gap-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  style={{ fontFamily: "'General Sans', sans-serif" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#featured-projects"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  style={{ fontFamily: "'General Sans', sans-serif" }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#resources"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  style={{ fontFamily: "'General Sans', sans-serif" }}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  style={{ fontFamily: "'General Sans', sans-serif" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-gray-400 text-sm" style={{ fontFamily: "'General Sans', sans-serif" }}>
            All rights reserved | Hamza © 2024
          </div>
        </div>
      </div>
    </footer>
  )
}