import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Carousel from './carousel'

describe('Carousel', () => {
  it('changes to next image', () => {
    const { getByTestId, getByAltText } = render(
      <Carousel images={['firstUrl', 'secondUrl']} />
    )

    const nextBtn = getByTestId('next-btn')
    fireEvent.click(nextBtn)

    expect(getByAltText('Imagem 1 do imóvel')).toBeTruthy()
  })

  it('changes to previous image', () => {
    const { getByTestId, getByAltText } = render(
      <Carousel images={['firstUrl', 'secondUrl']} />
    )

    const nextBtn = getByTestId('previous-btn')
    fireEvent.click(nextBtn)

    expect(getByAltText('Imagem 1 do imóvel')).toBeTruthy()
  })
})
