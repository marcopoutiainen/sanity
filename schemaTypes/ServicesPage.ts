export const ServicePage = {
  name: 'services_page',
  title: 'Services Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the service type',
    },
    {
      name: 'headline',
      title: 'Service page Headline',
      type: 'reference',
      to: [{type: 'text_headline'}],
      description: 'Service page Headline',
    },
    {
      name: 'sub_types',
      title: 'Sub Types',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'web_development'}, {type: 'online_marketing'}, {type: 'workshop'}],
        } as any, // Casting to `any` to resolve TypeScript issue
      ],
      description: 'List of sub-post types associated with this service type',
    },
    {
      name: 'clients',
      type: 'reference',
      to: [{type: 'clients'}],
      title: 'Service Page Clients',
    },
    {
      name: 'contact_action',
      type: 'reference',
      to: [{type: 'contact_action'}],
      title: 'Service Page Contact Action',
    },
  ],
}
