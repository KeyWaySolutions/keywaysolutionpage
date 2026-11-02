"use client"

import Hyperspeed from "@/components/ui/Hyperspeed"
import { KWSLogo } from "@/components/icons/KWSLogo"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] sm:min-h-screen w-full items-center justify-center overflow-hidden pt-20"
    >
      {/* Hyperspeed Interactive Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          curve="gentle"
          curvature={0.85}
          speed={1.2}
          boost={2.5}
          lanes={3}
          roadWidth={9}
          medianWidth={2}
          density={45}
          trailLength={1.3}
          lightSize={1.1}
          poles={24}
          poleHeight={1.2}
          dust={140}
          glow={0.8}
          reflections={0.6}
          steer={0.25}
          tailColors={["#10b981", "#059669", "#34d399", "#14b8a6"]}
          headColors={["#0284c7", "#0e5ea5", "#3b82f6", "#14b8a6"]}
          poleColors={["#10b981", "#0e5ea5"]}
          roadColor="#070b12"
          roadOpacity={0.15}
          lineColor="#162032"
          background="transparent"
          theme="dark"
          interactive={true}
          className="size-full"
        />
      </div>

      {/* Subtle bottom fade transition into the rest of the page */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent z-10" 
        aria-hidden="true" 
      />

      {/* Centered KWS Vector Logo & Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center select-none pointer-events-auto">
        <div className="relative group flex items-center justify-center w-full max-w-[290px] xs:max-w-[340px] sm:max-w-md md:max-w-lg lg:max-w-xl px-2 py-1 overflow-visible">
          {/* Subtle ambient diffuse glow in KWS colors for contrast against hyperspeed light trails */}
          <div 
            aria-hidden="true"
            className="absolute -inset-8 sm:-inset-12 rounded-full bg-gradient-to-r from-[#0e5ea5]/25 via-[#14b8a6]/20 to-[#21B176]/25 blur-3xl opacity-75 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 pointer-events-none" 
          />
          
          {/* Native Vector SVG Logo with transparent background and soft glow */}
          <KWSLogo 
            className="w-full h-auto overflow-visible drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)] drop-shadow-[0_0_24px_rgba(33,177,118,0.25)] transition-transform duration-500 hover:scale-[1.02]"
            aria-label="KeyWay Solutions Logo"
          />
        </div>

        {/* Slogan with clean typography, medium weight, high contrast and subtle dark drop-shadow */}
        <h1 className="mt-7 sm:mt-8 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          El camino a tu solución
        </h1>

        {/* Subtle technical description line */}
        <p className="mt-2.5 text-xs font-mono uppercase tracking-widest text-zinc-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Software a Medida & Automatizaciones con IA
        </p>

        {/* Cursor-inspired Single Protagonist CTA */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#00b074] hover:bg-[#00c882] px-6 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_0_24px_rgba(0,176,116,0.3)] transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
          >
            <span>Agendar Consulta</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Discreet guidance indicator closer to the bottom without heavy frame */}
        <div className="mt-12 sm:mt-16 flex items-center gap-2 font-mono text-[11px] text-zinc-500 opacity-60 hover:opacity-100 transition-opacity cursor-default select-none">
          <span className="size-1 rounded-full bg-[#00b074] animate-pulse" />
          <span>Haz clic y arrastra para interactuar con Hyperspeed</span>
        </div>
      </div>
    </section>
  )
}
