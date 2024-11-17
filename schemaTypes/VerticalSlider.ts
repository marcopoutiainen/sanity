export const VerticalSlider = {
  name: 'vertical_slider',
  title: 'Vertical Slider',
  type: 'document',
  fields: [
    {
      name: 'icon_title',
      title: 'Icon Title',
      type: 'string',
      description: 'Title displayed at the top of the section, e.g., "Tools".',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline text for the section, e.g., "Finden, statt suchen."',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description for the section, e.g., about social media usage in the population.',
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
              name: 'title',
              title: 'Slide Title',
              type: 'string',
              description: 'Title of the slide, e.g., "Direkte Ansprache".',
            },
            {
              name: 'image',
              title: 'Slide Image',
              type: 'image',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              description: 'Content for the slide, describing details or benefits.',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'text',
              description: 'Caption for the slide',
            },
          ],
        },
      ],
      description: 'Array of slides to display in the vertical slider.',
    },
  ],
}
