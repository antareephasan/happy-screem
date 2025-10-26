'use client'

import { useRowLabel } from '@payloadcms/ui'

export const ContactMethodRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ icon?: string; title?: string }>()

  const iconEmoji =
    {
      email: '📧',
      phone: '📞',
      location: '📍',
    }[data?.icon as string] || '📋'

  return (
    <div>
      {data?.title
        ? `${iconEmoji} ${data.title}`
        : `Contact Method ${String(rowNumber).padStart(2, '0')}`}
    </div>
  )
}

export default ContactMethodRowLabel
