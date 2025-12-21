'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-noir-700/50 animate-pulse" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-switcher-container group relative"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Outer pill container with premium border */}
      <div className={`
        relative w-14 h-8 rounded-full overflow-hidden
        transition-all duration-500 ease-out
        ${isDark
          ? 'bg-gradient-to-r from-noir-800 via-noir-700 to-noir-800'
          : 'bg-gradient-to-r from-gold-100 via-gold-50 to-gold-100'
        }
      `}>
        {/* Animated border glow */}
        <div className={`
          absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          ${isDark
            ? 'shadow-[inset_0_0_12px_rgba(245,166,35,0.3)]'
            : 'shadow-[inset_0_0_12px_rgba(245,166,35,0.4)]'
          }
        `} />

        {/* Inner track with subtle texture */}
        <div className={`
          absolute inset-[2px] rounded-full overflow-hidden
          transition-colors duration-500
          ${isDark
            ? 'bg-gradient-to-br from-noir-900 to-noir-950'
            : 'bg-gradient-to-br from-amber-50 to-gold-100'
          }
        `}>
          {/* Star field for dark mode */}
          <AnimatePresence>
            {isDark && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-[2px] h-[2px] bg-gold-300 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: 1,
                    }}
                    transition={{
                      opacity: {
                        repeat: Infinity,
                        duration: 2,
                        delay: i * 0.3
                      },
                      scale: { duration: 0.5, delay: i * 0.1 }
                    }}
                    style={{
                      left: `${20 + (i * 12)}%`,
                      top: `${25 + (i % 3) * 20}%`,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sun rays for light mode */}
          <AnimatePresence>
            {!isDark && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-[1px] bg-gradient-to-r from-gold-400/40 to-transparent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: 1,
                    }}
                    transition={{
                      opacity: { repeat: Infinity, duration: 3, delay: i * 0.2 },
                      scale: { duration: 0.4, delay: i * 0.05 }
                    }}
                    style={{
                      left: '65%',
                      top: '50%',
                      transformOrigin: 'left center',
                      transform: `rotate(${i * 60}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The celestial orb (sun/moon) */}
        <motion.div
          className="absolute top-1 w-6 h-6"
          animate={{
            left: isDark ? '4px' : 'calc(100% - 28px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        >
          {/* Orb container with glow */}
          <div className="relative w-full h-full">
            {/* Outer glow */}
            <motion.div
              className={`
                absolute -inset-1 rounded-full blur-sm
                ${isDark ? 'bg-gold-400/30' : 'bg-gold-400/50'}
              `}
              animate={{
                scale: [1, 1.2, 1],
                opacity: isDark ? [0.3, 0.5, 0.3] : [0.4, 0.7, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              }}
            />

            {/* Main orb body */}
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden"
              animate={{
                background: isDark
                  ? 'linear-gradient(135deg, #E0E0E8 0%, #B5B5C0 50%, #8A8A95 100%)'
                  : 'linear-gradient(135deg, #FFD583 0%, #F5A623 50%, #FF8A00 100%)',
                boxShadow: isDark
                  ? '0 2px 8px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2)'
                  : '0 2px 12px rgba(245,166,35,0.5), inset -2px -2px 4px rgba(255,138,0,0.3)',
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Moon craters (dark mode) */}
              <AnimatePresence>
                {isDark && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      className="absolute w-2 h-2 rounded-full bg-noir-400/50"
                      style={{ top: '20%', left: '25%' }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      exit={{ opacity: 0 }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-noir-400/40"
                      style={{ top: '50%', left: '55%' }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.25 }}
                      exit={{ opacity: 0 }}
                      className="absolute w-1 h-1 rounded-full bg-noir-400/30"
                      style={{ top: '65%', left: '30%' }}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Sun face shine (light mode) */}
              <AnimatePresence>
                {!isDark && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute w-2 h-1 rounded-full bg-white/60"
                      style={{ top: '25%', left: '20%', transform: 'rotate(-30deg)' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Premium border ring */}
      <div className={`
        absolute inset-0 rounded-full pointer-events-none
        transition-all duration-500
        ${isDark
          ? 'ring-1 ring-gold-400/20 group-hover:ring-gold-400/40'
          : 'ring-1 ring-gold-400/30 group-hover:ring-gold-400/60'
        }
      `} />
    </button>
  )
}
