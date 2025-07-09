"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
  onAnimationEnd?: () => void
}

type AnimatedCounterProps = {
  end: number
  duration?: number // in ms
  suffix?: string
  start?: boolean
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 700, suffix = "", start = true }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }
    let startVal = 0
    const increment = end / (duration / 16)
    const interval = setInterval(() => {
      startVal += increment
      if (startVal >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(Math.floor(startVal))
      }
    }, 16)
    return () => clearInterval(interval)
  }, [end, duration, start])



  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0, onAnimationEnd }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
            if (onAnimationEnd) {
              onAnimationEnd()
            }
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, onAnimationEnd])

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClass} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClass} opacity-0`
        case "slide-left":
          return `${baseClass} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClass} opacity-0 translate-x-8`
        case "scale-up":
          return `${baseClass} opacity-0 scale-95`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
