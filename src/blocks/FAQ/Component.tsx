import React from 'react'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import { FAQ } from '@/components/organized-components/ReusableComponents/Other/FAQ'
import { ColorSchemeVariant } from '@/components/organized-components'

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { heading, description, faqs, showContactSection, contactSection, colorScheme } = props

  // Transform the FAQ data to match the component's interface
  const transformedFaqs =
    faqs?.map((faq) => ({
      question: faq.question || '',
      answer: faq.answer, // Pass the raw richText data
    })) || []

  return (
    <FAQ
      heading={heading || ''}
      description={description} // Pass raw richText data
      faqs={transformedFaqs}
      showContactSection={showContactSection!}
      contactHeading={contactSection?.contactHeading || ''}
      contactDescription={contactSection?.contactDescription} // Pass raw richText data
      contactButtonText={contactSection?.contactButtonText || ''}
      contactButtonLink={contactSection?.contactButtonLink || '#'}
      colorScheme={colorScheme as ColorSchemeVariant}
    />
  )
}
