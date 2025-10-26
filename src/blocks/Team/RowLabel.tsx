'use client'

import { useRowLabel } from '@payloadcms/ui'

export const TeamMemberRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ name?: string; title?: string }>()

  return (
    <div>
      {data?.name
        ? `${data.name}${data.title ? ` - ${data.title}` : ''}`
        : `Member ${String(rowNumber).padStart(2, '0')}`}
    </div>
  )
}

export default TeamMemberRowLabel
