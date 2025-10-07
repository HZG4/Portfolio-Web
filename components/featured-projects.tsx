"use client"

import { ProjectCard } from "@/components/ui/project-card"

interface FeaturedProjectsProps {
  mouseX: number
  mouseY: number
}

export function FeaturedProjects({ mouseX, mouseY }: FeaturedProjectsProps) {
  return (
    <section className="mt-16">
      <h2 className="text-center text-[25px] font-normal text-white mb-8 [font-family:'General_Sans',var(--font-geist-sans),system-ui]">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a href="https://gainstack-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            mouseX={mouseX}
            mouseY={mouseY}
            title="GainStack"
            description="AI-powered fitness platform delivering personalized workout and meal plans through real-time conversation."
            imageSrc="/gainstack-ai.png"
            imageAlt="AI web-based platform"
            tags={["nextjs", "reactjs", "shadcn-ui", "convex"]}
          />
        </a>

        <a href="https://corinna-ai-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            mouseX={mouseX}
            mouseY={mouseY}
            title="Corinna AI"
            description="A SaaS platform for chatbot-driven lead generation and email marketing on business websites."
            imageSrc="/corinna-ai.png"
            imageAlt="Analytics Dashboard"
            tags={["nextjs", "reactjs", "shadcn-ui", "neon"]}
          />
        </a>

        <a href="https://sahara-store-pink.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            mouseX={mouseX}
            mouseY={mouseY}
            title="SoleMate - Shoe Store"
            description="A website for a fictional shoe store showcasing a variety of footwear products with detailed descriptions and images."
            imageSrc="/solemate-ecom.png"
            imageAlt="SoleMate - Shoe Store"
            tags={["nodejs", "typescript","nextjs", "reactjs"]}
          />
        </a>

        <a href="https://pantry-genie-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            mouseX={mouseX}
            mouseY={mouseY}
            title="Pantry Genie"
            description="AI-powered recipe recommender that suggests dishes based on your available ingredients."
            imageSrc="/pantry-genie.png"
            imageAlt="AI Chatbot"
            tags={["nextjs", "reactjs", "shadcn-ui", "supabase"]}
          />
        </a>
      </div>
    </section>
  )
}
