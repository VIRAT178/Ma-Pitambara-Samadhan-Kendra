'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  ]

  const handleLanguageChange = (newLocale: string) => {
    // Remove current locale from pathname
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPathname = segments.join('/')
    router.push(newPathname)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium transition"
        aria-label="Change language"
      >
        <span>
          {languages.find((lang) => lang.code === locale)?.flag}
        </span>
        <span className="hidden sm:inline">
          {languages.find((lang) => lang.code === locale)?.label}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition ${
                locale === language.code ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              } ${language.code === languages[0].code ? 'rounded-t-lg' : ''} ${
                language.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''
              }`}
              aria-current={locale === language.code}
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.label}</span>
              {locale === language.code && <span className="ml-auto">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
