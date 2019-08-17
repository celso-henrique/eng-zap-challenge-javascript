import filterByCondominiumMaxValue from './filterByCondominiumMaxValue'

describe('Filter by condominium max value', () => {
  it('filter properties with condominium fee value greater than the specified', () => {
    const data = [
      {
        pricingInfos: {
          businessType: 'RENTAL',
          price: '1500',
          monthlyCondoFee: '300'
        }
      },
      {
        pricingInfos: {
          businessType: 'RENTAL',
          price: '3000',
          monthlyCondoFee: '1500'
        }
      }
    ]

    const processed = filterByCondominiumMaxValue(30)(data)

    expect(processed.length).toEqual(1)
    expect(processed[0].pricingInfos.price).toEqual(data[0].pricingInfos.price)
  })

  it('does not filter properties for sale', () => {
    const data = [
      {
        pricingInfos: { businessType: 'SALE', price: '350000' },
        usableAreas: 10
      },
      {
        pricingInfos: { businessType: 'SALE', price: '35000' },
        usableAreas: 30
      }
    ]

    expect(filterByCondominiumMaxValue(30)(data).length).toEqual(2)
  })
})
