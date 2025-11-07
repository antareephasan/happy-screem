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

export const Layout13Block: Block = {
  slug: 'layout13Block',
  interfaceName: 'Layout13Block',
  labels: {
    singular: 'Hero with Logos 13',
    plural: 'Hero with Logos 13',
  },
  imageURL: '/thumbnails/layout-13.png',
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
    // --- Logos Array ---
    {
      name: 'logos',
      label: 'Client/Partner Logos',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo Image',
        },
      ],
      admin: {
        initCollapsed: false,
      },
    },
    // --- Buttons Array (Reusing the robust structure) ---
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
