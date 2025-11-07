import React from 'react'
import type { Layout102Block as Layout102BlockProps, Media } from '@/payload-types'
import { Layout102 } from '@/components/organized-components/ReusableComponents/Layouts/Layout102'
// import { transformRichText } from '@/utils/richText' // Include if you need to render the Rich Text

export const Layout102Block: React.FC<Layout102BlockProps> = (props) => {
  const { heading, description, subHeadings, image } = props

  // 1. Transform Main Image
  const mainImageMedia = image as Media
  const transformedImage = {
    src: mainImageMedia?.url || '',
    alt: mainImageMedia?.alt || 'Main section image',
  }

  // 2. Transform Sub Headings (Icons)
  const transformedSubHeadings =
    subHeadings?.map((item) => {
      const iconMedia = item.icon as Media
      return {
        title: item.title,
        description: item.description,
        icon: {
          src: iconMedia?.url || '',
          alt: iconMedia?.alt || item.title,
        },
      }
    }) || []

  // Assuming your Layout102 component handles the RichText object (from the 'description' prop) internally,
  // perhaps by using your <RichText> utility as seen in the Layout10 component you provided.
  // const renderedDescription = transformRichText(description) // Uncomment if needed

  return (
    <Layout102
      heading={heading}
      description={description} // Pass the RichText data object
      subHeadings={transformedSubHeadings}
      image={transformedImage}
    />
  )
}
