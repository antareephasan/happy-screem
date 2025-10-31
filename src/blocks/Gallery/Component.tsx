import React from 'react'
import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { Gallery } from '@/components/organized-components/ReusableComponents/Gallery/Gallery'
import type { Media } from '@/payload-types'
import { ColorSchemeVariant } from '@/components/organized-components'

export const GalleryBlock: React.FC<GalleryBlockProps> = (props) => {
  const { columns, showHeading, heading, description, images, colorScheme } = props

  // Transform images data
  const transformedImages =
    images?.map((item) => {
      const imageMedia = item.image as Media

      return {
        src: imageMedia?.url || '',
        alt: item.alt || '',
        link: item.link,
      }
    }) || []

  return (
    <Gallery
      columns={Number(columns) as 2 | 3 | 4}
      showHeading={showHeading!}
      heading={heading || ''}
      description={description}
      images={transformedImages}
      colorScheme={colorScheme as ColorSchemeVariant}
    />
  )
}
