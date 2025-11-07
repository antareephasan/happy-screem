import React from 'react'
import type { Layout245Block as Layout245BlockProps, Media } from '@/payload-types'
import { Layout245 } from '@/components/organized-components/ReusableComponents/Layouts/Layout245' // Adjust path
import { RxChevronRight } from 'react-icons/rx'

export const Layout245Block: React.FC<Layout245BlockProps> = (props) => {
  const { tagline, heading, description, sections, buttons } = props

  // 1. Transform Sections (Icons)
  const transformedSections =
    sections?.map((item) => {
      const iconMedia = item.icon as Media
      return {
        heading: item.heading,
        description: item.description,
        icon: {
          src: iconMedia?.url || '',
          alt: iconMedia?.alt || item.heading,
        },
      }
    }) || []

  // 2. Transform Buttons (Reusing the robust logic)
  const transformedButtons =
    buttons?.map((button) => ({
      title: button.title,
      // Cast variant to the correct Relume type
      variant: button.variant as
        | 'primary'
        | 'secondary'
        | 'ghost'
        | 'link'
        | 'secondary-alt'
        | 'tertiary'
        | 'link-alt',
      href: button.href,
      iconRight: button.variant === 'link' && button.showIcon ? <RxChevronRight /> : undefined,
      // Use size from Payload data (defaulted to 'primary'), or hardcode 'link' for the link variant.
      size: (button.variant === 'link' ? 'link' : button.size) as
        | 'icon'
        | 'primary'
        | 'link'
        | 'sm'
        | undefined,
    })) || []

  return (
    <Layout245
      tagline={tagline}
      heading={heading}
      description={description} // Pass the RichText data object
      sections={transformedSections}
      buttons={transformedButtons}
    />
  )
}
