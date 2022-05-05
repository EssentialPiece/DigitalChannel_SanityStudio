export default{
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
      {
        //???
        title: 'Single',
        name: 'single',
        type: 'string'
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Icon',
        name: 'icon',
        type: 'image'
      },
      {
        title: 'Cost',
        name: 'cost',
        type: 'number',
        validation: Rule => Rule.required().precision(2).error('Invalid price')
      },
      {
        title: 'Purchase Link',
        name: 'purchaseLink',
        type: 'url'
      },
      {
        title: 'Long Description',
        name: 'longDescription',
        type: 'text'
      },
      {
        title: 'Short Description',
        name: 'shortDescription',
        type: 'string'
      },
      {
        //????
        title: 'Monthly',
        name: 'monthly',
        type: 'string'
      }
    ]
  }