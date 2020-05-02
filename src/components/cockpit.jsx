import React, { PureComponent } from "react"
import OuterTable from "./outerTable/outertable"
import { GlobalStyle } from "./themeProvider.js"
import styled, { ThemeProvider } from "styled-components"
import VisibleModulesList from "./ModulesList/VisibleModulesList"
import { Theme } from "./themeProvider"
class Cockpit extends PureComponent {
  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <VisibleModulesList />
        </ThemeProvider>
      </div>
    )
  }
}
export default Cockpit
