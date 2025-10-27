import type { Metadata } from 'next/types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import PageClient from './page.client'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const revalidate = 600

async function getBlogOverview() {
  const payload = await getPayload({ config: configPromise })

  const blogOverview = await payload.findGlobal({
    slug: 'blog-overview',
    depth: 1,
  })

  return blogOverview
}

export default async function BlogOverviewPage() {
  // Fetch page content from the BlogOverview global
  const pageContent = await getBlogOverview()

  if (!pageContent) {
    notFound()
  }

  return (
    <>
      <PageClient />

      {/* Layout Blocks */}
      {pageContent?.layout && pageContent.layout.length > 0 && (
        <RenderBlocks blocks={pageContent.layout as any} />
      )}
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const pageContent = await getBlogOverview()

  if (!pageContent) {
    return {}
  }

  return {
    title: pageContent.meta?.title || pageContent.title,
    description: pageContent.meta?.description,
    openGraph: {
      title: pageContent.meta?.title || pageContent.title,
      description: pageContent.meta?.description || '',
      images: pageContent.meta?.image ? [(pageContent.meta.image as any).url] : [],
    },
  }
}
