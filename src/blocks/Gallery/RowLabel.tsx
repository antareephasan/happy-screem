'use client'

import { useRowLabel } from '@payloadcms/ui'

export const GalleryImageRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ alt?: string }>()

  return <div>{data?.alt || `Image ${String(rowNumber).padStart(2, '0')}`}</div>
}

export default GalleryImageRowLabel
