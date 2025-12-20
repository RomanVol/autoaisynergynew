import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AutoAI Synergy | AI Automation Agency',
  description: 'Transform your business with custom AI solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
