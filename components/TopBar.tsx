'use client'
import { useTranslations } from 'next-intl'

export default function TopBar() {
  const t = useTranslations('header')
  
  return (
    <div className="bg-[color:var(--brand)] text-white text-xs py-1.5 sm:py-2 px-1.5 sm:px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 lg:gap-4">
        <div className="flex items-center gap-1 lg:gap-2 flex-wrap justify-center sm:justify-start text-xs lg:text-sm">
          <a href="tel:+919522748858" className="hover:underline whitespace-nowrap">
            <span className="hidden lg:inline">☎️ {t('phone')}</span>
            <span className="lg:hidden">☎️ +91 95227</span>
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="mailto:mapitambarasamadhan@gmail.com" className="hover:underline hidden lg:inline truncate">📧 mapitambarasamadhan@gmail.com</a>
        </div>
        <div className="flex items-center gap-1 lg:gap-2 flex-wrap text-xs lg:text-sm justify-center sm:justify-end">
          <a href="https://wa.me/919522748858" target="_blank" rel="noreferrer" className="hover:underline whitespace-nowrap">{t('whatsapp')}</a>
          <span className="hidden sm:inline">•</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline whitespace-nowrap hidden sm:inline">
            <span className="hidden lg:inline">📘 FB</span>
            <span className="lg:hidden">📘</span>
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline whitespace-nowrap hidden sm:inline">
            <span className="hidden lg:inline">📷 IG</span>
            <span className="lg:hidden">📷</span>
          </a>
        </div>
      </div>
    </div>
  )
}
