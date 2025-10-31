import React from 'react'
import type { TeamBlock as TeamBlockProps } from '@/payload-types'
import { Team } from '@/components/organized-components/ReusableComponents/Other/Team'
import type { Media } from '@/payload-types'
import { ColorSchemeVariant } from '@/components/organized-components'

export const TeamBlock: React.FC<TeamBlockProps> = (props) => {
  const {
    showTagline,
    tagline,
    heading,
    description,
    members,
    showHiringSection,
    hiringSection,
    colorScheme,
  } = props

  // Transform members data
  const transformedMembers =
    members?.map((member) => {
      const avatarMedia = member.avatar as Media

      return {
        name: member.name || '',
        title: member.title || '',
        description: member.description || '',
        avatar: avatarMedia?.url || '',
        socialLinks: member.socialLinks?.map((social) => ({
          platform: social.platform as 'linkedin' | 'twitter' | 'dribbble',
          href: social.href || '',
        })),
      }
    }) || []

  return (
    <Team
      showTagline={showTagline || false}
      tagline={tagline || ''}
      heading={heading || ''}
      description={description}
      members={transformedMembers}
      showHiringSection={showHiringSection || false}
      hiringHeading={hiringSection?.hiringHeading || ''}
      hiringDescription={hiringSection?.hiringDescription}
      hiringButtonText={hiringSection?.hiringButtonText || ''}
      hiringButtonLink={hiringSection?.hiringButtonLink || ''}
      colorScheme={colorScheme as ColorSchemeVariant}
    />
  )
}
