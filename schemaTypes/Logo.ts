export const Logo = {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Logo Name',
      type: 'string',
      description: 'A name to identify this logo (e.g., "Client Logo")',
    },
    {
      name: 'desktop_logo',
      title: 'Desktop Logo',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload the desktop version of the logo',
    },
    {
      name: 'mobile_logo',
      title: 'Mobile Logo',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload the mobile version of the logo',
    },
  ],
}
