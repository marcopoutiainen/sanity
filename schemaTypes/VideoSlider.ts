export const VideoSlider = {
  name: 'video_slider',
  title: 'Video Slider',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Slier Title',
      type: 'string',
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
              name: 'video',
              title: 'video',
              type: 'file',
              options: {
                accept: 'video/*', // Accept all video file types
              },
              description: 'Video for the slider',
            },
            {
              name: 'button_title',
              title: 'Button Title',
              type: 'string',
              description: 'Title text for the button displayed on the slider',
            },
          ],
        },
      ],
      description: 'Array of slides within this section',
    },
  ],
}
