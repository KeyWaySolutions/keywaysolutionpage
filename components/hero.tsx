import { ArrowRight, Activity, Bot, Cpu, Sparkles, TrendingUp } from "lucide-react"

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

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Software a medida + Inteligencia Artificial
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            En KeyWay Solutions creamos Software a Medida y{" "}
            <span className="bg-gradient-to-r from-[#1d5fb5] via-[#04906e] to-[#02a569] bg-clip-text text-transparent">
              Automatizaciones con IA
            </span>{" "}
            que Hacen Crecer tu Negocio
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Transformamos operaciones manuales en aplicaciones web escalables y
            eficientes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row w-full">
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_oklch(0.66_0.17_163/0.45)] transition-all hover:brightness-110 sm:w-auto"
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
      </div>
    </section>
  )
}
