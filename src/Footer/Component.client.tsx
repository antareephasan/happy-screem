// src/Footer/Component.client.tsx

'use client'

import React from 'react'
// IMPORTANT: Ensure Media, Page, and Post types are correctly imported
import type { Footer as PayloadFooterType, Media, Page, Post } from '@/payload-types'
import { Footer as RelumeFooter } from '@/components/organized-components/GlobalComponents/Footer/Footer'
import type { FooterProps } from '@/components/organized-components/types/components'

// --- TYPE GUARDS (for resolving Payload relationships) ---
// Checks if the 'logo' relationship is a full Media object instead of just an ID (number)
const isMediaObject = (logo: any): logo is Media => {
  return typeof logo === 'object' && logo !== null && 'url' in logo
}
// Checks if the link reference value is a resolved Payload document with a slug
const isPayloadDocument = (ref: any): ref is (Page | Post) & { slug: string } => {
  return typeof ref === 'object' && ref !== null && 'slug' in ref
}

// --- HELPER FUNCTION ---
// Maps Payload link field (with reference logic) to Relume's { text, href }
const mapPayloadLink = (linkItem: any) => {
  const link = linkItem.link
  const refValue = link?.reference?.value

  let href = link?.url

  if (isPayloadDocument(refValue)) {
    // If the document is resolved, use the slug
    href = `/${refValue.slug}`
  }

  return {
    text: link?.label || 'Link',
    href: href ?? '#',
  }
}

interface FooterClientProps {
  data: PayloadFooterType
}

export const FooterClient: React.FC<FooterClientProps> = ({ data }) => {
  const isMedia = isMediaObject(data.logo)

  // 1. Map Link Sections
  const relumeLinkSections: FooterProps['linkSections'] = (data.linkSections ?? []).map(
    (section) => ({
      title: section.title ?? undefined,
      links: (section.links ?? []).map(mapPayloadLink),
    }),
  )

  // 2. Map Legal Links
  const relumeLegalLinks: FooterProps['legalLinks'] = (data.legalLinks ?? []).map(mapPayloadLink)

  // 3. Map Social Links
  const relumeSocialLinks: FooterProps['socialLinks'] = (data.socialLinks ?? []).map((social) => ({
    // FIX: Use NonNullable<> to resolve the 'array | undefined' union type error on [number]
    platform: social.platform as NonNullable<FooterProps['socialLinks']>[number]['platform'],
    href: social.href,
  }))

  // 4. Combine everything into Relume props
  const relumeProps: FooterProps = {
    logo: {
      // Use the type guard and String() coercion to satisfy the strict 'string' requirement for src
      src: String(isMedia ? (data.logo as Media).url : '/default-logo.svg'),
      alt: isMedia ? (data.logo as Media).alt! : 'Site Logo',
      className: 'max-h-8 w-auto', // Keep the logo size fix
    },
    address: data.address!,
    phone: data.phone!,
    email: data.email!,
    linkSections: relumeLinkSections,
    socialLinks: relumeSocialLinks,
    copyright: data.copyright!,
    legalLinks: relumeLegalLinks,
    colorScheme: data.colorScheme || 'light',

    // Default visibility props to true
    showAddress: true,
    showContact: true,
    showSocial: true,
    showLegalLinks: true,
  }

  return <RelumeFooter {...relumeProps} />
}
