import React from 'react'
import type { Layout10Block as Layout10BlockProps, Media } from '@/payload-types'
import { Layout10 } from '@/components/organized-components/ReusableComponents/Layouts/Layout10' // Adjust this import path as needed
import { RxChevronRight } from 'react-icons/rx' // You need this icon

export const Layout10Block: React.FC<Layout10BlockProps> = (props) => {
  const { tagline, heading, description, subHeadings, buttons, image } = props

  // 1. Transform Main Image
  const mainImageMedia = image as Media
  const transformedImage = {
    src: mainImageMedia?.url || '',
    alt: mainImageMedia?.alt || 'Hero image',
  }

  // 2. Transform Sub Headings (Icons)
  const transformedSubHeadings =
    subHeadings?.map((item) => {
      const iconMedia = item.icon as Media
      return {
        icon: {
          src: iconMedia?.url || '',
          alt: iconMedia?.alt || item.title,
        },
        title: item.title,
        description: item.description,
      }
    }) || []

  // 3. Transform Buttons
  const transformedButtons =
    buttons?.map((button) => ({
      title: button.title,
      variant: button.variant,
      href: button.href,
      // Only include the icon if the variant is 'link' and the showIcon flag is true
      iconRight: button.variant === 'link' && button.showIcon ? <RxChevronRight /> : undefined,
      // 👇 FIX: Use size from Payload data (defaulted to 'primary'), or hardcode 'link' for the link variant.
      // This ensures the size is always one of the acceptable literal types.
      size: (button.variant === 'link' ? 'link' : button.size) as
        | 'icon'
        | 'primary'
        | 'link'
        | 'sm'
        | undefined,
    })) || []

  // Assuming you have a utility to correctly render the rich text (Lexical) output

  return (
    <Layout10
      tagline={tagline}
      heading={heading}
      description={description} // Pass the rendered output
      subHeadings={transformedSubHeadings}
      buttons={transformedButtons}
      image={transformedImage}
    />
  )
}
