/**
 * Default empty state for Lexical editor fields
 * This prevents JSON parsing errors when fields are undefined
 */
export const lexicalEmptyState = {
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    children: [
      {
        type: 'paragraph',
        version: 1,
        children: [],
      },
    ],
    direction: 'ltr',
  },
}
