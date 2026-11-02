"use client"

import { useState } from "react"
import { 
  Code2, 
  Cpu, 
  Database, 
  Network, 
  Check, 
  ArrowRight, 
  Terminal, 
  Activity, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Zap,
  Radio,
  FileCode2,
  ChevronRight,
  ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Solution {
  id: string
  category: "DESARROLLO & ARQUITECTURA" | "INTELIGENCIA ARTIFICIAL"
  title: string
  sidebarTitle: string
  subtitle: string
  route: string
  icon: typeof Code2
  description: string
  useCases: string[]
  techStack: string[]
  visualType: "architecture" | "agent" | "erp" | "api"
  stats: {
    label: string
    value: string
    change?: string
  }[]
}

const solutions: Solution[] = [
  {
    id: "custom-software",
    category: "DESARROLLO & ARQUITECTURA",
    sidebarTitle: "Software a Medida & Web Apps",
    title: "Software a Medida & Web Applications",
    subtitle: "Full-stack escalable & Cloud",
    route: "kws://solutions/custom-software",
    icon: Code2,
    description:
      "Diseñamos y construimos plataformas web y aplicaciones de misión crítica con arquitectura escalable, código limpio y alta disponibilidad, modeladas exactamente sobre la lógica operativa de tu negocio.",
    useCases: [
      "Plataformas web transaccionales de alto tráfico con interfaces ultrarrápidas y panel de administración.",
      "Migración de hojas de cálculo o software heredado hacia aplicaciones cloud seguras y multiusuario.",
      "Portales corporativos para clientes y proveedores con sincronización en tiempo real y control de accesos.",
    ],
    techStack: [".NET 9", "Next.js 15", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS Cloud"],
    visualType: "architecture",
    stats: [
      { label: "Latencia P95", value: "24 ms" },
      { label: "Throughput", value: "3.2k req/s" },
      { label: "Disponibilidad", value: "99.98%" },
    ],
  },
  {
    id: "ai-agents",
    category: "INTELIGENCIA ARTIFICIAL",
    sidebarTitle: "Automatizaciones con IA & Agentes",
    title: "Automatizaciones con IA & Agentes Autónomos",
    subtitle: "LLMs, RAG & Flujos autónomos",
    route: "kws://solutions/ai-automation",
    icon: Cpu,
    description:
      "Integramos inteligencia artificial generativa conectada a la base de conocimiento de tu empresa. Agentes que interpretan contexto, ejecutan tareas operativas complejas y asisten a clientes las 24 horas sin descanso.",
    useCases: [
      "Agentes autónomos para atención, ventas y soporte conectados a WhatsApp, CRM y bases de datos.",
      "Sistemas RAG (Retrieval-Augmented Generation) sobre manuales, contratos y catálogos privados.",
      "Pipelines inteligentes de extracción, clasificación y validación de facturas, órdenes y correos.",
    ],
    techStack: ["Python", "LangChain", "OpenAI / Anthropic", "pgvector", "FastAPI", "Docker"],
    visualType: "agent",
    stats: [
      { label: "Precisión RAG", value: "99.4%" },
      { label: "Tokens/sec", value: "142 t/s" },
      { label: "Ahorro Operativo", value: "~70%" },
    ],
  },
  {
    id: "erp-crm",
    category: "DESARROLLO & ARQUITECTURA",
    sidebarTitle: "Sistemas de Gestión (ERP / CRM)",
    title: "Sistemas de Gestión Empresarial (ERP / CRM)",
    subtitle: "Control operativo & Trazabilidad",
    route: "kws://solutions/erp-crm",
    icon: Database,
    description:
      "Centraliza toda la cadena de valor de tu empresa en una solución hecha a medida: gestión de stock multidepósito, ventas, clientes y auditoría en tiempo real, sin costes por licencias rígidas que limitan tu crecimiento.",
    useCases: [
      "Control de inventario multidepósito, trazabilidad de pedidos y alertas predictivas de reposición.",
      "CRM a medida para seguimiento de leads, etapas del embudo comercial y métricas de conversión.",
      "Tableros de control gerencial con estados de cuenta, facturación automática y reportes en vivo.",
    ],
    techStack: ["C# / .NET", "React", "SQL Server", "Redis Cache", "PowerBI / Charts", "REST API"],
    visualType: "erp",
    stats: [
      { label: "Órdenes Activas", value: "1,420" },
      { label: "Audit Trail", value: "100% trazable" },
      { label: "Sincronización", value: "Realtime" },
    ],
  },
  {
    id: "api-microservices",
    category: "DESARROLLO & ARQUITECTURA",
    sidebarTitle: "Integración de APIs & Microservicios",
    title: "Integración de APIs & Microservicios",
    subtitle: "Sincronización & Alta disponibilidad",
    route: "kws://solutions/api-microservices",
    icon: Network,
    description:
      "Conectamos tus sistemas y aplicaciones aisladas (pasarelas de pago, facturación electrónica AFIP, logística, CRMs externos) mediante APIs desacopladas de alto rendimiento que garantizan cero pérdida de datos.",
    useCases: [
      "Conexión bidireccional entre tiendas online, gateways de pago (Mercado Pago, Stripe) y sistemas contables.",
      "Facturación electrónica automatizada y homologación directa con AFIP / organismos fiscales.",
      "Arquitecturas orientadas a eventos con colas de mensajería para soportar picos masivos sin caídas.",
    ],
    techStack: ["Microservicios", "RabbitMQ / Redis", "REST / GraphQL", "Webhooks", "OAuth 2.0", "Docker"],
    visualType: "api",
    stats: [
      { label: "Gateway Status", value: "200 OK" },
      { label: "Mensajes / min", value: "48.5k" },
      { label: "Fallo Tolerancia", value: "Activo" },
    ],
  },
]

export function Services() {
  const [activeId, setActiveId] = useState<string>("custom-software")
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0]

  // Categorías para organizar el sidebar
  const architectureSolutions = solutions.filter((s) => s.category === "DESARROLLO & ARQUITECTURA")
  const aiSolutions = solutions.filter((s) => s.category === "INTELIGENCIA ARTIFICIAL")

  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow ambiental sutil de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b074]/5 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-1/4 size-[28rem] rounded-full bg-[#003865]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6">
        {/* 1. Encabezado de la Sección */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-[4px] border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#00b074] backdrop-blur-sm mb-4">
            <Sparkles className="size-3.5 text-[#00b074]" />
            <span>Nuestros Servicios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Soluciones diseñadas para escalar
          </h2>

          <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400 max-w-2xl mx-auto">
            Ingeniería de software robusta y automatización con IA concebidas como módulos de alto rendimiento para impulsar la eficiencia y el crecimiento de tu empresa.
          </p>
        </div>

        {/* 2. Contenedor Principal (Ventana IDE estilo Cursor) */}
        <div className="mx-auto max-w-6xl rounded-[6px] border border-white/10 bg-[#090b10] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(0,176,116,0.06)] overflow-hidden">
          {/* Barra Superior (Top Bar de la Ventana IDE) */}
          <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#0c0f17] px-4 select-none">
            {/* Minimalist window controls */}
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-zinc-700/80 transition-colors hover:bg-[#ff5f56]" />
              <span className="size-2.5 rounded-full bg-zinc-700/80 transition-colors hover:bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-zinc-700/80 transition-colors hover:bg-[#27c93f]" />
            </div>

            {/* Centered IDE window title */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
              <FileCode2 className="size-3.5 text-zinc-500" />
              <span>KeyWay Solutions — Architecture Explorer</span>
            </div>

            {/* Version indicator */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/90">
              <span className="size-1.5 rounded-full bg-[#00b074] animate-pulse" />
              <span>v2.4 Stable</span>
            </div>
          </div>

          {/* Selector de pestañas móvil (Scroll horizontal superior) */}
          <div className="flex md:hidden overflow-x-auto no-scrollbar border-b border-white/10 bg-[#080a0f] p-2 gap-1.5">
            {solutions.map((item) => {
              const isActive = activeId === item.id
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-[4px] px-3 py-1.5 text-xs font-mono transition-all",
                    isActive
                      ? "bg-white/[0.08] text-white border border-[#00b074]/50 shadow-[0_0_12px_rgba(0,176,116,0.15)]"
                      : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200 border border-transparent"
                  )}
                >
                  <Icon className={cn("size-3.5", isActive ? "text-[#00b074]" : "text-zinc-500")} />
                  <span>{item.sidebarTitle}</span>
                </button>
              )
            })}
          </div>

          {/* 3. Layout Interno de 2 Paneles (Sidebar + Detalle) */}
          <div className="flex flex-col md:flex-row min-h-[560px]">
            {/* Panel Izquierdo (Selector de Soluciones) */}
            <aside className="hidden md:flex w-[310px] lg:w-[330px] shrink-0 flex-col border-r border-white/10 bg-[#080a0f] select-none py-3">
              {/* Grupo 1: Desarrollo & Arquitectura */}
              <div>
                <span className="block px-4 pt-3 pb-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Desarrollo & Arquitectura
                </span>
                <div className="flex flex-col">
                  {architectureSolutions.map((item) => {
                    const isActive = activeId === item.id
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className={cn(
                          "group relative flex w-full items-start gap-3 px-4 py-3 text-left transition-all duration-150 border-l-2",
                          isActive
                            ? "bg-white/[0.05] border-l-[#00b074] text-white"
                            : "border-l-transparent text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-200"
                        )}
                      >
                        <div className={cn(
                          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
                          isActive 
                            ? "border-[#00b074]/40 bg-[#00b074]/10 text-[#00b074]" 
                            : "border-white/5 bg-white/[0.02] text-zinc-500 group-hover:text-zinc-300"
                        )}>
                          <Icon className="size-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className={cn("truncate text-xs font-medium", isActive ? "text-white" : "text-zinc-300")}>
                              {item.sidebarTitle}
                            </span>
                            {isActive && (
                              <span className="size-1.5 rounded-full bg-[#00b074] shadow-[0_0_8px_#00b074]" />
                            )}
                          </div>
                          <span className="block truncate text-[11px] font-mono text-zinc-500">
                            {item.subtitle}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Grupo 2: Inteligencia Artificial */}
              <div className="mt-4 border-t border-white/5 pt-3">
                <span className="block px-4 pb-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Inteligencia Artificial
                </span>
                <div className="flex flex-col">
                  {aiSolutions.map((item) => {
                    const isActive = activeId === item.id
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className={cn(
                          "group relative flex w-full items-start gap-3 px-4 py-3 text-left transition-all duration-150 border-l-2",
                          isActive
                            ? "bg-white/[0.05] border-l-[#00b074] text-white"
                            : "border-l-transparent text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-200"
                        )}
                      >
                        <div className={cn(
                          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
                          isActive 
                            ? "border-[#00b074]/40 bg-[#00b074]/10 text-[#00b074]" 
                            : "border-white/5 bg-white/[0.02] text-zinc-500 group-hover:text-zinc-300"
                        )}>
                          <Icon className="size-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className={cn("truncate text-xs font-medium", isActive ? "text-white" : "text-zinc-300")}>
                              {item.sidebarTitle}
                            </span>
                            {isActive && (
                              <span className="size-1.5 rounded-full bg-[#00b074] shadow-[0_0_8px_#00b074]" />
                            )}
                          </div>
                          <span className="block truncate text-[11px] font-mono text-zinc-500">
                            {item.subtitle}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Status footer inside sidebar */}
              <div className="mt-auto border-t border-white/5 px-4 pt-4 pb-1 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Cluster: sa-east-1</span>
                <span className="text-[#00b074] flex items-center gap-1">
                  <span className="size-1 rounded-full bg-[#00b074]" /> Ready
                </span>
              </div>
            </aside>

            {/* Panel Derecho (Detalle & Visualización) */}
            <main className="flex-1 bg-[#0b0e14] flex flex-col min-w-0">
              {/* Barra de Navegación Interna (Breadcrumb / URL bar) */}
              <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#0a0d14]/70 px-4 text-xs font-mono text-zinc-400 select-none">
                <div className="flex items-center gap-2 truncate">
                  <div className="flex items-center text-zinc-500 gap-1">
                    <span>←</span>
                    <span>→</span>
                  </div>
                  <span className="text-zinc-600">|</span>
                  <span className="text-zinc-300 truncate">
                    {activeSolution.route}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-500">
                  <span className="text-[#00b074]">HTTP 200 OK</span>
                  <span>•</span>
                  <span>14ms</span>
                </div>
              </div>

              {/* Cuerpo del Panel Derecho: Split entre Explicación y Demostración Visual */}
              <div className="flex-1 p-5 sm:p-7 lg:p-8 flex flex-col justify-between gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Columna Izquierda / Superior: Explicación de la solución */}
                  <div className="lg:col-span-7 flex flex-col">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#00b074]">
                      {activeSolution.subtitle}
                    </span>

                    <h3 className="mt-1.5 text-2xl sm:text-3xl font-normal tracking-tight text-white">
                      {activeSolution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {activeSolution.description}
                    </p>

                    {/* Casos de uso con checks verdes */}
                    <div className="mt-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                        Casos de aplicación práctica:
                      </span>
                      <ul className="space-y-2.5">
                        {activeSolution.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-[#00b074]/15 text-[#00b074] border border-[#00b074]/30">
                              <Check className="size-3" />
                            </span>
                            <span className="leading-snug">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack tecnológico con esquinas 4px */}
                    <div className="mt-6 pt-5 border-t border-white/5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                        Stack tecnológico & infraestructura:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeSolution.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-[4px] border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-[#00b074]/40 hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha / Inferior: Demostración Visual / Consola / Mockup */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    {/* Tarjeta Visual de Arquitectura / Monitor en tiempo real */}
                    <div className="rounded-[4px] border border-white/10 bg-[#06080d] p-4 font-mono shadow-inner relative overflow-hidden">
                      {/* Cabecera del mockup */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3 text-[11px] text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Activity className="size-3.5 text-[#00b074]" />
                          <span className="text-zinc-200">KWS Engine Preview</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 uppercase">Live Metrics</span>
                      </div>

                      {/* Renderizado dinámico según el tipo de solución */}
                      {activeSolution.visualType === "architecture" && (
                        <div className="space-y-3 text-xs">
                          <div className="rounded-[4px] border border-white/5 bg-white/[0.02] p-2.5 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-zinc-400">Frontend Layer:</span>
                              <span className="text-emerald-400">Next.js Edge (Vercel)</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-zinc-400">Backend API:</span>
                              <span className="text-sky-400">.NET Core REST</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-zinc-400">Database:</span>
                              <span className="text-zinc-300">PostgreSQL (Pooled)</span>
                            </div>
                          </div>

                          <div className="space-y-1 text-[11px]">
                            <div className="text-zinc-500 flex items-center justify-between">
                              <span>Health Check:</span>
                              <span className="text-[#00b074]">100% Passing</span>
                            </div>
                            <div className="text-zinc-500 flex items-center justify-between">
                              <span>Response Time:</span>
                              <span className="text-zinc-200">24ms average</span>
                            </div>
                          </div>

                          <div className="rounded-[4px] bg-[#003865]/20 border border-[#003865]/40 p-2 text-[11px] text-sky-300 flex items-center gap-2">
                            <Zap className="size-3.5 text-sky-400 shrink-0" />
                            <span>Arquitectura modular escalable horizontalmente.</span>
                          </div>
                        </div>
                      )}

                      {activeSolution.visualType === "agent" && (
                        <div className="space-y-2.5 text-xs">
                          <div className="rounded-[4px] border border-white/5 bg-[#080b11] p-2.5 text-[11px] space-y-1 text-zinc-400">
                            <p className="text-emerald-400 flex items-center gap-1.5">
                              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Agent Pipeline Activated
                            </p>
                            <p className="text-zinc-500">&gt; Query: "Consultar inventario crítico y notificar"</p>
                            <p className="text-sky-300">&gt; [RAG] Vector match found (score: 0.994)</p>
                            <p className="text-zinc-300">&gt; Executing tool: ERP_Sync_Webhook</p>
                            <p className="text-[#00b074]">&gt; Status: Autonomous flow completed (180ms)</p>
                          </div>

                          <div className="rounded-[4px] bg-[#00b074]/10 border border-[#00b074]/30 p-2 text-[11px] text-emerald-300 flex items-center gap-2">
                            <Sparkles className="size-3.5 text-[#00b074] shrink-0" />
                            <span>Sin alucinaciones: validación con embeddings privados.</span>
                          </div>
                        </div>
                      )}

                      {activeSolution.visualType === "erp" && (
                        <div className="space-y-3 text-xs">
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div className="rounded-[4px] border border-white/5 bg-white/[0.02] p-2">
                              <span className="text-zinc-500 block text-[10px]">Facturación Mes</span>
                              <span className="text-white font-medium text-xs">$18.4M ARS</span>
                            </div>
                            <div className="rounded-[4px] border border-white/5 bg-white/[0.02] p-2">
                              <span className="text-zinc-500 block text-[10px]">Pedidos del Día</span>
                              <span className="text-[#00b074] font-medium text-xs">+142 despachados</span>
                            </div>
                          </div>

                          <div className="rounded-[4px] border border-white/5 bg-white/[0.02] p-2 text-[11px] space-y-1">
                            <div className="flex items-center justify-between text-zinc-400">
                              <span>Inventario Global:</span>
                              <span className="text-white">98.2% optimizado</span>
                            </div>
                            <div className="flex items-center justify-between text-zinc-400">
                              <span>Alertas Stock:</span>
                              <span className="text-sky-400">0 críticas</span>
                            </div>
                          </div>

                          <div className="rounded-[4px] bg-[#003865]/20 border border-[#003865]/40 p-2 text-[11px] text-sky-300 flex items-center gap-2">
                            <ShieldCheck className="size-3.5 text-sky-400 shrink-0" />
                            <span>Roles jerárquicos y registro de auditoría inmutable.</span>
                          </div>
                        </div>
                      )}

                      {activeSolution.visualType === "api" && (
                        <div className="space-y-2.5 text-xs">
                          <div className="rounded-[4px] border border-white/5 bg-[#080b11] p-2 text-[11px] space-y-1.5 font-mono">
                            <div className="flex items-center justify-between">
                              <span className="text-sky-400 font-semibold">POST /v1/payments</span>
                              <span className="text-[#00b074]">200 OK (18ms)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sky-400 font-semibold">GET /v1/afip/cae</span>
                              <span className="text-[#00b074]">200 OK (32ms)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sky-400 font-semibold">POST /v1/sync/crm</span>
                              <span className="text-[#00b074]">200 OK (11ms)</span>
                            </div>
                          </div>

                          <div className="rounded-[4px] bg-[#00b074]/10 border border-[#00b074]/30 p-2 text-[11px] text-emerald-300 flex items-center gap-2">
                            <Radio className="size-3.5 text-[#00b074] shrink-0" />
                            <span>Colas de mensajería con reintentos automáticos.</span>
                          </div>
                        </div>
                      )}

                      {/* Métricas clave al pie del visual */}
                      <div className="mt-3 grid grid-cols-3 gap-1 pt-2 border-t border-white/5 text-center">
                        {activeSolution.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-[10px] text-zinc-500 truncate">{stat.label}</span>
                            <span className="text-xs font-semibold text-zinc-200">{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Contenedor preparado para inyectar capturas o vistas previas de proyectos reales */}
                      <div className="mt-3 rounded-[3px] border border-dashed border-white/10 bg-white/[0.01] p-2 text-center text-[10px] text-zinc-500 hover:border-white/20 transition-colors">
                        <span>Espacio preparado para capturas & demostraciones de proyectos reales</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Contextual al pie del panel derecho */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/10 bg-[#090c12]/50 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 lg:-mx-8 lg:-mb-8 px-5 sm:px-7 lg:px-8 py-4">
                  <div className="text-xs text-zinc-400 text-center sm:text-left">
                    ¿Tenés un requerimiento específico para <strong className="text-white font-medium">{activeSolution.title}</strong>?
                  </div>

                  <a
                    href={`#contacto?solucion=${encodeURIComponent(activeSolution.id)}`}
                    className="inline-flex items-center gap-2 rounded-[4px] bg-[#00b074] hover:bg-[#00c882] px-4 py-2 text-xs font-medium text-zinc-950 shadow-[0_0_20px_rgba(0,176,116,0.25)] transition-all active:scale-[0.98] shrink-0"
                  >
                    <span>Consultar por esta solución</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
