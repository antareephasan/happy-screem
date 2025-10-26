/**
 * Organized Relume Components
 *
 * Consolidated and enhanced components from Relume exports,
 * optimized for Payload CMS integration.
 *
 * All components support:
 * - Color scheme configuration
 * - Toggleable features
 * - TypeScript type safety
 */

// Global Components (used site-wide)
export * from './GlobalComponents';

// Reusable Components (used for building pages)
export * from './ReusableComponents';

// Utilities
export { cn } from './utils/cn';
export {
  getColorSchemeClasses,
  getBackgroundClasses,
  getTextClasses,
  getBorderClasses,
  getButtonVariant,
  type ColorSchemeVariant,
  type ColorScheme,
  type CustomColors,
} from './utils/colorSchemes';

// Types
export type * from './types/components';
