import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TechStack } from "@/components/tech-stack"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBG } from "@/components/animated-bg"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBG />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
