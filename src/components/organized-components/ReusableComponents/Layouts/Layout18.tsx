import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type ImageProps = {
  src: string
  alt?: string
}

type FeaturesProps = {
  icon: ImageProps
  paragraph: string
}

type Props = {
  heading: string
  description: DefaultTypedEditorState | null
  features: FeaturesProps[]
  image: ImageProps
}

export type Layout18Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

export const Layout18 = (props: Layout18Props) => {
  const { heading, description, features, image } = props

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            {description && (
              <div className="mb-5 md:mb-6 md:text-md">
                <RichText data={description} enableGutter={false} />
              </div>
            )}
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features &&
                features.map((feature, index) => (
                  <li key={index} className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                    </div>
                    <p>{feature.paragraph}</p>
                  </li>
                ))}
            </ul>
          </div>
          {image && <img src={image.src} className="w-full object-cover" alt={image.alt} />}
        </div>
      </div>
    </section>
  )
}
