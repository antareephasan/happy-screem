import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type {
  DynamicBlogGridBlock as DynamicBlogGridBlockProps,
  Media,
  Category,
  Blog,
} from '@/payload-types'
import { BlogGrid } from '@/components/organized-components/ReusableComponents/Blog/BlogGrid'
import { ColorSchemeVariant } from '@/components/organized-components'

export const DynamicBlogGridBlock: React.FC<DynamicBlogGridBlockProps> = async (props) => {
  const {
    blogSource,
    categoryFilter,
    limit,
    showTagline,
    tagline,
    heading,
    description,
    showCategories,
    colorScheme,
    collectionType = 'blogs',
  } = props

  const payload = await getPayload({ config })

  // Build query based on post source
  const query = {
    collection: collectionType,
    depth: 2, // Increased to fetch category relationship
    limit: limit || 9,
    sort: '-publishedAt',
    where: {},
  }

  if (blogSource === 'featured') {
    query.where = {
      featured: {
        equals: true,
      },
    }
  } else if (blogSource === 'category' && categoryFilter) {
    const categoryId = typeof categoryFilter === 'object' ? categoryFilter.id : categoryFilter
    query.where = {
      categories: {
        contains: categoryId,
      },
    }
  }

  // Fetch blogs
  const blogsData = await payload.find(query)

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

  // Transform blogs
  const transformedBlogs = blogsData.docs.map((blog_) => {
    const blog = blog_ as Blog
    const image = blog.heroImage as Media

    // Get first category name
    const categories = blog.categories as Category[]
    const categoryName = categories?.[0]?.title || 'Algemeen'

    return {
      title: blog.title || '',
      excerpt: blog.excerpt || '',
      category: categoryName,
      readTime: blog.readTime || '5 min lezen',
      image: {
        src: image?.url || '',
        alt: image?.alt || blog.title || '',
      },
      href: `/${collectionType}/${blog.slug}`,
    }
  })

  // Don't render if no blogs
  if (transformedBlogs.length === 0) {
    return null
  }

  return (
    <BlogGrid
      showTagline={showTagline!}
      tagline={tagline || ''}
      heading={heading || ''}
      description={description}
      posts={transformedBlogs}
      categories={categoriesData}
      showCategories={showCategories || false}
      colorScheme={colorScheme as ColorSchemeVariant}
    />
  )
}
