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

export const Layout245Block: Block = {
  slug: 'layout245Block',
  interfaceName: 'Layout245Block',
  labels: {
    singular: 'Feature Grid 245',
    plural: 'Feature Grids 245',
  },
  imageURL: '/thumbnails/layout-245.png',
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
      type: 'richText', // Using richText to allow basic formatting in the description
      editor: simpleRichTextEditor,
      required: true,
    },
    // --- Sections Array (Features) ---
    {
      name: 'sections',
      label: 'Feature Sections',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Section Icon',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          required: true,
        },
      ],
      admin: {
        initCollapsed: false,
        // Recommended: Add RowLabel here for better editing experience
        // components: { RowLabel: './blocks/Layout245Block/RowLabel#SectionRowLabel' },
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
  ],
}
