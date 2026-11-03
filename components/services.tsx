"use client"

import { useState } from "react"
import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  Database,
  Bot,
  Workflow,
  BrainCircuit,
  FileText,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  BarChart3,
  Users,
  Terminal,
  Lock,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Zap,
  Globe,
  Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceItem {
  id: string
  group: "01 DESARROLLO WEB A MEDIDA" | "02 AUTOMATIZACIONES & IA"
  title: string
  subtitle: string
  previewSlug: string
  specFile: string
  icon: typeof LayoutTemplate
  objective: string
  body: string
  highlights: string[]
  cliLogs: {
    command: string
    status: string
    metricLabel: string
    metricValue: string
  }
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "landing-page",
    group: "01 DESARROLLO WEB A MEDIDA",
    title: "Landing Page",
    subtitle: "Captación & Conversión",
    previewSlug: "landing-page",
    specFile: "especificacion-servicio.md",
    icon: LayoutTemplate,
    objective: "Captar clientes rápido y al menor costo posible.",
    body: "Es una página enfocada en una sola cosa: lograr que quien entra, compre o deje sus datos de contacto. Es la herramienta perfecta (y obligatoria) si vas a invertir en publicidad en redes sociales o Google, porque transforma las visitas en ventas directas.",
    highlights: [
      "Estructura persuasiva orientada 100% a conversión",
      "Velocidad de carga instantánea para campañas Ads",
      "Integración directa con WhatsApp, CRM y formularios",
    ],
    cliLogs: {
      command: "kws optimize --target=conversion-funnel",
      status: "LCP 0.6s · Core Web Vitals 100/100",
      metricLabel: "Conv. Rate",
      metricValue: "+14.8% Activo",
    },
  },
  {
    id: "web-corporativa",
    group: "01 DESARROLLO WEB A MEDIDA",
    title: "Web Corporativa",
    subtitle: "Autoridad & Confianza B2B",
    previewSlug: "web-corporativa",
    specFile: "especificacion-servicio.md",
    icon: Building2,
    objective: "Proyectar profesionalismo y generar confianza inmediata.",
    body: "¿Por qué elegirla? Es la oficina digital y la carta de presentación de tu marca. Demuestra la seriedad de tu empresa, explica tus servicios con claridad y convence a futuros clientes (especialmente B2B) de que eres la autoridad en tu sector.",
    highlights: [
      "Diseño institucional sólido alineado a tu identidad",
      "Arquitectura SEO técnica para posicionamiento orgánico",
      "Secciones estratégicas para alianzas y clientes B2B",
    ],
    cliLogs: {
      command: "kws audit --authority-index --seo-b2b",
      status: "SSL/TLS Strict · SEO Score 99/100",
      metricLabel: "Trust Score",
      metricValue: "99.4% Verificado",
    },
  },
  {
    id: "ecommerce",
    group: "01 DESARROLLO WEB A MEDIDA",
    title: "E-commerce",
    subtitle: "Ventas 24/7 & Stock",
    previewSlug: "ecommerce",
    specFile: "especificacion-servicio.md",
    icon: ShoppingCart,
    objective: "Vender tus productos las 24 horas, todos los días.",
    body: "Es un local que nunca cierra. Tus clientes pueden ver tu catálogo, pagar y organizar el envío por su cuenta de forma 100% segura. Automatizamos todo el proceso de venta y stock para que tu negocio facture incluso mientras duermes.",
    highlights: [
      "Pasarelas de pago seguras y cálculo de envíos en vivo",
      "Sincronización automática de catálogo e inventario",
      "Checkout sin fricción optimizado para móviles",
    ],
    cliLogs: {
      command: "kws sync --catalog --payment-gateways",
      status: "Checkout Activo · Stock Sync Realtime",
      metricLabel: "Uptime Tienda",
      metricValue: "24/7 Online",
    },
  },
  {
    id: "sistemas-gestion",
    group: "01 DESARROLLO WEB A MEDIDA",
    title: "Sistemas de Gestión a Medida",
    subtitle: "ERP / CRM Operativo",
    previewSlug: "sistemas-gestion",
    specFile: "especificacion-servicio.md",
    icon: Database,
    objective: "Tomar el control total de tu negocio y ahorrar tiempo.",
    body: "Si tu día a día es un caos de planillas compartidas, mensajes perdidos y tareas repetitivas, creamos un sistema (CRM/ERP) exclusivo para ti. Centraliza tu información, agiliza el trabajo de tu equipo y elimina los costosos errores humanos.",
    highlights: [
      "Reemplazo definitivo de planillas dispersas por un núcleo único",
      "Roles de usuario, permisos y trazabilidad operativa total",
      "Paneles y reportes gerenciales en tiempo real",
    ],
    cliLogs: {
      command: "kws cluster --erp-core --zero-error-mode",
      status: "DB Synced · 0 Errores Manuales",
      metricLabel: "Ahorro Operativo",
      metricValue: "-68% Tiempo",
    },
  },
  {
    id: "agentes-ia",
    group: "02 AUTOMATIZACIONES & IA",
    title: "Agentes de IA & Chatbots",
    subtitle: "Atención & Ventas 24/7",
    previewSlug: "agentes-ia",
    specFile: "especificacion-servicio.md",
    icon: Bot,
    objective: "Atender, calificar y vender las 24 horas sin demoras.",
    body: "Sistemas conversacionales avanzados entrenados con la información real de tu empresa para atención al cliente y ventas 24/7. Responden consultas complejas en WhatsApp y web, califican prospectos, agendan reuniones y derivan a tu equipo solo cuando es necesario.",
    highlights: [
      "Entrenados con tus catálogos, documentos y reglas de negocio",
      "Atención simultánea en WhatsApp, Instagram y sitio web",
      "Calificación automática de leads y agendamiento en CRM",
    ],
    cliLogs: {
      command: "kws ai-agent --deploy=rag-assistant",
      status: "Context RAG Ready · Latencia 320ms",
      metricLabel: "Resp. Inmediata",
      metricValue: "24/7 Activo",
    },
  },
  {
    id: "workflows-ia",
    group: "02 AUTOMATIZACIONES & IA",
    title: "Automatización de Workflows",
    subtitle: "Pipelines & Procesos IA",
    previewSlug: "workflows-ia",
    specFile: "especificacion-servicio.md",
    icon: Workflow,
    objective: "Eliminar tareas repetitivas conectando todas tus herramientas.",
    body: "Diseñamos e implementamos flujos de trabajo autónomos que conectan tus aplicaciones para que trabajen solas mediante pipelines inteligentes. Desde la lectura automática de facturas, correos y documentos hasta la actualización de bases de datos y alertas operativas.",
    highlights: [
      "Conexión automática entre correo, WhatsApp, ERP y planillas",
      "Extracción y clasificación inteligente de documentos y PDFs",
      "Ejecución autónoma 24/7 sin intervención manual",
    ],
    cliLogs: {
      command: "kws pipeline --run=autonomous-workflows",
      status: "Webhooks 200 OK · Queue 0 Pending",
      metricLabel: "Tareas Auto",
      metricValue: "99.8% Éxito",
    },
  },
  {
    id: "sistemas-ia-integrada",
    group: "02 AUTOMATIZACIONES & IA",
    title: "Sistemas de Gestión Inteligentes",
    subtitle: "IA Integrada & Predictiva",
    previewSlug: "sistemas-ia",
    specFile: "especificacion-servicio.md",
    icon: BrainCircuit,
    objective: "Anticipar decisiones comerciales con datos e Inteligencia Artificial.",
    body: "Llevamos tu software administrativo al siguiente nivel integrando modelos avanzados de Inteligencia Artificial. Implementamos algoritmos predictivos y tableros inteligentes que transforman datos crudos en reportes estratégicos, proyecciones de demanda y sugerencias comerciales en tiempo real.",
    highlights: [
      "Toma de decisiones asistida por modelos predictivos",
      "Tableros inteligentes con insights estratégicos en vivo",
      "Detección temprana de cuellos de botella y oportunidades",
    ],
    cliLogs: {
      command: "kws intelligence --model=predictive-bi",
      status: "Forecast Engine Active · Confidence 98.7%",
      metricLabel: "Precisión IA",
      metricValue: "98.7% Score",
    },
  },
]

