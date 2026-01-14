'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        // Full Sun with Yellow Light
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="5" fill="#FCD34D" stroke="#FCD34D"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#FCD34D" strokeWidth={2} strokeLinecap="round"/>
        </svg>
      ) : (
        // Half Moon
        <svg
          className="w-5 h-5 text-gray-700"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.83c-.44-.06-.9-.1-1.36-.1z" />
        </svg>
      )}
    </button>
  )
}
