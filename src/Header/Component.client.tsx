'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Media, Header as PayloadHeaderType, Post, Page } from '@/payload-types'

// 1. Import your Relume Navbar component
// NOTE: Adjust the path based on where you put it in organized-components
import { Navbar as RelumeNavbar } from '@/components/organized-components/GlobalComponents/Navigation/Navbar'
import type { NavbarProps } from '@/components/organized-components/types/components' // Import the Relume props type

interface HeaderClientProps {
  data: PayloadHeaderType // Rename type for clarity
}

// Helper function to extract the Payload link data for Relume's expected structure
const mapPayloadLinkToRelumeLink = (link: any) => ({
  text: link.link.label,
  href: link.link.url || link.link.reference?.value?.slug || '#', // Handles external/internal links
})

const isMediaObject = (logo: any): logo is Media => {
  // Check if it's an object, not null, and has a key like 'url' or 'alt'
  return typeof logo === 'object' && logo !== null && 'url' in logo
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  // Keep the theme logic from the template
  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // --- Map Payload Data to Relume Props ---
  const relumeLinks = (data.navItems ?? []).map(mapPayloadLinkToRelumeLink)

  const relumeButtons: NavbarProps['buttons'] = (data.actionButtons ?? []).map((button) => ({
    text: button.link.label,
    variant: button.variant === 'secondary' ? 'secondary' : 'default',
    href: button.link.url || (button.link.reference?.value as Post | Page)?.slug || '/',
  }))

  const relumeProps: NavbarProps = {
    logo: {
      // If isMediaObject(data.logo) is TRUE, TypeScript allows access to data.logo.url
      src: isMediaObject(data.logo) ? data.logo.url! : '/default-logo.svg',
      // If isMediaObject(data.logo) is TRUE, TypeScript allows access to data.logo.alt
      alt: isMediaObject(data.logo) ? data.logo.alt! : 'Happy Screen Logo',
      className: 'max-h-14 w-auto',
    },
    // 3. Pass the mapped links
    links: relumeLinks,
    // 4. Pass the mapped buttons
    buttons: relumeButtons,
    showButtons: relumeButtons.length > 0,
    colorScheme: 'light', // You can manage this with Payload data if needed
  }

  // --- 5. Return the Relume Navbar instead of the template's structure ---
  return (
    <div className="container relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      <RelumeNavbar {...relumeProps} />
    </div>
  )
}
