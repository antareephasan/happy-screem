import { Media } from '@/payload-types'
import React from 'react'

export type LogoListType = {
  heading: string
  logos: Array<{ logo: Media }>
  blockType: 'logoList' // Fixed this to match your block slug
}

export const LogoList: React.FC<LogoListType> = ({ heading, logos }) => {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
          {logos?.map((item, index) => (
            <img
              key={item.logo.id || index}
              src={item.logo.url || ''}
              alt={item.logo.alt || item.logo.alt || ''}
              className="max-h-12 md:max-h-14"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
