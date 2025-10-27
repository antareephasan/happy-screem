import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type {
  DynamicBlogGridBlock as DynamicBlogGridBlockProps,
  Media,
  Category,
  Post,
} from '@/payload-types'
import { BlogGrid } from '@/components/organized-components/ReusableComponents/Blog/BlogGrid'

export const DynamicBlogGridBlock: React.FC<DynamicBlogGridBlockProps> = async (props) => {
  const {
    postSource,
    categoryFilter,
    limit,
    showTagline,
    tagline,
    heading,
    description,
    showCategories,
    colorScheme,
    collectionType = 'posts',
  } = props

  const payload = await getPayload({ config })

  // Build query based on post source
  let query: any = {
    collection: collectionType,
    depth: 2, // Increased to fetch category relationship
    limit: limit || 9,
    sort: '-publishedAt',
  }

  if (postSource === 'featured') {
    query.where = {
      featured: {
        equals: true,
      },
    }
  } else if (postSource === 'category' && categoryFilter) {
    const categoryId = typeof categoryFilter === 'object' ? categoryFilter.id : categoryFilter
    query.where = {
      categories: {
        contains: categoryId,
      },
    }
  }

  // Fetch posts
  const postsData = await payload.find(query)

  // Get all categories if filtering is enabled
  let categoriesData: string[] = []
  if (showCategories) {
    const allCategories = await payload.find({
      collection: 'categories',
      depth: 0,
      limit: 100,
    })
    categoriesData = allCategories.docs.map((cat) => cat.title).filter(Boolean) as string[]
  }

  // Transform posts
  const transformedPosts = postsData.docs.map((post_) => {
    const post = post_ as Post
    const image = post.heroImage as Media

    // Get first category name
    const categories = post.categories as Category[]
    const categoryName = categories?.[0]?.title || 'Algemeen'

    return {
      title: post.title || '',
      excerpt: post.excerpt || '',
      category: categoryName,
      readTime: post.readTime || '5 min lezen',
      image: {
        src: image?.url || '',
        alt: image?.alt || post.title || '',
      },
      href: `/${collectionType}/${post.slug}`,
    }
  })

  // Don't render if no posts
  if (transformedPosts.length === 0) {
    return null
  }

  return (
    <BlogGrid
      showTagline={showTagline!}
      tagline={tagline!}
      heading={heading || ''}
      description={description}
      posts={transformedPosts}
      categories={categoriesData}
      showCategories={showCategories!}
      colorScheme={colorScheme as any}
    />
  )
}
