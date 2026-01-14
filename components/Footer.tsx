'use client'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import AdminLoginModal from './AdminLoginModal'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('navigation')
  const locale = useLocale()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <footer className="bg-[color:var(--brand)] dark:bg-gray-950 text-white overflow-hidden transition-colors">
      <div className="container section grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-3 font-serif text-xl font-bold">Pandit Subham</h4>
          <p className="text-sm text-white/80">
            Trusted Vedic astrologer offering spiritual solutions for prosperity, protection, and guidance in Indore, India.
          </p>
        </div>
        <div>
          <h5 className="mb-3 font-semibold uppercase text-yellow-300">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-yellow-300 transition" href={`/${locale}`}>{tNav('home')}</a></li>
            <li><a className="hover:text-yellow-300 transition" href={`/${locale}/services`}>{tNav('services')}</a></li>
            <li><a className="hover:text-yellow-300 transition" href={`/${locale}/about`}>{tNav('about')}</a></li>
            <li><a className="hover:text-yellow-300 transition" href={`/${locale}/contact`}>{tNav('contact')}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3 font-semibold uppercase text-yellow-300">Services</h5>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-yellow-300 transition" href="#">Business Growth</a></li>
            <li><a className="hover:text-yellow-300 transition" href="#">Black Magic Removal</a></li>
            <li><a className="hover:text-yellow-300 transition" href="#">Palm Reading</a></li>
            <li><a className="hover:text-yellow-300 transition" href="#">Business Solutions</a></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3 font-semibold uppercase text-yellow-300">Contact Info</h5>
          <p className="text-sm">📞 +91 9522748858</p>
          <p className="text-sm">📧 mapitambarasamadhan@gmail.com</p>
          <p className="text-sm mt-2">Indore, India</p>
          <div className="flex flex-col gap-3">
            <span>-----------------------</span>
            <a href="#" className="hover:text-yellow-300">Pt Shubham Sharma</a>
            <span>-----------------------</span>
            <a href="#" className="hover:text-yellow-300">_pt.shubham_sharma</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 px-4 flex items-center justify-between text-xs text-white/70">
        <div>{t('copyright')}</div>
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition"
          aria-label="Admin login"
          title="Admin Login"
        >
          🔐
        </button>
      </div>
      <AdminLoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </footer>
  )
}
