'use client'

import { useRowLabel } from '@payloadcms/ui'

export const FeatureRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ feature?: string }>()

  return <div>{data?.feature || `Feature ${String(rowNumber).padStart(2, '0')}`}</div>
}

export default FeatureRowLabel
