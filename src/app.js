import React, { useEffect } from 'react'
import useThunkReducer from 'react-hook-thunk-reducer'

import propertiesReducer, {
  fetchProperties,
  propertiesInitialState
} from './store/properties'

const App = () => {
  const [data, dispatch] = useThunkReducer(
    propertiesReducer,
    propertiesInitialState
  )

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  console.log(data)

  return <h1>App loaded</h1>
}

export default App
