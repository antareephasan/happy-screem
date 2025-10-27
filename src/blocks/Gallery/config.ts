import type { Block } from 'payload'
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

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  labels: {
    singular: 'Gallery',
    plural: 'Galleries',
  },
  imageURL: '/thumbnails/gallery.png',
  fields: [
    {
      name: 'columns',
      type: 'select',
      label: 'Number of Columns',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
      defaultValue: '4',
      required: true,
    },
    {
      name: 'showHeading',
      type: 'checkbox',
      label: 'Show Header Section',
      defaultValue: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Gallery Heading',
      admin: {
        condition: (_, siblingData) => siblingData.showHeading,
      },
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'richText',
      editor: baseRichTextEditor,
      defaultValue: lexicalEmptyState,
      admin: {
        condition: (_, siblingData) => siblingData.showHeading,
      },
    },
    {
      name: 'images',
      label: 'Gallery Images',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Image Alt Text',
          admin: {
            description: 'Describe the image for accessibility',
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL (Optional)',
          admin: {
            description: 'Optional link when image is clicked. Leave empty to link to full image.',
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: './blocks/Gallery/RowLabel#GalleryImageRowLabel',
        },
      },
    },
    {
      name: 'colorScheme',
      type: 'select',
      label: 'Color Scheme',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'light',
      required: true,
    },
  ],
}
