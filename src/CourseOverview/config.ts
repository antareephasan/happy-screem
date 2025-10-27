import { GlobalConfig } from 'payload'

import { Content } from '../blocks/Content/config'
import { Archive } from '../blocks/ArchiveBlock/config'
import { CallToAction } from '../blocks/CallToAction/config'
import { FormBlock } from '../blocks/Form/config'
import { MediaBlock } from '../blocks/MediaBlock/config'
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

export const CourseOverview: GlobalConfig = {
  slug: 'course-overview',
  label: 'Course Overview Page',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Course',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
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
                description: 'Build your Course overview page layout using blocks',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Meta Title',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Meta Description',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Meta Image',
            },
          ],
        },
      ],
    },
  ],
}
