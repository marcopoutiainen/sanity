export const Testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      description: 'The main testimonial text.',
    },
    {
      name: 'author',
      title: 'Author or Source',
      type: 'string',
      description: 'The name of the author or source of the testimonial, e.g., "Google Review".',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'The rating given, represented by the number of stars (1-5).',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
  ],
}
