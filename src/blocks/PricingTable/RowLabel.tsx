'use client'

import { useRowLabel } from '@payloadcms/ui'

export const PricingPlanRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ name?: string; monthlyPrice?: string }>()

  return (
    <div>
      {data?.name
        ? `${data.name}${data.monthlyPrice ? ` - ${data.monthlyPrice}` : ''}`
        : `Plan ${String(rowNumber).padStart(2, '0')}`}
    </div>
  )
}

export default PricingPlanRowLabel
