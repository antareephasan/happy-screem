'use client'

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@relume_io/relume-ui'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import { Card } from '@/components/ui/card'
import RichText from '@/components/RichText'

export interface PricingPlan {
  name: string
  monthlyPrice: string
  yearlyPrice: string
  features: string[]
  buttonText?: string
  buttonLink?: string
  isPopular?: boolean
}

export interface PricingTableProps {
  tagline?: string
  heading: string
  description?: any // RichText data
  plans: PricingPlan[]
  showTagline?: boolean
  showBillingToggle?: boolean
  colorScheme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom'
  className?: string
}

/**
 * Pricing Table Component
 *
 * Displays pricing plans with monthly/yearly toggle.
 *
 * FEATURES:
 * - Billing period toggle (monthly/yearly)
 * - Responsive grid layout
 * - Full color scheme support
 *
 * @example
 * <PricingTable
 *   heading="Pricing Plans"
 *   plans={pricingPlans}
 *   showBillingToggle
 *   colorScheme="light"
 * />
 */
export function PricingTable({
  tagline = 'Prijzen',
  heading,
  description,
  plans,
  showTagline = true,
  showBillingToggle = true,
  colorScheme = 'light',
  className,
}: PricingTableProps) {
  const colors = getColorSchemeClasses(colorScheme)

  return (
    <section
      id="relume"
      className={cn('px-[5%] py-16 md:py-24 lg:py-28', colors.background, className)}
    >
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
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

        {/* TOGGLEABLE: Billing toggle - controlled by showBillingToggle prop */}
        {showBillingToggle ? (
          <Tabs defaultValue="monthly">
            <TabsList className="mx-auto mb-12 w-fit">
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 text-gray-600 hover:text-gray-900"
              >
                Maandelijks
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 text-gray-600 hover:text-gray-900"
              >
                Jaarlijks
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="monthly"
              className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
            >
              {plans.map((plan, index) => (
                <Card key={index} className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
                  <div>
                    <div className="rb-6 mb-6 text-center md:mb-8">
                      <h6 className={cn('text-md leading-[1.4] font-bold md:text-xl', colors.text)}>
                        {plan.name}
                      </h6>
                      <h1
                        className={cn(
                          'my-2 text-6xl font-bold md:text-9xl lg:text-10xl',
                          colors.text,
                        )}
                      >
                        {plan.monthlyPrice}
                      </h1>
                    </div>
                    <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex self-start">
                          <div className="mr-4 flex-none self-start">
                            <BiCheck className={cn('size-6', colors.text)} />
                          </div>
                          <p className={colors.text}>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Button
                      title={plan.buttonText || 'Aan de slag'}
                      className="w-full"
                      variant={'secondary'}
                      asChild
                    >
                      <a href={plan.buttonLink || '/contact'}>{plan.buttonText || 'Aan de slag'}</a>
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent
              value="yearly"
              className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
            >
              {plans.map((plan, index) => (
                <Card key={index} className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
                  <div>
                    <div className="rb-6 mb-6 text-center md:mb-8">
                      <h6 className={cn('text-md leading-[1.4] font-bold md:text-xl', colors.text)}>
                        {plan.name}
                      </h6>
                      <h1
                        className={cn(
                          'my-2 text-6xl font-bold md:text-9xl lg:text-10xl',
                          colors.text,
                        )}
                      >
                        {plan.yearlyPrice}
                      </h1>
                      <p className={cn('mt-2 font-medium', colors.text)}>
                        Bespaar 20% met het jaarplan
                      </p>
                    </div>
                    <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex self-start">
                          <div className="mr-4 flex-none self-start">
                            <BiCheck className={cn('size-6', colors.text)} />
                          </div>
                          <p className={colors.text}>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Button
                      title={plan.buttonText || 'Aan de slag'}
                      className="w-full"
                      variant="secondary"
                      asChild
                    >
                      <a href={plan.buttonLink || '/contact'}>{plan.buttonText || 'Aan de slag'}</a>
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Card key={index} className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
                <div>
                  <div className="rb-6 mb-6 text-center md:mb-8">
                    <h6 className={cn('text-md leading-[1.4] font-bold md:text-xl', colors.text)}>
                      {plan.name}
                    </h6>
                    <h1
                      className={cn(
                        'my-2 text-6xl font-bold md:text-9xl lg:text-10xl',
                        colors.text,
                      )}
                    >
                      {plan.monthlyPrice}
                    </h1>
                  </div>
                  <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex self-start">
                        <div className="mr-4 flex-none self-start">
                          <BiCheck className={cn('size-6', colors.text)} />
                        </div>
                        <p className={colors.text}>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Button
                    title={plan.buttonText || 'Aan de slag'}
                    className="w-full"
                    variant="secondary"
                    asChild
                  >
                    <a href={plan.buttonLink || '/contact'}>{plan.buttonText || 'Aan de slag'}</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
