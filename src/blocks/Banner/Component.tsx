import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { getColorSchemeClasses } from '@/components/organized-components/utils/colorSchemes'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style, colorScheme = 'light' }) => {
  const colorClasses = getColorSchemeClasses(colorScheme as any)

  return (
    <div className={cn('py-16', colorClasses.background, colorClasses.text)}>
      <div className="container">
        <div className={cn('mx-auto my-8 w-full', className)}>
          <div
            className={cn('border py-3 px-6 flex items-center rounded', {
              'border-border bg-card': style === 'info',
              'border-error bg-error/30': style === 'error',
              'border-success bg-success/30': style === 'success',
              'border-warning bg-warning/30': style === 'warning',
            })}
          >
            <RichText data={content} enableGutter={false} enableProse={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
