import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

// NOTE: The local 'richText' utility function import has been removed
// as we are now defining the rich text field explicitly using the standard editor config.

const baseRichTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      // Enabling common features used in your other blocks
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ]
  },
})

export const FAQBlock: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  labels: {
    singular: 'FAQ (Accordion)',
    plural: 'FAQs (Accordions)',
  },
  imageURL: '/thumbnails/faq.png',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
    },
    {
      name: 'description',
      label: 'Description below Heading (Optional)',
      type: 'richText',
      editor: baseRichTextEditor,
    },
    {
      name: 'faqs',
      label: 'Frequently Asked Questions',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'richText',
          editor: baseRichTextEditor,
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/FAQ/RowLabel#FAQRowLabel',
        },
      },
    },
    {
      name: 'showContactSection',
      type: 'checkbox',
      label: 'Show Contact Section Below FAQs',
      defaultValue: true,
    },
    {
      type: 'group',
      name: 'contactSection',
      label: 'Contact Section Details',
      admin: {
        // Only show this group if the checkbox is checked
        condition: (_, siblingData) => siblingData.showContactSection,
      },
      fields: [
        {
          name: 'contactHeading',
          type: 'text',
          label: 'Contact Section Heading',
          defaultValue: 'Heb je nog vragen?',
        },
        {
          name: 'contactDescription',
          label: 'Contact Section Description',
          type: 'richText',
          editor: baseRichTextEditor,
        },
        {
          name: 'contactButtonText',
          type: 'text',
          label: 'Contact Button Text',
          defaultValue: 'Contact',
        },
        {
          name: 'contactButtonLink',
          type: 'text',
          label: 'Contact Button Target URL',
          defaultValue: '/contact',
        },
      ],
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
