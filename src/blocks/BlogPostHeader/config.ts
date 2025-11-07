import type { Block } from 'payload'

export const BlogPostHeaderBlock: Block = {
  slug: 'blogPostHeader',
  interfaceName: 'BlogPostHeaderBlock',
  labels: {
    singular: 'Blog Post Header',
    plural: 'Blog Post Headers',
  },
  imageURL: '/thumbnails/blog-post-header.png',
  fields: [
    // --- Main Content Fields ---
    {
      name: 'heading',
      type: 'text',
      label: 'Post Heading',
      required: true,
    },
    // --- Featured Image ---
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
    },
    // --- Breadcrumbs Array ---
    {
      name: 'breadcrumbs',
      label: 'Navigation Breadcrumbs',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL Link',
          required: true,
        },
      ],
      admin: {
        initCollapsed: false,
      },
    },
    // --- Author Details Group (Simplification for block) ---
    {
      name: 'author',
      label: 'Author Details',
      type: 'group',
      fields: [
        // Note: For a real blog, you'd typically use a 'relationship' field to a Users collection.
        {
          name: 'fullName',
          type: 'text',
          label: 'Author Full Name',
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          label: 'Post Date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time (e.g., 5 min read)',
          required: true,
        },
      ],
    },
    // --- Social Media Links Array ---
    {
      name: 'socialMediaLinks',
      label: 'Social Sharing Links',
      type: 'array',
      dbName: 'bph_social_links', // Shortened db name
      minRows: 1,
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Social Platform',
          options: [
            { label: 'Copy Link (LinkAlt)', value: 'link' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'X (Twitter)', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            // Add other platforms as needed
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Sharing URL (e.g., specific share link)',
          required: true,
        },
      ],
      admin: {
        initCollapsed: false,
      },
    },
  ],
}
