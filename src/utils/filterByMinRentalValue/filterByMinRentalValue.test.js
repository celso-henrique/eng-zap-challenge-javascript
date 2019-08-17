import filterByMinRentalValue from './filterByMinRentalValue'

describe('Filter by miniminum rental value', () => {
  it('filter properties with rental value lower than the specified', () => {
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
          price: '5000',
          monthlyCondoFee: '1500'
        }
      }
    ]

    const processed = filterByMinRentalValue(3000)(data)

    expect(processed.length).toEqual(1)
    expect(processed[0].pricingInfos.price).toEqual(data[1].pricingInfos.price)
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

    expect(filterByMinRentalValue(3000)(data).length).toEqual(2)
  })
})
