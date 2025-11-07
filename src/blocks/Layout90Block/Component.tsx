import RichText from '@/components/RichText'
import type { Layout90Block as Layout90BlockProps, Media } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const Layout90Block: React.FC<Layout90BlockProps> = (props) => {
  const { heading, description, image } = props

  const imageMedia = image as Media

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
          {description && (
            <div className={cn('md:text-md')}>
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>

        {imageMedia && imageMedia.url && (
          <img src={imageMedia.url} className="w-full object-cover" alt={imageMedia.alt || ''} />
        )}
      </div>
    </section>
  )
}
