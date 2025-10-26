'use client'

import { useRowLabel } from '@payloadcms/ui'

export const CategoryRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ category?: string }>()

  return <div>{data?.category || `Category ${String(rowNumber).padStart(2, '0')}`}</div>
}

export default CategoryRowLabel
