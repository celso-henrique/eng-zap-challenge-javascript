import propertiesReducer, {
  propertiesTypes,
  fetchProperties,
  propertiesInitialState
} from './properties'

describe('Properties duck', () => {
  describe('Properties reducer', () => {
    it('filter properties with lat and lon equal to zero', () => {
      const data = [
        { address: { geoLocation: { location: { lat: 0, lon: 0 } } } },
        { address: { geoLocation: { location: { lat: 100, lon: 100 } } } }
      ]

      const result = propertiesReducer(propertiesInitialState, {
        type: propertiesTypes.PROPERTIES_LOADED,
        data
      })

      expect(result.data.length).toEqual(1)
    })

    it(`changes the state to error when receives "${
      propertiesTypes.PROPERTIES_ERROR
    }" type`, () => {
      const result = propertiesReducer(propertiesInitialState, {
        type: propertiesTypes.PROPERTIES_ERROR
      })

      expect(result.error).toBeTruthy()
    })
  })
})
