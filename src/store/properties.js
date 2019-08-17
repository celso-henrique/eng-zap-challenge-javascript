import axios from 'axios'
import { flow, keyBy } from 'lodash'

import filterInvalidLatLon from '../utils/filterInvalidLatLon'

// Action types
export const propertiesTypes = {
  PROPERTIES_LOADED: 'PROPERTIES_LOADED',
  PROPERTIES_ERROR: 'PROPERTIES_ERROR'
}

// Reducer
export const propertiesInitialState = {
  fetched: false,
  error: false,
  data: {
    byId: {},
    zapIds: [],
    vivaRealIds: []
  }
}

const processAllProperties = flow([
  filterInvalidLatLon,
  properties => keyBy(properties, 'id')
])

const propertiesReducer = (state, action) => {
  switch (action.type) {
    case propertiesTypes.PROPERTIES_LOADED:
      return {
        fetched: true,
        error: false,
        data: {
          byId: processAllProperties(action.data),
          zapIds: [],
          vivaRealIds: []
        }
      }
    case propertiesTypes.PROPERTIES_ERROR:
      return {
        ...propertiesInitialState,
        error: true
      }
    default:
      throw new Error('Unexpected action')
  }
}

// Action creators
export const fetchProperties = () => dispatch => {
  axios
    .get(
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json'
    )
    .then(({ data }) => {
      dispatch({
        type: propertiesTypes.PROPERTIES_LOADED,
        data
      })
    })
    .catch(() => {
      dispatch({
        type: propertiesTypes.PROPERTIES_ERROR
      })
    })
}

export default propertiesReducer
