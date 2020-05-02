import React from "react"
import styled, { ThemeProvider } from "styled-components"
import StyledHeader from "./../header/header"
import { Theme } from "./../themeProvider"
import VisibleModulesList from "./../ModulesList/VisibleModulesList"
const OuterBox = styled.div`
  margin: auto;
  width: 800px;
  padding: 20px;
  background: ${props => props.theme.color.turkus.normal};
  color: ${props => props.theme.color.blue.light};
  border: 1px solid ${props => props.theme.color.blue.dark};
  margin-top: 100px;
`

// background:" ${props => props.theme.dark}";
const OuterTable = props => {
  return (
    <ThemeProvider theme={Theme}>
      <OuterBox>
        <StyledHeader text="Todo lista" />
        <VisibleModulesList />
      </OuterBox>
    </ThemeProvider>
  )
}
export default OuterTable
