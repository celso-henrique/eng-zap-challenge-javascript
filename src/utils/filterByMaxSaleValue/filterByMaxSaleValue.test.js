import filterByMaxSaleValue from './filterByMaxSaleValue'

describe('Filter by max sale value', () => {
  it('filter properties with sale value greater than the specified', () => {
    const data = [
      {
        pricingInfos: {
          businessType: 'SALE',
          price: '150000'
        }
      },
      {
        pricingInfos: {
          businessType: 'SALE',
          price: '500000'
        }
      }
    ]

    const processed = filterByMaxSaleValue(300000)(data)

    expect(processed.length).toEqual(1)
    expect(processed[0].pricingInfos.price).toEqual(data[0].pricingInfos.price)
  })

  it('does not filter properties for rent', () => {
    const data = [
      {
        pricingInfos: { businessType: 'RENTAL', price: '350000' }
      },
      {
        pricingInfos: { businessType: 'RENTAL', price: '35000' }
      }
    ]

    expect(filterByMaxSaleValue(3000)(data).length).toEqual(2)
  })
})
