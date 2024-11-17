export const WorkshopFormat = {
  name: 'workshop_format',
  title: 'Workshop Format',
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
      description: 'Headline of the service type',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the service type',
    },
    {
      name: 'workshop_format_items',
      title: 'Workshop Format Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'text',
            },
            {
              name: 'event_type',
              title: 'Event Type',
              type: 'string',
            },
            {
              name: 'event_level',
              title: 'Event Level',
              type: 'string',
            },
            {
              name: 'event_duration',
              title: 'Event Duration',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
