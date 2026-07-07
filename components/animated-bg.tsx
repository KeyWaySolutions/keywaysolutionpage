"use client"

import { useEffect, useState } from "react"

export function AnimatedBG() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Smooth lerp effect for mouse movement to prevent jumpy rendering and feel extremely high-end
  useEffect(() => {
    if (!isMounted) return
    let animationFrameId: number

    const updatePosition = () => {
      setMousePos((current) => {
        const dx = targetPos.x - current.x
        const dy = targetPos.y - current.y
        // Lerp speed: 0.08 for smooth latency effect
        return {
          x: current.x + dx * 0.08,
          y: current.y + dy * 0.08,
        }
      })
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)
    return () => cancelAnimationFrame(animationFrameId)
  }, [targetPos, isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-background">
      {/* Subtle grid background across the whole page */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.33_0.03_235/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.33_0.03_235/0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-60"
        aria-hidden="true"
      />

      {/* Ambient glowing blobs */}
      <div
        className="absolute size-[550px] rounded-full bg-primary/4 blur-[130px] animate-pulse"
        style={{
          top: "15%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          animationDuration: "12s",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute size-[650px] rounded-full bg-chart-2/3 blur-[160px] animate-pulse"
        style={{
          bottom: "10%",
          right: "15%",
          transform: "translate(50%, 50%)",
          animationDuration: "16s",
          animationDelay: "3s",
        }}
        aria-hidden="true"
      />

      {/* Interactive Mouse Spotlight Glow */}
      <div
        className="absolute size-[400px] rounded-full bg-primary/6 blur-[90px] will-change-transform"
        style={{
          transform: `translate3d(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%), 0)`,
        }}
        aria-hidden="true"
      />

      {/* Vignette mask overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.16_0.02_235/0.8)_85%,var(--background)_100%)]" 
        aria-hidden="true"
      />
    </div>
  )
}
