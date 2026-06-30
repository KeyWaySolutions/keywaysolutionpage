import { Code2, Globe, Share2, Mail } from "lucide-react"

const socials = [
  { label: "Sitio web", icon: Globe, href: "#" },
  { label: "Redes sociales", icon: Share2, href: "#" },
  { label: "Email", icon: Mail, href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Uruguay<span className="text-primary">Tech</span>
          </span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Uruguay Tech. Todos los derechos
          reservados.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <social.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
