import React from 'react'
import type { Layout216Block as Layout216BlockProps, Media } from '@/payload-types'
import { Layout216 } from '@/components/organized-components/ReusableComponents/Layouts/Layout216' // Adjust path
import { RxChevronRight } from 'react-icons/rx'

export const Layout216Block: React.FC<Layout216BlockProps> = (props) => {
  const { tagline, heading, description, buttons, image, stats } = props

  // 1. Transform Main Image
  const mainImageMedia = image as Media
  const transformedImage = {
    src: mainImageMedia?.url || '',
    alt: mainImageMedia?.alt || 'Section image',
  }

  // 2. Stats array is simple (text fields), no major transformation needed

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
    <Layout216
      tagline={tagline}
      heading={heading}
      description={description} // Pass the RichText data object
      stats={stats}
      image={transformedImage}
      buttons={transformedButtons}
    />
  )
}
