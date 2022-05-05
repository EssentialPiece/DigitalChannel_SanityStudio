export default{
    title: 'Blog',
    name: 'blog',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Category',
        name: 'category',
        type: 'string'
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image'
      },
      {
        title: 'Body',
        name: 'body',
        type: 'array',
        of: [{type: 'block'}]
      }
    ]
  }