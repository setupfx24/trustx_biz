'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { PopupProvider } from '@/landing/components/PopupContext'
import ScrollProgress from '@/landing/components/animations/ScrollProgress'
import Footer from '@/landing/components/Footer'
import { Navbar as TrustxNavbar } from '@/trustx/components/Navbar'
import { ChatBot } from '@/trustx/components/ChatBot'
import { ScrollToTopButton } from '@/trustx/components/ScrollToTopButton'
import { TrustBadges } from '@/trustx/components/TrustBadges'
import { AppStoreButtons } from '@/trustx/components/AppStoreButtons'
import '@/trustx/styles.css'
import '@/landing/landing.css'

/**
 * Landing layout — wraps every page under (landing). The home page (/)
 * brings its own self-contained chrome (see /trustx/HomePage), so we
 * skip the legacy Navbar/Footer + scrub the body padding on that exact
 * path. All inner pages (about, contact, how-it-works, etc.) keep the
 * existing landing chrome unchanged.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  /* Override trader-app theme for landing pages */
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', 'dark')
    html.style.backgroundColor = '#08090b'
    html.style.color = '#f5f5f5'
    return () => {
      html.setAttribute('data-theme', 'light')
      html.style.backgroundColor = '#F2EFE9'
      html.style.color = '#000000'
    }
  }, [])

  if (isHome) {
    // Bare wrapper — HomePage renders its own Navbar + CtaFooter.
    return (
      <PopupProvider>
        <ScrollProgress />
        {children}
        <ChatBot />
        <ScrollToTopButton />
      </PopupProvider>
    )
  }

  return (
    <PopupProvider>
      <ScrollProgress />
      <div className="trustx-home landing-root min-h-screen">
        <TrustxNavbar />
        {children}
        <AppStoreButtons />
        <TrustBadges />
        <Footer />
      </div>
      <ChatBot />
      <ScrollToTopButton />
    </PopupProvider>
  )
}
