export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ]
}
