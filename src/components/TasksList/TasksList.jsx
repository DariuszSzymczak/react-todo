import React from "react"
import styled from "styled-components"
import Task from "./Task/Task"
const StyledBox = styled.div`
  padding: 10px 0px;
  margin-bottom: 20px;
  width: 100%;
  background: ${props => props.theme.color.gray.darker};
  min-height: 100px;
`

const TasksList = props => {
  return (
    <StyledBox>
      {props.tasks.map(task => {
        return (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            checked={task.checked}
          />
        )
      })}
    </StyledBox>
  )
}

export default TasksList
