import React, { useEffect } from 'react'
import useThunkReducer from 'react-hook-thunk-reducer'

import propertiesReducer, {
  fetchProperties,
  propertiesInitialState
} from './store/properties'

const App = () => {
  const [, dispatch] = useThunkReducer(
    propertiesReducer,
    propertiesInitialState
  )

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  return <h1>App loaded</h1>
}

export default App
