'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export interface ButtonConfig {
  text: string
  link?: string
  variant?: 'primary' | 'secondary' | 'link'
  onClick?: () => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export interface Feature {
  title: string
  description: string
  icon?: {
    src: string
    alt: string
    className?: string
  }
  image?: {
    src: string
    alt: string
    className?: string
  }
  button?: ButtonConfig
}

export interface FeatureGridProps {
  columns?: 2 | 3 | 4
  itemType?: 'icon' | 'image'
  tagline?: string
  heading?: string
  description?: DefaultTypedEditorState | null // RichText data
  features: Feature[]
  showHeaderSection?: boolean
  showItemButtons?: boolean
  showBottomButtons?: boolean
  bottomButtons?: ButtonConfig[]
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'
  className?: string
}

/**
 * Feature Grid Component
 *
 * Consolidates multiple feature grid layouts (layout-238, layout-239, etc.)
 * into one flexible grid component.
 *
 * FEATURES:
 * - 2, 3, or 4 columns
 * - Icon-based or image-based features
 * - Optional header section
 * - Optional buttons on each feature item
 * - Optional bottom CTA buttons
 * - Full color scheme support
 *
 * @example
 * // Three-column grid with icons
 * <FeatureGrid
 *   columns={3}
 *   itemType="icon"
 *   heading="Our Services"
 *   features={[...]}
 * />
 *
 * // Two-column grid with images
 * <FeatureGrid
 *   columns={2}
 *   itemType="image"
 *   features={[...]}
 *   showBottomButtons
 * />
 */
export function FeatureGrid({
  columns = 3,
  itemType = 'icon',
  tagline,
  heading,
  description,
  features,
  showHeaderSection = true,
  showItemButtons = true,
  showBottomButtons = false,
  bottomButtons = [
    { text: 'Ontdek', variant: 'secondary' },
    { text: 'Aanmelden', variant: 'link' },
  ],
  colorScheme = 'light',
  className,
}: FeatureGridProps) {
  const colors = getColorSchemeClasses(colorScheme)

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns]

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="flex flex-col items-center">
          {/* TOGGLEABLE: Header section - controlled by showHeaderSection prop */}
          {showHeaderSection && (heading || tagline || description) && (
            <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
              <div className="mx-auto w-full max-w-lg">
                {/* TOGGLEABLE: Tagline - show if provided */}
                {tagline && (
                  <p className={cn('mb-3 font-semibold md:mb-4', colors.text)}>{tagline}</p>
                )}

                {heading && (
                  <h2
                    className={cn(
                      'mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl',
                      colors.text,
                    )}
                  >
                    {heading}
                  </h2>
                )}

                {description && (
                  <div className={cn('md:text-md', colors.text)}>
                    <RichText data={description} enableGutter={false} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Feature Grid */}
          <div
            className={cn(
              'grid grid-cols-1 items-start justify-center gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12',
              gridColsClass,
            )}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                {/* TOGGLEABLE: Item type - icon or image based on itemType prop */}
                {itemType === 'icon' && feature.icon && (
                  <div className="mb-5 md:mb-6">
                    <img
                      src={feature.icon.src}
                      alt={feature.icon.alt}
                      className={cn('size-12', feature.icon.className)}
                    />
                  </div>
                )}

                {itemType === 'image' && feature.image && (
                  <div className="rb-6 mb-6 md:mb-8">
                    <img
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className={cn('rounded-image', feature.image.className)}
                    />
                  </div>
                )}

                <h3
                  className={cn(
                    'mb-5 text-xl font-bold md:mb-6',
                    itemType === 'image'
                      ? 'md:text-3xl md:leading-[1.3] lg:text-4xl'
                      : 'md:text-2xl',
                    colors.text,
                  )}
                >
                  {feature.title}
                </h3>

                <p className={cn(colors.text)}>{feature.description}</p>

                {/* TOGGLEABLE: Item buttons - controlled by showItemButtons prop */}
                {showItemButtons && feature.button && (
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button
                      title={feature.button.text}
                      variant={feature.button.variant || 'link'}
                      size="link"
                      onClick={feature.button.onClick}
                      iconRight={
                        feature.button.iconPosition === 'right' ? feature.button.icon : undefined
                      }
                      asChild={!!feature.button.link}
                    >
                      {feature.button.link ? (
                        <a href={feature.button.link}>{feature.button.text}</a>
                      ) : (
                        feature.button.text
                      )}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* TOGGLEABLE: Bottom buttons - controlled by showBottomButtons prop */}
          {showBottomButtons && bottomButtons && bottomButtons.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {bottomButtons.map((button, index) => (
                <Button
                  key={index}
                  title={button.text}
                  variant={button.variant || (index === 0 ? colors.buttonSecondary : 'link')}
                  size={button.variant === 'link' ? 'link' : undefined}
                  onClick={button.onClick}
                  iconRight={button.iconPosition === 'right' ? button.icon : undefined}
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
