export const RangeCarousel = {
  name: 'range_carousel',
  title: 'Range Carousel',
  type: 'document',
  fields: [
    {
      name: 'icon_title',
      title: 'Icon Title',
      type: 'string',
      description: 'Icon title under image e.g., "Team".',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Headline for the range section.',
    },
    {
      name: 'caption_1',
      title: 'Caption 1',
      type: 'text',
      description: 'First short description for the range section.',
    },
    {
      name: 'caption_2',
      title: 'Caption 2',
      type: 'text',
      description: 'Second short description for the range section.',
    },
    {
      name: 'range_slides',
      title: 'Range Slides',
      type: 'array',
      of: [
        {
          name: 'range_slide',
          title: 'Range Slide',
          type: 'object',
          fields: [
            {
              name: 'slide_title',
              title: 'Slide Title',
              type: 'string',
              description: 'Title for the slide.',
            },
            {
              name: 'slide_description',
              title: 'Slide Description',
              type: 'text',
              description: 'Description for the slide.',
            },
          ],
        },
      ],
      description: 'Array of slides for the Range slider.',
    },
  ],
}
