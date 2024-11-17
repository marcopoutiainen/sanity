export const TeamCarousel = {
  name: 'team_carousel',
  title: 'Team Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description for the team section.',
    },
    {
      name: 'teams_member',
      title: 'Teams Member',
      type: 'array',
      of: [
        {
          name: 'team_member',
          title: 'Team Member',
          type: 'object',
          fields: [
            {
              name: 'member_name',
              title: 'Member Name',
              type: 'string',
              description: 'Member name eg."Marcel Rombach"',
            },
            {
              name: 'member_role',
              title: 'Member Role',
              type: 'string',
              description: 'Member role eg."Founder"',
            },
            {
              name: 'member_image',
              title: 'Member Image',
              type: 'image',
            },
          ],
        },
      ],
      description: 'Array of slides for the Teams slider.',
    },
  ],
}
