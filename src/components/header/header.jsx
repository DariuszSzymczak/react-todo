import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
`

const Header = props => {
  return <StyledHeader>{props.text}</StyledHeader>
}

export default Header
