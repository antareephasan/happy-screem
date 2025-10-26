'use client'

import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'

export interface ContactMethod {
  icon: 'email' | 'phone' | 'location'
  title: string
  description: string
  linkText: string
  linkHref: string
}

export interface ContactInfoProps {
  methods?: ContactMethod[]
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom'
  className?: string
}

/**
 * Contact Info Component
 *
 * Displays contact methods (email, phone, location) in a responsive grid.
 *
 * FEATURES:
 * - Configurable contact methods
 * - Icon-based display
 * - Full color scheme support
 *
 * @example
 * <ContactInfo
 *   methods={[
 *     {
 *       icon: 'email',
 *       title: 'E-mail',
 *       description: 'Stuur ons een bericht',
 *       linkText: 'info@example.com',
 *       linkHref: 'mailto:info@example.com'
 *     }
 *   ]}
 *   colorScheme="light"
 * />
 */
export function ContactInfo({
  methods = [
    {
      icon: 'email',
      title: 'E-mail',
      description: 'Stuur ons een bericht voor vragen of opmerkingen.',
      linkText: 'hello@relume.io',
      linkHref: 'mailto:hello@relume.io',
    },
    {
      icon: 'phone',
      title: 'Telefoon',
      description: 'Bel ons voor directe hulp en advies.',
      linkText: '+31 (0)20 123 4567',
      linkHref: 'tel:+31201234567',
    },
    {
      icon: 'location',
      title: 'Kantoor',
      description: 'Bezoek ons kantoor voor een persoonlijk gesprek.',
      linkText: 'Hoofdstraat 123, Amsterdam 1012 AB NL',
      linkHref: '#',
    },
  ],
  colorScheme = 'light',
  className,
}: ContactInfoProps) {
  const colors = getColorSchemeClasses(colorScheme)

  const getIcon = (iconType: ContactMethod['icon']) => {
    const iconClass = cn('size-12', colors.text)

    switch (iconType) {
      case 'email':
        return <BiEnvelope className={iconClass} />
      case 'phone':
        return <BiPhone className={iconClass} />
      case 'location':
        return <BiMap className={iconClass} />
      default:
        return <BiEnvelope className={iconClass} />
    }
  }

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {methods.map((method, index) => (
            <div key={index}>
              <div className="mb-5 lg:mb-6">{getIcon(method.icon)}</div>
              <h3
                className={cn(
                  'mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl',
                  colors.text,
                )}
              >
                {method.title}
              </h3>
              <p className={cn('mb-5 md:mb-6', colors.text)}>{method.description}</p>
              <a className={cn('underline', colors.text)} href={method.linkHref}>
                {method.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
