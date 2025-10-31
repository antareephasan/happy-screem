'use client'

import React from 'react'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export interface ImageData {
  src: string
  alt: string
  link?: string | null
  className?: string
}

export interface GalleryProps {
  heading: string
  description?: DefaultTypedEditorState | null // RichText data
  images: ImageData[]
  columns?: 2 | 3 | 4
  showHeading?: boolean
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'
  className?: string
}

/**
 * Gallery Component
 *
 * Displays images in a responsive grid.
 *
 * FEATURES:
 * - Configurable columns (2-4)
 * - Optional header section
 * - Full color scheme support
 *
 * @example
 * <Gallery
 *   heading="Our Gallery"
 *   images={galleryImages}
 *   columns={4}
 *   colorScheme="light"
 * />
 */
export function Gallery({
  heading,
  description,
  images,
  columns = 4,
  showHeading = true,
  colorScheme = 'light',
  className,
}: GalleryProps) {
  const colors = getColorSchemeClasses(colorScheme)

  const gridColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[columns]

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        {/* TOGGLEABLE: Header section - controlled by showHeading prop */}
        {showHeading && (
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2
              className={cn('mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl', colors.text)}
            >
              {heading}
            </h2>
            {description && (
              <div className={cn('md:text-md', colors.text)}>
                <RichText data={description} enableGutter={false} />
              </div>
            )}
          </div>
        )}

        <div
          className={cn(
            'grid grid-cols-2 items-start justify-center gap-6 md:gap-8',
            gridColsClass,
          )}
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link || image.src}
              target={image.link ? '_blank' : undefined}
              rel={image.link ? 'noopener noreferrer' : undefined}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={cn('size-full rounded-image object-cover', image.className)}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
