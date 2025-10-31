'use client'

import React from 'react'
import { BiSolidStar } from 'react-icons/bi'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export interface Testimonial {
  rating: number
  quote: string
  author: {
    name: string
    title: string
    avatar: string
  }
  companyLogo?: string | null
}

export interface TestimonialsProps {
  heading: string
  description?: DefaultTypedEditorState | null // RichText data
  testimonials: Testimonial[]
  showStars?: boolean
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'
  className?: string
}

/**
 * Testimonials Component
 *
 * Displays customer testimonials with ratings.
 *
 * FEATURES:
 * - Star ratings
 * - Author info with avatars
 * - Optional company logos
 * - Full color scheme support
 *
 * @example
 * <Testimonials
 *   heading="What Our Customers Say"
 *   testimonials={testimonialsData}
 *   colorScheme="light"
 * />
 */
export function Testimonials({
  heading,
  description,
  testimonials,
  showStars = true,
  colorScheme = 'light',
  className,
}: TestimonialsProps) {
  const colors = getColorSchemeClasses(colorScheme)

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1
            className={cn('mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl', colors.text)}
          >
            {heading}
          </h1>
          {description && (
            <div className={cn('md:text-md', colors.text)}>
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full max-w-lg flex-col items-start justify-start text-left"
            >
              {/* TOGGLEABLE: Star rating - controlled by showStars prop */}
              {showStars && (
                <div className="mb-6 flex md:mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <BiSolidStar key={starIndex} className={cn('size-6', colors.text)} />
                  ))}
                </div>
              )}

              <blockquote className={cn('text-md leading-[1.4] font-bold md:text-xl', colors.text)}>
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
                <div>
                  <img
                    src={testimonial.author.avatar}
                    alt={`${testimonial.author.name} avatar`}
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div className="mb-4 md:mb-0">
                  <p className={cn('font-semibold', colors.text)}>{testimonial.author.name}</p>
                  <p className={colors.text}>{testimonial.author.title}</p>
                </div>
                {testimonial.companyLogo && (
                  <>
                    <div
                      className={cn(
                        'hidden w-px self-stretch md:block',
                        colors.text === 'text-white' ? 'bg-white' : 'bg-black',
                      )}
                    />
                    <div>
                      <img src={testimonial.companyLogo} alt="Company logo" className="max-h-12" />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
