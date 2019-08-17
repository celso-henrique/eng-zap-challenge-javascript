import axios from 'axios'
import { flow, keyBy } from 'lodash'

import {
  filterInvalidLatLon,
  filterByUsableAreaMinValue,
  filterByCondominiumMaxValue,
  filterByMinRentalValue,
  filterByMinSaleValue,
  filterByMaxSaleValue,
  filterByMaxRentalValue
} from '../utils'

// Helpers
const mapToId = properties => properties.map(({ id }) => id)

const processAllProperties = flow([
  filterInvalidLatLon,
  properties => keyBy(properties, 'id')
])

const processZapIds = flow([
  filterInvalidLatLon,
  filterByUsableAreaMinValue(3500),
  filterByMinRentalValue(3500),
  filterByMinSaleValue(600000, 10),
  mapToId
])

const processVivaRealIds = flow([
  filterInvalidLatLon,
  filterByCondominiumMaxValue(30),
  filterByMaxRentalValue(4000, 50),
  filterByMaxSaleValue(700000),
  mapToId
])

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

const propertiesReducer = (state, { type, data }) => {
  switch (type) {
    case propertiesTypes.PROPERTIES_LOADED:
      return {
        fetched: true,
        error: false,
        data: {
          byId: processAllProperties(data),
          zapIds: processZapIds(data),
          vivaRealIds: processVivaRealIds(data)
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
    .catch(err => {
      dispatch({
        type: propertiesTypes.PROPERTIES_ERROR,
        data: err
      })
    })
}

export default propertiesReducer
