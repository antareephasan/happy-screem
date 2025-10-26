'use client'

import { Button, Input } from '@relume_io/relume-ui'
import React from 'react'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import type { CTAProps } from '../../types/components'

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

  // Content
  tagline,
  heading,
  description,
  image,

  // Toggleable features
  showTagline = false,
  showImage = true,
  showForm = true,
  showButtons = false,

  // Configuration
  buttons = [
    { text: 'Get Started', variant: 'default' },
    { text: 'Learn More', variant: 'secondary' },
  ],
  formPlaceholder = 'Voer je e-mail in',
  formButtonText = 'Inschrijven',
  colorScheme = 'light',
  className,
}: CTAProps) {
  const colors = getColorSchemeClasses(colorScheme)

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
              <p className={cn('mb-6 md:mb-8 md:text-md', colors.text)}>{description}</p>
            )}

            {/* TOGGLEABLE: Form - controlled by showForm prop */}
            {showForm && (
              <div className="w-full max-w-sm">
                <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                  <Input id="email" type="email" placeholder={formPlaceholder} />
                  <Button title={formButtonText}>{formButtonText}</Button>
                </form>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <p class='text-xs'>
                        By clicking Sign Up you're confirming that you agree with our
                        <a href='#' class='underline'>Terms and Conditions</a>.
                      </p>
                    `,
                  }}
                />
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
                      ((index === 0 ? colors.buttonPrimary : colors.buttonSecondary) as any)
                    }
                    onClick={button.onClick}
                  >
                    {button.text}
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

            {description && <p className={cn('md:text-md', colors.text)}>{description}</p>}

            {/* TOGGLEABLE: Form - controlled by showForm prop */}
            {showForm && (
              <div className="mt-6 w-full max-w-sm md:mt-8">
                <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                  <Input id="email" type="email" placeholder={formPlaceholder} />
                  <Button variant={'secondary'} title={formButtonText}>
                    {formButtonText}
                  </Button>
                </form>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <p class='text-xs'>
                        By clicking Sign Up you're confirming that you agree with our
                        <a href='#' class='underline'>Terms and Conditions</a>.
                      </p>
                    `,
                  }}
                />
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
                      ((index === 0 ? colors.buttonPrimary : colors.buttonSecondary) as any)
                    }
                    onClick={button.onClick}
                  >
                    {button.text}
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
