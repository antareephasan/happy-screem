import React from 'react'
import type { FeatureGridBlock as FeatureGridBlockProps } from '@/payload-types'
import { FeatureGrid } from '@/components/organized-components/ReusableComponents/Layouts/FeatureGrid'
import type { Media } from '@/payload-types'

export const FeatureGridBlock: React.FC<FeatureGridBlockProps> = (props) => {
  const {
    columns,
    itemType,
    showHeaderSection,
    headerSection,
    features,
    showItemButtons,
    showBottomButtons,
    bottomButtons,
    colorScheme,
  } = props

  // Transform features data
  const transformedFeatures =
    features?.map((feature: any) => {
      const iconMedia = feature.icon as Media | undefined
      const imageMedia = feature.image as Media | undefined

      return {
        title: feature.title || '',
        description: feature.description || '',
        icon: iconMedia
          ? {
              src: iconMedia.url || '',
              alt: feature.imageAlt || '',
            }
          : undefined,
        image: imageMedia
          ? {
              src: imageMedia.url || '',
              alt: feature.imageAlt || '',
            }
          : undefined,
        button:
          feature.showButton && feature.button
            ? {
                text: feature.button.text || '',
                link: feature.button.link || '',
                variant: feature.button.variant as 'link' | 'secondary',
              }
            : undefined,
      }
    }) || []

  // Transform bottom buttons
  const transformedBottomButtons =
    bottomButtons?.map((button: any) => ({
      text: button.text || '',
      link: button.link || '',
      variant: button.variant as 'primary' | 'secondary' | 'link',
    })) || []

  return (
    <FeatureGrid
      columns={Number(columns) as 2 | 3 | 4}
      itemType={itemType as 'icon' | 'image'}
      showHeaderSection={showHeaderSection!}
      tagline={headerSection?.tagline!}
      heading={headerSection?.heading!}
      description={headerSection?.description}
      features={transformedFeatures}
      showItemButtons={showItemButtons!}
      showBottomButtons={showBottomButtons!}
      bottomButtons={transformedBottomButtons}
      colorScheme={colorScheme as any}
    />
  )
}
