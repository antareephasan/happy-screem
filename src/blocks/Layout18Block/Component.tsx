import React from 'react'
import type { Layout18Block as Layout18BlockProps, Media } from '@/payload-types'
import { Layout18 } from '@/components/organized-components/ReusableComponents/Layouts/Layout18' // Adjust path

export const Layout18Block: React.FC<Layout18BlockProps> = (props) => {
  const { heading, description, features, image } = props

  // 1. Transform Main Image
  const mainImageMedia = image as Media
  const transformedImage = {
    src: mainImageMedia?.url || '',
    alt: mainImageMedia?.alt || 'Section image',
  }

  // 2. Transform Features (Icons)
  const transformedFeatures =
    features?.map((item) => {
      const iconMedia = item.icon as Media
      return {
        paragraph: item.paragraph,
        icon: {
          src: iconMedia?.url || '',
          alt: iconMedia?.alt || 'Feature Icon',
        },
      }
    }) || []

  return (
    <Layout18
      heading={heading}
      description={description} // Pass the RichText data object
      features={transformedFeatures}
      image={transformedImage}
    />
  )
}
