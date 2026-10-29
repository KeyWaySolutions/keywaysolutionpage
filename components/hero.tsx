"use client"

import Hyperspeed from "@/components/ui/Hyperspeed"

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

      {/* Centered KWS Isotype / Logo with subtle elevation and technological presence */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center select-none pointer-events-auto">
        <div className="relative group">
          {/* Subtle ambient halo in KWS Emerald and Navy */}
          <div 
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#10b981]/25 via-[#0e5ea5]/20 to-[#14b8a6]/25 blur-3xl opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 pointer-events-none" 
          />
          
          {/* Elevated glass container for KWS logo */}
          <div className="relative flex items-center justify-center rounded-[8px] border border-white/10 bg-card/40 p-6 sm:p-8 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.18)] transition-transform duration-500 hover:scale-[1.03]">
            <img
              src="/kws-icon.png"
              alt="KeyWay Solutions"
              className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] brightness-110"
            />
          </div>
        </div>

        {/* Clean KWS Brand Typography */}
        <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
          KeyWay{" "}
          <span className="bg-gradient-to-r from-[#3b82f6] via-[#14b8a6] to-[#10b981] bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground/80">
          Software a Medida & Automatizaciones con IA
        </p>

        {/* Interactive guidance tag */}
        <div className="mt-10 flex items-center gap-2 rounded-[4px] border border-border/80 bg-card/60 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          <span>Haz clic y arrastra para interactuar con Hyperspeed</span>
        </div>
      </div>
    </section>
  )
}
