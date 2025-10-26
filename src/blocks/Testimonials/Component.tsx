import React from 'react'
import type { TestimonialsBlock as TestimonialsBlockProps } from '@/payload-types'
import { Testimonials } from '@/components/organized-components/ReusableComponents/Other/Testimonials'
import type { Media } from '@/payload-types'

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = (props) => {
  const { heading, description, testimonials, showStars, colorScheme } = props

  // Transform testimonials data
  const transformedTestimonials =
    testimonials?.map((testimonial) => {
      const avatarMedia = testimonial.author?.avatar as Media
      const companyLogoMedia = testimonial.companyLogo as Media | undefined

      return {
        rating: testimonial.rating || 5,
        quote: testimonial.quote || '',
        author: {
          name: testimonial.author?.name || '',
          title: testimonial.author?.title || '',
          avatar: avatarMedia?.url || '',
        },
        companyLogo: companyLogoMedia?.url,
      }
    }) || []

  return (
    <Testimonials
      heading={heading || ''}
      description={description}
      testimonials={transformedTestimonials}
      showStars={showStars!}
      colorScheme={colorScheme as any}
    />
  )
}
