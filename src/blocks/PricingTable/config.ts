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

export const PricingTableBlock: Block = {
  slug: 'pricingTable',
  interfaceName: 'PricingTableBlock',
  labels: {
    singular: 'Pricing Table',
    plural: 'Pricing Tables',
  },
  imageURL: '/thumbnails/pricing-table.png',
  fields: [
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
      defaultValue: 'Prijzen',
      admin: {
        condition: (_, siblingData) => siblingData.showTagline,
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'richText',
      editor: baseRichTextEditor,
      defaultValue: lexicalEmptyState,
    },
    {
      name: 'showBillingToggle',
      type: 'checkbox',
      label: 'Show Monthly/Yearly Toggle',
      defaultValue: true,
    },
    {
      name: 'plans',
      label: 'Pricing Plans',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Plan Name',
        },
        {
          name: 'monthlyPrice',
          type: 'text',
          required: true,
          label: 'Monthly Price',
          admin: {
            description: 'e.g., €29/mo or Free',
          },
        },
        {
          name: 'yearlyPrice',
          type: 'text',
          required: true,
          label: 'Yearly Price',
          admin: {
            description: 'e.g., €290/yr or Free',
            condition: (_) => {
              // Access parent's showBillingToggle through the context
              return true // Always show, but can be ignored if toggle is off
            },
          },
        },
        {
          name: 'features',
          label: 'Features',
          type: 'array',
          minRows: 1,
          required: true,
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
              label: 'Feature',
            },
          ],
          admin: {
            components: {
              RowLabel: '@/blocks/PricingTable/FeatureRowLabel#FeatureRowLabel',
            },
          },
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Aan de slag',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/contact',
        },
        {
          name: 'isPopular',
          type: 'checkbox',
          label: 'Mark as Popular',
          defaultValue: false,
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/PricingTable/RowLabel#PricingPlanRowLabel',
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
