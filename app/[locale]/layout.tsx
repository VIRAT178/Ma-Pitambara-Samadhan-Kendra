import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import '../../app/globals.css'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { localBusinessJsonLd, astrologerPersonJsonLd } from '../../lib/seo'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '../../i18n/routing'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const merri = Merriweather({ subsets: ['latin'], weight: ['300','400','700'], variable: '--font-serif' })

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    default: 'Maa Pitambara Samadhan Kendra — Trusted Astrologer',
    template: '%s | Maa Pitambara Samadhan Kendra',
  },
  description:
    'Resolve business and family problems, remove black magic, and receive trusted Vedic guidance from Pandit Shubham Sharma.',
  keywords: [
    'astrologer',
    'pandit',
    'business growth',
    'black magic removal',
    'palm reading',
    'psychic reading',
    'business problems',
    'Vedic astrology',
    'best astrologer',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Pandit Shubham Sharma — Trusted Astrologer',
    description:
      'Spiritual guidance for prosperity and protection. Call now to consult Pandit Shubham Sharma.',
    siteName: 'Pandit Shubham Sharma',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/' },
}

export default async function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale || 'en'
  
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Manually load messages for this locale
  let messages: any = {}
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error)
    messages = (await import(`../../messages/en.json`)).default
  }

  const business = localBusinessJsonLd({
    name: 'Pandit Shubham Sharma',
    url: '/',
    telephone: '+91 94799 08066',
    address: {
      streetAddress: 'Near Main Temple Road',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: '000000',
      addressCountry: 'IN',
    },
    areaServed: 'India',
  })

  const astrologer = astrologerPersonJsonLd({
    name: 'Pandit Shubham Sharma',
    url: '/',
    telephone: '+91 94799 08066',
    sameAs: [
      'https://wa.me/919479908066',
    ],
  })

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${merri.variable} font-sans bg-[color:var(--bg)] text-[color:var(--ink)] transition-colors`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([business, astrologer]) }}
        />
      </body>
    </html>
  )
}
