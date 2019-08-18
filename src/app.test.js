import React from 'react'
import { render } from '@testing-library/react'

import App from './app'

describe('App', () => {
  it('renders without crash', () => {
    const { container } = render(<App />)

    expect(container).toBeTruthy()
  })
})
