import React from 'react'
import type { BlogPostHeaderBlock as BlogPostHeaderBlockProps, Media } from '@/payload-types'
import { BlogPostHeader } from '@/components/organized-components/ReusableComponents/Blog/BlogPostHeader' // Adjust path
import { FaXTwitter } from 'react-icons/fa6'
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from 'react-icons/bi'
import moment from 'moment' // Assuming you use moment or a similar library for date formatting

// Function to map the platform string to the corresponding React icon
const getSocialIcon = (platform: string): React.ReactNode => {
  const iconProps = { className: 'size-6' }

  switch (platform) {
    case 'link':
      return <BiLinkAlt {...iconProps} />
    case 'linkedin':
      return <BiLogoLinkedinSquare {...iconProps} />
    case 'twitter':
      return <FaXTwitter {...iconProps} className="size-6 p-0.5" />
    case 'facebook':
      return <BiLogoFacebookCircle {...iconProps} />
    default:
      return null
  }
}

export const BlogPostHeaderBlock: React.FC<BlogPostHeaderBlockProps> = (props) => {
  const { heading, breadcrumbs, author, image, socialMediaLinks } = props

  // 1. Transform Main Image
  const mainImageMedia = image as Media
  const transformedImage = {
    src: mainImageMedia?.url || '',
    alt: mainImageMedia?.alt || 'Featured blog image',
  }

  // 2. Transform Social Media Links (map platform string to React icon)
  const transformedSocialMediaLinks =
    socialMediaLinks?.map((link) => ({
      url: link.url,
      icon: getSocialIcon(link.platform),
    })) || []

  // 3. Transform Author Details (format date)
  const formattedDate = moment(author.date).format('DD MMM YYYY')

  const transformedAuthor = {
    ...author,
    date: formattedDate,
    // Assuming avatar is just a placeholder here, as it wasn't defined in the config,
    // but we can add a placeholder image if needed based on the default component prop:
    avatar: {
      src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
      alt: 'Author avatar',
    },
  }

  return (
    <BlogPostHeader
      heading={heading}
      breadcrumbs={breadcrumbs}
      author={transformedAuthor}
      image={transformedImage}
      socialMediaLinks={transformedSocialMediaLinks}
    />
  )
}
