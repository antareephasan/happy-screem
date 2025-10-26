// src/Footer/Component.tsx

import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'
import { FooterClient } from './Component.client'

// Renamed to FooterComponent to avoid conflict with the imported 'Footer' type
export async function Footer() {
  // Fetch the Footer Global, ensuring depth is at least 1 for logo/links
  const footerData: Footer = (await getCachedGlobal('footer', 1)()) as Footer

  return <FooterClient data={footerData} />
}
