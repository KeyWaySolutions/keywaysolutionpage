"use client"

import { useState } from "react"
import { MapPin, Mail, MessageCircle, Send, Check } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setForm({ nombre: "", email: "", mensaje: "" })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* contact info */}
        <div>
          <span className="text-sm font-medium text-primary">Contacto</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Contanos qué necesitás y te respondemos a la brevedad. Sin
            compromiso.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-card text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Ubicación</p>
                <p className="font-medium">Concepción del Uruguay, Entre Ríos</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-card text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:keywayscontacto@gmail.com"
                  className="font-medium transition-colors hover:text-primary"
                >
                  keywayscontacto@gmail.com
                </a>
              </div>
            </li>
          </ul>

          <a
            href="https://wa.me/5493442000000?text=Hola%20KeyWay%20Solutions%2C%20quiero%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-[#06251a] shadow-[0_0_30px_#25D36655] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_#25D36677]"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Chatear por WhatsApp
          </a>
        </div>

        {/* form */}
        <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                placeholder="Contanos sobre tu proyecto..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_oklch(0.66_0.17_163/0.4)] transition-all hover:brightness-110"
            >
              {sent ? (
                <>
                  <Check className="size-4" />
                  ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
