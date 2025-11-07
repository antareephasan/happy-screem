import type { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

// Simple text editor for rich text fields
const simpleRichTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
  },
})

export const Layout102Block: Block = {
  slug: 'layout102Block',
  interfaceName: 'Layout102Block',
  labels: {
    singular: 'Feature Layout 102',
    plural: 'Feature Layout 102',
  },
  imageURL: '/thumbnails/layout-102.png', // Assuming you have a thumbnail
  fields: [
    // --- Main Content Fields ---
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      editor: simpleRichTextEditor,
      required: true,
    },
    // --- Sub Headings Array (Features) ---
    {
      name: 'subHeadings',
      label: 'Sub Features',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Feature Icon',
        },
      ],
      admin: {
        initCollapsed: true,
        // Optional: You can add a RowLabel here if you create one, e.g., 'RowLabel: './blocks/Layout102Block/RowLabel#FeatureRowLabel''
      },
    },
    // --- Main Image ---
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Main Section Image',
    },
  ],
}
