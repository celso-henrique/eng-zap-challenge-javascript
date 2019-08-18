import React from 'react'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

import CardList from './cardList'

describe('Home', () => {
  it('rendirects to vivaReal', () => {
    const { container } = render(
      <Router>
        <CardList
          ids={['123', '456']}
          properties={{ '123': { id: '123' }, 456: { id: '456' } }}
        />
      </Router>
    )

    expect(container.querySelector('section').childElementCount).toEqual(2)
  })
})
