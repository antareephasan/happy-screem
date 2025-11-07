import type { Block } from 'payload'
import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

// Simple text editor for rich text fields (for the main description)
const simpleRichTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
  },
})

export const Layout18Block: Block = {
  slug: 'layout18Block',
  interfaceName: 'Layout18Block',
  labels: {
    singular: 'Image Feature List 18',
    plural: 'Image Feature Lists 18',
  },
  imageURL: '/thumbnails/layout-18.png',
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
    // --- Features Array ---
    {
      name: 'features',
      label: 'List Features',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Feature Icon',
        },
        {
          name: 'paragraph',
          type: 'text',
          label: 'Feature Text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: false,
        // Recommended: Add RowLabel here for better editing experience
      },
    },
    // --- Image ---
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Section Image',
    },
  ],
}
