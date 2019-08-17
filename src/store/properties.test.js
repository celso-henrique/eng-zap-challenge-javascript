import propertiesReducer, {
  propertiesTypes,
  propertiesInitialState
} from './properties'

describe('Properties duck', () => {
  describe('Properties reducer', () => {
    it('filter properties with lat and lon equal to zero', () => {
      const data = [
        { id: 1, address: { geoLocation: { location: { lat: 0, lon: 0 } } } },
        {
          id: 2,
          address: { geoLocation: { location: { lat: 100, lon: 100 } } }
        }
      ]

      const result = propertiesReducer(propertiesInitialState, {
        type: propertiesTypes.PROPERTIES_LOADED,
        data
      })

      expect(Object.keys(result.data.byId).length).toEqual(1)
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
