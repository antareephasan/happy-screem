import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { Button } from '@relume_io/relume-ui'
import type { ButtonProps } from '@relume_io/relume-ui'

type ImageProps = {
  src: string
  alt?: string
}

type SubHeadingProps = {
  icon: ImageProps
  title: string
  description: string
}

type Props = {
  tagline: string
  heading: string
  description: DefaultTypedEditorState | null
  subHeadings: SubHeadingProps[]
  buttons: ButtonProps[]
  image: ImageProps
}

export type Layout10Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

export const Layout10 = (props: Layout10Props) => {
  const { tagline, heading, description, buttons, image, subHeadings } = props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            {description && (
              <div className="mb-6 md:mb-8 md:text-md">
                <RichText data={description} enableGutter={false} />
              </div>
            )}
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings &&
                subHeadings?.length > 0 &&
                subHeadings.map((subHeading, index) => (
                  <div key={index}>
                    <div className="mb-3 md:mb-4">
                      <img
                        src={subHeading.icon.src}
                        className="size-12"
                        alt={subHeading.icon.alt}
                      />
                    </div>
                    <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                      {subHeading.title}
                    </h6>
                    <p>{subHeading.description}</p>
                  </div>
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
          {image && (
            <div>
              <img src={image.src} className="w-full object-cover" alt={image.alt} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
