export const CircularSlider = {
  name: 'circular_slider',
  title: 'Circular Slider',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The title displayed at the top of the section, e.g., "Referenzen".',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description for the second section.',
    },
    {
      name: 'slides',
      title: 'Carousel Items',
      type: 'array',
      of: [
        {
          name: 'carouselItem',
          title: 'Carousel Item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the carousel item, e.g., "Slide 1".',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              description: 'Image for the carousel item.',
            },
          ],
        },
      ],
      description: 'Array of items displayed in the circular carousel.',
    },
  ],
}