export function Services() {
  const [selectedId, setSelectedId] = useState<string>("landing-page")

  const activeItem =
    SERVICE_ITEMS.find((item) => item.id === selectedId) ?? SERVICE_ITEMS[0]

  const webDevItems = SERVICE_ITEMS.filter(
    (item) => item.group === "01 DESARROLLO WEB A MEDIDA"
  )
  const aiItems = SERVICE_ITEMS.filter(
    (item) => item.group === "02 AUTOMATIZACIONES & IA"
  )

  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Resplandor ambiental KWS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b074]/5 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-1/4 size-[30rem] rounded-full bg-[#003865]/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6">
        {/* Encabezado de la sección */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-[4px] border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#00b074] backdrop-blur-sm mb-4">
            <Sparkles className="size-3.5 text-[#00b074]" />
            <span>Servicios & Soluciones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Soluciones que impulsan tu operación
          </h2>

          <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400 max-w-2xl mx-auto">
            Explorá cada solución en nuestro entorno interactivo: desde páginas de alta conversión hasta sistemas a medida e inteligencia artificial aplicada a tu negocio.
          </p>
        </div>

        {/* 1. Estructura general de la ventana (Estilo Cursor Desktop) */}
        <div className="max-w-6xl mx-auto rounded-[6px] border border-white/10 bg-[#080a0f] shadow-2xl overflow-hidden">
          {/* Barra superior de ventana */}
          <div className="relative flex h-10 items-center justify-between px-4 border-b border-white/10 bg-[#0b0e14] select-none">
            {/* Tres puntos estilo macOS a la izquierda */}
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ff5f56]/80 border border-[#ff5f56]/40" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]/80 border border-[#ffbd2e]/40" />
              <span className="size-2.5 rounded-full bg-[#27c93f]/80 border border-[#27c93f]/40" />
            </div>

            {/* Título centrado */}
            <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-400 truncate max-w-[65%] text-center">
              KeyWay Solutions — Solutions Workspace
            </div>

            {/* Indicador derecho sutil */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <span className="size-1.5 rounded-full bg-[#00b074]" />
              <span>Workspace Ready</span>
            </div>
          </div>

          {/* Interior dividido en 3 columnas en Desktop */}
          <div className="flex flex-col lg:flex-row min-h-[580px]">
            {/* 2. Columna 1: Sidebar Izquierdo (Selector de Soluciones) */}
            <aside className="w-full lg:w-[280px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#07090e] flex flex-col justify-between select-none">
              <div className="pb-3">
                {/* Grupo 01: DESARROLLO WEB A MEDIDA */}
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-4 pt-4 pb-2 flex items-center justify-between">
                  <span>01 DESARROLLO WEB A MEDIDA</span>
                </div>

                <div className="flex flex-col">
                  {webDevItems.map((item) => {
                    const isActive = item.id === activeItem.id
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className={cn(
                          "group flex w-full items-start gap-3 px-4 py-2.5 text-left transition-all duration-150",
                          isActive
                            ? "bg-white/[0.06] border-l-2 border-[#00b074] text-white"
                            : "border-l-2 border-transparent text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
                        )}
                      >
                        <Icon
                          className={cn(
                            "mt-0.5 size-4 shrink-0 transition-colors",
                            isActive
                              ? "text-[#00b074]"
                              : "text-zinc-500 group-hover:text-zinc-300"
                          )}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={cn(
                                "text-xs font-medium leading-snug",
                                isActive ? "text-white" : "text-zinc-300"
                              )}
                            >
                              {item.title}
                            </span>
                            {isActive && (
                              <span
                                aria-label=" Estado activo"
                                className="size-1.5 shrink-0 rounded-full bg-[#00b074] shadow-[0_0_8px_#00b074]"
                              />
                            )}
                          </div>
                          <span className="block text-[11px] font-mono text-zinc-500 truncate mt-0.5">
                            ({item.subtitle})
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Grupo 02: AUTOMATIZACIONES & IA */}
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-4 pt-4 pb-2 mt-2 border-t border-white/5 flex items-center justify-between">
                  <span>02 AUTOMATIZACIONES & IA</span>
                </div>

                <div className="flex flex-col">
                  {aiItems.map((item) => {
                    const isActive = item.id === activeItem.id
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className={cn(
                          "group flex w-full items-start gap-3 px-4 py-2.5 text-left transition-all duration-150",
                          isActive
                            ? "bg-white/[0.06] border-l-2 border-[#00b074] text-white"
                            : "border-l-2 border-transparent text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
                        )}
                      >
                        <Icon
                          className={cn(
                            "mt-0.5 size-4 shrink-0 transition-colors",
                            isActive
                              ? "text-[#00b074]"
                              : "text-zinc-500 group-hover:text-zinc-300"
                          )}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={cn(
                                "text-xs font-medium leading-snug",
                                isActive ? "text-white" : "text-zinc-300"
                              )}
                            >
                              {item.title}
                            </span>
                            {isActive && (
                              <span
                                aria-label="Estado activo"
                                className="size-1.5 shrink-0 rounded-full bg-[#00b074] shadow-[0_0_8px_#00b074]"
                              />
                            )}
                          </div>
                          <span className="block text-[11px] font-mono text-zinc-500 truncate mt-0.5">
                            ({item.subtitle})
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Pie de estado del sidebar */}
              <div className="hidden lg:flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] font-mono text-zinc-500">
                <span>7 módulos activos</span>
                <span className="text-[#00b074]">● KWS Core</span>
              </div>
            </aside>

            {/* 3. Columna 2: Panel Central de Especificación */}
            <div className="w-full lg:w-[380px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 p-6 flex flex-col justify-between bg-[#090c12]">
              <div>
                {/* Cabecera del ítem seleccionado */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00b074]">
                      {activeItem.subtitle}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      UTF-8 · MD
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                </div>

                {/* Caja superior con Objetivo Principal en blanco */}
                <div className="border border-white/10 rounded-[4px] bg-white/[0.02] p-3.5 mb-4">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#00b074] mb-1">
                    Objetivo Principal
                  </span>
                  <p className="text-sm font-medium text-white leading-snug">
                    &ldquo;{activeItem.objective}&rdquo;
                  </p>
                </div>

                {/* Indicador simulando lectura de archivo */}
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-3">
                  <FileText className="size-3.5 text-[#00b074] shrink-0" />
                  <span>Leyendo {activeItem.specFile}</span>
                </div>

                {/* Cuerpo explicativo exacto de cada solución */}
                <div className="rounded-[4px] border border-white/5 bg-[#07090e]/90 p-4 mb-4">
                  <p className="text-sm leading-relaxed text-zinc-200">
                    {activeItem.body}
                  </p>
                </div>

                {/* Puntos clave de valor */}
                <div className="space-y-2 mb-6">
                  {activeItem.highlights.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-xs text-zinc-400"
                    >
                      <CheckCircle2 className="size-3.5 text-[#00b074] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Barra inferior tipo prompt/acción */}
              <div className="border border-white/10 rounded-[4px] bg-[#06080c] p-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="size-2 rounded-full bg-[#00b074] animate-pulse shrink-0" />
                  <span className="text-xs font-mono text-zinc-400 truncate">
                    Listo para implementar
                  </span>
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#00b074] hover:bg-[#00c482] px-3.5 py-2 text-xs font-medium text-zinc-950 transition-all shadow-[0_0_20px_rgba(0,176,116,0.25)] shrink-0"
                >
                  <span>Solicitar esta solución →</span>
                </a>
              </div>
            </div>

            {/* 4. Columna 3: Panel Derecho de Preview Visual */}
            <div className="flex-1 bg-[#0b0e16] flex flex-col min-w-0">
              {/* Barra de navegador superior */}
              <div className="flex h-10 items-center justify-between gap-3 border-b border-white/10 bg-[#080b11] px-4 select-none">
                {/* Iconos ← → ↻ */}
                <div className="flex items-center gap-2.5 text-zinc-500 text-xs font-mono">
                  <span className="hover:text-zinc-300 transition-colors cursor-default" title="Atrás">
                    ←
                  </span>
                  <span className="hover:text-zinc-300 transition-colors cursor-default" title="Adelante">
                    →
                  </span>
                  <span className="hover:text-zinc-300 transition-colors cursor-default" title="Recargar">
                    ↻
                  </span>
                </div>

                {/* URL dinámica */}
                <div className="flex-1 max-w-md flex items-center gap-2 rounded-[4px] border border-white/10 bg-[#05070b] px-3 py-1 text-xs font-mono text-zinc-300 truncate">
                  <Lock className="size-3 text-[#00b074] shrink-0" />
                  <span className="truncate">
                    https://kws.dev/preview/{activeItem.previewSlug}
                  </span>
                </div>

                {/* Badge localhost / live preview */}
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <span className="text-[#00b074]">localhost:3000</span>
                </div>
              </div>

              {/* Lienzo de Preview + Consola flotante */}
              <div className="relative flex-1 p-5 sm:p-6 flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,56,101,0.22),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(0,176,116,0.10),transparent_55%)]">
                {/* Sutil grilla técnica de fondo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
                />

                {/* Contenido gráfico estilizado según el servicio seleccionado */}
                <div className="relative z-10 flex-1 flex flex-col pb-28 sm:pb-24">
                  {activeItem.id === "landing-page" && <LandingPagePreview />}
                  {activeItem.id === "web-corporativa" && <CorporateWebPreview />}
                  {activeItem.id === "ecommerce" && <EcommercePreview />}
                  {activeItem.id === "sistemas-gestion" && <ErpCrmPreview />}
                  {activeItem.id === "agentes-ia" && <AiAgentsPreview />}
                  {activeItem.id === "workflows-ia" && <WorkflowsPreview />}
                  {activeItem.id === "sistemas-ia-integrada" && <AiSystemsPreview />}
                </div>

                {/* Pequeña ventana superpuesta estilo KWS CLI abajo a la derecha */}
                <div className="relative sm:absolute sm:bottom-4 sm:right-4 z-20 w-full sm:w-[310px] rounded-[5px] border border-[#00b074]/30 bg-[#05070b]/95 p-3 font-mono text-[11px] shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(0,176,116,0.12)] backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <Terminal className="size-3.5 text-[#00b074]" />
                      <span className="font-semibold">KWS CLI — Live Status</span>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-[#00b074]">
                      <span className="size-1.5 rounded-full bg-[#00b074] animate-pulse" />
                      OPTIMIZED
                    </span>
                  </div>

                  <div className="space-y-1 text-zinc-400">
                    <div className="truncate text-zinc-300">
                      <span className="text-[#00b074]">$</span> {activeItem.cliLogs.command}
                    </div>
                    <div className="text-[10px] text-sky-300/90 truncate">
                      ✓ {activeItem.cliLogs.status}
                    </div>
                    <div className="pt-1 flex items-center justify-between border-t border-white/5 text-[10px]">
                      <span className="text-zinc-500">{activeItem.cliLogs.metricLabel}:</span>
                      <span className="text-[#00b074] font-semibold">
                        {activeItem.cliLogs.metricValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
 * COMPONENTES DE PREVIEW VISUAL (MODO OSCURO CON #00b074 y #003865)
 * ========================================================================== */

function LandingPagePreview() {
  return (
    <div className="space-y-4">
      {/* Header Mockup */}
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-[3px] bg-[#00b074]/15 border border-[#00b074]/30 px-2 py-0.5 font-mono text-[10px] text-[#00b074]">
            <Zap className="size-3" /> CAMPAÑA ADS ACTIVA
          </span>
          <span className="font-mono text-[11px] text-zinc-400">ROAS: +4.6x</span>
        </div>
        <div className="space-y-2">
          <div className="h-3.5 w-3/4 rounded-[3px] bg-gradient-to-r from-white/90 to-white/40" />
          <div className="h-2.5 w-1/2 rounded-[3px] bg-white/20" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="rounded-[4px] bg-[#00b074] px-3 py-1.5 text-[11px] font-mono font-medium text-zinc-950">
            Quiero mi presupuesto →
          </div>
          <div className="rounded-[4px] border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-mono text-zinc-400">
            Respuesta en &lt; 5 min
          </div>
        </div>
      </div>

      {/* Embudo de Conversión con Métricas */}
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
            <TrendingUp className="size-3.5 text-[#00b074]" />
            Embudo de Conversión en Vivo
          </span>
          <span className="text-[11px] font-mono text-[#00b074]">14.8% CR</span>
        </div>

        <div className="space-y-2.5 font-mono text-xs">
          {/* Paso 1 */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-zinc-400">1. Tráfico de Anuncios (Google / Meta)</span>
              <span className="text-white">2,450 visitas</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-[#003865] to-[#005a9e]" />
            </div>
          </div>

          {/* Paso 2 */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-zinc-400">2. Interacción con Propuesta & CTA</span>
              <span className="text-sky-300">1,180 clics (48%)</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[62%] bg-gradient-to-r from-[#003865] to-[#00b074]" />
            </div>
          </div>

          {/* Paso 3 */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-zinc-300 font-medium">3. Leads & Ventas Directas</span>
              <span className="text-[#00b074] font-semibold">362 clientes (14.8%)</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[34%] bg-[#00b074] shadow-[0_0_12px_#00b074]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CorporateWebPreview() {
  return (
    <div className="space-y-4">
      {/* Portal B2B Header */}
      <div className="rounded-[5px] border border-white/10 bg-gradient-to-br from-[#003865]/35 via-[#070a10] to-[#070a10] p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Globe className="size-4 text-[#00b074]" />
            <span className="font-mono text-xs text-white font-medium">
              PORTAL CORPORATIVO B2B
            </span>
          </div>
          <span className="rounded-[3px] bg-[#00b074]/15 border border-[#00b074]/30 px-2 py-0.5 font-mono text-[10px] text-[#00b074]">
            ISO / ENTERPRISE READY
          </span>
        </div>

        <p className="text-xs text-zinc-300 leading-relaxed mb-3">
          Presentación ejecutiva de servicios, casos de éxito e infraestructura para clientes corporativos.
        </p>

        <div className="grid grid-cols-3 gap-2 font-mono">
          <div className="rounded-[4px] border border-white/10 bg-[#05070b]/80 p-2.5">
            <span className="block text-[10px] text-zinc-500">Autoridad Sector</span>
            <span className="text-sm font-semibold text-white">Top 1%</span>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-[#05070b]/80 p-2.5">
            <span className="block text-[10px] text-zinc-500">Empresas B2B</span>
            <span className="text-sm font-semibold text-[#00b074]">+120 Alianzas</span>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-[#05070b]/80 p-2.5">
            <span className="block text-[10px] text-zinc-500">Disponibilidad</span>
            <span className="text-sm font-semibold text-sky-400">99.99% SLA</span>
          </div>
        </div>
      </div>

      {/* Módulos de Confianza B2B */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3.5">
          <div className="flex items-center gap-2 text-xs font-medium text-white mb-1.5">
            <ShieldCheck className="size-4 text-[#00b074]" />
            <span>Respaldo & Credenciales</span>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Certificaciones, trayectoria y dossier comercial accesible para decisores de compra.
          </p>
        </div>

        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3.5">
          <div className="flex items-center gap-2 text-xs font-medium text-white mb-1.5">
            <Layers className="size-4 text-sky-400" />
            <span>Catálogo de Soluciones</span>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Arquitectura clara de servicios con contacto directo para licitaciones y propuestas.
          </p>
        </div>
      </div>
    </div>
  )
}

function EcommercePreview() {
  return (
    <div className="space-y-4">
      {/* Cabecera de Tienda 24/7 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>VENTAS EN AUTOMÁTICO</span>
            <span className="size-2 rounded-full bg-[#00b074]" />
          </div>
          <div className="text-lg font-mono font-semibold text-white">
            $4,820,500
          </div>
          <span className="text-[11px] font-mono text-[#00b074]">
            +38 pedidos procesados hoy
          </span>
        </div>

        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
            <span>STOCK SINCRONIZADO</span>
            <PackageCheck className="size-3.5 text-sky-400" />
          </div>
          <div className="text-lg font-mono font-semibold text-white">
            1,248 SKUs
          </div>
          <span className="text-[11px] font-mono text-sky-400">
            Actualización en tiempo real
          </span>
        </div>
      </div>

      {/* Checkout & Control de Stock en Vivo */}
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-xs font-mono text-white">
            <CreditCard className="size-4 text-[#00b074]" />
            <span>Checkout Seguro & Despacho Automático</span>
          </div>
          <span className="rounded-[3px] bg-[#00b074]/15 px-2 py-0.5 font-mono text-[10px] text-[#00b074]">
            100% SEGURO
          </span>
        </div>

        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between rounded-[4px] border border-white/5 bg-white/[0.02] px-3 py-2">
            <div>
              <span className="text-white block">Orden #KWS-8492</span>
              <span className="text-[10px] text-zinc-500">Pago acreditado · Envío expreso asignado</span>
            </div>
            <span className="text-[#00b074] text-[11px] font-semibold">
              Stock -2 uds ✓
            </span>
          </div>

          <div className="flex items-center justify-between rounded-[4px] border border-white/5 bg-white/[0.02] px-3 py-2">
            <div>
              <span className="text-white block">Orden #KWS-8493</span>
              <span className="text-[10px] text-zinc-500">Factura emitida · Etiqueta de correo lista</span>
            </div>
            <span className="text-sky-400 text-[11px] font-semibold">
              En despacho →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ErpCrmPreview() {
  return (
    <div className="space-y-4">
      {/* KPIs Operativos */}
      <div className="grid grid-cols-3 gap-2.5 font-mono">
        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3">
          <span className="text-[10px] text-zinc-500 block">PROCESOS ACTIVOS</span>
          <span className="text-sm font-semibold text-white">Centralizados</span>
          <span className="block text-[10px] text-[#00b074] mt-0.5">0 planillas sueltas</span>
        </div>
        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3">
          <span className="text-[10px] text-zinc-500 block">EQUIPO CONECTADO</span>
          <span className="text-sm font-semibold text-white">24 Usuarios</span>
          <span className="block text-[10px] text-sky-400 mt-0.5">Roles & Permisos</span>
        </div>
        <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-3">
          <span className="text-[10px] text-zinc-500 block">ERRORES HUMANOS</span>
          <span className="text-sm font-semibold text-[#00b074]">-99.2%</span>
          <span className="block text-[10px] text-zinc-400 mt-0.5">Validación auto</span>
        </div>
      </div>

      {/* Tabla Operativa CRM / ERP */}
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#003865]/25 px-3.5 py-2">
          <div className="flex items-center gap-2 text-white">
            <BarChart3 className="size-3.5 text-[#00b074]" />
            <span>Panel de Control Operativo (ERP / CRM)</span>
          </div>
          <span className="text-[10px] text-[#00b074]">● En vivo</span>
        </div>

        <div className="divide-y divide-white/5 text-[11px]">
          <div className="grid grid-cols-12 px-3.5 py-2 text-zinc-500 bg-white/[0.01]">
            <span className="col-span-5">MÓDULO / OPERACIÓN</span>
            <span className="col-span-4">RESPONSABLE</span>
            <span className="col-span-3 text-right">ESTADO</span>
          </div>
          <div className="grid grid-cols-12 items-center px-3.5 py-2.5 text-zinc-300">
            <span className="col-span-5 text-white truncate">Cuentas Corrientes & Facturación</span>
            <span className="col-span-4 text-zinc-400">Administración</span>
            <span className="col-span-3 text-right text-[#00b074]">Al día ✓</span>
          </div>
          <div className="grid grid-cols-12 items-center px-3.5 py-2.5 text-zinc-300">
            <span className="col-span-5 text-white truncate">Seguimiento Comercial CRM</span>
            <span className="col-span-4 text-zinc-400">Equipo Ventas</span>
            <span className="col-span-3 text-right text-sky-400">48 activos</span>
          </div>
          <div className="grid grid-cols-12 items-center px-3.5 py-2.5 text-zinc-300">
            <span className="col-span-5 text-white truncate">Control de Stock Multidepósito</span>
            <span className="col-span-4 text-zinc-400">Logística</span>
            <span className="col-span-3 text-right text-[#00b074]">Sincronizado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AiAgentsPreview() {
  return (
    <div className="space-y-3.5 font-mono text-xs">
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-white">
            <Bot className="size-4 text-[#00b074]" />
            <span>Agente IA Corporativo · WhatsApp & Web</span>
          </div>
          <span className="rounded-[3px] bg-[#00b074]/15 px-2 py-0.5 text-[10px] text-[#00b074]">
            ONLINE 24/7
          </span>
        </div>

        <div className="space-y-2.5 text-[11px]">
          <div className="rounded-[4px] border border-white/10 bg-white/[0.03] p-2.5 text-zinc-300 max-w-[88%]">
            <span className="block text-[10px] text-zinc-500 mb-0.5">Cliente (23:42 hs)</span>
            &ldquo;Hola, necesito cotizar 50 unidades con entrega en Córdoba para esta semana.&rdquo;
          </div>

          <div className="rounded-[4px] border border-[#00b074]/30 bg-[#003865]/25 p-2.5 text-zinc-100 ml-auto max-w-[92%]">
            <span className="block text-[10px] text-[#00b074] mb-0.5">
              Agente KWS IA · Base de Conocimiento Verificada (0.8s)
            </span>
            &ldquo;¡Hola! Contamos con stock disponible de las 50 unidades. El envío expreso a Córdoba demora 48 hs. Te comparto el link de reserva y agendé a un asesor para acompañarte.&rdquo;
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowsPreview() {
  return (
    <div className="space-y-3.5 font-mono text-xs">
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
          <div className="flex items-center gap-2 text-white">
            <Workflow className="size-4 text-[#00b074]" />
            <span>Pipeline de Automatización Sin Intervención</span>
          </div>
          <span className="text-[10px] text-[#00b074]">AUTÓNOMO</span>
        </div>

        <div className="space-y-2 text-[11px]">
          <div className="flex items-center justify-between rounded-[4px] border border-white/10 bg-white/[0.02] p-2.5">
            <span className="text-zinc-200">1. Recepción de Factura / Orden por Email o WhatsApp</span>
            <span className="text-[#00b074]">Capturado ✓</span>
          </div>
          <div className="flex items-center justify-between rounded-[4px] border border-[#003865]/60 bg-[#003865]/20 p-2.5">
            <span className="text-zinc-200">2. Extracción de Datos con IA & Validación Fiscal</span>
            <span className="text-sky-300">Procesado 0.4s</span>
          </div>
          <div className="flex items-center justify-between rounded-[4px] border border-[#00b074]/30 bg-[#00b074]/10 p-2.5">
            <span className="text-white">3. Impacto en ERP + Notificación a Contabilidad</span>
            <span className="text-[#00b074] font-semibold">Completado ✓</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AiSystemsPreview() {
  return (
    <div className="space-y-3.5 font-mono text-xs">
      <div className="rounded-[5px] border border-white/10 bg-[#070a10]/90 p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
          <div className="flex items-center gap-2 text-white">
            <BrainCircuit className="size-4 text-[#00b074]" />
            <span>Motor Predictivo & Inteligencia de Negocio</span>
          </div>
          <span className="text-[10px] text-sky-400">MODELO ACTIVO</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="rounded-[4px] border border-white/10 bg-white/[0.02] p-2.5">
            <span className="text-[10px] text-zinc-500 block">PROYECCIÓN DEMANDA 30D</span>
            <span className="text-sm font-semibold text-[#00b074]">+28.4% Estimado</span>
          </div>
          <div className="rounded-[4px] border border-white/10 bg-white/[0.02] p-2.5">
            <span className="text-[10px] text-zinc-500 block">SUGERENCIA DE COMPRA</span>
            <span className="text-sm font-semibold text-white">Reponer 3 líneas clave</span>
          </div>
        </div>

        <div className="rounded-[4px] border border-[#003865]/50 bg-[#003865]/20 p-2.5 text-[11px] text-zinc-300">
          <span className="text-[#00b074] font-semibold">Insight IA:</span> Detectada oportunidad de incremento de margen del 12% optimizando rutas de distribución de los martes.
        </div>
      </div>
    </div>
  )
}

export default Services
