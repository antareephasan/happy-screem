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

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  interfaceName: 'FeatureGridBlock',
  labels: {
    singular: 'Feature Grid',
    plural: 'Feature Grids',
  },
  imageURL: '/thumbnails/feature-grid.png',
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
      defaultValue: '3',
      required: true,
    },
    {
      name: 'itemType',
      type: 'select',
      label: 'Feature Item Type',
      options: [
        { label: 'Icon', value: 'icon' },
        { label: 'Image', value: 'image' },
      ],
      defaultValue: 'icon',
      required: true,
    },
    {
      name: 'showHeaderSection',
      type: 'checkbox',
      label: 'Show Header Section',
      defaultValue: true,
    },
    {
      type: 'group',
      name: 'headerSection',
      label: 'Header Section',
      admin: {
        condition: (_, siblingData) => siblingData.showHeaderSection,
      },
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline (Optional)',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          editor: baseRichTextEditor,
          defaultValue: lexicalEmptyState,
        },
      ],
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Feature Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Feature Description',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
          admin: {
            condition: (_, siblingData) => {
              // Get the parent's itemType
              // Note: This is a simplified condition, you may need to adjust based on your data structure
              return true // Show for now, user can choose to upload or not
            },
            description: 'Use this for icon-type features',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            description: 'Use this for image-type features',
          },
        },
        {
          name: 'imageAlt',
          type: 'text',
          label: 'Image/Icon Alt Text',
          required: true,
        },
        {
          name: 'showButton',
          type: 'checkbox',
          label: 'Show Button',
          defaultValue: false,
        },
        {
          type: 'group',
          name: 'button',
          label: 'Button',
          admin: {
            condition: (_, siblingData) => siblingData.showButton,
          },
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
                { label: 'Link', value: 'link' },
                { label: 'Secondary', value: 'secondary' },
              ],
              defaultValue: 'link',
              dbName: 'enum_course_ovr_blck__grid_ftr_btn_var',
            },
          ],
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/FeatureGrid/RowLabel#FeatureRowLabel',
        },
      },
    },
    {
      name: 'showItemButtons',
      type: 'checkbox',
      label: 'Show Feature Item Buttons',
      defaultValue: true,
      admin: {
        description: 'Enable/disable buttons on individual feature items',
      },
    },
    {
      name: 'showBottomButtons',
      type: 'checkbox',
      label: 'Show Bottom CTA Buttons',
      defaultValue: false,
    },
    {
      name: 'bottomButtons',
      label: 'Bottom CTA Buttons',
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
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'secondary',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.showBottomButtons,
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/FeatureGrid/ButtonRowLabel#ButtonRowLabel',
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
