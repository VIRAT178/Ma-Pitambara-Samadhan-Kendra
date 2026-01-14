'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nav = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/certificates`, label: t('certificates') },
    { href: `/${locale}/testimonials`, label: t('testimonials') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 bg-white dark:bg-gray-950 shadow-sm transition-colors">
      <div className="mx-auto max-w-6xl flex h-14 sm:h-16 items-center justify-between px-1.5 sm:px-4 lg:px-6 gap-1 sm:gap-2">
        <Link href="/" className="flex items-center gap-0.5 sm:gap-2 text-base font-bold tracking-wide flex-shrink-0 min-w-fit">
          <Image 
            src="/2252413.webp" 
            alt="Pandit Subham jii" 
            width={40} 
            height={40} 
            className="rounded-full object-cover w-6 h-6 sm:w-10 sm:h-10"
          />
          <span className="hidden xs:block sm:block">
            <span className="text-[color:var(--brand)] text-xs sm:text-base leading-tight">Pandit</span>
            <br />
            <span className="text-[color:var(--brand)] text-xs leading-tight">Shubham</span>
          </span>
          <span className="xs:hidden sm:hidden text-[color:var(--brand)] text-xs">Ji</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-3 xl:gap-6 flex-1 justify-center">
          {nav.map((n) => (
            <Link 
              key={n.href} 
              href={n.href} 
              className="text-sm lg:text-base font-medium text-[color:var(--ink)] hover:text-[color:var(--brand)] dark:text-[color:var(--ink)] dark:hover:text-[color:var(--accent)] transition whitespace-nowrap"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-1 ml-auto flex-shrink-0">
          <ThemeToggle />
          <LanguageSwitcher />
          <a href="tel:+919522748858" className="btn btn-outline hidden md:inline-flex text-xs md:text-sm px-2 md:px-3 py-1 md:py-2">
            <span className="hidden lg:inline">+91 95227 48858</span>
            <span className="lg:hidden">Call</span>
          </a>
          <a
            href="https://wa.me/919522748858"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-xs px-2 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap"
            aria-label="Chat on WhatsApp"
          >
            <span className="hidden xs:inline sm:inline">WhatsApp</span>
            <span className="xs:hidden sm:hidden">Chat</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 text-[color:var(--brand)] flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-gray-950 transition-colors">
          <nav className="mx-auto max-w-6xl flex flex-col px-1.5 sm:px-4 lg:px-6 py-2">
            {nav.map((n) => (
              <Link 
                key={n.href} 
                href={n.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-2 py-2 text-xs sm:text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--brand)] hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                {n.label}
              </Link>
            ))}
            <a 
              href="tel:+919522748858" 
              className="px-2 py-2 text-xs sm:text-sm font-medium text-[color:var(--brand)] hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 +91 95227 48858
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
