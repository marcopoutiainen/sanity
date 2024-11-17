export const WorkshopCarousel = {
  name: 'workshop_carousel',
  title: 'Workshop Carousel',
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
      name: 'button',
      title: 'Button',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'button_text',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'button_link',
              title: 'Button Link',
              type: 'string',
            },
            {
              name: 'button_color',
              title: 'Button Color',
              type: 'color',
            },
          ],
        },
      ],
      description: 'List of sub-post types associated with this service type',
    },
    {
      name: 'workshop_carousel_items',
      title: 'Workshop Carousel Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'slide_title',
              title: 'Slide Title',
              type: 'string',
            },
            {
              name: 'Slide_caption',
              title: 'Slide Caption',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
