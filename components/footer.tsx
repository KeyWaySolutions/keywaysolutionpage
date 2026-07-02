import { Globe, Share2, Mail } from "lucide-react"

const socials = [
  { label: "Sitio web", icon: Globe, href: "#" },
  { label: "Redes sociales", icon: Share2, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:keywayscontacto@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1466b5] via-[#149aa6] to-[#2bb673] text-base font-extrabold tracking-tight text-white">
            KWS
          </span>
          <span className="text-lg font-semibold tracking-tight">
            KeyWay{" "}
            <span className="bg-gradient-to-r from-[#1e78c2] via-[#17a3ac] to-[#2bb673] bg-clip-text text-transparent">
              Solutions
            </span>
          </span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KeyWay Solutions. Todos los derechos
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
