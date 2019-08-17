import filterInvalidLatLon from './filterInvalidLatLon'

describe('Filter invalid lat lon', () => {
  it('filter properties with lat and lon equal to zero', () => {
    const data = [
      { address: { geoLocation: { location: { lat: 0, lon: 0 } } } },
      {
        address: { geoLocation: { location: { lat: 100, lon: 100 } } }
      }
    ]

    expect(filterInvalidLatLon(data).length).toEqual(1)
  })
})
