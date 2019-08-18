import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

import Home from './home'

describe('Home', () => {
  it('rendirects to vivaReal', () => {
    const { container } = render(
      <Router>
        <Home data={{ byId: {}, zapIds: [], vivaRealIds: [] }} />
      </Router>
    )

    expect(container.innerHTML.indexOf('/vivaReal')).toBeTruthy()
  })
})
