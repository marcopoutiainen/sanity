export const Match = {
  name: 'match',
  title: 'Match Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'The main title of the section, e.g., "It’s a match!".',
    },
    {
      name: 'team_member_left',
      title: 'Team Member Left',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          description: 'The name of the team member, e.g., "Tobi".',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
          description: 'The role or title of the team member, e.g., "Recruitment Expert".',
        },
      ],
      description: 'Left team member shown with animations.',
    },
    {
      name: 'team_member_right',
      title: 'Team Member Right',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          description: 'The name of the team member, e.g., "Tobi".',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
          description: 'The role or title of the team member, e.g., "Recruitment Expert".',
        },
      ],
      description: 'Right team member shown with animations.',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Main image for the section background, e.g., team member or office photo.',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'Subtitle text for the section, e.g., "Gemeinsam in die Zukunft des Recruitment".',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description about the team and section.',
    },
    {
      name: 'button_text',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the button at the end of the section.',
    },
  ],
}
