'use client'

import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  
  return (
    <section className="relative overflow-hidden gradient-hero dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=60"
          alt="Spiritual mandala"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          quality={80}
          className="dark:mix-blend-overlay"
        />
      </div>
      <div className="container relative section">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl leading-tight font-bold sm:text-6xl text-[color:var(--ink)] dark:text-[color:var(--ink)]">
            {t('title')} <span className="text-[color:var(--brand)] dark:text-[color:var(--accent)]">{t('titleHighlight')}</span><br />
            <span className="text-[color:var(--brand)] dark:text-[color:var(--accent)]">{t('subtitle')}</span>
          </h1>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="rounded-full bg-[color:var(--brand)] dark:bg-[color:var(--accent)] px-5 py-2 text-white dark:text-gray-900 font-semibold text-sm">
            {t('location')}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="tel:+9479908066" className="btn btn-primary text-lg px-8 py-4">
            {t('callButton')}
          </a>
          <a href={`/${locale}#contact`} className="btn btn-outline text-lg px-8 py-4 border-2 dark:border-[color:var(--accent)] dark:text-[color:var(--accent)] dark:hover:bg-[color:var(--accent)] dark:hover:text-gray-900">
            {t('appointmentButton')}
          </a>
        </div>
      </div>
    </section>
  )
}
