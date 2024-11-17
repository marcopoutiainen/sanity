export const ContactAction = {
  name: 'contact_action',
  title: 'Contact Action Section',
  type: 'document',
  fields: [
    {
      name: 'icon_title',
      title: 'Icon Title',
      type: 'string',
      description: 'The title displayed at the top, e.g., "Kontakt".',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'The main headline for this section, e.g., "Bereit für Neues?"',
    },
    {
      name: 'caption',
      title: 'caption Text',
      type: 'text',
      description: 'Additional support text providing context, displayed in the support section.',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Video displayed on the left side of the component.',
    },
    {
      name: 'highlight_text',
      title: 'Highlight Text',
      type: 'string',
      description: 'The text displayed in the highlight box, e.g., "Lerne uns kennen".',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle text displayed beneath the highlight text.',
    },
    {
      name: 'contactActions',
      title: 'Contact Actions',
      type: 'array',
      of: [
        {
          name: 'action',
          title: 'Action',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Action Text',
              type: 'string',
              description: 'The display text for the action, e.g., "Discovery Call buchen".',
            },
            {
              name: 'link',
              title: 'Action Link',
              type: 'url',
              description:
                'URL for the action link, e.g., "tel:+4733378901" or a link to the contact page.',
            },
            {
              name: 'button_color',
              title: 'Button color',
              type: 'color',
            },
          ],
        },
      ],
      description: 'Array of actions, each with a label and link.',
    },
  ],
}
