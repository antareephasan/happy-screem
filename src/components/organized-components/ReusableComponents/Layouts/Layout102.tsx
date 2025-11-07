import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type ImageProps = {
  src: string
  alt?: string
}

type SubHeadingProps = {
  title: string
  description: string
  icon: ImageProps
}

type Props = {
  heading: string
  subHeadings: SubHeadingProps[]
  description: DefaultTypedEditorState | null
  image: ImageProps
}

export type Layout102Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

export const Layout102 = (props: Layout102Props) => {
  const { heading, description, image, subHeadings } = props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
          </div>
          <div>
            {description && (
              <div className="mb-6 md:mb-8 md:text-md">
                <RichText data={description} enableGutter={false} />
              </div>
            )}
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings &&
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
          </div>
        </div>
        {image && <img src={image.src} className="w-full object-cover" alt={image.alt} />}
      </div>
    </section>
  )
}
