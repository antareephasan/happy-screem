import type { RichTextField } from 'payload'
import { lexicalEmptyState } from './lexicalDefault'

/**
 * Helper to create a richText field with proper default value
 * This prevents JSON parsing errors when fields are undefined
 */
export const createRichTextField = (field: Omit<RichTextField, 'type'>): RichTextField => {
  return {
    ...field,
    type: 'richText',
    defaultValue: field.defaultValue || lexicalEmptyState,
  } as RichTextField
}
