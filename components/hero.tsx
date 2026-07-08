"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

const codeTokens = [
  // Line 1
  { text: "const", className: "text-[#2563eb] font-semibold", line: 1 },
  { text: " ", className: "", line: 1 },
  { text: "keyWaySolutions", className: "text-[#0f766e]", line: 1 },
  { text: " = {", className: "", line: 1 },
  
  // Line 2
  { text: "enfoque", className: "text-slate-700", line: 2 },
  { text: ': "', className: "", line: 2 },
  { text: "Software a medida", className: "text-[#059669]", line: 2 },
  { text: '",', className: "", line: 2 },

  // Line 3
  { text: "tecnologia", className: "text-slate-700", line: 3 },
  { text: ': "', className: "", line: 3 },
  { text: "Automatizaciones con IA", className: "text-[#059669]", line: 3 },
  { text: '",', className: "", line: 3 },

  // Line 4
  { text: "mision", className: "text-slate-700", line: 4 },
  { text: ': "', className: "", line: 4 },
  { text: "Hacer crecer tu negocio", className: "text-[#059669]", line: 4 },
  { text: '",', className: "", line: 4 },

  // Line 5
  { text: "desempeno", className: "text-slate-700", line: 5 },
  { text: ': "', className: "", line: 5 },
  { text: "Máxima eficiencia ⚡", className: "text-[#059669]", line: 5 },
  { text: '",', className: "", line: 5 },

  // Line 6
  { text: "escalable", className: "text-slate-700", line: 6 },
  { text: ": ", className: "", line: 6 },
  { text: "true", className: "text-[#2563eb]", line: 6 },

  // Line 7
  { text: "};", className: "", line: 7 },
]

// Pre-calculate start indices
let accumulatedLength = 0
const processedCodeTokens = codeTokens.map((token) => {
  const startIdx = accumulatedLength
  accumulatedLength += token.text.length
  return { ...token, startIdx }
})

const totalCodeChars = accumulatedLength

