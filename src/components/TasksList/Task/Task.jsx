import React from "react"
import styled from "styled-components"

const StyledOuterBox = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.color.orange.normal};
    transition: 1s ease;
  }
`

const StyledLeftSide = styled.div`
  width: 10%;
  display: inline-block;
  text-align: right;
`
const StyledRightSide = styled.div`
  text-align: "center";
  display: inline-block;
  vertical-align: middle;
  padding-left: 20px;
`
const StyledDot = styled.div`
  width: 1px;
  height: 1px;
  border: 5px solid white;
  position: relative;
  top: 1px;
  float: right;
`

const StyledCheck = styled.div`
  width: 6px;
  height: 17px;
  border-right: 3px solid ${props => props.theme.color.green.light};
  border-bottom: 2px solid ${props => props.theme.color.green.light};
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  top: 3px;
  left: 72px;
`

const Task = props => {
  return (
    <StyledOuterBox>
      <StyledLeftSide>
        {props.checked ? <StyledCheck /> : <StyledDot />}
      </StyledLeftSide>
      <StyledRightSide>{props.text}</StyledRightSide>
    </StyledOuterBox>
  )
}

export default Task
