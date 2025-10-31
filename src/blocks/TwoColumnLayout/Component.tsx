import React from 'react'
import type { TwoColumnLayoutBlock as TwoColumnLayoutBlockProps } from '@/payload-types'
import { TwoColumnLayout } from '@/components/organized-components/ReusableComponents/Layouts/TwoColumnLayout'
import type { Media } from '@/payload-types'
import { ColorSchemeVariant } from '@/components/organized-components'

export const TwoColumnLayoutBlock: React.FC<TwoColumnLayoutBlockProps> = (props) => {
  const {
    imagePosition,
    showTagline,
    tagline,
    heading,
    description,
    image,
    imageAlt,
    showButtons,
    buttons,
    colorScheme,
  } = props

  const imageMedia = image as Media

  // Transform buttons data
  const transformedButtons =
    buttons?.map((button) => ({
      text: button.text || '',
      link: button.link || '',
      variant: button.variant as 'primary' | 'secondary' | 'link',
    })) || []

  return (
    <TwoColumnLayout
      imagePosition={imagePosition as 'left' | 'right'}
      showTagline={showTagline!}
      tagline={tagline!}
      heading={heading || ''}
      description={description}
      image={{
        src: imageMedia?.url || '',
        alt: imageAlt || '',
      }}
      showButtons={showButtons!}
      buttons={transformedButtons}
      colorScheme={colorScheme as ColorSchemeVariant}
    />
  )
}
