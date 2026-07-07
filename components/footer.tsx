import { Globe, Share2, Mail } from "lucide-react"

function Instagram(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const socials = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/keyway_solutions?igsh=aXBheWR4N3Q1c3Zy",
  },
  { label: "Sitio web", icon: Globe, href: "#" },
  { label: "Redes sociales", icon: Share2, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:keywayscontacto@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src="/kws-icon.png"
            alt="KWS Logo"
            className="h-8 w-auto object-contain brightness-110 contrast-105"
          />
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
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:text-primary hover:shadow-md hover:shadow-primary/10"
            >
              <social.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
