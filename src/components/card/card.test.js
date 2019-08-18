import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

import Card from './card'

describe('Card', () => {
  it('renders the content of a property', () => {
    const { getByText } = render(
      <Router>
        <Card
          property={{
            id: '123',
            pricingInfos: { businessType: 'SALE' },
            images: []
          }}
        />
      </Router>
    )

    expect(getByText('Imóvel para venda')).toBeTruthy()
  })
})
