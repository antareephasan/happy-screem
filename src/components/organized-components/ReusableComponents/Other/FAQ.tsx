'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@relume_io/relume-ui'
import React from 'react'
import { RxPlus } from 'react-icons/rx'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import RichText from '@/components/RichText'
import { Card } from '@/components/ui/card'

export interface FAQItem {
  question: string
  answer: any // RichText data structure from Payload
}

export interface FAQProps {
  heading: string
  description?: any // RichText data structure from Payload
  faqs: FAQItem[]
  showContactSection?: boolean
  contactHeading?: string
  contactDescription?: any // RichText data structure from Payload
  contactButtonText?: string
  contactButtonLink?: string
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom'
  className?: string
}

/**
 * FAQ Component
 *
 * Displays frequently asked questions with accordion.
 *
 * FEATURES:
 * - Accordion UI
 * - Optional contact section
 * - Full color scheme support
 *
 * @example
 * <FAQ
 *   heading="Frequently Asked Questions"
 *   faqs={faqData}
 *   showContactSection
 *   colorScheme="light"
 * />
 */
export function FAQ({
  heading,
  description,
  faqs,
  showContactSection = true,
  contactHeading = 'Heb je nog vragen?',
  contactDescription = 'Neem contact met ons op voor meer informatie.',
  contactButtonText = 'Contact',
  contactButtonLink = '/contact',
  colorScheme = 'light',
  className,
}: FAQProps) {
  const colors = getColorSchemeClasses(colorScheme)

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
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

        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <AccordionItem value={`item-${index}`} className="border-none px-5 md:px-6">
                <AccordionTrigger
                  icon={
                    <RxPlus
                      className={cn(
                        'size-7 shrink-0 transition-transform duration-300 md:size-8',
                        colors.text,
                      )}
                    />
                  }
                  className={cn(
                    'md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45',
                    colors.text,
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={cn('md:pb-6', colors.text)}>
                  <RichText data={faq.answer} enableGutter={false} />
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>

        {/* TOGGLEABLE: Contact section - controlled by showContactSection prop */}
        {showContactSection && (
          <div className="mt-12 md:mt-18 lg:mt-20">
            <h4
              className={cn(
                'mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl',
                colors.text,
              )}
            >
              {contactHeading}
            </h4>
            <div className={cn('md:text-md', colors.text)}>
              {contactDescription && <RichText data={contactDescription} enableGutter={false} />}
            </div>
            <div className="mt-6 md:mt-8">
              <Button title={contactButtonText} variant={colors.buttonSecondary as any} asChild>
                <a href={contactButtonLink}>{contactButtonText}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
