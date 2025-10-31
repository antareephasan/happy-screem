import React from 'react'
import type { ContactInfoBlock as ContactInfoBlockProps } from '@/payload-types'
import { ContactInfo } from '@/components/organized-components/ReusableComponents/Contact/ContactInfo'
import { ColorSchemeVariant } from '@/components/organized-components'

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = (props) => {
  const { methods, colorScheme } = props

  // Transform methods data
  const transformedMethods =
    methods?.map((method) => ({
      icon: method.icon as 'email' | 'phone' | 'location',
      title: method.title || '',
      description: method.description || '',
      linkText: method.linkText || '',
      linkHref: method.linkHref || '',
    })) || []

  return (
    <ContactInfo methods={transformedMethods} colorScheme={colorScheme as ColorSchemeVariant} />
  )
}
