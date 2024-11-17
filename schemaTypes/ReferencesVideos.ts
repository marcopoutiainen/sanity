export const ReferenceVideos = {
  name: 'reference_videos',
  title: 'Reference Videos',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/*', // Limits file uploads to video formats
      },
    },
  ],
}
