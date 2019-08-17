import filterByMaxRentalValue from './filterByMaxRentalValue'

describe('Filter by maximum rental value', () => {
  it('filter properties with rental value greater than the specified', () => {
    const data = [
      {
        pricingInfos: {
          businessType: 'RENTAL',
          price: '1500',
          monthlyCondoFee: '300'
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
          businessType: 'RENTAL',
          price: '5000',
          monthlyCondoFee: '1500'
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

    const processed = filterByMaxRentalValue(3000)(data)

    expect(processed.length).toEqual(1)
    expect(processed[0].pricingInfos.price).toEqual(data[0].pricingInfos.price)
  })

  it('includes a percentage variation when inside the bounding box', () => {
    const data = [
      {
        pricingInfos: {
          businessType: 'RENTAL',
          price: '1500',
          monthlyCondoFee: '300'
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
          businessType: 'RENTAL',
          price: '3200',
          monthlyCondoFee: '1500'
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

    const processed = filterByMaxRentalValue(3000, 10)(data)

    expect(processed.length).toEqual(2)
  })

  it('does not filter properties for sale', () => {
    const data = [
      {
        pricingInfos: { businessType: 'SALE', price: '350000' },
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
        pricingInfos: { businessType: 'SALE', price: '35000' },
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

    expect(filterByMaxRentalValue(3000, 0)(data).length).toEqual(2)
  })
})
