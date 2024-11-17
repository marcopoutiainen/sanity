export const Values = {
  name: 'values',
  title: 'Values Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title displayed in the link button at the top.',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'text',
      description: 'The main headline for this section, supports HTML for custom styling.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description or subtitle for the values section.',
    },
    {
      name: 'items',
      title: 'Info Boxes',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Info Box Item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Item Title',
              type: 'string',
              description: 'Title of the info box item, displayed in a colored font.',
            },
            {
              name: 'description',
              title: 'Item Description',
              type: 'text',
              description: 'Description text for the info box item.',
            },
          ],
        },
      ],
      description: 'Array of info boxes to display in this section.',
    },
  ],
}
