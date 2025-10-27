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
export const DynamicBlogGridBlock: Block = {
  slug: 'dynamicBlogGrid',
  interfaceName: 'DynamicBlogGridBlock',
  labels: {
    singular: 'Dynamic Blog Grid (Auto-populated)',
    plural: 'Dynamic Blog Grids',
  },
  imageURL: '/thumbnails/blog-grid.png',
  fields: [
    {
      name: 'collectionType',
      type: 'select',
      required: true,
      options: [
        { label: 'Blogs', value: 'posts' },
        { label: 'Courses', value: 'courses' },
      ],
      defaultValue: 'posts',
    },
    {
      name: 'postSource',
      type: 'select',
      label: 'Which Posts to Show',
      options: [
        { label: 'Latest Posts', value: 'latest' },
        { label: 'Featured Posts', value: 'featured' },
        { label: 'Specific Category', value: 'category' },
      ],
      defaultValue: 'latest',
      required: true,
    },
    {
      name: 'categoryFilter',
      type: 'relationship',
      label: 'Category',
      relationTo: 'categories',
      admin: {
        condition: (_, siblingData) => siblingData?.postSource === 'category',
        description: 'Select category to filter by',
      },
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Number of Posts',
      defaultValue: 9,
      min: 1,
      max: 50,
      required: true,
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
      defaultValue: 'Blog',
      admin: {
        condition: (_, siblingData) => siblingData?.showTagline,
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Section Heading',
      defaultValue: 'Ontdek onze blogs',
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'richText',
      editor: baseRichTextEditor,
      defaultValue: lexicalEmptyState,
    },
    {
      name: 'showCategories',
      type: 'checkbox',
      label: 'Show Category Filter',
      defaultValue: false,
      admin: {
        description: 'Enable category filtering buttons',
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
