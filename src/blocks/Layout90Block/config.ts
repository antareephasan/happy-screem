import { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { lexicalEmptyState } from '@/fields/lexicalDefault'

const baseRichTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ]
  },
})

export const Layout90Block: Block = {
  slug: 'layout90Block',
  interfaceName: 'Layout90Block',
  labels: {
    singular: 'Layout 90',
    plural: 'Layout 90',
  },
  imageURL: '/thumbnails/layout-90.png',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'richText',
      editor: baseRichTextEditor,
      defaultValue: lexicalEmptyState,
    },
    {
      name: 'image',
      label: 'Feature Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
