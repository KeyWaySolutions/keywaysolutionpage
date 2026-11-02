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

      <div className="relative mx-auto max-w-[1300px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">Nosotros</span>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-[-0.02em] sm:text-4xl text-foreground">
            Diseñamos el futuro digital, línea por línea.
          </h2>
          <p className="mt-5 text-pretty text-base font-normal leading-relaxed text-muted-foreground/90">
            En KeyWay Solutions somos un equipo de desarrolladores y estudiantes avanzados
            de Ingeniería en Sistemas. Combinamos la sólida formación analítica y científica
            de la ingeniería de software con la agilidad y flexibilidad de la
            Inteligencia Artificial de última generación. No creamos software
            genérico; diseñamos arquitectura técnica a medida pensada para
            resolver problemas complejos, automatizar operaciones y escalar
            negocios de forma inteligente.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative rounded-[4px] border border-border/80 bg-card/60 p-6 backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:bg-card/80"
            >
              {/* Icon container */}
              <div className="flex size-10 items-center justify-center rounded-[4px] border border-primary/30 bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary/20">
                <pillar.icon className="size-5" aria-hidden="true" />
              </div>

              <h3 className="mt-4 text-base font-medium tracking-[-0.01em] text-foreground sm:text-lg">
                {pillar.title}
              </h3>

              <p className="mt-2.5 text-pretty text-sm font-normal leading-relaxed text-muted-foreground/80">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
