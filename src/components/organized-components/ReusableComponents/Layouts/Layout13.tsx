import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { Button } from '@relume_io/relume-ui'
import type { ButtonProps } from '@relume_io/relume-ui'
import { RxChevronRight } from 'react-icons/rx'

type ImageProps = {
  src: string
  alt?: string
}

type Props = {
  tagline: string
  heading: string
  description: DefaultTypedEditorState | null
  logos: ImageProps[]
  buttons: ButtonProps[]
  image: ImageProps
}

export type Layout13Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

export const Layout13 = (props: Layout13Props) => {
  const { tagline, heading, description, buttons, image, logos } = props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>

            {description && (
              <div className="mb-5 md:mb-6 md:text-md">
                <RichText data={description} enableGutter={false} />
              </div>
            )}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-2">
              {logos &&
                logos.map((logo, index) => (
                  <img key={index} src={logo.src} className="max-h-12" alt={logo.alt} />
                ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons &&
                buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
            </div>
          </div>
          <div>
            {image && <img src={image.src} className="w-full object-cover" alt={image.alt} />}
          </div>
        </div>
      </div>
    </section>
  )
}
