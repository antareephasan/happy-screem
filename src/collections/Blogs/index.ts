import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateBlog, revalidateDelete } from './hooks/revalidateBlog'

import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { FAQBlock } from '@/blocks/FAQ/config'
import { TeamBlock } from '@/blocks/Team/config'
import { TestimonialsBlock } from '@/blocks/Testimonials/config'
import { PricingTableBlock } from '@/blocks/PricingTable/config'
import { TwoColumnLayoutBlock } from '@/blocks/TwoColumnLayout/config'
import { FeatureGridBlock } from '@/blocks/FeatureGrid/config'
import { HeaderBlock } from '@/blocks/Header/config'
import { GalleryBlock } from '@/blocks/Gallery/config'
import { ContactInfoBlock } from '@/blocks/ContactInfo/config'
import { BlogGridBlock } from '@/blocks/BlogGrid/config'
import { DynamicBlogGridBlock } from '@/blocks/DynamicBlogGrid/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Blogs: CollectionConfig<'blogs'> = {
  slug: 'blogs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'categories', 'featured', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'blogs',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'blogs',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            // CUSTOMIZABLE LAYOUT - Like your pages collection
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                FAQBlock,
                TeamBlock,
                TestimonialsBlock,
                PricingTableBlock,
                TwoColumnLayoutBlock,
                FeatureGridBlock,
                HeaderBlock,
                GalleryBlock,
                ContactInfoBlock,
                BlogGridBlock,
                DynamicBlogGridBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            // ONE IMAGE: Used for both hero and grid preview
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Hero Image',
              admin: {
                description: 'Used as hero image on blog page and preview in blog grids',
              },
            },
            // EXCERPT: For blog grid preview
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              label: 'Excerpt',
              admin: {
                description:
                  'Short preview text shown in blog grids (recommended: 100-160 characters)',
              },
            },
            {
              name: 'categories',
              type: 'relationship',
              hasMany: true,
              relationTo: 'categories',
              required: true,
              admin: {
                position: 'sidebar',
                description: 'Select one or more categories',
              },
            },
            {
              name: 'featured',
              type: 'checkbox',
              label: 'Featured Blog',
              defaultValue: false,
              admin: {
                position: 'sidebar',
                description: 'Show in featured/recommended sections',
              },
            },
            {
              name: 'readTime',
              type: 'text',
              label: 'Read Time',
              defaultValue: '5 min lezen',
              admin: {
                position: 'sidebar',
              },
            },
          ],
          label: 'Meta',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateBlog],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
