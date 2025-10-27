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

export const TeamBlock: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  labels: {
    singular: 'Team Section',
    plural: 'Team Sections',
  },
  imageURL: '/thumbnails/team.png',
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
      defaultValue: 'Team',
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
      name: 'members',
      label: 'Team Members',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Name',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Job Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Bio/Description',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Profile Photo',
        },
        {
          name: 'socialLinks',
          label: 'Social Media Links',
          type: 'array',
          fields: [
            {
              name: 'platform',
              type: 'select',
              required: true,
              options: [
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'Dribbble', value: 'dribbble' },
              ],
            },
            {
              name: 'href',
              type: 'text',
              required: true,
              label: 'Profile URL',
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/Team/RowLabel#TeamMemberRowLabel',
        },
      },
    },
    {
      name: 'showHiringSection',
      type: 'checkbox',
      label: 'Show Hiring Section',
      defaultValue: true,
    },
    {
      type: 'group',
      name: 'hiringSection',
      label: 'Hiring Section Details',
      admin: {
        condition: (_, siblingData) => siblingData.showHiringSection,
      },
      fields: [
        {
          name: 'hiringHeading',
          type: 'text',
          label: 'Hiring Heading',
          defaultValue: 'We werven!',
        },
        {
          name: 'hiringDescription',
          label: 'Hiring Description',
          type: 'richText',
          editor: baseRichTextEditor,
          defaultValue: lexicalEmptyState,
        },
        {
          name: 'hiringButtonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Open posities',
        },
        {
          name: 'hiringButtonLink',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/careers',
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
