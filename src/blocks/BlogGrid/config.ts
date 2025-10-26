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

export const BlogGridBlock: Block = {
  slug: 'blogGrid',
  interfaceName: 'BlogGridBlock',
  labels: {
    singular: 'Blog Grid',
    plural: 'Blog Grids',
  },
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
      defaultValue: 'Blog',
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
    },
    {
      name: 'showCategories',
      type: 'checkbox',
      label: 'Show Category Filter',
      defaultValue: false,
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'array',
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Category Name',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.showCategories,
        components: {
          RowLabel: '@/blocks/BlogGrid/CategoryRowLabel#CategoryRowLabel',
        },
      },
    },
    {
      name: 'posts',
      label: 'Blog Posts',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Post Title',
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
          label: 'Excerpt',
          admin: {
            description: 'Short preview of the post',
          },
        },
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Category',
          admin: {
            description: 'Must match one of the categories above if filtering is enabled',
          },
        },
        {
          name: 'readTime',
          type: 'text',
          required: true,
          label: 'Read Time',
          defaultValue: '5 min read',
          admin: {
            description: 'e.g., "5 min read"',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Featured Image',
        },
        {
          name: 'imageAlt',
          type: 'text',
          required: true,
          label: 'Image Alt Text',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'Post URL',
          admin: {
            description: 'Link to the full blog post',
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/BlogGrid/RowLabel#BlogPostRowLabel',
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
