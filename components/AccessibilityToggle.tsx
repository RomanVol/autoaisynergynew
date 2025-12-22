'use client'

import { useEffect, useState } from 'react'
import { Accessibility } from 'lucide-react'

const STORAGE_KEY = 'a11y-mode'

export function AccessibilityToggle() {
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    const isEnabled = stored === 'on'
    setEnabled(isEnabled)
    document.documentElement.classList.toggle('a11y', isEnabled)
  }, [])

  const toggleA11y = () => {
    const next = !enabled
    setEnabled(next)
    document.documentElement.classList.toggle('a11y', next)
    localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off')
  }

  if (!mounted) {
    return <div className="w-11 h-11 rounded-full bg-noir-700/50 animate-pulse" aria-hidden="true" />
  }

  return (
    <button
      type="button"
      onClick={toggleA11y}
      className={`group flex items-center justify-center w-11 h-11 rounded-full
                  bg-noir-800/60 border border-gold-400/15
                  hover:bg-noir-700/60 hover:border-gold-400/30
                  transition-all duration-300
                  ${enabled ? 'ring-2 ring-gold-400/60' : ''}`}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable accessibility mode' : 'Enable accessibility mode'}
      title={enabled ? 'Accessibility mode on' : 'Accessibility mode off'}
    >
      <Accessibility className="w-5 h-5 text-gold-300 group-hover:text-gold-400 transition-colors" />
    </button>
  )
}
