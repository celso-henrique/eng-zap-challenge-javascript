import React, { useEffect, useCallback } from 'react'
import useThunkReducer from 'react-hook-thunk-reducer'
import { HashRouter as Router, Route } from 'react-router-dom'

import propertiesReducer, {
  fetchProperties,
  propertiesInitialState
} from './store/properties'

import { Home, Details } from './pages'

const App = () => {
  const [data, dispatch] = useThunkReducer(
    propertiesReducer,
    propertiesInitialState
  )

  const RenderHome = useCallback(() => <Home data={data} />, [data])
  const RenderDetails = useCallback(
    ({ match }) => <Details data={data} match={match} />,
    [data]
  )

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  return (
    <Router>
      <Route exact path="/" component={RenderHome} />
      <Route path="/detalhes/:id" component={RenderDetails} />
    </Router>
  )
}

export default App
