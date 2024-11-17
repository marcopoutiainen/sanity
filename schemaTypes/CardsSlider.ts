export const CardsSlider = {
  name: 'cards_slider',
  title: 'Cards Slider',
  type: 'document',
  fields: [
    {
      name: 'icon_title',
      title: 'Icon Title',
      type: 'string',
      description: 'Icon title of the cards slider.',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Headline of the cards slider.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the cards slider.',
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          name: 'slide',
          title: 'Slide',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              description: 'Image for the slide.',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Optional title for the slide.',
            },
          ],
        },
      ],
      description: 'Array of slides for the cards slider.',
    },
  ],
}
