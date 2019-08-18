import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
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
    <>
      <Redirect from="/" to="/vivaReal" />
      <Route path="/vivaReal" component={RenderVivaReal} />
      <Route path="/zap" component={RenderZap} />
    </>
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
