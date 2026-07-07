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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
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

        <div className="mx-auto mt-14 max-w-3xl flex flex-col gap-4">
          {services.map((service, index) => {
            const isActive = activeIndex === index
            return (
              <article
                key={service.title}
                className={`group relative rounded-2xl border bg-card/40 transition-all duration-300 ${
                  isActive
                    ? "border-primary/50 bg-card/85 shadow-[0_0_30px_oklch(0.72_0.12_195/0.08)]"
                    : "border-border hover:border-primary/30 hover:bg-card/60"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Header / Trigger */}
                <div className="flex cursor-pointer items-center justify-between p-6 sm:p-7">
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Icon container */}
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-primary/30 bg-primary/10 text-primary shadow-[0_0_15px_oklch(0.72_0.12_195/0.15)]"
                          : "border-border bg-muted/40 text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <service.icon className="size-5" aria-hidden="true" />
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground/50"
                        }`}
                      >
                        {service.id}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`flex size-8 items-center justify-center rounded-full border border-border bg-background/50 transition-all duration-300 ${
                      isActive
                        ? "rotate-180 border-primary/30 text-primary bg-primary/5 shadow-[0_0_10px_oklch(0.72_0.12_195/0.1)]"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <ChevronDown className="size-4" aria-hidden="true" />
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
                    <div className="border-t border-border/50 px-6 pb-7 pt-5 sm:px-7 sm:pb-8">
                      {/* Description */}
                      <p className="pl-0 sm:pl-15 text-pretty text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Key Points */}
                      <ul className="mt-6 space-y-4 pl-0 sm:pl-15">
                        {service.points.map((point) => (
                          <li
                            key={point.title}
                            className="group/item flex items-start gap-3 text-pretty"
                          >
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover/item:scale-125 shadow-[0_0_8px_oklch(0.72_0.12_195/0.6)]" />
                            <div className="leading-relaxed">
                              <span className="font-semibold text-foreground">
                                {point.title}:{" "}
                              </span>
                              <span className="text-muted-foreground/90">
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
