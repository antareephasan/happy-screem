import React from 'react'
import type { PricingTableBlock as PricingTableBlockProps } from '@/payload-types'
import { PricingTable } from '@/components/organized-components/ReusableComponents/Pricing/PricingTable'

export const PricingTableBlock: React.FC<PricingTableBlockProps> = (props) => {
  const { showTagline, tagline, heading, description, showBillingToggle, plans, colorScheme } =
    props

  // Transform plans data
  const transformedPlans =
    plans?.map((plan) => ({
      name: plan.name || '',
      monthlyPrice: plan.monthlyPrice || '',
      yearlyPrice: plan.yearlyPrice || '',
      features: plan.features?.map((f) => f.feature || '') || [],
      buttonText: plan.buttonText || '',
      buttonLink: plan.buttonLink || '',
      isPopular: plan.isPopular || false,
    })) || []

  return (
    <PricingTable
      showTagline={showTagline!}
      tagline={tagline!}
      heading={heading || ''}
      description={description}
      showBillingToggle={showBillingToggle!}
      plans={transformedPlans}
      colorScheme={colorScheme as any}
    />
  )
}
