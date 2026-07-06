import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.33_0.03_235/0.25)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.33_0.03_235/0.25)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Software a medida + Inteligencia Artificial
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            En KeyWay Solutions creamos Software a Medida y{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#14b8a6] to-[#10b981] bg-clip-text text-transparent">
              Automatizaciones con IA
            </span>{" "}
            que Hacen Crecer tu Negocio
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Transformamos operaciones manuales en aplicaciones web escalables y
            eficientes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_oklch(0.72_0.12_195/0.45)] transition-all hover:brightness-110 sm:w-auto"
            >
              Agendar Consulta
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
            >
              Ver Soluciones
            </a>
          </div>
        </div>

        {/* code editor preview card */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          {/* Ambient glow */}
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
          
          <div className="relative rounded-2xl border border-border bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-[13px] sm:text-sm leading-relaxed">
            {/* Editor Header / Title bar */}
            <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-3 select-none">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#ff5f56] transition-transform hover:scale-105" />
                <span className="size-3 rounded-full bg-[#ffbd2e] transition-transform hover:scale-105" />
                <span className="size-3 rounded-full bg-[#27c93f] transition-transform hover:scale-105" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">keyWaySolutions.js</span>
              <div className="w-14" />
            </div>

            {/* Editor Content */}
            <div className="p-5 sm:p-6 overflow-x-auto">
              {/* Simulated Code */}
              <div className="space-y-1">
                <div>
                  <span className="text-[#3b82f6] font-semibold">const</span>{" "}
                  <span className="text-[#14b8a6]">keyWaySolutions</span> = {"{"}
                </div>
                <div className="pl-6 border-l border-border/30">
                  <span className="text-muted-foreground">enfoque</span>:{" "}
                  <span className="text-[#10b981]">"Software a medida"</span>,
                </div>
                <div className="pl-6 border-l border-border/30">
                  <span className="text-muted-foreground">tecnologia</span>:{" "}
                  <span className="text-[#10b981]">"Automatizaciones con IA"</span>,
                </div>
                <div className="pl-6 border-l border-border/30">
                  <span className="text-muted-foreground">mision</span>:{" "}
                  <span className="text-[#10b981]">"Hacer crecer tu negocio"</span>,
                </div>
                <div className="pl-6 border-l border-border/30">
                  <span className="text-muted-foreground">desempeno</span>:{" "}
                  <span className="text-[#10b981]">"Máxima eficiencia ⚡"</span>,
                </div>
                <div className="pl-6 border-l border-border/30">
                  <span className="text-muted-foreground">escalable</span>:{" "}
                  <span className="text-[#3b82f6]">true</span>
                </div>
                <div>{"};"}</div>
              </div>

              {/* Console logs */}
              <div className="mt-6 border-t border-border/60 pt-4 space-y-1 text-xs select-none">
                <div className="text-emerald-500/70">
                  // ejecutando sistema...
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span>✓</span>
                  <span>base de datos conectada</span>
                </div>
                <div className="text-[#3b82f6] font-semibold italic">
                  status: ready 🚀
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tags Stack */}
          {/* Tag 1: .NET */}
          <div 
            className="absolute -left-2 md:-left-4 top-[8%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-slow"
            style={{ animationDelay: '0ms' }}
          >
            <span className="size-2 rounded-full bg-[#512bd4]" />
            <span>.NET</span>
          </div>

          {/* Tag 2: C# */}
          <div 
            className="absolute -left-6 md:-left-10 top-[38%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-medium"
            style={{ animationDelay: '1000ms' }}
          >
            <span className="size-2 rounded-full bg-[#178600]" />
            <span>C#</span>
          </div>

          {/* Tag 3: Angular */}
          <div 
            className="absolute -left-4 md:-left-6 top-[68%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-fast"
            style={{ animationDelay: '500ms' }}
          >
            <span className="size-2 rounded-full bg-[#dd0031]" />
            <span>Angular</span>
          </div>

          {/* Tag 4: SQL Server */}
          <div 
            className="absolute left-[10%] md:left-1/4 -bottom-6 z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-medium"
            style={{ animationDelay: '1500ms' }}
          >
            <span className="size-2 rounded-full bg-[#cc292b]" />
            <span>SQL Server</span>
          </div>

          {/* Tag 5: TypeScript */}
          <div 
            className="absolute -right-2 md:-right-4 top-[5%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-fast"
            style={{ animationDelay: '2000ms' }}
          >
            <span className="size-2 rounded-full bg-[#3178c6]" />
            <span>TypeScript</span>
          </div>

          {/* Tag 6: React */}
          <div 
            className="absolute -right-6 md:-right-10 top-[35%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-slow"
            style={{ animationDelay: '800ms' }}
          >
            <span className="size-2 rounded-full bg-[#61dafb]" />
            <span>React</span>
          </div>

          {/* Tag 7: Node.js */}
          <div 
            className="absolute -right-4 md:-right-6 top-[65%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-medium"
            style={{ animationDelay: '1200ms' }}
          >
            <span className="size-2 rounded-full bg-[#339933]" />
            <span>Node.js</span>
          </div>

          {/* Tag 8: Tailwind */}
          <div 
            className="absolute right-[10%] md:right-1/4 -bottom-6 z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-fast"
            style={{ animationDelay: '400ms' }}
          >
            <span className="size-2 rounded-full bg-[#38bdf8]" />
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  )
}
