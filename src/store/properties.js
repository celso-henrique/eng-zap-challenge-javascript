import axios from 'axios'

// Action types
export const propertiesTypes = {
  PROPERTIES_LOADED: 'PROPERTIES_LOADED',
  PROPERTIES_ERROR: 'PROPERTIES_ERROR'
}

// Reducer
export const propertiesInitialState = {
  fetched: false,
  error: false,
  data: []
}

const processProperties = data => {
  const processed = data.filter(property => {
    const { lon, lat } = property.address.geoLocation.location

    return lon !== 0 && lat !== 0
  })

  return processed
}

const propertiesReducer = (state, action) => {
  switch (action.type) {
    case propertiesTypes.PROPERTIES_LOADED:
      return {
        fetched: true,
        error: false,
        data: processProperties(action.data)
      }
      break
    case propertiesTypes.PROPERTIES_ERROR:
      return {
        fetched: false,
        error: true,
        data: []
      }
      break
    default:
      throw new Error('Unexpected action')
  }
}

// Action creators
export const fetchProperties = () => dispatch => {
  try {
    axios
      .get(
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json'
      )
      .then(data => {
        dispatch({
          type: propertiesTypes.PROPERTIES_LOADED,
          data
        })
      })
  } catch (error) {
    dispatch({
      type: propertiesTypes.PROPERTIES_ERROR
    })
  }
}

export default propertiesReducer
