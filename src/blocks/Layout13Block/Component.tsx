import React from 'react'
import type { Layout13Block as Layout13BlockProps, Media } from '@/payload-types'
import { Layout13 } from '@/components/organized-components/ReusableComponents/Layouts/Layout13' // Adjust path
import { RxChevronRight } from 'react-icons/rx'

export const Layout13Block: React.FC<Layout13BlockProps> = (props) => {
  const { tagline, heading, description, buttons, image, logos } = props

  // 1. Transform Main Image
  const mainImageMedia = image as Media
  const transformedImage = {
    src: mainImageMedia?.url || '',
    alt: mainImageMedia?.alt || 'Main hero image',
  }

  // 2. Transform Logos Array
  const transformedLogos =
    logos?.map((item) => {
      // The array field item contains a 'logo' field which is the Media ID
      const logoMedia = item.logo as Media
      return {
        src: logoMedia?.url || '',
        alt: logoMedia?.alt || 'Client logo',
      }
    }) || []

  // 3. Transform Buttons (Reusing the robust logic)
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
      // Use size from Payload data or hardcode 'link' for the link variant.
      size: (button.variant === 'link' ? 'link' : button.size) as
        | 'icon'
        | 'primary'
        | 'link'
        | 'sm'
        | undefined,
    })) || []

  return (
    <Layout13
      tagline={tagline}
      heading={heading}
      description={description} // Pass the RichText data object
      logos={transformedLogos}
      buttons={transformedButtons}
      image={transformedImage}
    />
  )
}
