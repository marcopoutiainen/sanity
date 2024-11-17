export const Menu = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'links',
      title: 'Menu Links',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'path', title: 'Path', type: 'string'}, // Relative path (e.g., "/about-us")
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
      name: 'type',
      title: 'Reference Type',
      type: 'string',
      options: {
        list: [
          {title: 'Solution', value: 'solutions'},
          {title: 'Recruiting', value: 'recruiting'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'socialLinks',
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
  ],
}
