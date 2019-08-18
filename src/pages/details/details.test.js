import React from 'react'
import { render } from '@testing-library/react'

import Details from './details'

describe('Details', () => {
  it('renders the content of a property', () => {
    const { getByText } = render(
      <Details
        match={{
          params: {
            id: '123'
          }
        }}
        data={{
          byId: {
            123: {
              id: '123',
              pricingInfos: { businessType: 'SALE' },
              images: []
            }
          }
        }}
      />
    )

    expect(getByText('Imóvel para venda')).toBeTruthy()
  })
})
