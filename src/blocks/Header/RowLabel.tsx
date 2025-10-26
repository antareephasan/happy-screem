'use client'

import { useRowLabel } from '@payloadcms/ui'

export const ButtonRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ text?: string; variant?: string }>()

  return (
    <div>
      {data?.text
        ? `${data.text}${data.variant ? ` (${data.variant})` : ''}`
        : `Button ${String(rowNumber).padStart(2, '0')}`}
    </div>
  )
}

export default ButtonRowLabel
