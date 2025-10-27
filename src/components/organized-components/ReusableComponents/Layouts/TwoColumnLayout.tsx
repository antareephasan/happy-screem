'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'

export interface ButtonConfig {
  text: string
  link?: string
  variant?: 'primary' | 'secondary' | 'link'
  onClick?: () => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export interface TwoColumnLayoutProps {
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
  buttons?: ButtonConfig[]
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom'
  className?: string
}

/**
 * Two Column Layout Component
 *
 * Consolidates multiple layout variants (layout-01, layout-03, layout-192, etc.)
 * into one flexible two-column component.
 *
 * FEATURES:
 * - Configurable image position (left or right)
 * - Optional tagline
 * - 0-2 buttons with different variants
 * - Full color scheme support
 * - Toggleable elements
 *
 * @example
 * // Image on right, no buttons
 * <TwoColumnLayout
 *   heading="Our Mission"
 *   description="..."
 *   image={{ src: "/image.jpg", alt: "Mission" }}
 *   showButtons={false}
 * />
 *
 * // Image on left with tagline
 * <TwoColumnLayout
 *   imagePosition="left"
 *   tagline="About Us"
 *   heading="Our Story"
 *   description="..."
 *   image={{ src: "/story.jpg", alt: "Story" }}
 * />
 */
export function TwoColumnLayout({
  imagePosition = 'right',
  tagline,
  heading,
  description,
  image,
  showTagline = true,
  showButtons = true,
  buttons = [
    { text: 'Meer', variant: 'secondary' },
    { text: 'Aanmelden', variant: 'link' },
  ],
  colorScheme = 'light',
  className,
}: TwoColumnLayoutProps) {
  const colors = getColorSchemeClasses(colorScheme)

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          {/* TOGGLEABLE: Image position - controlled by imagePosition prop */}
          {image?.src && (
            <div className={cn(imagePosition === 'left' ? 'order-2 md:order-1' : 'order-2')}>
              <img
                src={image.src}
                className={cn('w-full rounded-image object-cover', image.className)}
                alt={image.alt}
              />
            </div>
          )}

          <div className={cn(imagePosition === 'left' ? 'order-1 md:order-2' : 'order-1')}>
            {/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
            {showTagline && tagline && (
              <p className={cn('mb-3 font-semibold md:mb-4', colors.text)}>{tagline}</p>
            )}

            <h2
              className={cn(
                'rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl',
                colors.text,
              )}
            >
              {heading}
            </h2>

            <div className={cn('md:text-md', colors.text)}>
              <RichText data={description} enableGutter={false} />
            </div>

            {/* TOGGLEABLE: Buttons section - controlled by showButtons prop */}
            {showButtons && buttons && buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    title={button.text}
                    variant={
                      button.variant || ((index === 0 ? colors.buttonSecondary : 'link') as any)
                    }
                    size={button.variant === 'link' ? 'link' : undefined}
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