export function Hero() {
  const [tick, setTick] = useState(0)
  const [showConsoleLine1, setShowConsoleLine1] = useState(false)
  const [showConsoleLine2, setShowConsoleLine2] = useState(false)
  const [showConsoleLine3, setShowConsoleLine3] = useState(false)
  const [consoleText1, setConsoleText1] = useState("")
  const [consoleText2, setConsoleText2] = useState("")
  const [consoleText3, setConsoleText3] = useState("")

  useEffect(() => {
    let currentTick = 0
    const codeTimer = setInterval(() => {
      currentTick++
      setTick(currentTick)
      if (currentTick >= totalCodeChars) {
        clearInterval(codeTimer)
        
        // Wait 500ms before executing code (simulated run)
        setTimeout(() => {
          setShowConsoleLine1(true)
          let c1 = 0
          const text1 = "// ejecutando sistema..."
          const c1Timer = setInterval(() => {
            c1++
            setConsoleText1(text1.slice(0, c1))
            if (c1 >= text1.length) {
              clearInterval(c1Timer)
              
              // Wait 400ms before connecting DB
              setTimeout(() => {
                setShowConsoleLine2(true)
                let c2 = 0
                const text2 = "✓ base de datos conectada"
                const c2Timer = setInterval(() => {
                  c2++
                  setConsoleText2(text2.slice(0, c2))
                  if (c2 >= text2.length) {
                    clearInterval(c2Timer)
                    
                    // Wait 300ms before showing status ready
                    setTimeout(() => {
                      setShowConsoleLine3(true)
                      let c3 = 0
                      const text3 = "status: ready 🚀"
                      const c3Timer = setInterval(() => {
                        c3++
                        setConsoleText3(text3.slice(0, c3))
                        if (c3 >= text3.length) {
                          clearInterval(c3Timer)
                        }
                      }, 25)
                    }, 300)
                  }
                }, 20)
              }, 400)
            }
          }, 20)
        }, 500)
      }
    }, 18) // 18ms per character typing

    return () => {
      clearInterval(codeTimer)
    }
  }, [])

  const renderToken = (token: typeof processedCodeTokens[0]) => {
    const start = token.startIdx
    const end = start + token.text.length
    if (tick <= start) return null
    if (tick >= end) {
      return <span className={token.className}>{token.text}</span>
    }
    const visibleLength = tick - start
    return <span className={token.className}>{token.text.slice(0, visibleLength)}</span>
  }

  // A function to check if the cursor should be rendered on a specific line
  const isLineTyping = (lineNum: number) => {
    const lineTokens = processedCodeTokens.filter((t) => t.line === lineNum)
    if (lineTokens.length === 0) return false
    const start = lineTokens[0].startIdx
    const end = lineTokens[lineTokens.length - 1].startIdx + lineTokens[lineTokens.length - 1].text.length
    return tick >= start && tick < end
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.015_250/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.015_250/0.05)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Software a medida + Inteligencia Artificial
          </span>

          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Impulsamos tu negocio con{" "}
            <span className="text-[#059669]">
              software a medida
            </span>{" "}
            e{" "}
            <span className="text-[#059669]">
              Inteligencia Artificial
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground/80 lg:mx-0">
            En KeyWay Solutions desarrollamos soluciones tecnológicas de alto rendimiento diseñadas exclusivamente para automatizar tus procesos y optimizar tus decisiones.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#00dfa2] px-6 py-3 text-sm font-semibold text-[#0f172a] shadow-[0_0_28px_rgba(0,223,162,0.45)] transition-all hover:brightness-105 sm:w-auto"
            >
              Agendar Consulta
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-900 bg-card px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Ver Soluciones
            </a>
          </div>
        </div>

        {/* code editor preview card */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          {/* Ambient glow */}
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
          
          <div className="relative rounded-2xl border border-border bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-[13px] sm:text-sm leading-relaxed">
            {/* Editor Header / Title bar */}
            <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-3 select-none">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#ff5f56] transition-transform hover:scale-105" />
                <span className="size-3 rounded-full bg-[#ffbd2e] transition-transform hover:scale-105" />
                <span className="size-3 rounded-full bg-[#27c93f] transition-transform hover:scale-105" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">keyWaySolutions.js</span>
              <div className="w-14" />
            </div>

            {/* Editor Content */}
            <div className="p-5 sm:p-6 overflow-x-auto min-h-[250px]">
              {/* Simulated Code */}
              <div className="space-y-1">
                {/* Line 1 */}
                {tick > 0 && (
                  <div>
                    {processedCodeTokens
                      .filter((t) => t.line === 1)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(1) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
                {/* Line 2 */}
                {tick > processedCodeTokens.find((t) => t.line === 2)!.startIdx && (
                  <div className="pl-6 border-l border-border/30">
                    {processedCodeTokens
                      .filter((t) => t.line === 2)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(2) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
                {/* Line 3 */}
                {tick > processedCodeTokens.find((t) => t.line === 3)!.startIdx && (
                  <div className="pl-6 border-l border-border/30">
                    {processedCodeTokens
                      .filter((t) => t.line === 3)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(3) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
                {/* Line 4 */}
                {tick > processedCodeTokens.find((t) => t.line === 4)!.startIdx && (
                  <div className="pl-6 border-l border-border/30">
                    {processedCodeTokens
                      .filter((t) => t.line === 4)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(4) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
                {/* Line 5 */}
                {tick > processedCodeTokens.find((t) => t.line === 5)!.startIdx && (
                  <div className="pl-6 border-l border-border/30">
                    {processedCodeTokens
                      .filter((t) => t.line === 5)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(5) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
                {/* Line 6 */}
                {tick > processedCodeTokens.find((t) => t.line === 6)!.startIdx && (
                  <div className="pl-6 border-l border-border/30">
                    {processedCodeTokens
                      .filter((t) => t.line === 6)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(6) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
                {/* Line 7 */}
                {tick > processedCodeTokens.find((t) => t.line === 7)!.startIdx && (
                  <div>
                    {processedCodeTokens
                      .filter((t) => t.line === 7)
                      .map((token, i) => (
                        <span key={i}>{renderToken(token)}</span>
                      ))}
                    {isLineTyping(7) && (
                      <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse select-none align-middle" />
                    )}
                  </div>
                )}
              </div>

              {/* Console logs */}
              {(showConsoleLine1 || showConsoleLine2 || showConsoleLine3) && (
                <div className="mt-6 border-t border-border/60 pt-4 space-y-1 text-xs select-none">
                  {showConsoleLine1 && (
                    <div className="text-emerald-700/80 flex items-center">
                      <span>{consoleText1}</span>
                      {consoleText1.length < 24 && (
                        <span className="inline-block w-1.5 h-3 ml-0.5 bg-emerald-700/80 animate-pulse align-middle" />
                      )}
                    </div>
                  )}
                  {showConsoleLine2 && (
                    <div className="text-emerald-600 font-medium flex items-center gap-1">
                      <span>{consoleText2}</span>
                      {consoleText2.length < 25 && (
                        <span className="inline-block w-1.5 h-3 ml-0.5 bg-emerald-600 animate-pulse align-middle" />
                      )}
                    </div>
                  )}
                  {showConsoleLine3 && (
                    <div className="text-[#1e60d5] font-semibold italic flex items-center">
                      <span>{consoleText3}</span>
                      {consoleText3.length < 17 && (
                        <span className="inline-block w-1.5 h-3 ml-0.5 bg-[#1e60d5] animate-pulse align-middle" />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Floating Tags Stack */}
          {/* Tag 1: .NET */}
          <div 
            className="absolute -left-2 md:-left-4 top-[8%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-slow"
            style={{ animationDelay: '0ms' }}
          >
            <span className="size-2 rounded-full bg-[#512bd4]" />
            <span>.NET</span>
          </div>

          {/* Tag 2: C# */}
          <div 
            className="absolute -left-6 md:-left-10 top-[38%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-medium"
            style={{ animationDelay: '1000ms' }}
          >
            <span className="size-2 rounded-full bg-[#178600]" />
            <span>C#</span>
          </div>

          {/* Tag 3: Angular */}
          <div 
            className="absolute -left-4 md:-left-6 top-[68%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-fast"
            style={{ animationDelay: '500ms' }}
          >
            <span className="size-2 rounded-full bg-[#dd0031]" />
            <span>Angular</span>
          </div>

          {/* Tag 4: SQL Server */}
          <div 
            className="absolute left-[10%] md:left-1/4 -bottom-6 z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-medium"
            style={{ animationDelay: '1500ms' }}
          >
            <span className="size-2 rounded-full bg-[#cc292b]" />
            <span>SQL Server</span>
          </div>

          {/* Tag 5: TypeScript */}
          <div 
            className="absolute -right-2 md:-right-4 top-[5%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-fast"
            style={{ animationDelay: '2000ms' }}
          >
            <span className="size-2 rounded-full bg-[#3178c6]" />
            <span>TypeScript</span>
          </div>

          {/* Tag 6: React */}
          <div 
            className="absolute -right-6 md:-right-10 top-[35%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-slow"
            style={{ animationDelay: '800ms' }}
          >
            <span className="size-2 rounded-full bg-[#61dafb]" />
            <span>React</span>
          </div>

          {/* Tag 7: Node.js */}
          <div 
            className="absolute -right-4 md:-right-6 top-[65%] z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-medium"
            style={{ animationDelay: '1200ms' }}
          >
            <span className="size-2 rounded-full bg-[#339933]" />
            <span>Node.js</span>
          </div>

          {/* Tag 8: Tailwind */}
          <div 
            className="absolute right-[10%] md:right-1/4 -bottom-6 z-10 flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md scale-90 md:scale-100 animate-float-fast"
            style={{ animationDelay: '400ms' }}
          >
            <span className="size-2 rounded-full bg-[#38bdf8]" />
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  )
}
