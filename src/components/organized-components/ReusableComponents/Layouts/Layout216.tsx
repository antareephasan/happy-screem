import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { Button } from '@relume_io/relume-ui'
import type { ButtonProps } from '@relume_io/relume-ui'
import { RxChevronRight } from 'react-icons/rx'

type ImageProps = {
  src: string
  alt?: string
}

type StatsProps = {
  title: string
  description: string
}

type Props = {
  tagline: string
  heading: string
  description: DefaultTypedEditorState | null
  buttons: ButtonProps[]
  image: ImageProps
  stats: StatsProps[] | null
}

export type Layout216Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

export const Layout216 = (props: Layout216Props) => {
  const { tagline, heading, description, buttons, image, stats } = props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            {image && <img src={image.src} className="w-full object-cover" alt={image.alt} />}
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            {description && (
              <div className="mb-6 md:mb-8 md:text-md">
                <RichText data={description} enableGutter={false} />
              </div>
            )}
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats &&
                stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                      {stat.title}
                    </h3>
                    <p>{stat.description}</p>
                  </div>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons &&
                buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
