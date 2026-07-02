import { PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: PenTool,
    title: "Diseño",
    description:
      "Entendemos tu operación y diseñamos la solución ideal junto a tu equipo.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description:
      "Construimos con código de calidad, iterando rápido y mostrando avances reales.",
  },
  {
    icon: Rocket,
    title: "Despliegue con Vercel",
    description:
      "Lanzamos a producción con infraestructura escalable y monitoreo continuo.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-sm font-medium text-primary">Quiénes Somos</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Un equipo ágil con tecnología de punta
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            En KeyWay Solutions somos un equipo de desarrollo ágil enfocado en
            acercar tecnología de vanguardia a empresas locales y de toda la
            región. Combinamos experiencia en ingeniería de software con las
            últimas herramientas de inteligencia artificial.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trabajamos cerca de cada cliente, entendiendo sus procesos para
            entregar soluciones que realmente generan impacto y resultados
            medibles.
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-lg font-semibold">Nuestra metodología</h3>
          <ol className="relative space-y-8 border-l border-border pl-8">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-[0_0_16px_oklch(0.72_0.12_195/0.3)]">
                  <step.icon className="size-4" aria-hidden="true" />
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary">
                    0{i + 1}
                  </span>
                  <h4 className="font-semibold">{step.title}</h4>
                </div>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
