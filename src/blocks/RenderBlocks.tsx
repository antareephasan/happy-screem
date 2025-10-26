import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FAQBlock } from './FAQ/Component'
import { TeamBlock } from './Team/Component'
import { HeaderBlock } from './Header/Component'
import { TestimonialsBlock } from './Testimonials/Component'
import { PricingTableBlock } from './PricingTable/Component'
import { TwoColumnLayoutBlock } from './TwoColumnLayout/Component'
import { FeatureGridBlock } from './FeatureGrid/Component'
import { GalleryBlock } from './Gallery/Component'
import { ContactInfoBlock } from './ContactInfo/Component'
import { BlogGridBlock } from './BlogGrid/Component'
import { DynamicBlogGridBlock } from './DynamicBlogGrid/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  faq: FAQBlock,
  team: TeamBlock,
  testimonials: TestimonialsBlock,
  pricingTable: PricingTableBlock,
  twoColumnLayout: TwoColumnLayoutBlock,
  featureGrid: FeatureGridBlock,
  header: HeaderBlock,
  gallery: GalleryBlock,
  contactInfo: ContactInfoBlock,
  blogGrid: BlogGridBlock,
  dynamicBlogGrid: DynamicBlogGridBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
