import React, { useState } from 'react'
import styled from 'styled-components'
import { chunk } from 'lodash'
import { objectOf, object, string, arrayOf } from 'prop-types'

const CardList = ({ properties, ids }) => {
  const [activePage, setActivePage] = useState(0)
  const pagesIds = chunk(ids, 20)

  if (pagesIds[activePage]) {
    return (
      <Wrapper>
        {pagesIds[activePage].map(id => {
          const property = properties[id]

          return <div key={id}>{property.id}</div>
        })}
      </Wrapper>
    )
  }

  return null
}

const Wrapper = styled.section`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 50%;
  }

  @media (max-width: 768px) {
    > * {
      flex: 100%;
    }
  }
`

CardList.propTypes = {
  properties: objectOf(object).isRequired,
  ids: arrayOf(string).isRequired
}

export default CardList
