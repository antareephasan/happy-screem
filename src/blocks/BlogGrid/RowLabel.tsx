'use client'

import { useRowLabel } from '@payloadcms/ui'

export const BlogPostRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ title?: string; category?: string }>()

  return (
    <div>
      {data?.title
        ? `${data.title}${data.category ? ` - ${data.category}` : ''}`
        : `Post ${String(rowNumber).padStart(2, '0')}`}
    </div>
  )
}

export default BlogPostRowLabel
