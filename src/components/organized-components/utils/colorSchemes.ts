// /**
//  * Color scheme utilities for component theming
//  * Provides consistent color mappings across all components
//  */

// export type ColorSchemeVariant = 'light' | 'dark' | 'primary' | 'secondary' | 'custom'

// export interface CustomColors {
//   background: string
//   text: string
//   accent: string
//   border: string
// }

// export interface ColorScheme {
//   variant: ColorSchemeVariant
//   customColors?: CustomColors
// }

// /**
//  * Get background classes for a color scheme
//  */
// export function getBackgroundClasses(scheme: ColorSchemeVariant | ColorScheme): string {
//   const variant = typeof scheme === 'string' ? scheme : scheme.variant

//   switch (variant) {
//     case 'light':
//       return 'bg-background-primary'
//     case 'dark':
//       return 'bg-gray-900'
//     case 'primary':
//       return 'bg-blue-600'
//     case 'secondary':
//       return 'bg-background-secondary'
//     default:
//       return 'bg-background-primary'
//   }
// }

// /**
//  * Get text color classes for a color scheme
//  */
// export function getTextClasses(scheme: ColorSchemeVariant | ColorScheme): string {
//   const variant = typeof scheme === 'string' ? scheme : scheme.variant

//   switch (variant) {
//     case 'light':
//       return 'text-text-primary'
//     case 'dark':
//       return 'text-white'
//     case 'primary':
//       return 'text-white'
//     case 'secondary':
//       return 'text-text-primary'
//     default:
//       return 'text-text-primary'
//   }
// }

// /**
//  * Get border color classes for a color scheme
//  */
// export function getBorderClasses(scheme: ColorSchemeVariant | ColorScheme): string {
//   const variant = typeof scheme === 'string' ? scheme : scheme.variant

//   switch (variant) {
//     case 'light':
//       return 'border-border-primary'
//     case 'dark':
//       return 'border-gray-700'
//     case 'primary':
//       return 'border-blue-500'
//     case 'secondary':
//       return 'border-border-primary'
//     default:
//       return 'border-border-primary'
//   }
// }

// /**
//  * Get button variant based on color scheme
//  */
// export function getButtonVariant(
//   scheme: ColorSchemeVariant | ColorScheme,
//   isPrimary: boolean = true,
// ): string {
//   const variant = typeof scheme === 'string' ? scheme : scheme.variant

//   if (isPrimary) {
//     return variant === 'dark' ? 'secondary-alt' : 'default'
//   }

//   return variant === 'dark' ? 'secondary-alt' : 'secondary'
// }

// /**
//  * Get all color scheme classes combined
//  */
// export function getColorSchemeClasses(scheme: ColorSchemeVariant | ColorScheme = 'light'): {
//   background: string
//   text: string
//   border: string
//   buttonPrimary: string
//   buttonSecondary: string
// } {
//   return {
//     background: getBackgroundClasses(scheme),
//     text: getTextClasses(scheme),
//     border: getBorderClasses(scheme),
//     buttonPrimary: getButtonVariant(scheme, true),
//     buttonSecondary: getButtonVariant(scheme, false),
//   }
// }

/**
 * Color scheme utilities for component theming
 * Provides consistent color mappings across all components
 * Aligned with Schermblij brand style guide
 */

export type ColorSchemeVariant = 'light' | 'dark' | 'primary' | 'secondary' | 'accent' | 'custom'

export interface CustomColors {
  background: string
  text: string
  accent: string
  border: string
}

export interface ColorScheme {
  variant: ColorSchemeVariant
  customColors?: CustomColors
}

/**
 * Get background classes for a color scheme
 */
export function getBackgroundClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant

  switch (variant) {
    case 'light':
      return 'bg-background-primary' // White
    case 'dark':
      return 'bg-gray-900'
    case 'primary':
      return 'bg-brand-main' // Smalt Blue #4F758D
    case 'secondary':
      return 'bg-brand-cream' // Merino #F3E9DF
    case 'accent':
      return 'bg-brand-green' // Persian Green #01B09A
    default:
      return 'bg-background'
  }
}

