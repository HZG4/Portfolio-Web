"use client"

import { SiteHeader } from "@/components/site-header"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { useState, useRef, useCallback, useEffect } from "react"

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const newX = e.clientX
    const newY = e.clientY

    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    // Schedule update on next animation frame
    rafRef.current = requestAnimationFrame(() => {
      if (lastPositionRef.current.x !== newX || lastPositionRef.current.y !== newY) {
        lastPositionRef.current = { x: newX, y: newY }
        setMousePosition({ x: newX, y: newY })
      }
    })
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col" onMouseMove={handleMouseMove}>
      <SiteHeader />

      <main className="flex-1 flex justify-center px-4">
        <div className="w-full max-w-[60rem] px-4 md:px-8">

          <section className="mt-1 mb-10 flex justify-center">
            <SpotlightCard
              className="w-full"
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
            >
              <div className="p-8">
                <div className="text-left mb-8">
                  <h2 className="text-[24px] font-semibold mb-2" style={{ color: '#ffffffcc', fontFamily: "'General Sans', sans-serif" }}>
                    Contact
                  </h2>
                  <p className="text-[18px] font-medium" style={{ color: 'rgb(170, 170, 170)', fontFamily: "'General Sans', sans-serif" }}>
                    I am always open to new opportunities and collaborations. Feel free to reach out to me.
                  </p>
                </div>
                <form action="https://formspree.io/f/xeoeqpqb" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white text-lg font-medium mb-2"
                        style={{ fontFamily: "'General Sans', sans-serif" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                        style={{ 
                          fontFamily: "'General Sans', sans-serif",
                          backgroundColor: "rgb(29, 29, 29)",
                          border: "none",
                          borderBottom: "1px solid white"
                        }}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white text-lg font-medium mb-2"
                        style={{ fontFamily: "'General Sans', sans-serif" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                        style={{ 
                          fontFamily: "'General Sans', sans-serif",
                          backgroundColor: "rgb(29, 29, 29)",
                          border: "none",
                          borderBottom: "1px solid white"
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white text-lg font-medium mb-2"
                      style={{ fontFamily: "'General Sans', sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                      style={{ 
                        fontFamily: "'General Sans', sans-serif",
                        backgroundColor: "rgb(29, 29, 29)",
                        border: "none",
                        borderBottom: "1px solid white"
                      }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                    style={{ 
                      fontFamily: "'General Sans', sans-serif",
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid white"
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </SpotlightCard>
          </section>
        </div>
      </main>
    </div>
  )
}