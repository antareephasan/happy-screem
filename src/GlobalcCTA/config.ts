import type { GlobalConfig } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { revalidateGlobalCTA } from './hooks/revalidateGlobalCTA'
import { lexicalEmptyState } from '@/fields/lexicalDefault'

const baseRichTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ]
  },
})

export const GlobalCTA: GlobalConfig = {
  slug: 'global-cta',
  label: 'Global CTA',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enable Global CTA',
      defaultValue: true,
      admin: {
        description: 'Toggle to show/hide the CTA on all pages',
      },
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout Style',
      options: [
        { label: 'Split (Two Column)', value: 'split' },
        { label: 'Centered', value: 'centered' },
      ],
      defaultValue: 'split',
      required: true,
    },
    {
      name: 'showTagline',
      type: 'checkbox',
      label: 'Show Tagline',
      defaultValue: false,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      admin: {
        condition: (_, siblingData) => siblingData?.showTagline,
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
      defaultValue: 'Klaar om te beginnen?',
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'richText',
      editor: baseRichTextEditor,
      defaultValue: lexicalEmptyState,
    },
    {
      name: 'ctaType',
      type: 'select',
      label: 'CTA Type',
      options: [
        { label: 'Email Signup Form', value: 'form' },
        { label: 'Buttons', value: 'buttons' },
      ],
      defaultValue: 'form',
      required: true,
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      label: 'Form',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.ctaType === 'form',
        description: 'Select the form to submit email signups to',
      },
    },
    {
      type: 'group',
      name: 'formSettings',
      label: 'Form Settings',
      admin: {
        condition: (_, siblingData) => siblingData?.ctaType === 'form',
      },
      fields: [
        {
          name: 'formPlaceholder',
          type: 'text',
          label: 'Email Placeholder',
          defaultValue: 'Voer je e-mail in',
        },
        {
          name: 'formButtonText',
          type: 'text',
          label: 'Submit Button Text',
          defaultValue: 'Inschrijven',
        },
        // {
        //   name: 'termsText',
        //   type: 'textarea',
        //   label: 'Terms & Conditions Text',
        //   defaultValue:
        //     "By clicking Sign Up you're confirming that you agree with our Terms and Conditions.",
        // },
        // {
        //   name: 'termsLink',
        //   type: 'text',
        //   label: 'Terms Link URL',
        //   defaultValue: '/terms',
        // },
      ],
    },
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'array',
      maxRows: 2,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Button Text',
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Button Link',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Default/Primary', value: 'default' },
            { label: 'Secondary', value: 'secondary' },
          ],
          defaultValue: 'default',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.ctaType === 'buttons',
        initCollapsed: true,
      },
    },
    {
      name: 'showImage',
      type: 'checkbox',
      label: 'Show Image',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => siblingData?.layout === 'split',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        condition: (_, siblingData) => siblingData?.layout === 'split' && siblingData?.showImage,
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt Text',
      admin: {
        condition: (_, siblingData) => siblingData?.layout === 'split' && siblingData?.showImage,
      },
    },
    {
      name: 'colorScheme',
      type: 'select',
      label: 'Color Scheme',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'light',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateGlobalCTA],
  },
}
