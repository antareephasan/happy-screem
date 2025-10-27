import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

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

export const HeaderBlock: Block = {
  slug: 'header',
  interfaceName: 'HeaderBlock',
  labels: {
    singular: 'Header/Hero Section',
    plural: 'Header/Hero Sections',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      label: 'Layout Style',
      options: [
        { label: 'Split (Two Column)', value: 'split' },
        { label: 'Fullscreen (Background Image)', value: 'fullscreen' },
        { label: 'Simple (Text Only)', value: 'simple' },
      ],
      defaultValue: 'split',
      required: true,
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Image Position',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'right',
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'split',
      },
    },
    {
      name: 'showTagline',
      type: 'checkbox',
      label: 'Show Tagline',
      defaultValue: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      admin: {
        condition: (_, siblingData) => siblingData.showTagline,
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      editor: baseRichTextEditor,
      required: true,
    },
    {
      name: 'showImage',
      type: 'checkbox',
      label: 'Show Image',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => siblingData.layout !== 'simple',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        condition: (_, siblingData) => siblingData.layout !== 'simple' && siblingData.showImage,
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt Text',
      admin: {
        condition: (_, siblingData) => siblingData.layout !== 'simple' && siblingData.showImage,
        description: 'Describe the image for accessibility',
      },
    },
    {
      name: 'showOverlay',
      type: 'checkbox',
      label: 'Show Image Overlay',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'fullscreen',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      label: 'Overlay Opacity',
      defaultValue: 0.5,
      min: 0,
      max: 1,
      admin: {
        step: 0.1,
        condition: (_, siblingData) =>
          siblingData.layout === 'fullscreen' && siblingData.showOverlay,
      },
    },
    {
      name: 'showButtons',
      type: 'checkbox',
      label: 'Show Buttons',
      defaultValue: true,
    },
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'array',
      maxRows: 2,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Button Text',
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Button Link',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Secondary Alt (for dark backgrounds)', value: 'secondary-alt' },
          ],
          defaultValue: 'primary',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.showButtons,
        initCollapsed: true,
        components: {
          RowLabel: './blocks/Header/RowLabel#ButtonRowLabel',
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
      admin: {
        condition: (_, siblingData) => siblingData.layout !== 'fullscreen',
        description: 'Fullscreen layout uses fixed colors for contrast',
      },
    },
  ],
}
