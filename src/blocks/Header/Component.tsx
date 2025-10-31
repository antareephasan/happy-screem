import React from 'react'
import type { HeaderBlock as HeaderBlockProps } from '@/payload-types'
import { Header } from '@/components/organized-components/ReusableComponents/Headers/Header'
import type { Media } from '@/payload-types'
import { ColorSchemeVariant } from '@/components/organized-components'

export const HeaderBlock: React.FC<HeaderBlockProps> = (props) => {
  const {
    layout,
    imagePosition,
    showTagline,
    tagline,
    heading,
    description,
    showImage,
    image,
    imageAlt,
    showOverlay,
    overlayOpacity,
    showButtons,
    buttons,
    colorScheme,
  } = props

  const imageMedia = image as Media | undefined

  // Transform buttons data
  const transformedButtons =
    buttons?.map((button) => ({
      text: button.text || '',
      link: button.link || '',
      variant: button.variant as 'primary' | 'secondary' | 'secondary-alt',
    })) || []

  return (
    <Header
      layout={layout as 'split' | 'fullscreen' | 'simple'}
      imagePosition={imagePosition as 'left' | 'right'}
      showTagline={showTagline!}
      tagline={tagline!}
      heading={heading || ''}
      description={description}
      showImage={showImage!}
      image={
        imageMedia
          ? {
              src: imageMedia.url || '',
              alt: imageAlt || '',
            }
          : undefined
      }
      showOverlay={showOverlay!}
      overlayOpacity={overlayOpacity!}
      showButtons={showButtons!}
      buttons={transformedButtons}
      colorScheme={colorScheme as ColorSchemeVariant}
    />
  )
}
