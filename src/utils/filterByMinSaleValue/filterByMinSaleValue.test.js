import filterByMinSaleValue from './filterByMinSaleValue'

describe('Filter by minimum sale value', () => {
  it('filter properties with sale value lower than the specified', () => {
    const data = [
      {
        pricingInfos: {
          businessType: 'SALE',
          price: '150000'
        },
        address: {
          geoLocation: {
            location: {
              lon: -46.68,
              lat: -23.55
            }
          }
        }
      },
      {
        pricingInfos: {
          businessType: 'SALE',
          price: '500000'
        },
        address: {
          geoLocation: {
            location: {
              lon: -46.68,
              lat: -23.55
            }
          }
        }
      }
    ]

    const processed = filterByMinSaleValue(300000)(data)

    expect(processed.length).toEqual(1)
    expect(processed[0].pricingInfos.price).toEqual(data[1].pricingInfos.price)
  })

  it('includes a percentage variation when inside the bounding box', () => {
    const data = [
      {
        pricingInfos: {
          businessType: 'SALE',
          price: '300000'
        },
        address: {
          geoLocation: {
            location: {
              lon: -46.68,
              lat: -23.55
            }
          }
        }
      },
      {
        pricingInfos: {
          businessType: 'SALE',
          price: '320000'
        },
        address: {
          geoLocation: {
            location: {
              lon: -46.68,
              lat: -23.55
            }
          }
        }
      }
    ]

    const processed = filterByMinSaleValue(300000, 10)(data)

    expect(processed.length).toEqual(2)
  })

  it('does not filter properties for rental', () => {
    const data = [
      {
        pricingInfos: { businessType: 'RENTAL', price: '350000' },
        usableAreas: 10,
        address: {
          geoLocation: {
            location: {
              lon: -46.68,
              lat: -23.55
            }
          }
        }
      },
      {
        pricingInfos: { businessType: 'RENTAL', price: '35000' },
        usableAreas: 30,
        address: {
          geoLocation: {
            location: {
              lon: -46.68,
              lat: -23.55
            }
          }
        }
      }
    ]

    expect(filterByMinSaleValue(300000, 0)(data).length).toEqual(2)
  })
})
