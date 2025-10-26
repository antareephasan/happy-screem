'use client'

import { useRowLabel } from '@payloadcms/ui'

export const FeatureRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ title?: string }>()

  return <div>{data?.title || `Feature ${String(rowNumber).padStart(2, '0')}`}</div>
}

export default FeatureRowLabel
