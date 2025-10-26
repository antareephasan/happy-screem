/**
 * Color scheme utilities for component theming
 * Provides consistent color mappings across all components
 */

export type ColorSchemeVariant = 'light' | 'dark' | 'primary' | 'secondary' | 'custom';

export interface CustomColors {
  background: string;
  text: string;
  accent: string;
  border: string;
}

export interface ColorScheme {
  variant: ColorSchemeVariant;
  customColors?: CustomColors;
}

/**
 * Get background classes for a color scheme
 */
export function getBackgroundClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant;

  switch (variant) {
    case 'light':
      return 'bg-background-primary';
    case 'dark':
      return 'bg-gray-900';
    case 'primary':
      return 'bg-blue-600';
    case 'secondary':
      return 'bg-background-secondary';
    default:
      return 'bg-background-primary';
  }
}

/**
 * Get text color classes for a color scheme
 */
export function getTextClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant;

  switch (variant) {
    case 'light':
      return 'text-text-primary';
    case 'dark':
      return 'text-white';
    case 'primary':
      return 'text-white';
    case 'secondary':
      return 'text-text-primary';
    default:
      return 'text-text-primary';
  }
}

/**
 * Get border color classes for a color scheme
 */
export function getBorderClasses(scheme: ColorSchemeVariant | ColorScheme): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant;

  switch (variant) {
    case 'light':
      return 'border-border-primary';
    case 'dark':
      return 'border-gray-700';
    case 'primary':
      return 'border-blue-500';
    case 'secondary':
      return 'border-border-primary';
    default:
      return 'border-border-primary';
  }
}

/**
 * Get button variant based on color scheme
 */
export function getButtonVariant(scheme: ColorSchemeVariant | ColorScheme, isPrimary: boolean = true): string {
  const variant = typeof scheme === 'string' ? scheme : scheme.variant;

  if (isPrimary) {
    return variant === 'dark' ? 'secondary-alt' : 'default';
  }

  return variant === 'dark' ? 'secondary-alt' : 'secondary';
}

/**
 * Get all color scheme classes combined
 */
export function getColorSchemeClasses(scheme: ColorSchemeVariant | ColorScheme = 'light'): {
  background: string;
  text: string;
  border: string;
  buttonPrimary: string;
  buttonSecondary: string;
} {
  return {
    background: getBackgroundClasses(scheme),
    text: getTextClasses(scheme),
    border: getBorderClasses(scheme),
    buttonPrimary: getButtonVariant(scheme, true),
    buttonSecondary: getButtonVariant(scheme, false),
  };
}
