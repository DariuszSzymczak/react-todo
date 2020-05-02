import React from "react"
import styled from "styled-components/macro"
import TasksList from "./../../TasksList/TasksList"
const StyledOutside = styled.div`
  width: 100%;
  background: "white";
  border-bottom: 1.3px solid ${props => props.theme.color.turkus.dark};
  height: 50px;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  :hover {
    color: ${props => props.theme.color.orange.normal};
    transition: 1s ease;
  }
`
const StyledLeftSide = styled.div`
  width: 10%;
  padding: 10px;
  border-right: 1.3px solid ${props => props.theme.color.turkus.dark};
  display: inline-block;
`
const StyledRightSide = styled.div`
  text-align: "center";
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
  font-size: 1.3em;
  position: relative;
  top: -22px;
`

const StyledCheckbox = styled.div`
  display: box;
  margin: auto;
  width: 25px;
  height: 25px;
  border: 2px solid
    ${props =>
      props.checked
        ? props.theme.color.green.normal
        : props.theme.color.gray.dark};
  border-radius: 10px;
`
const StyledArrow = styled.div`
  width: 10px;
  height: 30px;
  border-right: 4px solid ${props => props.theme.color.green.light};
  border-bottom: 2px solid ${props => props.theme.color.green.light};
  transform: rotate(45deg);
  position: relative;
  top: -13px;
  left: 12px;
`

const Module = props => {
  return (
    <div>
      <StyledOutside onClick={props.deleteModule}>
        <StyledLeftSide>
          <StyledCheckbox checked={props.checked}>
            {props.checked ? <StyledArrow /> : ""}
          </StyledCheckbox>
        </StyledLeftSide>
        <StyledRightSide>{props.text}</StyledRightSide>
      </StyledOutside>

      <TasksList tasks={props.tasks} />
    </div>
  )
}

export default Module
