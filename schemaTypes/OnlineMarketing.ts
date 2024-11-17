export const OnlineMarketing = {
  name: 'online_marketing',
  title: 'Online Marketing',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'radioSelection',
      title: 'Select an Option',
      type: 'string',
      options: {
        list: [
          {title: 'Service', value: 'service'},
          {title: 'Reference', value: 'reference'},
        ],
        layout: 'radio', // This makes it a radio button
      },
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {name: 'text', title: 'Button Text', type: 'string'},
        {name: 'color', title: 'Button color', type: 'color'},
        {name: 'link', title: 'Button Link', type: 'string'},
      ],
      hidden: ({parent}) => parent?.radioSelection !== 'service', // Only shows this field if "Option 2" is selected
    },
    {
      name: 'marketing_text_headline',
      title: 'Text Headline',
      type: 'reference',
      to: [{type: 'text_headline'}],
    },
    {
      name: 'marketing_vertical_slider',
      title: 'Vertical Slider',
      type: 'reference',
      to: [{type: 'vertical_slider'}],
    },
    {
      name: 'marketing_range_carousel',
      title: 'Ads Section',
      type: 'reference',
      to: [{type: 'ads_section'}],
    },
    {
      name: 'marketing_testimonial',
      title: 'Web Testimonial',
      type: 'reference',
      to: [{type: 'testimonial'}],
    },
    {
      name: 'marketing_contact_action',
      title: 'Web Contact Action',
      type: 'reference',
      to: [{type: 'contact_action'}],
    },
  ],
}
