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

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  imageURL: '/thumbnails/testimonials.png',
  fields: [
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
    },
    {
      name: 'showStars',
      type: 'checkbox',
      label: 'Show Star Ratings',
      defaultValue: true,
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'rating',
          type: 'number',
          required: true,
          label: 'Rating (1-5 stars)',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Testimonial Quote',
        },
        {
          type: 'group',
          name: 'author',
          label: 'Author Information',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Author Name',
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Author Title/Position',
            },
            {
              name: 'avatar',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Author Photo',
            },
          ],
        },
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
          label: 'Company Logo (Optional)',
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/Testimonials/RowLabel#TestimonialRowLabel',
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
