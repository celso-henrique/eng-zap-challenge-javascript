import React from 'react'
import { render } from '@testing-library/react'

import App from './app'

describe('App', () => {
  it('renders without crash', () => {
    const { getByText } = render(<App />)

    expect(getByText('Home page')).toBeTruthy()
  })
})
