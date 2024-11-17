export const Footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string', // Or "reference" to point to a page document
    },
    {
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'email', title: 'Email', type: 'string'},
        {name: 'phone', title: 'Phone Number', type: 'string'},
        {name: 'addressLine1', title: 'Address Line 1', type: 'string'},
        {name: 'addressLine2', title: 'Address Line 2', type: 'string'},
        {name: 'city', title: 'City', type: 'string'},
        {name: 'state', title: 'State', type: 'string'},
        {name: 'zip', title: 'ZIP Code', type: 'string'},
      ],
    },
    {
      name: 'services',
      title: 'Services Links',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    },
    {
      name: 'more',
      title: 'More Links',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    },
    {
      name: 'social_links',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'icon', title: 'Icon', type: 'image'},
          ],
        },
      ],
    },
    {
      name: 'partner_logo',
      title: 'Partner Logo',
      type: 'image',
      description: 'The logo of your partner, e.g., Google Partner',
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    },
  ],
}
