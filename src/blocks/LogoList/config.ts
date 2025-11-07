import type { Block } from 'payload'

export const LogoList: Block = {
  slug: 'logoList',
  interfaceName: 'LogoListType',
  imageURL: '/thumbnails/logo-list.png',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: "Used by the world's leading companies",
    },
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media', // Make sure this matches your media collection slug
          required: true,
        },
      ],
    },
  ],
}
