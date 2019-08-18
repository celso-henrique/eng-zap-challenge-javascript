import React, { useEffect, useCallback } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import useThunkReducer from 'react-hook-thunk-reducer'

import propertiesReducer, {
  fetchProperties,
  propertiesInitialState
} from './store/properties'

import { Home, Details } from './pages'
import { GlobalStyle, Header } from './components'

const App = () => {
  const [{ data }, dispatch] = useThunkReducer(
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
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/detalhes/:id" component={RenderDetails} />
        <Route path="/" component={RenderHome} />
      </Switch>
    </Router>
  )
}

export default App
