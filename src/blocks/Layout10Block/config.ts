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

export const Layout10Block: Block = {
  slug: 'layout10Block',
  interfaceName: 'Layout10Block',
  labels: {
    singular: 'Layout 10',
    plural: 'Layout 10',
  },
  imageURL: '/thumbnails/layout-10.png', // Assuming you have a thumbnail
  fields: [
    // --- Main Content Fields ---
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      editor: simpleRichTextEditor,
      required: true,
    },
    // --- Sub Headings Array ---
    {
      name: 'subHeadings',
      label: 'Feature Sub Headings',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Icon Image',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Subheading Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Subheading Description',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
        // Optional: Add a RowLabel here if desired, similar to your example
      },
    },
    // --- Buttons Array ---
    {
      name: 'buttons',
      label: 'Action Buttons',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Button Title',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Button Link URL',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style/Variant',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Secondary Alt', value: 'secondary-alt' },
            { label: 'Tertiary', value: 'tertiary' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
            { label: 'Link Alt', value: 'link-alt' },
          ],
          defaultValue: 'primary',
          required: true,
        },
        {
          name: 'size',
          type: 'select',
          label: 'Button Size',
          options: [
            { label: 'Default (primary)', value: 'primary' },
            { label: 'Small (sm)', value: 'sm' },
            { label: 'Icon', value: 'icon' },
          ],
          defaultValue: 'primary',
          // Only show this field if the variant is NOT 'link'
          admin: {
            condition: (_, siblingData) => siblingData.variant !== 'link',
          },
        },
        {
          name: 'showIcon',
          type: 'checkbox',
          label: 'Show Right Icon (for Link variant)',
          defaultValue: false,
          admin: {
            condition: (_, siblingData) => siblingData.variant === 'link',
          },
        },
      ],
      admin: {
        initCollapsed: false,
      },
    },
    // --- Main Image ---
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Main Hero Image',
    },
  ],
}
