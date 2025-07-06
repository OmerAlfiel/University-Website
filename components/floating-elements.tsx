"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"
        style={{
          left: mousePosition.x * 0.02 + "px",
          top: mousePosition.y * 0.02 + "px",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse"
        style={{
          right: mousePosition.x * -0.01 + "px",
          bottom: mousePosition.y * -0.01 + "px",
          transform: "translate(50%, 50%)",
          animationDelay: "1s",
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="bg-blue-500 rounded-full w-1 h-1 animate-ping"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
