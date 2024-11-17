export const ToolsSlider = {
  name: 'tools_slider',
  title: 'Tools Slider',
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
      type: 'string',
      description: 'headline text for the section, e.g., "Ansprechend. Mit Reichweite."',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description for the section.',
    },
    {
      name: 'slides',
      title: 'Tools Slider Items',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Tools Item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Header Title',
              type: 'string',
              description: 'Title of the carousel item, e.g., "Slide 1".',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Caption of the carousel item, e.g., "Slide 1".',
            },
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: 'video/*', // Accept all video file types
              },
              description: 'Video for the slider',
            },
          ],
        },
      ],
      description: 'Array of items displayed in the Tools Slider.',
    },
  ],
}
