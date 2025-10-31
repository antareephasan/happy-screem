import React from 'react'
import type { CallToActionBlock as CallToActionBlockProps } from '@/payload-types'
import { CTA } from '@/components/organized-components/ReusableComponents/CTA/CTA'
import type { Media } from '@/payload-types'

export const CallToActionBlock: React.FC<CallToActionBlockProps> = (props) => {
  const {
    layout,
    showTagline,
    tagline,
    heading,
    description,
    ctaType,
    form,
    formSettings,
    buttons,
    showImage,
    image,
    imageAlt,
    colorScheme,
  } = props

  const imageMedia = image as Media | undefined

  // Extract form ID
  const formId = typeof form === 'object' && form ? form.id : form

  // Transform buttons data
  const transformedButtons =
    buttons?.map((button) => ({
      text: button.text || '',
      link: button.link || '',
      variant: button.variant as 'primary' | 'secondary',
    })) || []

  return (
    <CTA
      layout={layout as 'split' | 'centered'}
      showTagline={showTagline || false}
      tagline={tagline || ''}
      heading={heading || ''}
      description={description}
      showForm={ctaType === 'form'}
      showButtons={ctaType === 'buttons'}
      formId={formId}
      formPlaceholder={formSettings?.formPlaceholder || ''}
      formButtonText={formSettings?.formButtonText || ''}
      termsText={formSettings?.termsText || ''}
      termsLink={formSettings?.termsLink || '#'}
      buttons={transformedButtons}
      showImage={showImage || false}
      image={
        imageMedia
          ? {
              src: imageMedia.url || '',
              alt: imageAlt || '',
            }
          : undefined
      }
      colorScheme={colorScheme as 'primary' | 'secondary' | 'light' | 'dark' | 'custom'}
    />
  )
}