/**
 * Get text color classes for a color scheme
 */
export function getTextClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant

  switch (variant) {
    case 'light':
      return 'text-text-primary' // Dark gray
    case 'dark':
      return 'text-white'
    case 'primary':
      return 'text-white' // White text on blue background
    case 'secondary':
      return 'text-brand-main' // Brand main on cream
    case 'accent':
      return 'text-white' // White text on green
    default:
      return 'text-foreground'
  }
}

/**
 * Get border color classes for a color scheme
 */
export function getBorderClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant

  switch (variant) {
    case 'light':
      return 'border-border-primary'
    case 'dark':
      return 'border-gray-700'
    case 'primary':
      return 'border-brand-main'
    case 'secondary':
      return 'border-border'
    case 'accent':
      return 'border-brand-green'
    default:
      return 'border-border'
  }
}

/**
 * Get button variant based on color scheme
 * Note: Per style guide, use 'default' or 'outline', NOT 'primary'
 */
export function getButtonVariant(
  scheme: ColorSchemeVariant | ColorScheme,
  isPrimary: boolean = true,
): 'default' | 'outline' | 'secondary' | 'destructive' {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant

  // For dark backgrounds, use outline/secondary buttons
  if (variant === 'dark' || variant === 'primary') {
    return isPrimary ? 'outline' : 'secondary'
  }

  // For light backgrounds, use default/outline
  return isPrimary ? 'default' : 'outline'
}

/**
 * Get link color classes based on color scheme
 */
export function getLinkClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant

  switch (variant) {
    case 'light':
    case 'secondary':
      return 'text-accent hover:text-brand-green underline'
    case 'dark':
    case 'primary':
      return 'text-brand-light-blue hover:text-white underline'
    case 'accent':
      return 'text-white hover:text-brand-cream underline'
    default:
      return 'text-accent hover:opacity-80 underline'
  }
}

/**
 * Get all color scheme classes combined
 */
export function getColorSchemeClasses(scheme: ColorSchemeVariant | ColorScheme = 'light'): {
  background: string
  text: string
  border: string
  buttonPrimary: 'default' | 'outline' | 'secondary' | 'destructive'
  buttonSecondary: 'default' | 'outline' | 'secondary' | 'destructive'
  link: string
} {
  return {
    background: getBackgroundClasses(scheme),
    text: getTextClasses(scheme),
    border: getBorderClasses(scheme),
    buttonPrimary: getButtonVariant(scheme, true),
    buttonSecondary: getButtonVariant(scheme, false),
    link: getLinkClasses(scheme),
  }
}

/**
 * Helper to check if scheme needs light text
 */
export function needsLightText(scheme: ColorSchemeVariant | ColorScheme): boolean {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant
  return variant === 'dark' || variant === 'primary' || variant === 'accent'
}

/**
 * Get heading color based on scheme
 */
export function getHeadingClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant

  switch (variant) {
    case 'light':
    case 'secondary':
      return 'text-brand-main' // Smalt blue for headings on light bg
    case 'dark':
      return 'text-white'
    case 'primary':
      return 'text-white'
    case 'accent':
      return 'text-white'
    default:
      return 'text-foreground'
  }
}

/**
 * Brand-specific color utilities
 */
export const brandColors = {
  main: 'brand-main', // #4F758D Smalt Blue
  green: 'brand-green', // #01B09A Persian Green
  red: 'brand-red', // #FF6B6B Bittersweet
  cream: 'brand-cream', // #F3E9DF Merino
  lightBlue: 'brand-light-blue', // #A2D2E2 Regent St Blue
} as const

/**
 * Semantic color mappings per style guide
 */
export const semanticColors = {
  primary: 'primary', // Smalt Blue
  secondary: 'secondary', // Regent St Blue
  accent: 'accent', // Persian Green
  success: 'success', // Persian Green
  error: 'error', // Bittersweet
  destructive: 'destructive', // Bittersweet
  muted: 'muted', // Merino
} as const
