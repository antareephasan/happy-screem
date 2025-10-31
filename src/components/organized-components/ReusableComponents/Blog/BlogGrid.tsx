'use client'

import { Badge, Button } from '@relume_io/relume-ui'
import React from 'react'
import { RxChevronRight } from 'react-icons/rx'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { Card } from '@/components/ui/card'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import Link from 'next/link'

export interface BlogPost {
  title: string
  excerpt: string
  category: string
  readTime: string
  image: {
    src: string
    alt: string
    className?: string
  }
  href: string
}

export interface BlogGridProps {
  tagline?: string
  heading: string
  description?: DefaultTypedEditorState | null // RichText data
  posts: BlogPost[]
  categories?: string[]
  showCategories?: boolean
  showTagline?: boolean
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'
  className?: string
}

/**
 * Blog Grid Component
 *
 * Displays blog posts in a responsive grid layout with filtering options.
 *
 * FEATURES:
 * - Responsive grid (1-3 columns)
 * - Category filtering
 * - Optional header section
 * - Full color scheme support
 *
 * @example
 * <BlogGrid
 *   heading="Latest Posts"
 *   posts={blogPosts}
 *   showCategories
 *   colorScheme="light"
 * />
 */
export function BlogGrid({
  tagline = 'Blog',
  heading,
  description,
  posts,
  categories,
  showCategories = false,
  showTagline = true,
  colorScheme = 'light',
  className,
}: BlogGridProps) {
  const colors = getColorSchemeClasses(colorScheme)
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        {/* Header section */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            {/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
            {showTagline && tagline && (
              <p className={cn('mb-3 font-semibold md:mb-4', colors.text)}>{tagline}</p>
            )}

            <h2
              className={cn(
                'rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl',
                colors.text,
              )}
            >
              {heading}
            </h2>

            {description && (
              <div className={cn('md:text-md', colors.text)}>
                <RichText data={description} enableGutter={false} />
              </div>
            )}
          </div>
        </div>

        {/* TOGGLEABLE: Category filter - controlled by showCategories prop */}
        {showCategories && categories && categories.length > 0 && (
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 md:mb-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                'rounded-button inline-flex gap-3 items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none px-4 py-2 border',
                !selectedCategory
                  ? cn(colors.background, colors.border, colors.text)
                  : 'bg-transparent border-transparent',
                colors.text,
              )}
            >
              Bekijk alles
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none gap-2 px-4 py-2 border',
                  selectedCategory === category
                    ? cn(colors.background, colors.border)
                    : 'bg-transparent border-transparent',
                  colors.text,
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Blog post grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="flex size-full flex-col items-center justify-start">
              <Link href={post.href} className="w-full">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className={cn('aspect-[3/2] size-full object-cover', post.image.className)}
                />
              </Link>
              <div className="px-5 py-6 md:p-6 w-full">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">{post.category}</Badge>
                  <p className={cn('inline text-sm font-semibold', colors.text)}>{post.readTime}</p>
                </div>
                <a className="mb-2 block max-w-full" href={post.href}>
                  <h2 className={cn('text-xl font-bold md:text-2xl', colors.text)}>{post.title}</h2>
                </a>
                <p className={colors.text}>{post.excerpt}</p>
                <Button
                  title="Lees meer"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                  asChild
                >
                  <a href={post.href}>Lees meer</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
