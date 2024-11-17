export const Recruiting = {
  name: 'recruiting_page',
  title: 'Recruiting Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Recruiting Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Recruiting Subtitle',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Recruiting Caption',
      type: 'text',
    },
    {
      name: 'headline',
      title: 'Recruiting Headline',
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
      title: 'Rec Video Slider',
    },
    {
      name: 'circular_slider',
      type: 'reference',
      to: [{type: 'circular_slider'}],
      title: 'Rec Circular Slider',
    },
    {
      name: 'tools_slider',
      type: 'reference',
      to: [{type: 'tools_slider'}],
      title: 'Rec Tools Slider',
    },
    {
      name: 'match',
      type: 'reference',
      to: [{type: 'match'}],
      title: 'Rec Match',
    },
    {
      name: 'values',
      type: 'reference',
      to: [{type: 'values'}],
      title: 'Rec Values',
    },
    {
      name: 'projects',
      type: 'reference',
      to: [{type: 'projects_slider'}],
      title: 'Rec Projects Slider',
    },
    {
      name: 'testimonial',
      type: 'reference',
      to: [{type: 'testimonial'}],
      title: 'Rec Testimonial',
    },
    {
      name: 'contact_action',
      type: 'reference',
      to: [{type: 'contact_action'}],
      title: 'Rec Contact Action',
    },
  ],
}
