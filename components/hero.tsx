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
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.32_0.02_265/0.25)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.32_0.02_265/0.25)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Software a medida + Inteligencia Artificial
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Creamos Software a Medida y{" "}
            <span className="text-primary">Automatizaciones con IA</span> que
            Hacen Crecer tu Negocio
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Transformamos operaciones manuales en aplicaciones web escalables y
            eficientes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_oklch(0.7_0.18_235/0.45)] transition-all hover:brightness-110 sm:w-auto"
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

        {/* dashboard preview card */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border bg-card/80 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Activity className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium">Panel de Operaciones</p>
                  <p className="text-xs text-muted-foreground">Tiempo real</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-chart-4/15 px-2.5 py-1 text-xs font-medium text-chart-4">
                <span className="size-1.5 rounded-full bg-chart-4" />
                Activo
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="rounded-xl border border-border bg-background/50 p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="size-4 text-primary" aria-hidden="true" />
                  <span className="text-xs">Eficiencia</span>
                </div>
                <p className="mt-2 text-2xl font-semibold">+47%</p>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bot className="size-4 text-chart-2" aria-hidden="true" />
                  <span className="text-xs">Tareas IA</span>
                </div>
                <p className="mt-2 text-2xl font-semibold">1.284</p>
              </div>
            </div>

            {/* faux chart */}
            <div className="rounded-xl border border-border bg-background/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Procesos automatizados
                </span>
                <Cpu className="size-4 text-primary" aria-hidden="true" />
              </div>
              <div className="mt-4 flex h-20 items-end gap-1.5">
                {[40, 55, 35, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
