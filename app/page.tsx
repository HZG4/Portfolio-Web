"use client"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useState, useRef, useCallback, useEffect } from "react"
import LogoLoop from "@/components/LogoLoop.jsx"
import { ReactIcon } from "@/components/icons/ReactIcon"
import { NextJSIcon } from "@/components/icons/NextJSIcon"
import { TailwindIcon } from "@/components/icons/TailwindIcon"
import { VercelIcon } from "@/components/icons/VercelIcon"
import { GithubIcon } from "@/components/icons/GithubIcon"
import { DockerIcon } from "@/components/icons/DockerIcon"
import { PrismaIcon } from "@/components/icons/PrismaIcon"
import { SupabaseIcon } from "@/components/icons/SupabaseIcon"
import { StripeIcon } from "@/components/icons/StripeIcon"
import { TypeScriptIcon } from "@/components/icons/TypeScriptIcon"
import { TensorFlowIcon } from "@/components/icons/TensorFlowIcon"
import { PyTorchIcon } from "@/components/icons/PyTorchIcon"
import { PythonMLIcon } from "@/components/icons/PythonMLIcon"
import { ScikitLearnIcon } from "@/components/icons/ScikitLearnIcon"
import { KerasIcon } from "@/components/icons/KerasIcon"
import { NumPyIcon } from "@/components/icons/NumPyIcon"
import { PandasIcon } from "@/components/icons/PandasIcon"
import { JupyterIcon } from "@/components/icons/JupyterIcon"
import { OpenCVIcon } from "@/components/icons/OpenCVIcon"
import { FeaturedProjects } from "@/components/featured-projects"
import TextType from "@/components/TextType.jsx"

