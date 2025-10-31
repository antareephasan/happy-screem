import React from 'react'
import { cn } from '@/utilities/ui'
import { Code } from './Component.client'
import {
  ColorSchemeVariant,
  getColorSchemeClasses,
} from '@/components/organized-components/utils/colorSchemes'

export type CodeBlockProps = {
  code: string
  language?: string
  colorScheme?: string
  blockType: 'code'
}

type Props = CodeBlockProps & {
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, code, language, colorScheme = 'dark' }) => {
  const colorClasses = getColorSchemeClasses(colorScheme as ColorSchemeVariant)

  return (
    <div className={cn('py-16', colorClasses.background, colorClasses.text)}>
      <div className="container">
        <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
          <Code code={code} language={language} />
        </div>
      </div>
    </div>
  )
}
