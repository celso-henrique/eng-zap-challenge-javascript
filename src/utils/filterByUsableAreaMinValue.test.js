import filterByUsableAreaMinValue from './filterByUsableAreaMinValue'

describe('Filter by usable area min value', () => {
  it('filter properties for sale with usable area value lower than specified', () => {
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

    const processed = filterByUsableAreaMinValue(3500)(data)

    expect(processed.length).toEqual(1)
    expect(processed[0].pricingInfos.price).toEqual(data[0].pricingInfos.price)
  })

  it('does not filter properties for rental', () => {
    const data = [
      {
        pricingInfos: { businessType: 'RENTAL', price: '350000' },
        usableAreas: 10
      },
      {
        pricingInfos: { businessType: 'RENTAL', price: '35000' },
        usableAreas: 30
      }
    ]

    expect(filterByUsableAreaMinValue(3500)(data).length).toEqual(2)
  })
})
