import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://t.me/AlaskaInuGlobal"
      >
        Telegram
      </StyledLink>
      <StyledLink target="_blank"href="https://alaskainu.finance">
        Alaska Inu
      </StyledLink>
      <StyledLink target="_blank"href="https://github.com/AlaskaInubsc">
        GitHub
      </StyledLink>
      <StyledLink target="_blank"href=" https://twitter.com/AlaskaInu_bsc">
        Twitter
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://medium.com/@AlaskaInubsc"
      >
        Medium
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.yellow};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.yellow};
  }
`

export default Nav
