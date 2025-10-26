'use client'

import { useRowLabel } from '@payloadcms/ui'

export const TestimonialRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ author?: { name?: string }; quote?: string }>()

  const authorName = data?.author?.name
  const quotePreview = data?.quote
    ? data.quote.substring(0, 50) + (data.quote.length > 50 ? '...' : '')
    : ''

  return (
    <div>
      {authorName
        ? `${authorName}${quotePreview ? ` - "${quotePreview}"` : ''}`
        : `Testimonial ${String(rowNumber).padStart(2, '0')}`}
    </div>
  )
}

export default TestimonialRowLabel
