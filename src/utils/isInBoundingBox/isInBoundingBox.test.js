import isInBoundingBox from './isInBoundingBox'

describe('Is in grupo zap bounding box', () => {
  it('returns true if the property is inside the bounding box', () => {
    const property = {
      address: {
        geoLocation: {
          location: {
            lon: -46.68,
            lat: -23.55
          }
        }
      }
    }

    expect(isInBoundingBox(property)).toBeTruthy()
  })

  it('returns false if the property is outside the bounding box', () => {
    const property = {
      address: {
        geoLocation: {
          location: {
            lon: -46.6,
            lat: -23.55
          }
        }
      }
    }

    expect(isInBoundingBox(property)).toBeFalsy()
  })
})
