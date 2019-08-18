import React from 'react'
import {
  shape, objectOf, object, string
} from 'prop-types'
import styled from 'styled-components'

import { formatCurrency } from '../../utils'
import { Carousel } from '../../components'

const Details = ({
  match: {
    params: { id }
  },
  data: { byId }
}) => {
  const property = byId[id]

  if (property) {
    const {
      pricingInfos: {
        businessType, price, yearlyIptu, monthlyCondoFee
      },
      bedrooms,
      bathrooms,
      parkingSpaces,
      usableAreas,
      images
    } = property

    const type = businessType === 'RENTAL' ? 'aluguel' : 'venda'

    return (
      <Wrapper>
        <Infos>
          <Title>{`Imóvel para ${type}`}</Title>
          <SubTitle>
            {`${bedrooms} quartos | ${bathrooms} banheiros | ${parkingSpaces} vagas | ${usableAreas} m2`}
          </SubTitle>
          <Price>{formatCurrency(price)}</Price>
          <p>
            {`IPTU Anual ${formatCurrency(
              yearlyIptu
            )} | Condomínio: ${formatCurrency(monthlyCondoFee)} `}
          </p>
        </Infos>
        <Carousel images={images} />
      </Wrapper>
    )
  }

  return null
}

Details.propTypes = {
  data: shape({
    byId: objectOf(object)
  }).isRequired,
  match: shape({
    params: shape({
      id: string
    }).isRequired
  }).isRequired
}

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;

  > * {
    flex: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Title = styled.h1`
  color: #c8d419;
`

const SubTitle = styled.h2`
  margin-bottom: 0;
  background: #4fbfa5;
  padding: 10px 20px;
  display: inline-block;
  color: #fff;
`

const Infos = styled.div`
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`

const Price = styled.p`
  font-size: 40px;
  margin: 15px 0 0;
`

export default Details
