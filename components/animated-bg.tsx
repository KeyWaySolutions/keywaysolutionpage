"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  z: number
  baseX: number
  baseY: number
  baseZ: number
  size: number
  color: string
  opacity: number
}

export function AnimatedBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  // Track mouse coordinates for spotlight
  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Smooth lerp effect for mouse movement to prevent jumpy rendering
  useEffect(() => {
    if (!isMounted) return
    let animationFrameId: number

    const updatePosition = () => {
      setMousePos((current) => {
        const dx = targetPos.x - current.x
        const dy = targetPos.y - current.y
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

  // Canvas particle logic
  useEffect(() => {
    if (!isMounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Adjust canvas size
    const resizeCanvas = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
      
      // Reinitialize particles on resize to fit the viewport bounds nicely
      particles = initParticles(width, height)
    }

    // Initialize spiral coordinate particles
    const initParticles = (width: number, height: number): Particle[] => {
      const list: Particle[] = []
      const maxParticles = 320
      const numArms = 5
      const spiralTightness = 1.0 // spiral twist factor
      const maxRadius = Math.min(width, height) * 0.75

      for (let i = 0; i < maxParticles; i++) {
        const armIndex = i % numArms
        const progress = Math.random() // progress along the arm (0 to 1)
        
        // Helix coordinate math
        const r = 20 + progress * maxRadius
        const angle = (armIndex * (2 * Math.PI / numArms)) + (progress * Math.PI * 2 * spiralTightness) + (Math.random() - 0.5) * 0.25
        
        // 3D coordinates
        const x = r * Math.cos(angle)
        const y = r * Math.sin(angle)
        const z = (Math.random() - 0.5) * 350 // depth coordinates

        // Dynamic color gradient based on hemispherical angle
        let deg = (Math.atan2(y, x) * 180) / Math.PI
        if (deg < 0) deg += 360

        // Map degrees to hues matching the Google Antigravity colors:
        // Yellow (50), Magenta (310), Cyan (190), Blue (220)
        // A straight mapping hue = deg produces a complete beautiful circular color wheel!
        const hue = deg
        const saturation = 95
        const lightness = 62

        list.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          size: 0.7 + Math.random() * 1.5,
          color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          opacity: 0.2 + progress * 0.55
        })
      }
      return list
    }

    // Initialize sizes
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Render loop
    const render = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      ctx.clearRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2

      // Depth sorting (render particles from back to front)
      particles.sort((a, b) => b.z - a.z)

      // Slowly rotate in 3D (Y axis and X axis)
      const cosY = Math.cos(0.0005)
      const sinY = Math.sin(0.0005)
      const cosX = Math.cos(0.0002)
      const sinX = Math.sin(0.0002)

      particles.forEach((p) => {
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.z * cosY + p.x * sinY

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX
        const z2 = z1 * cosX + p.y * sinX

        p.x = x1
        p.y = y2
        p.z = z2

        // Perspective projection
        const fov = 450 // camera perspective distance
        const scale = fov / (fov + p.z)
        const projX = p.x * scale + centerX
        const projY = p.y * scale + centerY

        if (projX >= -20 && projX <= width + 20 && projY >= -20 && projY <= height + 20) {
          const drawSize = p.size * scale
          const opacity = p.opacity * scale * 0.6

          ctx.beginPath()
          ctx.arc(projX, projY, Math.max(0.5, drawSize), 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = Math.max(0, Math.min(1, opacity))
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.33_0.03_235/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.33_0.03_235/0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-60"
        aria-hidden="true"
      />

      {/* Canvas for 3D particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full opacity-70 pointer-events-none will-change-transform"
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
