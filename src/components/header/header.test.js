import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

import Header from './header'

describe('Header', () => {
  it('renders 2 links', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    )

    const vivaRealLink = getByText('Viva Real')
    const zapLink = getByText('Zap Imóveis')

    expect(vivaRealLink).toBeTruthy()
    expect(zapLink).toBeTruthy()
  })
})
