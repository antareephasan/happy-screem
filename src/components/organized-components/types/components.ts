import { ReactNode } from 'react'
import { ColorScheme, ColorSchemeVariant } from '../utils/colorSchemes'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/**
 * Base props that all components share
 */
export interface BaseComponentProps {
  className?: string
  colorScheme?: ColorSchemeVariant | ColorScheme
}

/**
 * Image data structure
 */
export interface ImageData {
  src: string
  alt: string
  className?: string
}

/**
 * Button configuration
 */
export interface ButtonConfig {
  text: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'secondary-alt' | 'link'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

/**
 * Header Component Props
 */
export interface HeaderProps extends BaseComponentProps {
  layout?: 'split' | 'fullscreen' | 'simple'
  imagePosition?: 'left' | 'right' | 'background'

  // Content
  tagline?: string
  heading: string
  description: string
  image?: ImageData

  // Toggleable features
  showTagline?: boolean // Toggle tagline display
  showButtons?: boolean // Toggle buttons section
  showImage?: boolean // Toggle image display
  showOverlay?: boolean // Toggle overlay on background images

  // Configuration
  buttons?: ButtonConfig[]
  overlayOpacity?: number
}

/**
 * Two Column Layout Props
 */
export interface TwoColumnLayoutProps extends BaseComponentProps {
  imagePosition?: 'left' | 'right'

  // Content
  tagline?: string
  heading: string
  description: string
  image: ImageData

  // Toggleable features
  showTagline?: boolean // Toggle tagline display
  showButtons?: boolean // Toggle buttons section

  // Configuration
  buttons?: ButtonConfig[]
}

/**
 * Feature item for grid layouts
 */
export interface FeatureItem {
  icon?: ImageData
  image?: ImageData
  title: string
  description: string
  button?: ButtonConfig
}

/**
 * Feature Grid Props
 */
export interface FeatureGridProps extends BaseComponentProps {
  columns?: 2 | 3 | 4
  itemType?: 'icon' | 'image'

  // Header content
  tagline?: string
  heading?: string
  description?: string

  // Features
  features: FeatureItem[]

  // Toggleable features
  showHeaderSection?: boolean // Toggle header section
  showItemButtons?: boolean // Toggle buttons on each feature
  showBottomButtons?: boolean // Toggle bottom CTA buttons

  // Configuration
  bottomButtons?: ButtonConfig[]
}

/**
 * CTA Component Props
 */
export interface CTAProps extends BaseComponentProps {
  layout?: 'split' | 'centered'

  // Content
  tagline?: string
  heading: string
  description: DefaultTypedEditorState | null
  image?: ImageData

  // Toggleable features
  showTagline?: boolean // Toggle tagline display
  showImage?: boolean // Toggle image display
  showForm?: boolean // Toggle email form
  showButtons?: boolean // Toggle buttons (if no form)

  // Configuration
  buttons?: ButtonConfig[]
  formId?: string | number | null
  formPlaceholder?: string
  formButtonText?: string
  termsText?: string
  termsLink?: string
}

/**
 * Navigation Link
 */
export interface NavLink {
  text: string
  href: string
}

/**
 * Navigation Dropdown
 */
export interface NavDropdown {
  label: string
  items: Array<{
    icon?: string
    title: string
    description?: string
    href: string
  }>
}

/**
 * Navbar Props
 */
export interface NavbarProps extends BaseComponentProps {
  logo: ImageData
  links?: NavLink[]
  dropdowns?: NavDropdown[]
  buttons?: ButtonConfig[]

  // Toggleable features
  showButtons?: boolean // Toggle action buttons
}

/**
 * Footer Link Section
 */
export interface FooterLinkSection {
  title?: string
  links: Array<{
    text: string
    href: string
  }>
}

/**
 * Social Link
 */
export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube'
  href: string
}

/**
 * Footer Props
 */
export interface FooterProps extends BaseComponentProps {
  logo: ImageData
  address?: string
  phone?: string
  email?: string
  linkSections?: FooterLinkSection[]
  socialLinks?: SocialLink[]
  copyright?: string
  legalLinks?: Array<{
    text: string
    href: string
  }>

  // Toggleable features
  showAddress?: boolean // Toggle address display
  showContact?: boolean // Toggle contact info
  showSocial?: boolean // Toggle social links
  showLegalLinks?: boolean // Toggle legal links
}

/**
 * Blog Post Data
 */
export interface BlogPost {
  image: ImageData
  category: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  href: string
}

/**
 * Blog Grid Props
 */
export interface BlogGridProps extends BaseComponentProps {
  tagline?: string
  heading: string
  description?: string
  posts: BlogPost[]
  categories?: string[]

  // Toggleable features
  showCategories?: boolean // Toggle category filter
  showTagline?: boolean // Toggle tagline display
}
