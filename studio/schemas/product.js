export default{
    title: 'Product',
    name: 'product',
    type: 'document',
    initialValue: {
      productType: 'standard'
    },
    fields: [
      {
        title: 'Product Type',
        name: 'productType',
        type: 'string',
        options: {
          list: [
            {title: 'Standard', value: 'standard'},
            {title: 'Monthly', value: 'monthly'}
          ],
          layout: 'dropdown'
        }
      },
      {
        title: 'Feature product',
        name: 'feature',
        type: 'boolean',
        hidden: ({document}) => document?.productType != 'monthly'
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
      }
    ]
  }