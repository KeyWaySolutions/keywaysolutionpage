"use client"

import { useState } from "react"
import { Code2, Cpu, Workflow, ChevronDown } from "lucide-react"

const services = [
  {
    id: "01",
    icon: Code2,
    title: "Desarrollo Web a Medida",
    description:
      "Soluciones digitales robustas, escalables y optimizadas para potenciar tu presencia en línea y eficiencia operativa.",
    points: [
      {
        title: "Landing Pages",
        detail: "Diseños de alto impacto orientados 100% a la conversión de visitas en clientes.",
      },
      {
        title: "Webs Institucionales",
        detail: "Sitios corporativos completos para reflejar la seriedad y los valores de tu marca.",
      },
      {
        title: "Sistemas de Gestión",
        detail: "Plataformas personalizadas (ERPs/CRMs) diseñadas para automatizar y controlar los procesos internos de tu negocio.",
      },
    ],
  },
  {
    id: "02",
    icon: Cpu,
    title: "Sistemas de Gestión Inteligentes (IA Integrada)",
    description:
      "Llevamos tu software administrativo al siguiente nivel integrando modelos avanzados de Inteligencia Artificial.",
    points: [
      {
        title: "Toma de Decisiones Automatizada",
        detail: "Implementación de algoritmos predictivos para analizar datos históricos y sugerir los mejores caminos comerciales.",
      },
      {
        title: "Análisis de Datos Avanzado",
        detail: "Tableros inteligentes que transforman datos crudos en reportes e insights estratégicos en tiempo real.",
      },
      {
        title: "Optimización de Procesos",
        detail: "Automatización de flujos de trabajo complejos dentro de tu propio sistema de gestión.",
      },
    ],
  },
  {
    id: "03",
    icon: Workflow,
    title: "Automatización con Inteligencia Artificial",
    description:
      "Diseñamos e implementamos agentes y flujos de trabajo autónomos para reducir tareas repetitivas y maximizar la productividad.",
    points: [
      {
        title: "Agentes de IA y Chatbots",
        detail: "Sistemas conversacionales avanzados entrenados con la información de tu empresa para atención al cliente 24/7.",
      },
      {
        title: "Automatización de Workflows",
        detail: "Conexión de herramientas y aplicaciones para que trabajen solas mediante pipelines inteligentes.",
      },
      {
        title: "Procesamiento de Información",
        detail: "Extracción, clasificación y análisis automático de documentos, correos y bases de datos.",
      },
    ],
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      {/* ambient glow subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1300px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">Servicios</span>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-[-0.02em] sm:text-4xl text-foreground">
            Soluciones que impulsan tu operación
          </h2>
          <p className="mt-4 text-pretty font-normal leading-relaxed text-muted-foreground">
            Combinamos ingeniería de software sólida con inteligencia artificial
            para resolver problemas reales.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl flex flex-col gap-3">
          {services.map((service, index) => {
            const isActive = activeIndex === index
            return (
              <article
                key={service.title}
                className={`group relative rounded-[4px] border bg-card/60 transition-all duration-200 ${
                  isActive
                    ? "border-primary/40 bg-card/90 shadow-[0_0_24px_oklch(0.70_0.16_160/0.06)]"
                    : "border-border/80 hover:border-border hover:bg-card/75"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Header / Trigger */}
                <div className="flex cursor-pointer items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div
                      className={`flex size-10 items-center justify-center rounded-[4px] border transition-all duration-200 ${
                        isActive
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border/80 bg-muted/40 text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <service.icon className="size-4.5" aria-hidden="true" />
                    </div>

                    <div className="flex items-baseline gap-2.5">
                      <span
                        className={`font-mono text-xs font-normal tracking-wide transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-muted-foreground/60"
                        }`}
                      >
                        {service.id}
                      </span>
                      <h3 className="text-base font-medium tracking-[-0.01em] sm:text-lg text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`flex size-7 items-center justify-center rounded-[4px] border transition-all duration-200 ${
                      isActive
                        ? "rotate-180 border-primary/30 text-primary bg-primary/10"
                        : "border-border/80 bg-background/50 text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <ChevronDown className="size-3.5" aria-hidden="true" />
                  </span>
                </div>

                {/* Smooth Expandable Content */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/70 p-6">
                      {/* Description */}
                      <p className="pl-0 sm:pl-14 text-pretty text-sm font-normal leading-relaxed text-muted-foreground/90">
                        {service.description}
                      </p>

                      {/* Key Points */}
                      <ul className="mt-5 space-y-3.5 pl-0 sm:pl-14">
                        {service.points.map((point) => (
                          <li
                            key={point.title}
                            className="group/item flex items-start gap-3 text-pretty"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-[1px] bg-primary transition-transform duration-200 group-hover/item:scale-125" />
                            <div className="text-sm leading-relaxed">
                              <span className="font-medium text-foreground">
                                {point.title}:{" "}
                              </span>
                              <span className="text-muted-foreground/80">
                                {point.detail}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
