export const ReferenceItems = {
  name: 'reference_items',
  title: 'Reference Items',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 200},
    },
    {name: 'caption', title: 'Caption', type: 'text'},
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags', // Enables the tags input UI
      },
    },
    {
      name: 'references_item_video',
      type: 'reference',
      to: [{type: 'reference_videos'}],
      title: 'References Item Video',
    },
    {
      name: 'factsData',
      title: 'Facts Data',
      type: 'array',
      of: [
        {
          name: 'fact',
          title: 'Fact',
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'value', title: 'Value', type: 'number'},
          ],
        },
      ],
    },
    {
      name: 'references_testimonial',
      title: 'References Testimonial',
      type: 'reference',
      to: [{type: 'testimonial'}],
    },
    {
      name: 'references_contact_action',
      title: 'References Contact Action',
      type: 'reference',
      to: [{type: 'contact_action'}],
    },
  ],
}
