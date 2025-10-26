import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    // --- 1. Logo (Required by Relume Footer) ---
    {
      name: 'logo',
      label: 'Site Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // --- 2. Contact Information ---
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      defaultValue: 'Level 1, 12 Voorbeeldstraat, Amsterdam 1000 AB',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      defaultValue: '0800 123 4567',
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      defaultValue: 'info@example.com',
    },

    // --- 3. Link Sections (linkSections prop) ---
    {
      name: 'linkSections',
      label: 'Footer Link Columns (Max 4)',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          label: 'Section Title',
          type: 'text',
          required: false,
        },
        {
          name: 'links',
          label: 'Navigation Links',
          type: 'array',
          fields: [link({ appearances: false })],
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },

    // --- 4. Social Links (socialLinks prop) ---
    {
      name: 'socialLinks',
      label: 'Social Media Links',
      type: 'array',
      maxRows: 5,
      fields: [
        {
          name: 'platform',
          label: 'Social Platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
          ],
          required: true,
        },
        {
          name: 'href',
          label: 'Link URL (Full URL)',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },

    // --- 5. Legal and Copyright ---
    {
      name: 'copyright',
      label: 'Copyright Text',
      type: 'text',
      defaultValue: '© 2024 Relume. All rights reserved.',
    },
    {
      name: 'legalLinks',
      label: 'Legal Links (Bottom Bar)',
      type: 'array',
      maxRows: 3,
      fields: [link({ appearances: false })],
      admin: {
        initCollapsed: true,
      },
    },

    // --- 6. Color Scheme ---
    {
      name: 'colorScheme',
      label: 'Color Scheme',
      type: 'select',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'light',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
