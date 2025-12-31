'use client'

import { useEffect } from 'react'

export function N8nTrigger() {
  useEffect(() => {
    const triggerN8n = async () => {
      try {
        await fetch('https://n8n.srv1221368.hstgr.cloud/webhook/visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: 'Page Loaded',
            url: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (error) {
        // Silently fail - don't disrupt user experience
      }
    }

    triggerN8n()
  }, [])

  return null
}
