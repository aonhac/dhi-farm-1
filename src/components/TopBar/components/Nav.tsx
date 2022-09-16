import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Menu
      </StyledLink>
      <StyledAbsoluteLink
        href="https://alaskainu.finance"
        target="_blank"
      >
        Alaska Inu
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://testnet.binance.org/faucet-smart"
        target="_blank"
      >
        Binance Faucet
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://pancakeswap.finance/swap?chainId=97&outputCurrency=0x87b335690b561c366CCb6CeC285CbFEfB86ab745"
        target="_blank"
      >
        Exchange Testnet
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.yellow};
  font-weight: normal;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    font-weight: bold;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.yellow};
  font-weight: normal;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
  &.active {
    color: ${(props) => props.theme.color.yellow};
    font-weight: bold;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
