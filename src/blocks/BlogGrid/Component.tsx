import React from 'react'
import type { BlogGridBlock as BlogGridBlockProps } from '@/payload-types'
import { BlogGrid } from '@/components/organized-components/ReusableComponents/Blog/BlogGrid'
import type { Media } from '@/payload-types'

export const BlogGridBlock: React.FC<BlogGridBlockProps> = (props) => {
  const {
    showTagline,
    tagline,
    heading,
    description,
    showCategories,
    categories,
    posts,
    colorScheme,
  } = props

  // Transform categories
  const transformedCategories = categories?.map((cat) => cat.category || '') || []

  // Transform posts data
  const transformedPosts =
    posts?.map((post) => {
      const imageMedia = post.image as Media

      return {
        title: post.title || '',
        excerpt: post.excerpt || '',
        category: post.category || '',
        readTime: post.readTime || '5 min read',
        image: {
          src: imageMedia?.url || '',
          alt: post.imageAlt || '',
        },
        href: post.href || '#',
      }
    }) || []

  return (
    <BlogGrid
      showTagline={showTagline!}
      tagline={tagline!}
      heading={heading || ''}
      description={description}
      showCategories={showCategories!}
      categories={transformedCategories}
      posts={transformedPosts}
      colorScheme={colorScheme as any}
    />
  )
}
