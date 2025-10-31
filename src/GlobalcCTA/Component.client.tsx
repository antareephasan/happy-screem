// src/GlobalCTA/Component.client.tsx

'use client'

import React from 'react'
import type { GlobalCta as PayloadGlobalCTAType, Media } from '@/payload-types'
import { CTA } from '@/components/organized-components/GlobalComponents/CTA/CTA'
import type { CTAProps } from '@/components/organized-components/types/components'

// --- TYPE GUARD ---
const isMediaObject = (image: unknown): image is Media => {
  return typeof image === 'object' && image !== null && 'url' in image
}

interface GlobalCTAClientProps {
  data: PayloadGlobalCTAType
}

export const GlobalCTAClient: React.FC<GlobalCTAClientProps> = ({ data }) => {
  // Don't render if disabled
  if (!data.enabled) {
    return null
  }

  const isMedia = isMediaObject(data.image)

  // Extract form ID
  const formId = typeof data.form === 'object' && data.form ? data.form.id : data.form

  // Transform buttons data
  const relumeButtons: CTAProps['buttons'] = (data.buttons ?? []).map((button) => ({
    text: button.text || '',
    link: button.link || '',
    variant: button.variant as 'primary' | 'secondary',
  }))

  // Combine everything into Relume props
  const relumeProps: CTAProps = {
    layout: data.layout as 'split' | 'centered',
    showTagline: data.showTagline || false,
    tagline: data.tagline!,
    heading: data.heading || '',
    description: data.description || null,
    showForm: data.ctaType === 'form',
    showButtons: data.ctaType === 'buttons',
    formId: formId,
    formPlaceholder: data.formSettings?.formPlaceholder || '',
    formButtonText: data.formSettings?.formButtonText || '',
    buttons: relumeButtons,
    showImage: data.showImage || false,
    image: isMedia
      ? {
          src: String((data.image as Media).url),
          alt: data.imageAlt || (data.image as Media).alt || 'CTA Image',
        }
      : undefined,
    colorScheme: data.colorScheme || 'primary',
  }

  return <CTA {...relumeProps} />
}
