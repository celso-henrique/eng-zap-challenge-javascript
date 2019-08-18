import React from 'react'
import {
  shape, objectOf, object, string
} from 'prop-types'
import styled from 'styled-components'

import { formatCurrency } from '../../utils'

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
      usableAreas
    } = property

    const type = businessType === 'RENTAL' ? 'aluguel' : 'venda'

    return (
      <Wrapper>
        <Title>{`Imóvel para ${type}`}</Title>
        <h2>
          {`${bedrooms} quartos | ${bathrooms} banheiros | ${parkingSpaces} vagas | ${usableAreas} m2`}
        </h2>
        <Price>{formatCurrency(price)}</Price>
        <p>
          {`IPTU Anual ${formatCurrency(
            yearlyIptu
          )} | Condomínio: ${formatCurrency(monthlyCondoFee)} `}
        </p>
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
`

const Title = styled.h1`
  color: #c8d419;
`

const Price = styled.p`
  font-size: 40px;
  margin-bottom: 0;
`

export default Details
