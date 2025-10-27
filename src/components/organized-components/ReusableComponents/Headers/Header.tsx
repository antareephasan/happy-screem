'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'

export interface ButtonConfig {
  text: string
  link?: string
  variant?: 'primary' | 'secondary' | 'secondary-alt'
  onClick?: () => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export interface HeaderProps {
  layout?: 'split' | 'fullscreen' | 'simple'
  imagePosition?: 'left' | 'right'
  tagline?: string
  heading: string
  description: any // RichText data
  image?: {
    src: string
    alt: string
    className?: string
  }
  showTagline?: boolean
  showButtons?: boolean
  showImage?: boolean
  showOverlay?: boolean
  buttons?: ButtonConfig[]
  overlayOpacity?: number
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom'
  className?: string
}

/**
 * Unified Header Component
 *
 * Consolidates 7 header variants (header-01, 05, 46, 47, 50, 54, 62) into one flexible component.
 *
 * FEATURES:
 * - Three layout modes: split (two-column), fullscreen (background image), simple (text only)
 * - Configurable image position (left, right, or background)
 * - Full color scheme support
 * - Toggleable elements: tagline, buttons, image, overlay
 *
 * @example
 * // Split layout with image on right
 * <Header layout="split" imagePosition="right" heading="Welcome" />
 *
 * // Fullscreen with background image
 * <Header layout="fullscreen" showOverlay heading="Hero Section" />
 *
 * // Simple text-only
 * <Header layout="simple" heading="Page Title" showButtons={false} />
 */
export function Header({
  layout = 'split',
  imagePosition = 'right',
  tagline,
  heading,
  description,
  image,
  showTagline = true,
  showButtons = true,
  showImage = true,
  showOverlay = true,
  buttons = [
    { text: 'Leer', variant: 'primary' },
    { text: 'Aanmelden', variant: 'secondary' },
  ],
  overlayOpacity = 0.5,
  colorScheme = 'light',
  className,
}: HeaderProps) {
  const colors = getColorSchemeClasses(colorScheme)

  // Simple layout - text only, no image
  if (layout === 'simple') {
    return (
      <section
        id="relume"
        className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
      >
        <div className="container">
          <div className="w-full max-w-lg">
            {/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
            {showTagline && tagline && (
              <p className={cn('mb-3 font-semibold md:mb-4', colors.text)}>{tagline}</p>
            )}

            <h1
              className={cn(
                'mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl',
                colors.text,
              )}
            >
              {heading}
            </h1>

            <div className={cn('md:text-md', colors.text)}>
              <RichText data={description} enableGutter={false} />
            </div>

            {/* TOGGLEABLE: Buttons section - controlled by showButtons prop */}
            {showButtons && buttons && buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    title={button.text}
                    variant={
                      button.variant ||
                      ((index === 0 ? colors.buttonPrimary : colors.buttonSecondary) as any)
                    }
                    onClick={button.onClick}
                    asChild={!!button.link}
                  >
                    {button.link ? <a href={button.link}>{button.text}</a> : button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Fullscreen layout - background image with overlay
  if (layout === 'fullscreen') {
    return (
      <section id="relume" className={cn('relative px-[5%]', className)}>
        <div className="relative z-10 container">
          <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
            <div className="max-w-md">
              {/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
              {showTagline && tagline && (
                <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
              )}

              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>

              <div className="text-text-alternative md:text-md">
                <RichText
                  className=" 
  prose-headings:text-text-alternative 
  prose-p:text-text-alternative 
  prose-strong:text-text-alternative 
  prose-em:text-text-alternative 
  prose-li:text-text-alternative 
  prose-blockquote:text-text-alternative 
  prose-code:text-text-alternative 
  text-text-alternative"
                  data={description}
                  enableGutter={false}
                />
              </div>

              {/* TOGGLEABLE: Buttons section - controlled by showButtons prop */}
              {showButtons && buttons && buttons.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      title={button.text}
                      variant={
                        button.variant || ((index === 0 ? 'primary' : 'secondary-alt') as any)
                      }
                      onClick={button.onClick}
                      asChild={!!button.link}
                    >
                      {button.link ? <a href={button.link}>{button.text}</a> : button.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TOGGLEABLE: Background image - controlled by showImage prop */}
        {showImage && image && (
          <div className="absolute inset-0 z-0">
            <img
              src={image.src}
              className={cn('size-full object-cover', image.className)}
              alt={image.alt}
            />

            {/* TOGGLEABLE: Overlay - controlled by showOverlay prop and overlayOpacity */}
            {showOverlay && (
              <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
            )}
          </div>
        )}
      </section>
    )
  }

  // Split layout - two-column grid with image on left or right
  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* TOGGLEABLE: Image position - controlled by imagePosition prop */}
          <div className={cn(imagePosition === 'left' ? 'order-2 md:order-1' : 'order-2')}>
            {/* TOGGLEABLE: Image - controlled by showImage prop */}
            {showImage && image && (
              <img
                src={image.src}
                className={cn('w-full rounded-image object-cover', image.className)}
                alt={image.alt}
              />
            )}
          </div>

          <div className={cn(imagePosition === 'left' ? 'order-1 md:order-2' : 'order-1')}>
            {/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
            {showTagline && tagline && (
              <p className={cn('mb-3 font-semibold md:mb-4', colors.text)}>{tagline}</p>
            )}

            <h1
              className={cn(
                'mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl',
                colors.text,
              )}
            >
              {heading}
            </h1>

            <div className={cn('md:text-md', colors.text)}>
              <RichText data={description} enableGutter={false} />
            </div>

            {/* TOGGLEABLE: Buttons section - controlled by showButtons prop */}
            {showButtons && buttons && buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    title={button.text}
                    variant={
                      button.variant ||
                      ((index === 0 ? colors.buttonPrimary : colors.buttonSecondary) as any)
                    }
                    onClick={button.onClick}
                    iconRight={button.iconPosition === 'right' ? button.icon : undefined}
                    iconLeft={button.iconPosition === 'left' ? button.icon : undefined}
                    asChild={!!button.link}
                  >
                    {button.link ? <a href={button.link}>{button.text}</a> : button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
