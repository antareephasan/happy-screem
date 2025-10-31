'use client'

import { Button, Input } from '@relume_io/relume-ui'
import React, { useState } from 'react'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { getClientSideURL } from '@/utilities/getURL'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export interface ButtonConfig {
  text: string
  link?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export interface CTAProps {
  layout?: 'split' | 'centered'
  tagline?: string
  heading: string
  description?: DefaultTypedEditorState | null // RichText data
  image?: {
    src: string
    alt: string
    className?: string
  }
  showTagline?: boolean
  showImage?: boolean
  showForm?: boolean
  showButtons?: boolean
  buttons?: ButtonConfig[]
  formId?: string | number | null
  formPlaceholder?: string
  formButtonText?: string
  termsText?: string
  termsLink?: string
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'
  className?: string
}

/**
 * Call-to-Action (CTA) Component
 *
 * Consolidates multiple CTA variants (cta-02, cta-20, cta-26)
 * into one flexible component.
 *
 * FEATURES:
 * - Two layout modes: split (two-column) or centered
 * - Optional email signup form
 * - Optional CTA buttons
 * - Optional image
 * - Full color scheme support
 * - Toggleable elements
 *
 * @example
 * // Split layout with form
 * <CTA
 *   layout="split"
 *   heading="Schrijf je nu in!"
 *   showForm
 * />
 *
 * // Centered with buttons
 * <CTA
 *   layout="centered"
 *   heading="Get Started Today"
 *   showButtons
 * />
 */
export function CTA({
  layout = 'split',
  tagline,
  heading,
  description,
  image,
  showTagline = false,
  showImage = true,
  showForm = true,
  showButtons = false,
  buttons = [
    { text: 'Get Started', variant: 'primary' },
    { text: 'Learn More', variant: 'secondary' },
  ],
  formId,
  formPlaceholder = 'Voer je e-mail in',
  formButtonText = 'Inschrijven',
  termsText = 'U kunt zich altijd uitschrijven.',
  termsLink = '/terms',
  colorScheme = 'light',
  className,
}: CTAProps) {
  const colors = getColorSchemeClasses(colorScheme)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formId) {
      setError('Form configuration is missing')
      return
    }

    if (!email) {
      setError('Please enter your email address')
      return
    }

    setIsLoading(true)
    setError(undefined)

    try {
      const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        body: JSON.stringify({
          form: formId,
          submissionData: [
            {
              field: 'email',
              value: email,
            },
          ],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const res = await req.json()

      if (req.status >= 400) {
        setError(res.errors?.[0]?.message || 'Something went wrong')
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setHasSubmitted(true)
      setEmail('')
    } catch (err) {
      console.error(err)
      setIsLoading(false)
      setError('Something went wrong. Please try again.')
    }
  }

  if (layout === 'centered') {
    return (
      <section
        id="relume"
        className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center">
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
              <div className={cn('mb-6 md:mb-8 md:text-md', colors.text)}>
                {description && <RichText data={description} enableGutter={false} />}
              </div>
            )}

            {/* TOGGLEABLE: Form - controlled by showForm prop */}
            {showForm && (
              <div className="w-full max-w-sm">
                {hasSubmitted ? (
                  <div className="text-center p-4 bg-success/20 rounded-lg">
                    <p className="text-success font-semibold">
                      Thanks for subscribing! Check your email to confirm.
                    </p>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={handleSubmit}
                      className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder={formPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        required
                      />
                      <Button type="submit" title={formButtonText} disabled={isLoading}>
                        {isLoading ? 'Submitting...' : formButtonText}
                      </Button>
                    </form>
                    {error && <p className="text-error text-sm mb-4">{error}</p>}
                    <p className="text-xs">
                      {termsText.split('Terms and Conditions')[0]}
                      <a href={termsLink} className="underline">
                        Terms and Conditions
                      </a>
                      {termsText.split('Terms and Conditions')[1]}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* TOGGLEABLE: Buttons - controlled by showButtons prop (alternative to form) */}
            {!showForm && showButtons && buttons && buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    title={button.text}
                    variant={
                      button.variant ||
                      ((index === 0 ? colors.buttonPrimary : colors.buttonSecondary) as
                        | 'link'
                        | 'primary'
                        | 'secondary'
                        | 'secondary-alt'
                        | 'tertiary'
                        | 'link-alt'
                        | 'ghost')
                    }
                    onClick={button.onClick}
                    asChild={!!button.link}
                  >
                    {button.link ? <a href={button.link}>{button.text}</a> : button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Split layout
  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
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

            {/* TOGGLEABLE: Form - controlled by showForm prop */}
            {showForm && (
              <div className="mt-6 w-full max-w-sm md:mt-8">
                {hasSubmitted ? (
                  <div className="p-4 bg-success/20 rounded-lg">
                    <p className="text-success font-semibold">
                      Thanks for subscribing! Check your email to confirm.
                    </p>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={handleSubmit}
                      className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder={formPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        required
                      />
                      <Button type="submit" title={formButtonText} disabled={isLoading}>
                        {isLoading ? 'Submitting...' : formButtonText}
                      </Button>
                    </form>
                    {error && <p className="text-error text-sm mb-4">{error}</p>}
                    <p className="text-xs">
                      {termsText.split('Terms and Conditions')[0]}
                      <a href={termsLink} className="underline">
                        Terms and Conditions
                      </a>
                      {termsText.split('Terms and Conditions')[1]}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* TOGGLEABLE: Buttons - controlled by showButtons prop (alternative to form) */}
            {!showForm && showButtons && buttons && buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    title={button.text}
                    variant={
                      button.variant ||
                      ((index === 0 ? colors.buttonPrimary : colors.buttonSecondary) as
                        | 'link'
                        | 'primary'
                        | 'secondary'
                        | 'secondary-alt'
                        | 'tertiary'
                        | 'link-alt'
                        | 'ghost')
                    }
                    onClick={button.onClick}
                    asChild={!!button.link}
                  >
                    {button.link ? <a href={button.link}>{button.text}</a> : button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* TOGGLEABLE: Image - controlled by showImage prop */}
          {showImage && image && (
            <div>
              <img
                src={image.src}
                className={cn('w-full rounded-image object-cover', image.className)}
                alt={image.alt}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
