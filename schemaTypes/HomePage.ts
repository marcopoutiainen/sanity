export const HomePage = {
  name: 'home_page',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'solutions',
      type: 'reference',
      to: [{type: 'solutions_page'}],
      title: 'Solutions Page',
    },
    {
      name: 'recruiting',
      type: 'reference',
      to: [{type: 'recruiting_page'}],
      title: 'Recruiting Page',
    },
    {
      name: 'footer',
      type: 'reference',
      to: [{type: 'footer'}],
      title: 'Footer',
    },
  ],
}
