import React from 'react'
import type { ContactInfoBlock as ContactInfoBlockProps } from '@/payload-types'
import { ContactInfo } from '@/components/organized-components/ReusableComponents/Contact/ContactInfo'

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = (props) => {
  const { methods, colorScheme } = props

  // Transform methods data
  const transformedMethods =
    methods?.map((method: any) => ({
      icon: method.icon as 'email' | 'phone' | 'location',
      title: method.title || '',
      description: method.description || '',
      linkText: method.linkText || '',
      linkHref: method.linkHref || '',
    })) || []

  return <ContactInfo methods={transformedMethods} colorScheme={colorScheme as any} />
}