export default function Home() {
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

      <main className="flex-1 flex justify-center px-4 py-6">
        <div className="w-full max-w-[60rem] px-4 md:px-8">
          <div className="text-center [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
            <TextType 
              text="Hi, I'm Hamza" 
              className="font-bold text-[60px] leading-tight text-white tracking-[3px]"
              loop={false}
            />
            <p className="mt-4 text-[24px] text-[#9BA1A6]">Software-Developer based in Pakistan.</p>
          </div>

          <section className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 [grid-auto-rows:140px] md:[grid-auto-rows:160px]">
              <SpotlightCard className="row-span-2" innerPaddingClassName="p-0" mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <div className="h-full w-full flex flex-col gap-3.5">
                  {/* Profile picture */}
                  <div className="flex-1 overflow-hidden rounded-t-[13px] pt-7 px-7 md:pt-9 md:px-9">
                    <Image
                      src="/website-photo.jpg"
                      alt="Profile photo"
                      width={1200}
                      height={1600}
                      priority
                      className="h-full w-full object-contain rounded-[10px] md:rounded-[12px]"
                    />
                  </div>
                  
                  {/* Social logos in flex row */}
                  <div className="flex items-center justify-between pb-4 px-7 md:pb-6 md:px-9">
                    <a
                      href="https://github.com/HZG4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-white rounded-full w-10 h-10 transition-all hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-transparent"
                    >
                      <Github className="w-5 h-5 text-black transition-all hover:w-[22px] hover:h-[22px]" />
                    </a>
                    <a
                      href="https://x.com/mhamzaghafoor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-white rounded-full w-10 h-10 transition-all hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-transparent"
                    >
                      <Twitter className="w-5 h-5 text-black transition-all hover:w-[22px] hover:h-[22px]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hamza-ghafoor-a2247022a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-white rounded-full w-10 h-10 transition-all hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-transparent"
                    >
                      <Linkedin className="w-5 h-5 text-black transition-all hover:w-[22px] hover:h-[22px]" />
                    </a>
                    <a
                      href="https://www.kaggle.com/hamzaghafoor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-white rounded-full w-10 h-10 transition-all hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-transparent"
                    >
                      <svg className="w-5 h-5 text-black transition-all hover:w-[22px] hover:h-[22px]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <div className="h-full w-full flex flex-col items-center justify-center text-center">
                  <p className="text-[24px] font-semibold" style={{ color: '#ffffffcc', fontFamily: "'General Sans', sans-serif" }}>
                    Intern @
                  </p>
                  <p className="text-[18px] font-medium mt-1" style={{ color: 'rgb(170, 170, 170)', fontFamily: "'General Sans', sans-serif" }}>
                    fantechlabs.io
                  </p>
                </div>
              </SpotlightCard>
              <SpotlightCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <div className="h-full w-full flex flex-col items-center justify-center text-center">
                  <p className="text-[18px] font-medium" style={{ color: 'rgb(170, 170, 170)', fontFamily: "'General Sans', sans-serif" }}>
                    Certified
                  </p>
                  <p className="text-[24px] font-semibold mt-1" style={{ color: '#ffffffcc', fontFamily: "'General Sans', sans-serif" }}>
                    Data Scientist
                  </p>
                </div>
              </SpotlightCard>
              <SpotlightCard mouseX={mousePosition.x} mouseY={mousePosition.y} className="group">
                <a 
                  href="/resume.pdf" 
                  download="resume.pdf"
                  className="h-full w-full flex items-center justify-center cursor-pointer"
                >
                  <div className="flex items-center gap-10">
                    <div className="flex flex-col gap-1">
                      <p style={{ color: '#ffffffcc', fontSize: '24px', fontFamily: "'General Sans', sans-serif", fontWeight: 600, lineHeight: 1 }}>
                        Download
                      </p>
                      <p style={{ color: '#ffffffcc', fontSize: '24px', fontFamily: "'General Sans', sans-serif", fontWeight: 600, lineHeight: 1 }}>
                        Resume
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#fff" viewBox="0 0 16 16" className="transition-transform duration-300 group-hover:-rotate-45">
                      <path fill="#ffffffb9" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path>
                    </svg>
                  </div>
                </a>
              </SpotlightCard>
              <SpotlightCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <div className="h-full w-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-baseline gap-2">
                    <p style={{ color: '#fff', fontSize: '2.7rem', fontFamily: "'General Sans', sans-serif", fontWeight: 600, margin: 0, letterSpacing: 0 }}>
                      2
                    </p>
                    <p style={{ color: '#fff', fontSize: '1.2rem', fontFamily: "'General Sans', sans-serif", fontWeight: 500, margin: 0, letterSpacing: '1px' }}>
                      years
                    </p>
                  </div>
                  <p className="mt-1" style={{ color: 'rgb(170, 170, 170)', fontSize: '18px', fontWeight: 500, margin: 0, fontFamily: "'General Sans', sans-serif" }}>
                    Experience
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-left text-[25px] font-normal text-white mb-8 [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
              ◉&nbsp;&nbsp;&nbsp;&nbsp;Web Development
            </h2>
            <LogoLoop 
            logos={[
              { node: <ReactIcon />, title: 'React' },
              { node: <NextJSIcon />, title: 'Next.js' },
              { node: <TailwindIcon />, title: 'Tailwind CSS' },
              { node: <TypeScriptIcon />, title: 'TypeScript' },
              { node: <VercelIcon />, title: 'Vercel' },
              { node: <GithubIcon />, title: 'GitHub' },
              { node: <DockerIcon />, title: 'Docker' },
              { node: <PrismaIcon />, title: 'Prisma' },
              { node: <SupabaseIcon />, title: 'Supabase' },
              { node: <StripeIcon />, title: 'Stripe' },
              { node: <ReactIcon />, title: 'React' },
              { node: <NextJSIcon />, title: 'Next.js' },
              { node: <TailwindIcon />, title: 'Tailwind CSS' },
              { node: <TypeScriptIcon />, title: 'TypeScript' },
              { node: <VercelIcon />, title: 'Vercel' },
              { node: <GithubIcon />, title: 'GitHub' },
              { node: <DockerIcon />, title: 'Docker' },
              { node: <PrismaIcon />, title: 'Prisma' },
              { node: <SupabaseIcon />, title: 'Supabase' },
              { node: <StripeIcon />, title: 'Stripe' },
            ]}
              speed={50}
              direction="right"
              logoHeight={40}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="rgba(0, 0, 0, 0)"
              scaleOnHover={true}
            />
          </section>

          <section className="mt-16">
            <h2 className="text-right text-[25px] font-normal text-white mb-8 [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
              Machine Learning&nbsp;&nbsp;&nbsp;&nbsp;◉
            </h2>
            <LogoLoop 
              logos={[
                { node: <TensorFlowIcon />, title: 'TensorFlow' },
                { node: <PyTorchIcon />, title: 'PyTorch' },
                { node: <PythonMLIcon />, title: 'Python' },
                { node: <ScikitLearnIcon />, title: 'Scikit-learn' },
                { node: <KerasIcon />, title: 'Keras' },
                { node: <NumPyIcon />, title: 'NumPy' },
                { node: <PandasIcon />, title: 'Pandas' },
                { node: <JupyterIcon />, title: 'Jupyter' },
                { node: <OpenCVIcon />, title: 'OpenCV' }
              ]}
              speed={50}
              direction="left"
              logoHeight={40}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="rgba(0, 0, 0, 0)"
              scaleOnHover={true}
            />
          </section>

          <FeaturedProjects mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </div>
      </main>
    </div>
  );
}
