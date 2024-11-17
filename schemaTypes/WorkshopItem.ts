export const WorkshopItem = {
  name: 'workshop_item',
  title: 'Workshop Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the service type',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Headline of workshop item',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the service type',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the workshop item',
    },
    {
      name: 'button',
      title: 'Workshop item button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
        {
          name: 'color',
          title: 'Button Color',
          type: 'color',
        },
      ],
    },
  ],
}
