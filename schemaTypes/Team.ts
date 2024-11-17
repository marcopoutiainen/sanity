export const Team = {
  name: 'team',
  title: 'Team Section',
  type: 'document',
  fields: [
    {
      name: 'section_slogan',
      title: 'Slogan Title',
      type: 'string',
      description: 'Title displayed at the top of the team section, e.g., "Its a match".',
    },
    {
      name: 'icon_title',
      title: 'Icon Title',
      type: 'string',
      description: 'Icon title under image e.g., "Team".',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline text for the team section, e.g., "Menschen dahinter."',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description for the team section.',
    },
    {
      name: 'team_image',
      title: 'Team Image',
      type: 'image',
      description: 'Image of team members.',
    },
    {
      name: 'names',
      title: 'Names',
      type: 'array',
      of: [
        {
          name: 'name',
          title: 'Name',
          type: 'object',
          fields: [
            {
              name: 'team_name',
              title: 'Team Names',
              type: 'string',
              description: 'Teams Names eg."Marcel"',
            },
          ],
        },
      ],
      description: 'Array of slides for the cards slider.',
    },
  ],
}
