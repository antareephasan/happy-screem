import type { Block } from 'payload'

export const ContactInfoBlock: Block = {
  slug: 'contactInfo',
  interfaceName: 'ContactInfoBlock',
  labels: {
    singular: 'Contact Info',
    plural: 'Contact Info Sections',
  },
  imageURL: '/thumbnails/contact-info.png',
  fields: [
    {
      name: 'methods',
      label: 'Contact Methods',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          label: 'Icon',
          options: [
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Location', value: 'location' },
          ],
          defaultValue: 'email',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'linkText',
          type: 'text',
          required: true,
          label: 'Link Text',
          admin: {
            description: 'e.g., email address, phone number, or address',
          },
        },
        {
          name: 'linkHref',
          type: 'text',
          required: true,
          label: 'Link URL',
          admin: {
            description: 'e.g., mailto:email@example.com, tel:+31123456789, or a maps link',
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: './blocks/ContactInfo/RowLabel#ContactMethodRowLabel',
        },
      },
      defaultValue: [
        {
          icon: 'email',
          title: 'E-mail',
          description: 'Stuur ons een bericht voor vragen of opmerkingen.',
          linkText: 'hello@relume.io',
          linkHref: 'mailto:hello@relume.io',
        },
        {
          icon: 'phone',
          title: 'Telefoon',
          description: 'Bel ons voor directe hulp en advies.',
          linkText: '+31 (0)20 123 4567',
          linkHref: 'tel:+31201234567',
        },
        {
          icon: 'location',
          title: 'Kantoor',
          description: 'Bezoek ons kantoor voor een persoonlijk gesprek.',
          linkText: 'Hoofdstraat 123, Amsterdam 1012 AB NL',
          linkHref: '#',
        },
      ],
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
}
