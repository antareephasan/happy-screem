// src/Header/config.ts

import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    // --- 1. Logo Field (New) ---
    {
      name: 'logo',
      label: 'Site Logo',
      type: 'upload',
      relationTo: 'media', // Assuming your media collection slug is 'media'
      required: true,
    },

    // --- 2. Nav Items (Existing - Used for Relume 'links' prop) ---
    {
      name: 'navItems',
      type: 'array',
      label: 'Main Navigation Links',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },

    // --- 3. Action Buttons (New - Used for Relume 'buttons' prop) ---
    {
      name: 'actionButtons',
      type: 'array',
      label: 'Action Buttons (Max 2)',
      maxRows: 2,
      minRows: 0,
      fields: [
        // Using the same link field for the button URL/Text
        link({
          appearances: false, // Assuming your link field handles text and href
        }),
        {
          name: 'variant',
          label: 'Button Style',
          type: 'select',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
          ],
          defaultValue: 'primary',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
