export const Solutions = {
  name: 'solutions_page',
  title: 'Solutions Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Solutions Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Solutions Subtitle',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Solutions Caption',
      type: 'text',
    },
    {
      name: 'headline',
      title: 'Solutions Headline',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'main_menu',
      type: 'reference',
      to: [{type: 'menu'}],
      title: 'Main Menu',
    },
    {
      name: 'video_slider',
      type: 'reference',
      to: [{type: 'video_slider'}],
      title: 'Sol Video Slider',
    },
    {
      name: 'values',
      type: 'reference',
      to: [{type: 'values'}],
      title: 'Sol Values',
    },
    {
      name: 'vertical_slider',
      type: 'reference',
      to: [{type: 'vertical_slider'}],
      title: 'Sol Vertical Slider',
    },
    {
      name: 'projects',
      type: 'reference',
      to: [{type: 'projects_slider'}],
      title: 'Sol Projects Slider',
    },
    {
      name: 'testimonial',
      type: 'reference',
      to: [{type: 'testimonial'}],
      title: 'Sol Testimonial',
    },
    {
      name: 'contact_action',
      type: 'reference',
      to: [{type: 'contact_action'}],
      title: 'Sol Contact Action',
    },
  ],
}
