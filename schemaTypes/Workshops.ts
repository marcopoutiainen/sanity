export const Workshops = {
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'number',
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
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'workshop_headline',
      title: 'Workshop Headline',
      type: 'reference',
      to: [{type: 'text_headline'}],
    },
    {
      name: 'workshop_values',
      title: 'Workshop Values',
      type: 'reference',
      to: [{type: 'values'}],
    },
    {
      name: 'workshop_item',
      title: 'Workshop Item',
      type: 'reference',
      to: [{type: 'workshop_item'}],
    },
    {
      name: 'workshop_slider',
      title: 'Workshop Slider',
      type: 'reference',
      to: [{type: 'workshop_carousel'}],
    },
    {
      name: 'workshop_formats',
      title: 'Workshop Formats',
      type: 'reference',
      to: [{type: 'workshop_format'}],
    },
    {
      name: 'workshop_clients',
      title: 'Workshop Clients',
      type: 'reference',
      to: [{type: 'clients'}],
    },
    {
      name: 'workshop_testimonial',
      title: 'Workshop Testimonial',
      type: 'reference',
      to: [{type: 'testimonial'}],
    },
  ],
}
