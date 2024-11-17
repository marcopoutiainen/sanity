export const Clients = {
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(1).max(100),
    },
    {
      name: 'description',
      title: 'Client Description',
      type: 'text',
      validation: (Rule: any) => Rule.max(200),
      description: 'A short description of the client or project.',
    },
    {
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true, // Allows for image cropping and focusing in the Sanity Studio
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
