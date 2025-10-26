// src/GlobalCTA/Component.tsx

import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { GlobalCta } from '@/payload-types'
import { GlobalCTAClient } from './Component.client'

export async function GlobalCTA() {
  // Fetch the GlobalCTA Global, ensuring depth is at least 1 for image
  const ctaData: GlobalCta = (await getCachedGlobal('global-cta', 1)()) as GlobalCta

  return <GlobalCTAClient data={ctaData} />
}
