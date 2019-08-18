import React, { useCallback } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import {
  shape, object, array, number, func
} from 'prop-types'

import { formatCurrency } from '../../utils'

const Card = ({
  history,
  property: {
    id,
    pricingInfos: { businessType, price },
    bedrooms,
    parkingSpaces,
    bathrooms,
    usableAreas,
    images
  }
}) => {
  const type = businessType === 'RENTAL' ? 'aluguel' : 'venda'
  const handleClick = useCallback(() => {
    history.push(`/detalhes/${id}`)
  }, [])

  return (
    <Wrapper>
      <Content role="button" onClick={handleClick}>
        <ImageWrapper>
          <img src={images[0]} alt="Imagem do imóvel" />
        </ImageWrapper>
        <Infos>
          <Title>{`Imóvel para ${type}`}</Title>
          <p>
            {`${bedrooms} quartos | ${bathrooms} banheiros | ${parkingSpaces} vagas | ${usableAreas} m2`}
          </p>
          <p>{formatCurrency(price)}</p>
        </Infos>
      </Content>
    </Wrapper>
  )
}

Card.propTypes = {
  property: shape({
    pricingInfos: object.isRequired,
    images: array.isRequired,
    bedrooms: number,
    bathrooms: number,
    usableAreas: number,
    parkingSpaces: number
  }).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
}

const Wrapper = styled.a`
  padding: 10px;
  box-sizing: border-box;
`

const Content = styled.div`
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  transition: box-shadow 0.2s linear;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.04);

  &:hover {
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  }
`

const Infos = styled.div`
  flex: 70%;
  padding: 0px 20px;
  box-sizing: border-box;
`

const Title = styled.p`
  color: #c8d419;
  font-size: 20px;
`

const ImageWrapper = styled.div`
  flex: 30%;
  min-height: 150px;
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    vertical-align: middle;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default withRouter(Card)
