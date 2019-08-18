import React, { useState, useCallback } from 'react'
import { arrayOf, string } from 'prop-types'
import { Swipeable } from 'react-swipeable'
import styled from 'styled-components'

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)
  const handlePrevious = useCallback(() => {
    if (images.length) {
      if (activeImage === 0) {
        setActiveImage(images.length - 1)
      } else {
        setActiveImage(activeImage - 1)
      }
    }
  }, [activeImage])

  const handleNext = useCallback(() => {
    if (images.length) {
      if (activeImage === images.length - 1) {
        setActiveImage(0)
      } else {
        setActiveImage(activeImage + 1)
      }
    }
  }, [activeImage])

  return (
    <Swipeable onSwipedRight={handleNext} onSwipedLeft={handlePrevious}>
      <Wrapper>
        <PreviousBtn
          role="button"
          data-testid="previous-btn"
          aria-label="Imagem posterior"
          onClick={handlePrevious}
        />
        <Image
          draggable="false"
          src={images[activeImage]}
          alt={`Imagem ${activeImage} do imóvel`}
        />
        <NextBtn
          role="button"
          data-testid="next-btn"
          aria-label="Imagem anterior"
          onClick={handleNext}
        />
      </Wrapper>
    </Swipeable>
  )
}

Carousel.propTypes = {
  images: arrayOf(string).isRequired
}

const Wrapper = styled.div`
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;
`

const PreviousBtn = styled.a`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #c8d419;
  left: 40px;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);

  &:before {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2.5px;
    transform: translate(-50%, -50%);
    content: '';
  }
`

const NextBtn = styled(PreviousBtn)`
  left: auto;
  right: 40px;
  transform: translateY(-50%) rotate(-180deg);
`

const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`

export default Carousel
