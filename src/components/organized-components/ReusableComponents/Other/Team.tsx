'use client'

import { Button } from '@relume_io/relume-ui'
import React from 'react'
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'dribbble'
  href: string
}

export interface TeamMember {
  name: string
  title: string
  description: string
  avatar: string
  socialLinks?: SocialLink[]
}

export interface TeamProps {
  tagline?: string
  heading: string
  description?: DefaultTypedEditorState | null // RichText data
  members: TeamMember[]
  showTagline?: boolean
  showHiringSection?: boolean
  hiringHeading?: string
  hiringDescription?: DefaultTypedEditorState | null // RichText data
  hiringButtonText?: string
  hiringButtonLink?: string
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'
  className?: string
}

/**
 * Team Component
 *
 * Displays team members in a responsive grid.
 *
 * FEATURES:
 * - Member profiles with avatars
 * - Social media links
 * - Optional hiring section
 * - Full color scheme support
 *
 * @example
 * <Team
 *   heading="Our Team"
 *   members={teamMembers}
 *   showHiringSection
 *   colorScheme="light"
 * />
 */
export function Team({
  tagline = 'Team',
  heading,
  description,
  members,
  showTagline = true,
  showHiringSection = true,
  hiringHeading = 'We werven!',
  hiringDescription,
  hiringButtonText = 'Open posities',
  hiringButtonLink = '/careers',
  colorScheme = 'light',
  className,
}: TeamProps) {
  const colors = getColorSchemeClasses(colorScheme)

  const getSocialIcon = (platform: SocialLink['platform']) => {
    const iconClass = cn('size-6', colors.text)

    switch (platform) {
      case 'linkedin':
        return <BiLogoLinkedinSquare className={iconClass} />
      case 'twitter':
        return <FaXTwitter className={cn('size-6 p-0.5', colors.text)} />
      case 'dribbble':
        return <BiLogoDribbble className={iconClass} />
      default:
        return null
    }
  }

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          {/* TOGGLEABLE: Tagline - controlled by showTagline prop */}
          {showTagline && tagline && (
            <p className={cn('mb-3 font-semibold md:mb-4', colors.text)}>{tagline}</p>
          )}

          <h2
            className={cn('mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl', colors.text)}
          >
            {heading}
          </h2>

          {description && (
            <div className={cn('md:text-md', colors.text)}>
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-5 md:mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className={cn('text-md font-semibold md:text-lg', colors.text)}>
                  {member.name}
                </h5>
                <h6 className={cn('md:text-md', colors.text)}>{member.title}</h6>
              </div>
              <p className={colors.text}>{member.description}</p>
              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="mt-6 flex gap-3.5">
                  {member.socialLinks.map((social, socialIndex) => (
                    <a key={socialIndex} href={social.href}>
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TOGGLEABLE: Hiring section - controlled by showHiringSection prop */}
        {showHiringSection && (
          <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
            <h4
              className={cn(
                'mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl',
                colors.text,
              )}
            >
              {hiringHeading}
            </h4>
            <div className={cn('md:text-md', colors.text)}>
              {hiringDescription && <RichText data={hiringDescription} enableGutter={false} />}
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant={colors.buttonSecondary} asChild>
                <a href={hiringButtonLink}>{hiringButtonText}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
