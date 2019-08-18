import React, { useCallback } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { shape, object, array } from 'prop-types'

import { CardList } from '../../components'

const Home = ({ data: { byId, vivaRealIds, zapIds } }) => {
  const RenderVivaReal = useCallback(
    () => <CardList properties={byId} ids={vivaRealIds} />,
    [vivaRealIds, byId]
  )

  const RenderZap = useCallback(
    () => <CardList properties={byId} ids={zapIds} />,
    [zapIds, byId]
  )

  return (
    <Switch>
      <Route path="/vivaReal" component={RenderVivaReal} />
      <Route path="/zap" component={RenderZap} />
      <Redirect exact from="/" to="/vivaReal" />
    </Switch>
  )
}

Home.propTypes = {
  data: shape({
    byId: object.isRequired,
    zapIds: array.isRequired,
    vivaRealIds: array.isRequired
  }).isRequired
}

export default Home
