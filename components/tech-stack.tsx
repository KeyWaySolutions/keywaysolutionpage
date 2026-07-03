const technologies = [
  ".NET",
  "C#",
  "Angular",
  "SQL Server",
  "TypeScript",
  "OpenAI API",
  "Vercel",
]

export function TechStack() {
  return (
    <section id="tecnologias" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-primary/5 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <span className="text-sm font-medium text-primary">Tecnologías</span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Stack moderno y confiable
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Usamos herramientas de nivel empresarial para construir productos
          rápidos, seguros y mantenibles.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card/70 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_oklch(0.7_0.18_163/0.25)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
