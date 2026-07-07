import { Terminal, Brain, Zap } from "lucide-react"

const pillars = [
  {
    icon: Terminal,
    title: "Formación en Ingeniería",
    description:
      "Abordamos cada desafío con la rigurosidad y estructura que nos brinda la ingeniería de sistemas, garantizando código limpio, bases de datos optimizadas y arquitecturas escalables.",
  },
  {
    icon: Brain,
    title: "ADN en Inteligencia Artificial",
    description:
      "No solo desarrollamos sistemas; integramos flujos autónomos y modelos predictivos para que el software de tu empresa tome decisiones por ti.",
  },
  {
    icon: Zap,
    title: "Agilidad y Enfoque Boutique",
    description:
      "Al ser un equipo dinámico, trabajamos codo a codo con cada cliente. Nos involucramos a fondo en el negocio para transformar ideas complejas en soluciones sencillas, rápidas y eficientes.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle ambient glow behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium text-primary">Nosotros</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Diseñamos el futuro digital, línea por línea.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
            En KeyWay Solutions somos un equipo de desarrolladores y estudiantes avanzados
            de Ingeniería en Sistemas. Combinamos la sólida formación analítica y científica
            de la ingeniería de software con la agilidad y flexibilidad de la
            Inteligencia Artificial de última generación. No creamos software
            genérico; diseñamos arquitectura técnica a medida pensada para
            resolver problemas complejos, automatizar operaciones y escalar
            negocios de forma inteligente.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/75 hover:shadow-[0_0_30px_oklch(0.72_0.12_195/0.1)]"
            >
              {/* Icon container */}
              <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_15px_oklch(0.72_0.12_195/0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/20">
                <pillar.icon className="size-6" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {pillar.title}
              </h3>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
