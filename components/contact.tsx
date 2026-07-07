"use client"

import { useState } from "react"
import { Send, Check, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return

    try {
      setLoading(true)

      const templateParams = {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
        from_name: form.nombre,
        from_email: form.email,
        message: form.mensaje,
      }

      const autoReplyParams = {
        nombre: form.nombre,
        email: form.email,
        to_name: form.nombre,
        to_email: form.email,
        from_name: "KeyWay Solutions",
        reply_to: "keywayscontacto@gmail.com"
      }

      // Disparar ambas plantillas en paralelo
      await Promise.all([
        emailjs.send(
          "service_qygg8mt",
          "template_09qrqwe", // Notificación Equipo
          templateParams,
          "E7FvfI4MEqw9_rACi"
        ),
        emailjs.send(
          "service_qygg8mt",
          "template_4jo1ayn", // Auto-Reply Cliente
          autoReplyParams,
          "E7FvfI4MEqw9_rACi"
        )
      ])

      setSent(true)
      setForm({ nombre: "", email: "", mensaje: "" })
      setTimeout(() => setSent(false), 5000)
    } catch (error) {
      console.error("Error al enviar el email:", error)
      alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      {/* Glow background sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <div>
          <span className="text-sm font-medium text-primary">Contacto</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Contanos qué necesitás y te respondemos a la brevedad. Sin compromiso.
          </p>
        </div>

        {/* Form container */}
        <div className="mt-10 text-left rounded-2xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur">
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
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_oklch(0.72_0.12_195/0.4)] transition-all hover:brightness-110 disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Enviando...
                </>
              ) : sent ? (
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
