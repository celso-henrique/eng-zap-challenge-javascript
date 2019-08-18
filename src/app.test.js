import axios from 'axios'
import React from 'react'
import { render, wait } from '@testing-library/react'

import App from './app'

jest.mock('axios')

const mock = {
  data: [
    {
      id: '7baf2775d4a2',
      parkingSpaces: 1,
      images: [],
      address: {
        geoLocation: {
          location: {
            lon: 0,
            lat: 0
          }
        }
      },
      bathrooms: 1,
      bedrooms: 2,
      pricingInfos: {
        yearlyIptu: '60',
        price: '276000',
        businessType: 'SALE',
        monthlyCondoFee: '0'
      }
    }
  ]
}

describe('App', () => {
  it('renders without crash', () => {
    axios.get.mockResolvedValue(mock)
    const { container } = render(<App />)

    wait()

    expect(container).toBeTruthy()
  })
})
