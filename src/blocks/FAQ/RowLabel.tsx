'use client'

import { useRowLabel } from '@payloadcms/ui'

export const FAQRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ question?: string }>()

  return <div>{data?.question || `Question ${String(rowNumber).padStart(2, '0')}`}</div>
}

export default FAQRowLabel
