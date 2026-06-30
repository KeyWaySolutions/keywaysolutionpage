import { Layers, Bot, Workflow } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Aplicaciones Web & SaaS",
    description:
      "Sistemas escalables utilizando .NET Core y Angular, diseñados para crecer junto a tu negocio.",
  },
  {
    icon: Bot,
    title: "Automatización & Agentes IA",
    description:
      "Agentes inteligentes de WhatsApp y automatización de flujos de trabajo que ahorran horas de trabajo manual.",
  },
  {
    icon: Workflow,
    title: "Optimización de Procesos",
    description:
      "Digitalización de tareas manuales para comercios y empresas locales, simple y a medida.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Servicios</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Soluciones que impulsan tu operación
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Combinamos ingeniería de software sólida con inteligencia artificial
            para resolver problemas reales.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-border bg-card/60 p-7 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
