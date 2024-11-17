export const ReferencesPage = {
  name: 'references_page',
  title: 'References Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the references type',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the references type',
    },
    {
      name: 'type',
      title: 'Reference Type',
      type: 'string',
      options: {
        list: [
          {title: 'Solution', value: 'solution'},
          {title: 'Recruiting', value: 'recruiting'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'subTypes',
      title: 'Sub Types',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'reference_items'}],
        } as any, // Casting to `any` to resolve TypeScript issue
      ],
      description: 'List of sub-post types associated with this references type',
    },
  ],
}
