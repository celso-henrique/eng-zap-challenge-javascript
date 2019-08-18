import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

import CardList from './cardList'

describe('Card List', () => {
  it('render a list of cards', () => {
    const { container } = render(
      <Router>
        <CardList
          ids={['123', '456']}
          properties={{
            123: { id: '123', pricingInfos: {}, images: [] },
            456: { id: '456', pricingInfos: {}, images: [] }
          }}
        />
      </Router>
    )

    expect(container.querySelector('section').childElementCount).toEqual(2)
  })
})
