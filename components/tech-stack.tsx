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
      <div className="mx-auto max-w-[1300px] px-6 text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-primary">Tecnologías</span>
        <h2 className="mt-3 text-balance text-3xl font-medium tracking-[-0.02em] sm:text-4xl text-foreground">
          Stack moderno y confiable
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty font-normal leading-relaxed text-muted-foreground/90">
          Usamos herramientas de nivel empresarial para construir productos
          rápidos, seguros y mantenibles.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-[4px] border border-border/80 bg-card/60 px-4 py-2 font-mono text-xs sm:text-sm font-normal text-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary hover:bg-card/85"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
