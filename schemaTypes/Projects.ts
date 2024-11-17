export const ProjectsSlider = {
  name: 'projects_slider',
  title: 'Projects Slider',
  type: 'document',
  fields: [
    {
      name: 'icon_title',
      title: 'Icon Title',
      type: 'string',
      description: 'The title displayed at the top of the section (e.g., "Projekte").',
    },
    {
      name: 'projects_title',
      title: 'Projects Title',
      type: 'string',
      description: 'The main header text for the projects section.',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          name: 'project',
          title: 'Project',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Project Title',
              type: 'string',
              description: 'Title of the project.',
            },
            {
              name: 'link',
              title: 'Project Link',
              type: 'url',
              description: 'Link to the project page or external URL.',
            },
            {
              name: 'description',
              title: 'Project Description',
              type: 'text',
              description: 'Short description of the project.',
            },
            {
              name: 'image',
              title: 'Project Image',
              type: 'image',
              options: {hotspot: true},
              description: 'Image displayed for the project.',
            },
          ],
        },
      ],
      description: 'Array of project items for the slider.',
    },
  ],
}
