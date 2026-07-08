"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Nosotros", href: "#nosotros" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            KeyWay{" "}
            <span className="text-[#059669]">
              Solutions
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-lg bg-[#00dfa2] px-4 py-2 text-sm font-semibold text-[#0f172a] shadow-[0_0_20px_rgba(0,223,162,0.4)] transition-all hover:brightness-105 md:inline-flex"
        >
          Contacto
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 md:hidden",
          open ? "max-h-72" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-[#00dfa2] px-3 py-2.5 text-center text-sm font-semibold text-[#0f172a] shadow-[0_0_15px_rgba(0,223,162,0.3)] hover:brightness-105"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  )
}
