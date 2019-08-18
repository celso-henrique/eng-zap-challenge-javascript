import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  objectOf, object, string, arrayOf
} from 'prop-types'

import Card from '../card'

const CardList = ({ properties, ids }) => {
  const [activePage, setActivePage] = useState(1)
  const items = ids.slice(0, activePage * 20)

  const handleScroll = () => {
    const scrollPos = window.innerHeight + document.documentElement.scrollTop
    const pageEnd = document.documentElement.offsetHeight

    if (scrollPos === pageEnd && items.length !== ids.length) {
      setActivePage(activePage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <Wrapper>
      {items.map(id => (
        <Card key={id} property={properties[id]} />
      ))}
    </Wrapper>
  )
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
