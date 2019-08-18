import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
  <Wrapper>
    <img
      src="//v.fastcdn.co/t/3854b641/7a7f287a/1565118464-30797501-220x38-logo.png"
      alt="Grupo Zap"
    />
    <NavLink to="/vivaReal" activeClassName="active">
      Viva Real
    </NavLink>
    <NavLink to="/zap" activeClassName="active">
      Zap Imóveis
    </NavLink>
  </Wrapper>
)

const Wrapper = styled.header`
  background-color: #4fbfa5;
  color: #fff;
  display: flex;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.02);

  img {
    width: 200px;
    margin: 15px 20px;
  }

  a {
    padding: 0 20px;
    background: rgba(255, 255, 255, 0.05);
    text-decoration: none;
    color: #fff;
    transition: all 0.1s linear;
    line-height: 60px;

    &:hover,
    &.active {
      background: #fff;
      color: #c8d419;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`

export default Header
