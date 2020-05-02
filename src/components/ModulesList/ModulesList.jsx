import React from "react"
import styled from "styled-components"
import VisibleModule from "./Module/VisibleModule"

const StyledList = styled.div`
  margin: auto;
  padding: 10px 0;
  width: 45%;
  color:white;
  min-height: 300px;
  box-shadow: inset 0px 0px 13px 6px rgba(0, 0, 0, 0.6);
  background: ${props => props.theme.color.turkus.dark};
`

const ModulesList = props => {
  console.log("renderuje")
  return (
    <div>
      <StyledList>
        {props.modules.map(item => {
          return (
            <VisibleModule
              key={item.id}
              id={item.id}
              text={item.text}
              checked={item.checked}
              tasks={item.tasks}
            />
          )
        })}
      </StyledList>
    </div>
  )
}

export default ModulesList
