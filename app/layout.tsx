import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import AstrologyConsultationModal from '../components/AstrologyConsultationModal'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                const isDark = theme === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <AstrologyConsultationModal />
        </ThemeProvider>
      </body>
    </html>
  )
}

